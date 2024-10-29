import { z } from "zod";

// Contacts related schemas
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be minimum of 2 characters.")
    .max(100, "Name must be maximum of 100 characters."),
  email: z.string().email("Invalid email address."),
  message: z
    .string()
    .min(10, "Please write your message here, minimum 10 characters."),
  reference: z.string().optional(),
});

export type ContactFormType = z.infer<typeof contactSchema>;

export interface ContactMessage extends ContactFormType {
  $id: string;
  createdAt: Date;
}
