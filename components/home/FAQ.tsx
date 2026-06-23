'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { homeFAQData } from '@/data';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 bg-ivory-dark" id="faq">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            subtitle={homeFAQData.subtitle}
            title={homeFAQData.title}
            description={homeFAQData.description}
          />
        </AnimatedSection>

        <div className="mt-16 space-y-4">
          {homeFAQData.faqs.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div 
                className={`border-b transition-colors duration-300 ${
                  openIndex === index ? 'border-champagne' : 'border-stone/30'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                  aria-expanded={openIndex === index}
                >
                  <span className={`font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl pr-8 transition-colors duration-300 ${
                    openIndex === index ? 'text-champagne-dark' : 'text-graphite group-hover:text-champagne-dark'
                  }`}>
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-champagne" />
                    ) : (
                      <Plus className="w-5 h-5 text-stone group-hover:text-champagne transition-colors" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-stone text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
