import { z } from "zod";

// Validation schema for the product form
export const productSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters long."), // Main title of the product/gig
  slug: z.string().optional(), // URL-friendly version of the title
  category: z.string().optional(), // Main category of the product
  tags: z.array(z.string()).optional(), // Search tags
  technology: z
    .array(z.string())
    .min(1, "At least one technology must be specified."), // Technologies used to develop the product
  tools: z.array(z.string()).optional(), // Tools used to develop this product
  basePrice: z.number().nonnegative("Base price must be a positive number."), // Base price of the product
  minimumDays: z
    .number()
    .min(1, "Minimum delivery time must be at least 1 day."), // Base deadline of the project
  description: z.string(), // Description of the product
  keyFeature: z.array(z.string()).optional(),
  addOns: z
    .array(
      z.object({
        name: z.string(),
        price: z
          .number()
          .nonnegative("Add-on price must be a positive number."),
        additionalDays: z
          .number()
          .min(0, "Additional days must be 0 or greater."), // Allows for 0 extra days if not needed
        notes: z.string().optional(),
      })
    )
    .optional(), // List of add-ons to add to this product
  images: z.array(z.string()).optional(), // Image URLs
  approved: z.boolean().default(false).optional(), // Approval status
  demo: z
    .array(
      z.object({
        title: z.string().optional(),
        url: z
          .string()
          .url()
          //   .refine(
          //     (url, context) => context.parent.title || url, // Check if title or URL exists
          //     "Demo URL is required when title is provided."
          //   )
          .optional(),
        note: z.string().optional(),
      })
    )
    .optional(), // List of demo project we've done before to add to this product
  contactPerson: z
    .object({
      name: z.string().optional(),
      email: z
        .string()
        .email("Contact email must be a valid email address.")
        .optional(), // Optional email of the contact person
      phone: z
        .string()
        .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format.")
        .optional(), // Optional phone number
    })
    .optional(), // Contact person for the gig/product
  faq: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    )
    .optional(), // FAQ section for the gig/product
  videoUrl: z.string().url().optional(), // Video URL for the product
});

// TypeScript types inferred from the schema
export type ProductFormType = z.infer<typeof productSchema>;

// Interface for database structure
export interface Product extends ProductFormType {
  id: string; // Unique identifier for database records
  createdAt?: Date;
  updatedAt?: Date;
}
