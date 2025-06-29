'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('@/components/three-scene').then(mod => mod.ThreeScene), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-background" />
});

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>
      <div className="relative z-10 p-4 flex flex-col items-center">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 animate-fade-in-down">
          Utkarsh Jha
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up">
          Crafting immersive digital experiences with code and creativity.
        </p>
        <Button size="lg" asChild className="animate-fade-in-up animation-delay-500">
          <a href="#projects">
            View My Work <ArrowDown className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
      <style jsx>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }
        .animation-delay-500 {
            animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
}
