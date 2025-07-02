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
    console.error("RECAPTCHA_SECRET_KEY is not set in .env file.");
    return { success: false, error: "The server is not configured for reCAPTCHA." };
  }
  
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error(`reCAPTCHA server returned an error: ${response.status} ${response.statusText}`, errorText);
        return { success: false, error: `The reCAPTCHA server could not be reached.` };
    }

    const data = await response.json();
    if (data.success) {
      return { success: true };
    } else {
      console.error("reCAPTCHA verification failed with error codes:", data['error-codes']);
      return { success: false, error: "reCAPTCHA verification failed. Please try again." };
    }
  } catch(error) {
    console.error("An error occurred while verifying reCAPTCHA:", error);
    return { success: false, error: "An unexpected error occurred during reCAPTCHA verification." };
  }
}

export async function sendContactMessage(data: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: result.error.format() };
  }
  
  const { name, email, subject, message, recaptchaToken } = result.data;

  try {
    const recaptchaResult = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaResult.success) {
      return { success: false, error: { _errors: [recaptchaResult.error || "reCAPTCHA check failed."] }};
    }

    await db.collection('contacts').add({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    return { success: true };

  } catch (error) {
    console.error("Error writing to Firestore:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown server error occurred.";
    return { success: false, error: { _errors: [ `Server error: ${errorMessage}` ] }};
  }
}
