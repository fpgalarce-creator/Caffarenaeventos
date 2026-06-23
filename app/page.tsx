import { Hero } from '@/components/home/Hero';
import { EventTypes } from '@/components/home/EventTypes';
import { Experience } from '@/components/home/Experience';
import { Gallery } from '@/components/home/Gallery';
import { Process } from '@/components/home/Process';
import { Testimonials } from '@/components/home/Testimonials';
import { FAQ } from '@/components/home/FAQ';
import { CTAFinal } from '@/components/home/CTAFinal';
import { getHeroContent } from '@/lib/site-content';

export default async function Home() {
  const heroContentResponse = await getHeroContent();
  const heroData = heroContentResponse.value;

  console.log('\n--- DATA DEL HERO RECIBIDA ---', heroData);

  return (
    <div className="flex flex-col w-full">
      <Hero data={heroData} />
      <EventTypes />
      <Experience />
      <Gallery />
      <Process />
      <Testimonials />
      <FAQ />
      <CTAFinal />
    </div>
  );
}
