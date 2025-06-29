
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Wand2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks = [
  { href: '/#projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 text-accent">
            <rect width="256" height="256" fill="none" />
            <path
              d="M128,24a80,80,0,0,0-80,80c0,16.6,6.6,37.6,27.1,58.9,22.1,22.9,52.4,37.1,52.9,37.1.3,0,30.8-14.2,52.9-37.1C201.4,141.6,208,120.6,208,104A80,80,0,0,0,128,24Z"
              opacity="0.2"
            />
            <path
              d="M128,24a80,80,0,0,0-80,80c0,16.6,6.6,37.6,27.1,58.9,22.1,22.9,52.4,37.1,52.9,37.1.3,0,30.8-14.2,52.9-37.1C201.4,141.6,208,120.6,208,104A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32.1,32.1,0,0,1,128,136Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
          <span className="font-bold font-headline">ImmersiaFolio</span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-4 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild variant="ghost" size="icon">
            <Link href="/ai-description-generator" aria-label="AI Project Description Generator">
              <Wand2 className="h-5 w-5 text-accent" />
            </Link>
          </Button>
          {isMobile && (
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium mt-8">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setSheetOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
