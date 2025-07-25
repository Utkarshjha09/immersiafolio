import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import './globals.css';
import SmoothScroll from '@/components/smooth-scroll';

export const metadata: Metadata = {
  title: 'Utkarsh Jha',
  description: 'The portfolio of Utkarsh Jha, a versatile developer and designer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <SmoothScroll>
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
          <Toaster />
        </SmoothScroll>
      </body>
    </html>
  );
}
