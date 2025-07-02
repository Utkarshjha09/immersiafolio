'use server';
import { z } from 'zod';
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
    // Temporarily removed Resend logic to focus on the Firestore issue.
    await db.collection('contacts').add({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    return { success: true, data: result.data };

  } catch (error) {
    console.error("Failed to write to Firestore:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { success: false, error: { _errors: [ `Server error: ${errorMessage}` ] }};
  }
}
