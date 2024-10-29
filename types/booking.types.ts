import { z } from "zod";

// Validation schema for the booking form
export const bookingSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters long."),
  email: z.string().email("Invalid email address."),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits.")
    .optional(),
  businessName: z.string().optional(),
  serviceInterested: z
    .array(
      z.enum([
        "Web development",
        "App Development",
        "E-commerce Solutions",
        "Custom Software/Tools",
        "Workflow Automation",
        "Spreadsheet",
        "Data Analysis",
        "AI Integration",
        "Other",
      ])
    )
    .optional(),
  projectDescription: z.string().min(20, "Please provide more details."),
  dateTime: z.date().optional(),
  budgets: z.number().positive("Budget must be a positive number.").optional(),
  whereYouHeardFrom: z.string().optional().optional(),
});

// TypeScript types inferred from the schema
export type BookingFormType = z.infer<typeof bookingSchema>;

// Interface for booking data
export interface Booking extends BookingFormType {
  id: string; // Unique identifier for database records
}
