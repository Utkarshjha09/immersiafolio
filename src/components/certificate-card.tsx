import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { GooeyButton } from '@/components/ui/gooey-button';
import type { Certificate } from '@/lib/data';
import { Award } from 'lucide-react';

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <Card className="h-full overflow-hidden flex flex-col group border-border hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2">
      <div className="relative aspect-video overflow-hidden border-b">
        <Image
          src={certificate.imageUrl}
          alt={certificate.title}
          width={800}
          height={450}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-ai-hint={certificate.imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{certificate.title}</CardTitle>
        <p className="text-sm text-muted-foreground font-semibold">{certificate.issuer}</p>
      </CardHeader>
      <CardContent className="flex-grow space-y-2">
        <p className="text-sm text-muted-foreground">{certificate.date}</p>
        {certificate.credentialId && (
          <p className="text-xs text-muted-foreground">{certificate.credentialId}</p>
        )}
      </CardContent>
      <CardFooter>
        <GooeyButton asChild className="w-full">
          <a href={certificate.certificateUrl} target="_blank" rel="noopener noreferrer">
            <Award className="mr-2 h-4 w-4" /> View Certificate
          </a>
        </GooeyButton>
      </CardFooter>
    </Card>
  );
}
