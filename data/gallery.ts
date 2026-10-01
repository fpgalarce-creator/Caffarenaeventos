export const galleryImages = [
  { src: '/images/galeria1.jpg', alt: 'Salón principal y banquetería con vista panorámica', category: 'venue', span: 2 },
  { src: '/images/galeria2.jpg', alt: 'Montaje de ceremonia en carpa decorada', category: 'matrimonios', span: 1 },
  { src: '/images/galeria3.jpg', alt: 'Servicio de cóctel y bocadillos', category: 'coctel', span: 1 },
  { src: '/images/galeria4.jpg', alt: 'Coctelería fina y canapés de bienvenida', category: 'coctel', span: 1 },
  { src: '/images/galeria5.jpg', alt: 'Degustación y cóctel para invitados', category: 'coctel', span: 1 },
  { src: '/images/galeria6.jpg', alt: 'Mesa de ceremonia y arreglos florales', category: 'matrimonios', span: 1 },
  { src: '/images/hero-venue.png', alt: 'Vista del recinto al atardecer', category: 'venue', span: 1 },
  { src: '/images/wedding-ceremony.png', alt: 'Ceremonia de matrimonio al aire libre', category: 'matrimonios', span: 1 },
  { src: '/images/graduation-event.png', alt: 'Celebración de graduación', category: 'graduaciones', span: 1 },
  { src: '/images/corporate-event.png', alt: 'Evento corporativo', category: 'corporativos', span: 1 },
  { src: '/images/gallery-nighttime.png', alt: 'Ambiente nocturno con iluminación', category: 'venue', span: 1 },
  { src: '/images/venue-panoramic.png', alt: 'Vista panorámica del recinto', category: 'venue', span: 1 },
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
