import { z } from "zod";

// Blog related schemas
export const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  metaDescription: z.string().min(1, "Meta Description is required").optional(),
  tags: z.array(z.string()).optional(),
});

export type BlogFormType = z.infer<typeof blogSchema>;

export interface Blog extends BlogFormType {
  // $id: string;
  slug: string;
  date: string;
  author: string;
}
