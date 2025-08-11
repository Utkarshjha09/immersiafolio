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
import { socialLinks } from '@/lib/data';
import { cn } from '@/lib/utils';


export default function Hero() {
  return (
    <section id="about" className="w-full py-16 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                Utkarsh Jha
              </h1>
              <ShinyText className="text-lg sm:text-xl">Data Scientist | MERN Stack Developer | VLSI Engineer</ShinyText>
              <div className="text-xl md:text-2xl font-semibold">
                <Typewriter 
                  strings={["MERN Stack Developer", "Verilog Expert", "Embedded Systems Engineer", "Data Scientist", "UI/UX Designer", "VLSI Engineer"]}
                  stringClassName="text-accent"
                  cursorClassName="text-accent"
                />
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-lg text-justify">
              I'm a versatile developer with expertise in Data Science, MERN Stack, and Embedded Systems. From analyzing data with Python to building web apps with React and Node.js, and developing hardware with Arduino and Verilog—I enjoy working across the full tech stack.
                <br /><br />
                With skills in Machine Learning, UI/UX, and system-level programming, I build efficient, scalable solutions using tools like Git, VS Code, and Postman. I'm always eager to solve problems and learn new technologies that drive real-world impact.
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
          <div className="flex items-center justify-center min-h-[400px] sm:min-h-[480px]">
             <Dialog>
                <DialogTrigger asChild>
                    <div className="cursor-pointer transform scale-75 sm:scale-100">
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
                            <a href="mailto:work.utkarshjha@gmail.com" className="flex items-center gap-2">
                                <Mail className="h-5 w-5" />
                                Gmail
                            </a>
                        </Button>
                         <Button asChild variant="secondary">
                            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
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

