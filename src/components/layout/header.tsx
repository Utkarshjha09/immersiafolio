
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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

  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold font-headline">Utkarsh Jha</span>
          <span className="text-sm text-muted-foreground">Developer | Designer</span>
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
        ) : (
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
