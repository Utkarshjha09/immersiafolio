import { ContactForm } from '@/components/contact-form';
import { socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Code, Github, Instagram, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import TrueFocus from '../true-focus';

const CodeChefIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
            <div className="transform scale-75 sm:scale-100">
                <TrueFocus
                sentence="Get in Touch"
                borderColor="#BE52F2"
                glowColor="rgba(190, 82, 242, 0.6)"
                />
            </div>
            <div className="mt-2 h-1.5 w-24 bg-primary rounded-full"></div>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-start space-y-6 text-left">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold">Let&apos;s Work Together</h3>
              <p className="text-muted-foreground text-justify">
                I&apos;m always interested in new opportunities and exciting projects.
              </p>
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                        <h4 className="font-semibold">Email</h4>
                        <a href="mailto:utkarshjha.999@gmail.com" className="text-muted-foreground hover:text-primary break-all">utkarshjha.999@gmail.com</a>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                        <h4 className="font-semibold">Phone</h4>
                        <a href="tel:+917061771437" className="text-muted-foreground hover:text-primary">+91 7061771437</a>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4 pt-4 flex-wrap">
              <Button asChild variant="default" size="icon" className="rounded-full w-12 h-12">
                <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-6 w-6" />
                </Link>
              </Button>
              <Button asChild variant="default" size="icon" className="rounded-full w-12 h-12">
                <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6" />
                </Link>
              </Button>
              <Button asChild variant="default" size="icon" className="rounded-full w-12 h-12">
                <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-6 w-6" />
                </Link>
              </Button>
              <Button asChild variant="default" size="icon" className="rounded-full w-12 h-12">
                 <Link href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                    <Code className="h-6 w-6" />
                </Link>
              </Button>
              <Button asChild variant="default" size="icon" className="rounded-full w-12 h-12">
                <Link href={socialLinks.codechef} target="_blank" rel="noopener noreferrer" aria-label="CodeChef">
                    <CodeChefIcon />
                </Link>
              </Button>
              <Button asChild variant="default" size="icon" className="rounded-full w-12 h-12">
                <Link href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <MessageCircle className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
