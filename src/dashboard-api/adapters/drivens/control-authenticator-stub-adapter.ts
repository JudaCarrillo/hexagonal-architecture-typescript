// this pretends a mock, the main reason is for I not needed have the all services finished

import { AuthDetails, Permissions } from "../../app/schemas";
import { ForControlAuthenticating } from "../../ports/drivens";

const authDetailsMock: AuthDetails = {
  token: "token",
  refreshToken: "refreshToken",
};

const permissionsMock: Permissions = {
  isAdmin: true,
  isUser: true,
};

// the recommendation is if you are not using a parameter, you can use an underscore to indicate that
export class ControlAuthenticatorStub implements ForControlAuthenticating {
  getAuthDetails(_email: string, _password: string): Promise<AuthDetails> {
    return Promise.resolve(authDetailsMock);
  }

  getPermissions(_email: string, _password: string): Promise<Permissions> {
    return Promise.resolve(permissionsMock);
  }
}
