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
              <h1 className="text-3xl font-headline font-bold">Vishal Kumar Ojha</h1>
              <p className="text-muted-foreground mt-1">Student | Developer</p>
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
                Hey, I'm Vishal Kumar Ojha, a 2nd-year student at VIT University, Bhopal, passionate about building impactful tech solutions. As the Founder of ArnoCodes, building HackCrusade, I specialize in UI/UX design, full-stack development (MERN), and frameworks like React, Django & Flask. Beyond coding, I have 75K+ impressions on LinkedIn and experience in content writing and video editing. I currently DCA of Notion Community VITB and former lead tech teams at Notion Community VIT Bhopal and E-Cell VIT Bhopal. Always eager to learn, grow, and collaborate—let's create something remarkable together!
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
