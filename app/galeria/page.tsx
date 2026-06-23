import { Metadata } from 'next';
import Image from 'next/image';
import { galeriaPageData } from '@/data';

export const metadata: Metadata = {
  title: 'Galería | Caffarena Eventos',
  description: 'Explora nuestra galería de imágenes. Conoce nuestros espacios, matrimonios, graduaciones y eventos realizados en Caffarena Eventos.',
};

export default function GaleriaPage() {
  return (
    <div className="pt-20 bg-ivory min-h-screen">
      <div className="py-20 text-center px-6">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl text-graphite font-light mb-6">
          {galeriaPageData.title}
        </h1>
        <p className="text-stone max-w-2xl mx-auto">
          {galeriaPageData.description}
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galeriaPageData.images.map((image, index) => (
            <div 
              key={index} 
              className={`relative aspect-square overflow-hidden group rounded-sm ${image.span === 2 ? 'sm:col-span-2' : ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-graphite/0 group-hover:bg-graphite/40 transition-colors duration-500 flex items-end p-6">
                <span className="text-ivory opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-light tracking-wide">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
