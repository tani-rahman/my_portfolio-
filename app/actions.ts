"use server";

import { contactSchema } from "@/lib/validation/contact";
import { sendContactEmail } from "@/services/email";
import type { ContactFormState } from "@/types/portfolio";

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    website: formData.get("website") ?? "",
  });

  if (!parsed.success) {
    return { status: "error", message: "Please review the highlighted fields.", fieldErrors: parsed.error.flatten().fieldErrors };
  }

  try {
    await sendContactEmail(parsed.data);
    return { status: "success", message: "Thanks — your message is on its way. I’ll reply soon." };
  } catch {
    return { status: "error", message: "Something went wrong while sending. Please email me directly instead." };
  }
}
