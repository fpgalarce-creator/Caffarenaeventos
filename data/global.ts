export const siteConfig = {
  name: 'Caffarena Eventos',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://caffarenaeventos.cl',
  description: 'Una hacienda contemporánea rodeada de naturaleza, donde cada celebración se transforma en un recuerdo inolvidable.',
  location: "Región de O'Higgins, Chile",
};

export const contactConfig = {
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '56912345678',
    message: 'Hola, me gustaría coordinar una visita para conocer Caffarena Eventos.',
  },
  get whatsappLink() {
    return `https://wa.me/${this.whatsapp.number}?text=${encodeURIComponent(this.whatsapp.message)}`;
  },
  social: {
    instagram: '#',
    facebook: '#',
  },
  schedule: {
    days: 'Lunes a Domingo',
    hours: '10:00 - 19:00 hrs',
  },
};

export const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/matrimonios', label: 'Matrimonios' },
  { href: '/graduaciones', label: 'Graduaciones' },
  { href: '/eventos-corporativos', label: 'Corporativos' },
  { href: '/galeria', label: 'Galería' },
  { href: '/contacto', label: 'Contacto' },
] as const;

export const footerConfig = {
  brandText: 'Caffarena Eventos',
  description: 'Una hacienda contemporánea rodeada de naturaleza, donde cada celebración se transforma en un recuerdo inolvidable.',
  ctaTitle: 'Agenda tu Visita',
  ctaDescription: 'Te invitamos a conocer personalmente nuestro recinto y descubrir la magia de Caffarena Eventos.',
  ctaButtonText: 'Contactar',
  copyright: `© ${new Date().getFullYear()} Caffarena Eventos. Todos los derechos reservados.`,
};
