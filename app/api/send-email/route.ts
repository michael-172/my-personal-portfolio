import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmailSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(5, "Message must be at least 5 characters."),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = sendEmailSchema.parse(body);

    const { name, email, phone, subject, message } = validatedData;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // This will be your verified domain
      to: "michaelmicheal72@gmail.com",
      subject: `New message from ${name}: ${subject}`,
      replyTo: email,
      html: `
        <p>You have received a new message from your portfolio contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
