'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Typewriter } from '@/components/typewriter';
import ShinyText from '../shiny-text';
import ProfileCard from '../profile-card';

export default function Hero() {
  return (
    <section id="about" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                Utkarsh Jha
              </h1>
              <ShinyText className="text-lg">Data Scientist | Data Analyst | Web Developer | Embedded</ShinyText>
              <div className="text-xl md:text-2xl font-semibold">
                <Typewriter 
                  strings={["Web Developer", "Verilog Expert", "Embedded Systems Engineer", "Data Scientist", "UI/UX Designer"]}
                  stringClassName="text-accent"
                  cursorClassName="text-accent"
                />
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Hello! I'm Utkarsh Jha, a passionate and versatile developer with expertise across multiple domains. My skills range from creating responsive and dynamic websites as a Web Developer to designing complex digital circuits with Verilog. I also build intelligent hardware as an Embedded Systems Engineer, and uncover insights from data as a Data Scientist. Complementing my technical skills is a keen eye for UI/UX Design, ensuring every project is not just powerful, but also user-friendly and aesthetically pleasing. You can add more about your journey here!
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
          <div className="flex items-center justify-center min-h-[480px]">
            <ProfileCard
              name="Utkarsh Jha"
              avatarUrl="/utkarsh-jha.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
