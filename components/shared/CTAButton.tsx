import { contactConfig } from '@/data';

interface CTAButtonProps {
  text?: string;
  variant?: 'primary' | 'outline' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  id?: string;
}

export function CTAButton({
  text = 'Agendar Visita Privada',
  variant = 'primary',
  size = 'md',
  className = '',
  id,
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center tracking-widest uppercase transition-all duration-300 font-medium';

  const sizeClasses = {
    sm: 'px-5 py-2 text-[10px]',
    md: 'px-7 py-3 text-xs',
    lg: 'px-10 py-4 text-xs',
  };

  const variantClasses = {
    primary: 'bg-champagne text-graphite hover:bg-champagne-dark',
    outline: 'border border-champagne text-champagne hover:bg-champagne hover:text-graphite',
    'outline-light': 'border border-ivory/40 text-ivory hover:bg-ivory/10',
  };

  return (
    <a
      href={contactConfig.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      id={id}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {text}
    </a>
  );
}
