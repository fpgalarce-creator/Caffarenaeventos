import { Metadata } from 'next';
import Image from 'next/image';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { CTAButton } from '@/components/shared/CTAButton';
import { matrimoniosPageData } from '@/data';

export const metadata: Metadata = {
  title: 'Matrimonios | Caffarena Eventos',
  description: 'Celebra tu matrimonio en un entorno natural único. Una hacienda contemporánea con espacios adaptables para 200-300 invitados.',
};

export default function MatrimoniosPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={matrimoniosPageData.hero.image}
            alt={matrimoniosPageData.hero.title}
            fill
            className="object-cover"
            priority
          />
          <div className="gradient-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center px-6">
          <AnimatedSection>
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl text-ivory font-light mb-4">
              {matrimoniosPageData.hero.title}
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl max-w-2xl mx-auto font-light">
              {matrimoniosPageData.hero.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionHeading
                subtitle={matrimoniosPageData.content.subtitle}
                title={matrimoniosPageData.content.title}
                align="left"
              />
              <div className="space-y-6 text-stone leading-relaxed mt-8">
                {matrimoniosPageData.content.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <ul className="list-none space-y-4 mt-6">
                  {matrimoniosPageData.content.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-champagne" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {matrimoniosPageData.content.images.map((src, i) => (
                  <div key={i} className={`aspect-[3/4] relative rounded-lg overflow-hidden ${i === 0 ? 'mt-8' : ''}`}>
                    <Image src={src} alt="Detalle" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal text-center">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-ivory font-light mb-6">
              {matrimoniosPageData.cta.title}
            </h2>
            <p className="text-ivory/70 mb-10">
              {matrimoniosPageData.cta.description}
            </p>
            <CTAButton variant="primary" text={matrimoniosPageData.cta.buttonText} />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
