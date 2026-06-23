'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { CTAButton } from '@/components/shared/CTAButton';
import type { HeroContent } from '@/lib/site-content';

interface HeroProps {
  data: HeroContent;
}

export function Hero({ data }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" id="hero">
      {/* Background Image */}
      <div className="absolute inset-0">
        {data.backgroundImage ? (
          <Image
            src={data.backgroundImage}
            alt={data.titlePart1 + " " + data.titlePart2}
            fill
            className="object-cover"
            sizes="100vw"
            preload={true}
          />
        ) : (
          <div className="w-full h-full bg-gray-800" />
        )}
        <div className="gradient-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-champagne text-xs tracking-[0.4em] uppercase mb-6">
            {data.locationText}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-light leading-[1.1] mb-6"
        >
          {data.titlePart1}
          <br />
          <span className="italic text-champagne">{data.titlePart2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-ivory/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-ivory/40 text-[10px] tracking-[0.3em] uppercase">
          {data.scrollText}
        </span>
        <ChevronDown className="w-5 h-5 text-ivory/40 animate-scroll" />
      </motion.div>
    </section>
  );
}
