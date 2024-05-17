import { User as RepoUser } from "../../../repository/app/schemas/user";
import { ForRepoQuerying } from "../../ports/drivens";

const userMock: RepoUser = {
  id: "123",
  name: "John Doe",
  email: "jhon@gmail.com",
};

export class RepoQuerierStub implements ForRepoQuerying {
  getUser(email: string): Promise<RepoUser> {
    return Promise.resolve(userMock);
  }

  createUser(user: any, password: string): Promise<RepoUser> {
    return Promise.resolve(userMock);
  }
}
