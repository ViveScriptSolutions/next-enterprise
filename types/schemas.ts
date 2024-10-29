import { z } from "zod";

// Newsletter related schemas
export const newsletterSchema = z.object({
  email: z.string().email("Invalid email address").min(5).max(100),
});

export type NewsletterFormType = z.infer<typeof newsletterSchema>;
