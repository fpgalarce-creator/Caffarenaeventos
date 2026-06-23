'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { homeGalleryData } from '@/data';
import { ArrowRight } from 'lucide-react';

export function Gallery() {
  return (
    <section className="py-24 lg:py-32 bg-ivory" id="gallery-preview">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            subtitle={homeGalleryData.subtitle}
            title={homeGalleryData.title}
            description={homeGalleryData.description}
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {homeGalleryData.images.map((image, index) => (
            <AnimatedSection
              key={image.src}
              delay={index * 0.1}
              className={index === 0 ? 'col-span-2 row-span-2' : ''}
            >
              <div className={`image-hover relative overflow-hidden group ${
                index === 0 ? 'aspect-square' : 'aspect-square'
              }`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes={index === 0
                    ? '(max-width: 768px) 100vw, 66vw'
                    : '(max-width: 768px) 50vw, 33vw'
                  }
                />
                <div className="absolute inset-0 bg-graphite/0 group-hover:bg-graphite/30 transition-all duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center">
          <Link
            href={homeGalleryData.buttonLink}
            id="gallery-see-all"
            className="inline-flex items-center gap-2 text-sm text-champagne-dark tracking-[0.2em] uppercase hover:text-graphite transition-colors duration-300 group"
          >
            {homeGalleryData.buttonText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
