import Link from 'next/link';
import { navLinks, contactConfig, footerConfig } from '@/data';

export function Footer() {
  return (
    <footer className="bg-graphite text-ivory/70" id="site-footer">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-champagne/60 flex items-center justify-center">
                <span className="font-[family-name:var(--font-cormorant)] text-champagne text-lg font-semibold">
                  CE
                </span>
              </div>
              <div>
                <span className="font-[family-name:var(--font-cormorant)] text-xl text-ivory font-medium tracking-wide">
                  Caffarena
                </span>
                <span className="font-[family-name:var(--font-cormorant)] text-xl text-champagne font-light tracking-wide ml-1">
                  Eventos
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-ivory/50">
              {footerConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-[family-name:var(--font-cormorant)] text-lg text-ivory mb-6 tracking-wide">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-champagne transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-cormorant)] text-lg text-ivory mb-6 tracking-wide">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={contactConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-champagne transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </li>
              <li className="text-ivory/50">
                Región de O&apos;Higgins, Chile
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-[family-name:var(--font-cormorant)] text-lg text-ivory mb-6 tracking-wide">
              {footerConfig.ctaTitle}
            </h4>
            <p className="text-sm text-ivory/50 mb-6">
              {footerConfig.ctaDescription}
            </p>
            <a
              href={contactConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-cta"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-champagne text-champagne text-xs tracking-widest uppercase hover:bg-champagne hover:text-graphite transition-all duration-300"
            >
              {footerConfig.ctaButtonText}
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/30">
            {footerConfig.copyright}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-ivory/30">
              Región de O&apos;Higgins, Chile
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
