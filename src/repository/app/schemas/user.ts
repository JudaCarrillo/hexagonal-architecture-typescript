export interface User {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  isUser: boolean;
}

export interface RepoUser extends User {
  id: string;
}

export interface ExternalUser extends Omit<RepoUser, "password"> {}
