import "server-only";

import { Resend } from "resend";

import type { ContactInput } from "@/lib/validation/contact";

export async function sendContactEmail(input: ContactInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;

  if (!apiKey || !recipient) {
    if (process.env.NODE_ENV === "development") return;
    throw new Error("Contact email service is not configured.");
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: recipient,
    replyTo: input.email,
    subject: `Portfolio enquiry from ${input.name}`,
    text: `Name: ${input.name}\nEmail: ${input.email}\n\n${input.message}`,
  });

  if (error) throw new Error(error.message);
}
