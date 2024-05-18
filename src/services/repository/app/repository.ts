import { ForMonitoring } from "../ports/drivens";
import { ForManagingUser } from "../ports/drivers/for-managing-user";
import { ExternalUser, RepoUser, User } from "./schemas";

export class Repository implements ForManagingUser {
  private userList: RepoUser[] = [];

  constructor(private readonly forMonitoring: ForMonitoring) {}

  async getUser(email: string): Promise<ExternalUser> {
    const user = this.userList.find((user) => user.email === email);
    if (!user) {
      this.forMonitoring.log("GetUser", "User not found");
      throw new Error(`User not found`);
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  async createUser(user: User): Promise<ExternalUser> {
    const userExists = this.userList.find((user) => user.email === user.email);
    if (userExists) {
      this.forMonitoring.log("CreateUser", "User already exists");
      throw new Error(`User already exists`);
    }

    const newUser = {
      ...user,
      id: String(this.userList.length + 1),
    };

    this.userList.push(newUser);
    return newUser;
  }
}
