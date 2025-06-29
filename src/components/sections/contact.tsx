import { ContactForm } from '@/components/contact-form';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">Get in Touch</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Have a project in mind or just want to say hi? I&apos;d love to hear from you.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
