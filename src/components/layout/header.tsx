'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import ShinyText from '../shiny-text';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#achievements', label: 'Achievements' },
  { href: '/#education', label: 'Education' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Connect With Me' },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const isMobile = useIsMobile();
  const router = useRouter();

  const handleMobileLinkClick = (href: string) => {
    if (href.startsWith('/#')) {
      router.push(href);
      setSheetOpen(false);
    } else {
      setSheetOpen(false);
      // We use a small timeout to allow the sheet to close before navigating
      setTimeout(() => {
        router.push(href);
      }, 300); // 300ms matches sheet close animation
    }
  };

  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex flex-col">
          <span className="text-lg sm:text-xl font-bold font-headline">Utkarsh Jha</span>
          <ShinyText className="text-xs sm:text-sm">Data Scientist | MERN Stack Developer | VLSI Engineer</ShinyText>
        </Link>
        
        {isMobile ? (
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navLinks.map(({ href, label }) => {
                  if (href.startsWith('/#')) {
                    // For homepage sections, we use a button with programmatic navigation
                    return (
                      <button
                        key={label}
                        onClick={() => handleMobileLinkClick(href)}
                        className="text-left transition-transform hover:scale-105"
                      >
                        <ShinyText className="text-lg">{label}</ShinyText>
                      </button>
                    );
                  }
                  // For other pages, we can still use Link but handle the click
                  return (
                    <Link
                      key={label}
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMobileLinkClick(href);
                      }}
                      className="transition-transform hover:scale-105"
                    >
                      <ShinyText className="text-lg">{label}</ShinyText>
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="transition-transform hover:scale-105"
              >
                <ShinyText className="text-sm">{label}</ShinyText>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
