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

    console.log('GET USER', {...user});

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isUser: user.isUser,
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
      isAdmin: user?.isAdmin || false,
      isUser: user?.isUser || true,
      id: String(this.userList.length + 1),
    };

    this.userList.push(newUser);

    console.log("REGISTER", { ...newUser });

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      isUser: newUser.isUser,
    };
  }
}
