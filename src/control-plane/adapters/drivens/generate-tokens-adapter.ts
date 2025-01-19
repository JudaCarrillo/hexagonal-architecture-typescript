import jwt from "jsonwebtoken";
import {
  ForGenerateTokens,
  GenerateTokenPayload,
} from "../../ports/drivens/for-generate-tokens";

export class GenerateTokensAdapter implements ForGenerateTokens {
  private secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  execute(payload: GenerateTokenPayload): string {
    const token = jwt.sign(payload, this.secretKey);
    return token;
  }
}
