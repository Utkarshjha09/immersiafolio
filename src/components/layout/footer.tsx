import Link from 'next/link';
import { Github, Linkedin, Instagram, Code, MessageCircle } from 'lucide-react';
import { socialLinks } from '@/lib/data';

const CodeForcesIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors fill-current">
        <path d="M3.536 8.161V6.305h1.856v1.856zm15.072 0V6.305h1.856v1.856zM9.424 24a3.536 3.536 0 1 1 0-7.072 3.536 3.536 0 0 1 0 7.072zm5.12-3.536a3.536 3.536 0 1 0 0-7.072 3.536 3.536 0 0 0 0 7.072zM3.536 15.84V6.305H0V24h5.392v-2.784H3.536v-5.376zm1.856-9.535H1.856V4.448h3.536zM24 8.16V6.305h-3.536v1.856zm-1.856 1.856v5.376H24V0h-5.392v2.784h1.856v3.52h-3.536v1.857h3.536v1.856h-1.856zm-1.68-9.535V4.448h3.536v1.856z"/>
    </svg>
);


export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Utkarsh Jha. All Rights Reserved.</p>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <Code className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href={socialLinks.codeforces} target="_blank" rel="noopener noreferrer" aria-label="CodeForces">
            <CodeForcesIcon />
          </Link>
           <Link href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <MessageCircle className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
