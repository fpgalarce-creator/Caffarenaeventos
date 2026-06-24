'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, contactConfig } from '@/data';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-dark border-b border-white/5 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" id="navbar-logo">
              <div className="relative w-10 h-10 rounded-full border border-champagne/60 flex items-center justify-center bg-graphite/80 group-hover:border-champagne transition-colors duration-300">
                <span className="font-[family-name:var(--font-cormorant)] text-champagne text-lg font-semibold tracking-tight">
                  CE
                </span>
              </div>
              <div className="hidden sm:block">
                <span className={`font-[family-name:var(--font-cormorant)] text-xl font-medium tracking-wide transition-colors duration-300 ${
                  isScrolled ? 'text-ivory' : 'text-white'
                }`}>
                  Caffarena
                </span>
                <span className={`font-[family-name:var(--font-cormorant)] text-xl font-light tracking-wide ml-1 transition-colors duration-300 ${
                  isScrolled ? 'text-champagne' : 'text-champagne'
                }`}>
                  Eventos
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  id={`nav-${link.href.replace('/', '') || 'home'}`}
                  className={`relative text-sm tracking-widest uppercase transition-colors duration-300 ${
                    pathname === link.href
                      ? 'text-champagne'
                      : isScrolled
                      ? 'text-ivory/50 hover:text-ivory'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-champagne"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <a
                href={contactConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                id="navbar-cta"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-champagne/70 text-champagne text-xs tracking-widest uppercase hover:border-champagne hover:bg-champagne/10 transition-all duration-300"
              >
                Agendar Visita
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-ivory' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-ivory' : 'text-white'}`} />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-graphite flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    id={`mobile-nav-${link.href.replace('/', '') || 'home'}`}
                    className={`font-[family-name:var(--font-cormorant)] text-3xl tracking-wide transition-colors duration-300 ${
                      pathname === link.href
                        ? 'text-champagne'
                        : 'text-ivory/70 hover:text-champagne'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
                >
                  <a
                    href={contactConfig.whatsappLink}
                    target="_blank"
                  rel="noopener noreferrer"
                  id="mobile-cta"
                  className="mt-4 inline-flex items-center gap-2 px-8 py-3 border border-champagne/70 text-champagne text-sm tracking-widest uppercase hover:border-champagne hover:bg-champagne/10 transition-all duration-300"
                >
                  Agendar Visita
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
