'use server';
import { z } from 'zod';
import { db } from './firebase';
import { Resend } from 'resend';

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

  const recaptchaResult = await verifyRecaptcha(recaptchaToken);
  if (!recaptchaResult.success) {
    return { success: false, error: { _errors: [recaptchaResult.error || "reCAPTCHA check failed."] }};
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const portfolioOwnerEmail = process.env.NEXT_PUBLIC_PORTFOLIO_OWNER_EMAIL;

  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not set in .env file.");
    return { success: false, error: { _errors: ["The server is not configured for sending emails."] } };
  }

  if (!portfolioOwnerEmail) {
    console.error("NEXT_PUBLIC_PORTFOLIO_OWNER_EMAIL is not set in .env file.");
    return { success: false, error: { _errors: ["The server is not configured for sending emails."] } };
  }

  const resend = new Resend(resendApiKey);

  try {
    // Save to Firestore
    await db.collection('contacts').add({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    // Send email to portfolio owner
    await resend.emails.send({
      from: `Portfolio Contact <notification@resend.dev>`,
      to: portfolioOwnerEmail,
      subject: `New Portfolio Message: ${subject}`,
      html: `
        <p>You received a new message from your portfolio contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send confirmation email to visitor
    await resend.emails.send({
      from: 'Utkarsh Jha <noreply@resend.dev>',
      to: email,
      subject: 'Thank you for your message!',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting me. I have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br/>Utkarsh Jha</p>
      `,
    });

    return { success: true };

  } catch (error) {
    console.error("Error processing contact form:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown server error occurred.";
    return { success: false, error: { _errors: [ `Server error: ${errorMessage}` ] }};
  }
}
