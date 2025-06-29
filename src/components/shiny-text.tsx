'use client';

import { cn } from '@/lib/utils';

const ShinyText = ({
  text,
  disabled = false,
  speed = 5,
  className = '',
}: {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}) => {
  const animationDuration = `${speed}s`;

  return (
    <p
      className={cn(
        'text-[#b5b5b5a4] bg-clip-text inline-block',
        !disabled && 'animate-shine',
        className
      )}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {text}
    </p>
  );
};

export default ShinyText;
