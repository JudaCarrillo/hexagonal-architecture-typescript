import { UserManagerProxy } from "../../../repository/adapters/drivers";
import { ExternalUser } from "../../../repository/app/schemas/user";
import { User } from "../../app/schemas";
import { ForRepoQuerying } from "../../ports/drivens";

export class RepoQuerierStub implements ForRepoQuerying {

  constructor(
    private readonly userRepository: UserManagerProxy,
  ) {}

  getUser(email: string): Promise<ExternalUser> {
    return this.userRepository.getUser(email);
  }

  createUser(user: User): Promise<ExternalUser> {
    return this.userRepository.createUser(user);
  }
}
