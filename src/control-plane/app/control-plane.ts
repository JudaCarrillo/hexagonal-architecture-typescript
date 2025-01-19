import { ForMonitoring, ForRepoQuerying } from "../ports/drivens";
import { ForGenerateTokens } from "../ports/drivens/for-generate-tokens";
import { ForManagingAuthDetails } from "../ports/drivers";
import { AuthDetails, Permissions } from "./schemas";
import { REFRESH_TOKEN_DURATION, TOKEN_DURATION } from "./utils/const";

export class ControlPlane implements ForManagingAuthDetails {
  constructor(
    private readonly generateTokens: ForGenerateTokens,
    private readonly logger: ForMonitoring,
    private readonly repoQuerier: ForRepoQuerying
  ) {}

  async getAuthDetails(email: string, password: string): Promise<AuthDetails> {
    console.log("GET AUTH DETAILS");
    

    const token = this.generateTokens.execute({
      email,
      password,
      expireIn: TOKEN_DURATION,
    });
    if (!token) {
      this.logger.log("Token creation", "Failed to generate token");
      throw new Error("Failed creating Token, please check credentials");
    }

    const refreshToken = this.generateTokens.execute({
      email,
      password,
      expireIn: REFRESH_TOKEN_DURATION,
    });
    if (!refreshToken) {
      this.logger.log("RefreshToken creation", "Failed to generate token");
      throw new Error("Failed creating RefreshToken, please check credentials");
    }

    const result = {
      token,
      refreshToken,
    };

    console.log("AUTH DETAILS", result);

    return result;
  }

  async getPermissions(email: string): Promise<Permissions> {
    const user = await this.repoQuerier.getUser(email);
    if (!user) {
      this.logger.log("RepoQuerier GetUser", "Failed to get user");
      throw new Error("Failed getting user");
    }

    const permissions: Permissions = {
      isAdmin: user.isAdmin,
      isUser: user.isUser,
    };

    console.log("PERMISSIONS", permissions);

    return permissions;
  }
}
