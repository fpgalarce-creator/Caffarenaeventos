'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CTAButton } from '@/components/shared/CTAButton';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { homeCTAFinalData } from '@/data';

export function CTAFinal() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden" id="cta-final">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={homeCTAFinalData.backgroundImage}
          alt="Ambiente nocturno en Caffarena Eventos"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="gradient-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <AnimatedSection>
          <div className="w-16 h-16 rounded-full border border-champagne/40 flex items-center justify-center mx-auto mb-8 bg-graphite/40 backdrop-blur-sm">
            <span className="font-[family-name:var(--font-cormorant)] text-champagne text-2xl">CE</span>
          </div>
          
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl font-light text-ivory leading-tight mb-6">
            {homeCTAFinalData.titlePart1} <span className="italic text-champagne">{homeCTAFinalData.titlePart2}</span>
          </h2>
          
          <p className="text-ivory/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {homeCTAFinalData.description}
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <CTAButton 
              text={homeCTAFinalData.buttonText} 
              variant="primary" 
              size="lg" 
            />
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
