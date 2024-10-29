import { z } from "zod";

export type Gender = "male" | "female" | "other";

// User Profile related schemas
export const userProfileSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  fullName: z.string().optional(),
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
  gender: z.enum(["male", "female", "other"]).optional(),
  bio: z.string().optional(),
  companyName: z.string().optional(),
  position: z.string().optional(),
  photoUrl: z.string().optional(),
});

export type ProfileFormType = z.infer<typeof userProfileSchema>;

export interface CreateUserParams {
  name: string;
  email: string;
  password: string;
}

export interface UserProfile extends ProfileFormType {
  uid?: string;
}

export const changePwSchema = z.object({
  email: z.string(),
  oldPw: z.string(),
  newPw: z.string(),
});

export type ChangePwFormType = z.infer<typeof changePwSchema>;
