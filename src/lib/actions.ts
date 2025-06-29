'use server';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function sendContactMessage(data: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(data);

  if (result.success) {
    // In a real application, you would integrate with an email service
    // like Resend, SendGrid, or Nodemailer to send the email.
    console.log("New contact message received:", result.data);
    return { success: true, data: result.data };
  } else {
    // The error handling is primarily done on the client for better UX,
    // but we can return an error structure if needed.
    return { success: false, error: result.error.format() };
  }
}
