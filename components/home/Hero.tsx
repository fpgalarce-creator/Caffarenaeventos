'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { CTAButton } from '@/components/shared/CTAButton';
import type { HeroContent } from '@/lib/site-content';

interface SlideItem {
  src: string;
  alt: string;
  className: string;
}

const HERO_SLIDES: SlideItem[] = [
  {
    src: '/images/hero1.jpg',
    alt: 'Caffarena Eventos - Salón principal y arquitectura contemporánea',
    className: 'hero-img-1',
  },
  {
    src: '/images/hero2.jpg',
    alt: 'Caffarena Eventos - Mesa imperial para banquetes y celebraciones',
    className: 'hero-img-2',
  },
  {
    src: '/images/hero3.jpg',
    alt: 'Caffarena Eventos - Detalles finos de mesa y decoración',
    className: 'hero-img-3',
  },
  {
    src: '/images/hero4.jpg',
    alt: 'Caffarena Eventos - Caballos y entorno campestre natural',
    className: 'hero-img-4',
  },
];

const SLIDE_DURATION = 6000; // ms between transitions
const TRANSITION_DURATION = 1.2; // seconds for crossfade

interface HeroProps {
  data: HeroContent;
}

export function Hero({ data }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section
      className="relative h-[100dvh] min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Slideshow background */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;

          return (
            <div
              key={slide.src}
              className={`absolute inset-0 ${isActive ? 'hero-slide-active' : ''}`}
              style={{
                opacity: isActive ? 1 : 0,
                transition: `opacity ${TRANSITION_DURATION}s ease-in-out`,
                zIndex: isActive ? 1 : 0,
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className={`object-cover ${slide.className}`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                priority={index === 0}
                quality={85}
              />
            </div>
          );
        })}

        {/* Global luxury dark overlay */}
        <div className="gradient-overlay absolute inset-0 z-[2]" />
      </div>

      {/* Slide indicators with expanded touch targets */}
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a imagen ${index + 1}`}
            className="group relative py-3 px-1 cursor-pointer flex items-center"
          >
            <div
              className="w-7 sm:w-9 h-[3px] rounded-full overflow-hidden transition-all duration-300"
              style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
            >
              <span
                className="block h-full rounded-full"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  transform: index === currentIndex ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition:
                    index === currentIndex
                      ? `transform ${SLIDE_DURATION}ms linear`
                      : 'transform 300ms ease-out',
                }}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center pt-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-champagne text-[11px] sm:text-xs tracking-[0.35em] uppercase mb-4 sm:mb-6">
            {data.locationText}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-light leading-[1.12] sm:leading-[1.1] mb-5 sm:mb-6"
        >
          {data.titlePart1}
          <br />
          <span className="italic text-champagne">{data.titlePart2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-ivory/75 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light"
        >
          {data.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <CTAButton
            text={data.ctaText}
            variant="outline-light"
            size="lg"
            id="hero-cta"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-ivory/40 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase">
          {data.scrollText}
        </span>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-ivory/40 animate-scroll" />
      </motion.div>
    </section>
  );
}

