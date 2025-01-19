export interface GenerateTokenPayload {
  email: string;
  password: string;
  expireIn: string;
}

export interface ForGenerateTokens {
  execute(payload: GenerateTokenPayload): string;
}
