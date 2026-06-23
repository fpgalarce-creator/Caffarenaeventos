'use client';

import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { homeProcessData } from '@/data';

export function Process() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-dark relative overflow-hidden" id="process">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <SectionHeading
            subtitle={homeProcessData.subtitle}
            title={homeProcessData.title}
            description={homeProcessData.description}
          />
        </AnimatedSection>

        <div className="mt-20 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-champagne/30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {homeProcessData.steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.15} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Number Circle */}
                  <div className="w-24 h-24 rounded-full bg-ivory border-2 border-champagne flex items-center justify-center mb-8 relative z-10 shadow-sm">
                    <span className="font-[family-name:var(--font-cormorant)] text-4xl text-champagne-dark font-light">
                      0{step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-graphite mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-stone leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
