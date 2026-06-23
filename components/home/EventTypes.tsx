'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { homeEventTypesData } from '@/data';

export function EventTypes() {
  return (
    <section className="py-24 lg:py-32 bg-ivory" id="event-types">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            subtitle={homeEventTypesData.subtitle}
            title={homeEventTypesData.title}
            description={homeEventTypesData.description}
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {homeEventTypesData.events.map((event, index) => (
            <AnimatedSection key={event.title} delay={index * 0.15}>
              <Link href={event.href} className="group block" id={`event-card-${event.href.replace('/', '')}`}>
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-ivory text-xs tracking-[0.3em] uppercase border-b border-champagne pb-1">
                      Descubrir
                    </span>
                  </div>
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-graphite mb-2 group-hover:text-champagne-dark transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-sm text-stone leading-relaxed">
                  {event.description}
                </p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
