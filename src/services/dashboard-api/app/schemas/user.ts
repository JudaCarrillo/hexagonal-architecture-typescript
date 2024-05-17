export interface AuthenticatedUser {
  id: string;
  name: string;
  email: string;
  token: string;
  refreshToken: string;
}

// Omit - removes the specified keys from the type
// export type User = Omit<AuthenticatedUser, "id" | "token" | "refreshToken">;

// Pick - picks the specified keys from the type
export type User = Pick<AuthenticatedUser, "email" | "name">;
