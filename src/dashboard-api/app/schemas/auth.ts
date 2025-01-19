export interface AuthDetails {
  token: string;
  refreshToken: string;
}

export interface Permissions {
  isAdmin: boolean;
  isUser: boolean;
}
