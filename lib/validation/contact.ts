import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z.string().trim().email("Please enter a valid email address.").max(160),
  message: z.string().trim().min(20, "Please share a little more about your project.").max(3000),
  website: z.string().max(0, "Submission rejected."),
});

export type ContactInput = z.infer<typeof contactSchema>;
