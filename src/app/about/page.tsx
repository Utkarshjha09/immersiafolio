import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/data';
import { Download, Github, Linkedin, Twitter } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-5xl px-4 md:px-6 py-20 lg:py-32">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-accent">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Professional Headshot"
                fill
                className="object-cover"
                data-ai-hint="professional headshot"
              />
            </div>
            <div className="mt-6 text-center">
              <h1 className="text-3xl font-headline font-bold">John Doe</h1>
              <p className="text-muted-foreground mt-1">Creative Developer</p>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
            <Button className="mt-6 w-full">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </div>
          <div className="md:col-span-2 space-y-6 text-lg text-foreground/80">
            <h2 className="font-headline text-4xl font-bold text-primary-foreground">About Me</h2>
            <p>
              I am a passionate and creative developer with a knack for building beautiful,
              immersive, and user-friendly digital experiences. With a background in both design and
              engineering, I bridge the gap between aesthetics and functionality to deliver products
              that are not only visually appealing but also robust and performant.
            </p>
            <p>
              My journey into web development started with a fascination for how interactive
              elements could tell a story. Since then, I've honed my skills in modern web
              technologies like React, Next.js, and Three.js, always pushing the boundaries of
              what's possible on the web.
            </p>
            <p>
              When I'm not coding, you can find me exploring the latest trends in generative art,
              contributing to open-source projects, or looking for the next creative challenge.
              I believe in lifelong learning and constantly seek to expand my skill set.
            </p>
            <p>
              Let's connect and create something amazing together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
