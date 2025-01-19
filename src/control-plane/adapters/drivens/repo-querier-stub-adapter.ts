import { UserManagerProxy } from "../../../repository/adapters/drivers";
import { ExternalUser } from "../../../repository/app/schemas";
import { ForRepoQuerying } from "../../ports/drivens";

export class RepoQuerierStubAdapter implements ForRepoQuerying {
  constructor(private readonly userRepository: UserManagerProxy) {}

  getUser(email: string): Promise<ExternalUser> {
    return this.userRepository.getUser(email);
  }
}
