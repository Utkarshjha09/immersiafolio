import { CertificateCard } from '@/components/certificate-card';
import { certificates } from '@/lib/data';

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-20 lg:py-32 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight md:text-5xl">Certificates & Achievements</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed">
            A showcase of my certifications and professional accomplishments.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-12">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.title} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}
