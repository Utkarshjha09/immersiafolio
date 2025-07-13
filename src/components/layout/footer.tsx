import Link from 'next/link';
import { Github, Linkedin, Instagram, Code, MessageCircle } from 'lucide-react';
import { socialLinks } from '@/lib/data';

const CodeChefIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
          <Link href={socialLinks.codechef} target="_blank" rel="noopener noreferrer" aria-label="CodeChef">
            <CodeChefIcon />
          </Link>
           <Link href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <MessageCircle className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
