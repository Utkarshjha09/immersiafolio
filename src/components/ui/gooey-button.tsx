'use client';

import React, { useRef, useEffect } from 'react';
import { Button, type ButtonProps } from './button';
import './gooey-button.css';
import { cn } from '@/lib/utils';

interface GooeyButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const GooeyButton = React.forwardRef<HTMLButtonElement, GooeyButtonProps>(
  ({ children, className, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      const button = buttonRef.current;
      if (!button) return;

      const createParticle = (x: number, y: number) => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const point = document.createElement('div');
        point.className = 'point';
        point.style.setProperty('--color', 'hsl(var(--primary))');
        
        particle.appendChild(point);

        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 20 + 5;
        const endRadius = Math.random() * 60 + 40;

        particle.style.setProperty('--start-x', `${Math.cos(angle) * radius}px`);
        particle.style.setProperty('--start-y', `${Math.sin(angle) * radius}px`);
        particle.style.setProperty('--end-x', `${Math.cos(angle) * endRadius}px`);
        particle.style.setProperty('--end-y', `${Math.sin(angle) * endRadius}px`);
        particle.style.setProperty('--scale', `${Math.random() * 0.7 + 0.4}`);
        particle.style.setProperty('--rotate', `${Math.random() * 360}deg`);

        button.appendChild(particle);

        particle.addEventListener('animationend', () => {
          particle.remove();
        });
      };

      const handleClick = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        for (let i = 0; i < 15; i++) {
          createParticle(x, y);
        }
      };

      button.addEventListener('click', handleClick);

      return () => {
        button.removeEventListener('click', handleClick);
      };
    }, []);

    const handleRef = (node: HTMLButtonElement) => {
      (buttonRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
      }
    };
    
    return (
      <Button ref={handleRef} className={cn('gooey-button', className)} {...props}>
        {children}
      </Button>
    );
  }
);

GooeyButton.displayName = 'GooeyButton';

export { GooeyButton };
