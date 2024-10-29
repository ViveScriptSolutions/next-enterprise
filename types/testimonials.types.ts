import { z } from "zod";

// Validation schema for the booking form
export const testimonialSchema = z.object({
  clientName: z.string().min(2, "Name must be at least 2 characters long."),
  position: z.string().optional(),
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters long.")
    .optional(),
  comments: z
    .string()
    .min(2, "Please write something at least 2 characters long."),
  url: z.string().optional(),
  approved: z.boolean().optional(),
});

// TypeScript types inferred from the schema
export type TestimonialFormType = z.infer<typeof testimonialSchema>;

// Interface for booking data
export interface Testimonial extends TestimonialFormType {
  id: string; // Unique identifier for database records
  createdAt?: Date;
  updatedAt?: Date;
}
