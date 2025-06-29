'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Typewriter } from '@/components/typewriter';

export default function Hero() {
  return (
    <section id="about" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                Vishal Kumar Ojha
              </h1>
              <p className="text-lg text-muted-foreground">
                Student | Developer
              </p>
              <div className="text-xl md:text-2xl font-semibold">
                <Typewriter 
                  strings={["Competitive Programmer", "Full-Stack Developer", "UI/UX Designer"]}
                  stringClassName="text-primary"
                  cursorClassName="text-primary"
                />
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Hey, I'm Vishal Kumar Ojha, a 2nd-year student at VIT University, Bhopal, passionate about building impactful tech solutions. As the Founder of ArnoCodes, building HackCrusade, I specialize in UI/UX design, full-stack development (MERN), and frameworks like React, Django & Flask. Beyond coding, I have 75K+ impressions on LinkedIn and experience in content writing and video editing. I currently DCA of Notion Community VITB and former lead tech teams at Notion Community VIT Bhopal and E-Cell VIT Bhopal. Always eager to learn, grow, and collaborate—let's create something remarkable together!
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href="/resume.pdf" download>Download Resume</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Connect With Me</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Vishal Kumar Ojha"
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-lg"
              data-ai-hint="professional headshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
