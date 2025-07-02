'use server';
import { z } from 'zod';
import { Resend } from 'resend';
import { db } from './firebase';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(2, { message: 'Subject must be at least 2 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  recaptchaToken: z.string().min(1, { message: 'Please complete the reCAPTCHA.' }),
});

async function verifyRecaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error('reCAPTCHA secret key not found.');
    // In a real app, you might want to fail open or closed depending on security needs.
    // For this example, we will fail open in dev but could fail closed in prod.
    return process.env.NODE_ENV !== 'production';
  }

  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  try {
    const response = await fetch(verificationUrl, { method: 'POST' });
    const data = await response.json();
    if (!data.success) {
      console.error('reCAPTCHA verification failed with error codes:', data['error-codes']);
    }
    return data.success;
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  }
}

export async function sendContactMessage(data: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: result.error.format() };
  }
  
  const { name, email, subject, message, recaptchaToken } = result.data;

  const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
  if (!isRecaptchaValid) {
    return { success: false, error: { _errors: ["reCAPTCHA verification failed. Please try again."] }};
  }

  try {
    // Operation 1: Store in Firestore
    await db.collection('contacts').add({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    // Operation 2: Send email via Resend
    if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const emailResponse = await resend.emails.send({
          from: 'Portfolio Contact Form <onboarding@resend.dev>', // IMPORTANT: Replace with your verified domain in production
          to: 'utkarshjha.999@gmail.com',
          subject: `New Portfolio Message: ${subject}`,
          reply_to: email,
          html: `
            <h2>New Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        });

        if (emailResponse.error) {
          throw new Error(`Resend Error: ${emailResponse.error.message}`);
        }
    } else {
        console.log('Resend API key not configured. Skipping email notification.');
    }

    return { success: true, data: result.data };

  } catch (error) {
    console.error("Failed to send or store message:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { success: false, error: { _errors: [ `Server error: ${errorMessage}` ] }};
  }
}
