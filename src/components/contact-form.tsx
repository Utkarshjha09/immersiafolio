'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { sendContactMessage } from '@/lib/actions';
import { useRef, useTransition } from 'react';
import { Loader2, Terminal } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(2, { message: 'Subject must be at least 2 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  recaptchaToken: z.string().min(1, { message: 'Please complete the reCAPTCHA.' }),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      recaptchaToken: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const result = await sendContactMessage(values);
      if (result.success) {
        toast({
          title: 'Message Sent!',
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
        recaptchaRef.current?.reset();
      } else {
        const errorMessage = result.error?._errors?.join(', ') || 'Something went wrong. Please try again.';
        toast({
          title: 'Error',
          description: errorMessage,
          variant: 'destructive',
        });
        recaptchaRef.current?.reset();
      }
    });
  }

  const handleRecaptchaChange = (token: string | null) => {
    form.setValue('recaptchaToken', token || '', { shouldValidate: true });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Your Message" {...field} rows={5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {siteKey ? (
          <FormField
            control={form.control}
            name="recaptchaToken"
            render={() => (
              <FormItem>
                <FormControl>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={siteKey}
                    onChange={handleRecaptchaChange}
                    theme="dark"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Configuration Required</AlertTitle>
            <AlertDescription>
              To enable this contact form, please add your reCAPTCHA site key to the `.env` file as `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`.
            </AlertDescription>
          </Alert>
        )}
        <Button type="submit" className="w-full" disabled={isPending || !siteKey || !form.formState.isValid}>
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send Message'}
        </Button>
      </form>
    </Form>
  );
}
