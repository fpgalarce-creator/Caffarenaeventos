interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {subtitle && (
        <p
          className={`text-xs tracking-[0.3em] uppercase mb-4 ${
            light ? 'text-champagne' : 'text-champagne-dark'
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-4 ${
          light ? 'text-ivory' : 'text-graphite'
        }`}
      >
        {title}
      </h2>
      <div className={`section-divider mb-6 ${align === 'left' ? 'mx-0' : ''}`} />
      {description && (
        <p
          className={`text-base lg:text-lg leading-relaxed ${
            light ? 'text-ivory/70' : 'text-stone'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
