import { z } from "zod";

// Validation schema for the product form
export const serviceSchema = z.object({
  title: z.string(),
  subTitle: z.string().optional(),
  slug: z.string().optional(), // Replace marketingPageLink with slug
  brief: z.string().optional(),
  description: z.string(),
  keyPoints: z.array(z.string()).optional(),
  imageUrl: z.string().optional(),
  videoUrl: z.string().url().optional(),
  cta: z
    .object({
      text: z.string(),
      link: z.string(), // Use slug in the link
    })
    .optional(),
  faq: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    )
    .optional(),
});

// TypeScript types inferred from the schema
export type ServiceFormType = z.infer<typeof serviceSchema>;

// Interface for database structure
export interface Service extends ServiceFormType {
  id: string; // Unique identifier for database records
  createdAt?: Date;
  updatedAt?: Date;
}
