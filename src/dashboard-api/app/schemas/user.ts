import { z } from "zod";
import { PermissionsSchema } from "./auth";

// * Omit - removes the specified keys from the type
// export type User = Omit<AuthenticatedUser, "id" | "token" | "refreshToken">;

// * Pick - picks the specified keys from the type
// export type User = Pick<AuthenticatedUser, "email" | "name">;

export const RegisterSchema = z.object({
  email: z.string().email("Invalid email"),
  name: z.string(),
  password: z.string().min(6),
  isAdmin: z.boolean(),
  isUser: z.boolean(),
});

export const AuthenticatedUserSchema = z.object({
  id: z.string(),
  name: z.string().email("Invalid email"),
  email: z.string(),
  token: z.string(),
  refreshToken: z.string(),
  permissions: PermissionsSchema,
});

export type AuthenticatedUser = z.infer<typeof AuthenticatedUserSchema>;

export interface User extends Pick<AuthenticatedUser, "email" | "name"> {
  password: string;
  isAdmin: boolean;
  isUser: boolean;
}
