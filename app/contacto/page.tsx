import { Metadata } from 'next';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { contactPageData, contactConfig } from '@/data';

export const metadata: Metadata = {
  title: 'Contacto | Caffarena Eventos',
  description: 'Contáctanos para agendar una visita privada a Caffarena Eventos. Estamos ubicados en la Región de O\'Higgins.',
};

export default function ContactoPage() {
  return (
    <div className="pt-20 bg-ivory min-h-screen flex flex-col justify-center">
      <div className="py-20">
        <SectionHeading
          subtitle={contactPageData.header.subtitle}
          title={contactPageData.header.title}
          description={contactPageData.header.description}
        />

        <div className="mx-auto max-w-4xl px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 md:p-12 shadow-sm border border-stone/10 rounded-sm">
            {/* Contact Info */}
            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-graphite mb-6">{contactPageData.infoSection.title}</h3>
              
              <div className="space-y-6 text-stone">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-graphite mb-1">{contactPageData.infoSection.location.label}</h4>
                  <p>{contactPageData.infoSection.location.value}</p>
                  <p className="text-xs mt-1 text-stone/80">{contactPageData.infoSection.location.note}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-graphite mb-1">{contactPageData.infoSection.schedule.label}</h4>
                  <p>{contactPageData.infoSection.schedule.days}</p>
                  <p>{contactPageData.infoSection.schedule.hours}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-graphite mb-1">{contactPageData.infoSection.social.label}</h4>
                  <div className="flex gap-4 mt-2">
                    {contactPageData.infoSection.social.links.map(link => (
                      <a key={link.name} href={link.url} className="hover:text-champagne transition-colors">{link.name}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Area */}
            <div className="flex flex-col justify-center bg-ivory-dark p-8 text-center rounded-sm border border-stone/5">
              <div className="w-12 h-12 rounded-full border border-champagne mx-auto mb-6 flex items-center justify-center bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-champagne"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-graphite mb-4">{contactPageData.actionSection.title}</h3>
              <p className="text-sm text-stone mb-8">
                {contactPageData.actionSection.description}
              </p>
              <a
                href={contactConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#25D366] text-white text-sm font-medium tracking-wide uppercase hover:bg-[#20bd5a] transition-colors duration-300 gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                {contactPageData.actionSection.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
