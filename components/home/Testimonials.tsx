'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { homeTestimonialsData } from '@/data';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === homeTestimonialsData.testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? homeTestimonialsData.testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 lg:py-32 bg-ivory" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            subtitle={homeTestimonialsData.subtitle}
            title={homeTestimonialsData.title}
          />
        </AnimatedSection>

        <div className="mt-16 max-w-4xl mx-auto relative">
          <div className="relative min-h-[400px] md:min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-2 flex justify-center md:justify-end">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={homeTestimonialsData.testimonials[currentIndex].image}
                        alt={homeTestimonialsData.testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 192px, 224px"
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-3 text-center md:text-left relative">
                    <Quote className="w-12 h-12 text-champagne/20 absolute -top-6 -left-4 md:-top-4 md:-left-8 z-0" />
                    <p className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl lg:text-3xl font-light text-graphite italic leading-relaxed mb-6 relative z-10">
                      &quot;{homeTestimonialsData.testimonials[currentIndex].quote}&quot;
                    </p>
                    <div className="relative z-10">
                      <h4 className="font-semibold text-graphite text-sm tracking-wide uppercase mb-1">
                        {homeTestimonialsData.testimonials[currentIndex].name}
                      </h4>
                      <p className="text-champagne-dark text-xs tracking-wider uppercase">
                        {homeTestimonialsData.testimonials[currentIndex].event}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-champagne text-champagne flex items-center justify-center hover:bg-champagne hover:text-white transition-colors duration-300"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {homeTestimonialsData.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-champagne w-6' : 'bg-champagne/30'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-champagne text-champagne flex items-center justify-center hover:bg-champagne hover:text-white transition-colors duration-300"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
