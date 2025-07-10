'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Typewriter } from '@/components/typewriter';
import ShinyText from '../shiny-text';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Mail, MessageCircle } from 'lucide-react';
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
              <ShinyText className="text-lg">Data Scientist | Data Analyst | MERN Stack Developer | Embedded</ShinyText>
              <div className="text-xl md:text-2xl font-semibold">
                <Typewriter 
                  strings={["MERN Stack Developer", "Verilog Expert", "Embedded Systems Engineer", "Data Scientist", "UI/UX Designer"]}
                  stringClassName="text-accent"
                  cursorClassName="text-accent"
                />
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Hello! I'm Utkarsh Jha, a passionate and versatile developer with expertise across multiple domains. My skills range from creating responsive and dynamic websites as a MERN Stack Developer to designing complex digital circuits with Verilog. I also build intelligent hardware as an Embedded Systems Engineer, and uncover insights from data as a Data Scientist. Complementing my technical skills is a keen eye for UI/UX Design, ensuring every project is not just powerful, but also user-friendly and aesthetically pleasing. You can add more about your journey here!
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
             <Dialog>
                <DialogTrigger asChild>
                    <div className="cursor-pointer">
                        <ProfileCard />
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                    <DialogTitle>Contact Me</DialogTitle>
                    <DialogDescription>
                        Choose your preferred method to get in touch.
                    </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                         <Button asChild>
                            <a href="mailto:utkarshjha.999@gmail.com" className="flex items-center gap-2">
                                <Mail className="h-5 w-5" />
                                Gmail
                            </a>
                        </Button>
                         <Button asChild variant="secondary">
                            <a href="https://wa.me/7061771437" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <MessageCircle className="h-5 w-5" />
                                WhatsApp
                            </a>
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
