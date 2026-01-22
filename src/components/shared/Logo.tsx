import type { FC } from 'react';

type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

interface LogoProps {
  size?: LogoSize;
  className?: string;
  href?: string;
}

const SIZE_CLASSES: Record<LogoSize, string> = {
  sm: 'h-6 w-auto',
  md: 'h-8 w-auto',
  lg: 'h-30 w-auto',
  xl: 'h-70 w-auto',
};

export const Logo: FC<LogoProps> = ({
  size = 'md',
  className = 'object-contain',
  href,
}) => {
  const logo = (
    <img
      src="images/LargerResLogo.png"
      alt="Twin Saga"
      loading="eager"
      decoding="async"
      className={`${SIZE_CLASSES[size]} ${className}`}
    />
  );

  if (!href) return logo;

  return (
    <a
      href={href}
      aria-label="Go to home"
      className="inline-flex items-center"
    >
      {logo}
    </a>
  );
};
