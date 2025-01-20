// this pretends a mock, the main reason is for I not needed have the all services finished

import { AuthDetailsProxy } from "../../../control-plane/adapters/drivers";
import { AuthDetails, Permissions } from "../../app/schemas";
import { ForControlAuthenticating } from "../../ports/drivens";

// the recommendation is if you are not using a parameter, you can use an underscore to indicate that
export class ControlAuthenticatorStub implements ForControlAuthenticating {
  constructor(private readonly controlAuthenticator: AuthDetailsProxy) {}

  async getAuthDetails(email: string, password: string): Promise<AuthDetails> {
    return this.controlAuthenticator.getAuthDetails(email, password);
  }

  async getPermissions(email: string): Promise<Permissions> {
    return this.controlAuthenticator.getPermissions(email);
  }
}
