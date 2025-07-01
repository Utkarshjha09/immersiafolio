'use server';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(2, { message: 'Subject must be at least 2 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function sendContactMessage(data: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: result.error.format() };
  }
  
  const { name, email, subject, message } = result.data;

  try {
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
      console.error("Resend Error:", emailResponse.error);
      return { success: false, error: { _errors: ["Failed to send message. Please try again later."] } };
    }

    return { success: true, data: result.data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: { _errors: ["An unexpected error occurred. Please try again later."] }};
  }
}
