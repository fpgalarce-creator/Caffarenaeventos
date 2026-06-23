'use client';

import Image from 'next/image';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { homeExperienceData } from '@/data';

export function Experience() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal" id="experience">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={homeExperienceData.image}
                alt={homeExperienceData.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-champagne/20 pointer-events-none" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right">
            <div>
              <p className="text-champagne text-xs tracking-[0.3em] uppercase mb-4">
                {homeExperienceData.subtitle}
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl lg:text-5xl font-light text-ivory leading-tight mb-6">
                {homeExperienceData.title}
              </h2>
              <div className="w-16 h-px bg-champagne mb-8" />
              <p className="text-ivory/60 text-base leading-relaxed mb-10">
                {homeExperienceData.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {homeExperienceData.highlights.map((item, index) => (
                  <AnimatedSection key={item.title} delay={index * 0.1}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-champagne/30 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-champagne" />
                      </div>
                      <div>
                        <h4 className="text-ivory text-sm font-medium mb-1">
                          {item.title}
                        </h4>
                        <p className="text-ivory/40 text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
