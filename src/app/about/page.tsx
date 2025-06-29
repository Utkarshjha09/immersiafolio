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
              <h1 className="text-3xl font-headline font-bold">Utkarsh Jha</h1>
              <p className="text-muted-foreground mt-1">Developer | Designer</p>
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
            <Button className="mt-6 w-full" asChild>
               <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download CV
               </a>
            </Button>
          </div>
          <div className="md:col-span-2 space-y-6 text-lg text-foreground/80">
            <h2 className="font-headline text-4xl font-bold text-primary">About Me</h2>
             <p>
                Hello, I'm Utkarsh Jha. I am a dedicated and versatile professional with a diverse skill set that includes web development, Verilog, embedded systems, data science, and UI/UX design. I am passionate about leveraging technology to solve real-world problems and create intuitive, efficient, and beautiful digital experiences. Whether I'm building a full-stack web application, designing a custom microprocessor, or analyzing complex datasets, I bring a commitment to quality and a drive for innovation. I'm always open to new challenges and collaborations, so feel free to reach out!
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
