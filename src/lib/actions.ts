'use server';
import { z } from 'zod';
import { db } from './firebase';

// Temporarily remove recaptchaToken for debugging
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(2, { message: 'Subject must be at least 2 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  // recaptchaToken: z.string().min(1, { message: 'Please complete the reCAPTCHA.' }),
});


export async function sendContactMessage(data: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: result.error.format() };
  }
  
  const { name, email, subject, message } = result.data;

  try {
    // Temporarily bypass reCAPTCHA verification for debugging
    // const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    // if (!isRecaptchaValid) {
    //   return { success: false, error: { _errors: ["reCAPTCHA verification failed. Please try again."] }};
    // }

    await db.collection('contacts').add({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    return { success: true, data: result.data };

  } catch (error) {
    console.error("Error in sendContactMessage:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { success: false, error: { _errors: [ `Server error: ${errorMessage}` ] }};
  }
}
