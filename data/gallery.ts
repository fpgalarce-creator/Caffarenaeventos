export const galleryImages = [
  { src: '/images/hero-venue.png', alt: 'Vista del recinto al atardecer', category: 'venue', span: 1 },
  { src: '/images/wedding-ceremony.png', alt: 'Ceremonia de matrimonio', category: 'matrimonios', span: 1 },
  { src: '/images/graduation-event.png', alt: 'Celebración de graduación', category: 'graduaciones', span: 1 },
  { src: '/images/corporate-event.png', alt: 'Evento corporativo', category: 'corporativos', span: 1 },
  { src: '/images/gallery-nighttime.png', alt: 'Ambiente nocturno con iluminación', category: 'venue', span: 1 },
  { src: '/images/venue-panoramic.png', alt: 'Vista panorámica del recinto', category: 'venue', span: 1 },
  { src: '/images/table-decor.png', alt: 'Detalles de mesa', category: 'venue', span: 2 },
  { src: '/images/couple-sunset.png', alt: 'Atardecer', category: 'venue', span: 1 },
];

export const homeGalleryData = {
  subtitle: "Galería",
  title: "Momentos que hablan por sí solos",
  description: "Cada imagen cuenta una historia de elegancia, emoción y celebraciones inolvidables.",
  images: galleryImages.slice(0, 6), // Only show first 6 on home
  buttonText: "Ver galería completa",
  buttonLink: "/galeria"
};

export const galeriaPageData = {
  title: "Nuestra Galería",
  description: "Recorre nuestros espacios y descubre la magia de los eventos que han cobrado vida en nuestra hacienda.",
  images: galleryImages
};
