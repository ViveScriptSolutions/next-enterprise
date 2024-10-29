import { z } from "zod";

// Check if `File` is available (only on the client side)
const fileSchema = typeof window !== "undefined" ? z.instanceof(File) : z.any();

export const projectSchema = z.object({
  name: z.string().min(2, "Project name should be at least 2 characters."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters."),
  slug: z.string().optional(),
  imageUrl: z.string().min(20).optional(),
  imageFile: fileSchema.nullable().optional(), // File validation for client-side only
  technologies: z.array(z.string()).optional(),
  demoUrl: z.string().url().optional(), // Valid URL
  repoUrl: z.string().url().optional(), // Valid URL
  details: z
    .string()
    .min(20, "Details should be at least 20 characters.")
    .optional(),
});

export type ProjectFormType = z.infer<typeof projectSchema>;

export interface Project extends ProjectFormType {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  // name: string;
  // description: string;
  // imageUrl?: string;
  // technologies?: string[]; // Array of tech stack used
  // demoUrl?: string; // Optional demo link
  // repoUrl?: string; // Optional GitHub link
  // details?: string; // Full description of the project
}
