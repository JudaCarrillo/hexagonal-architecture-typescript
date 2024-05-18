import { Repository } from "./repository";
import { MonitorStubAdapter } from "../adapters/drivens";
import { UserManagerProxy } from "../adapters/drivers";

export const compositionMock = () => {
  const forMonitoringMock = new MonitorStubAdapter();
  const repositoryMock = new Repository(forMonitoringMock);
  const userManagerProxy = new UserManagerProxy(repositoryMock);

  return {
    userManagerProxy,
  };
};

export const { userManagerProxy } = compositionMock();

const registerMock = {
  name: "Juda",
  email: "juda@gmail.com",
  password: "123456",
};

userManagerProxy.getUser("john@gmail.com");
userManagerProxy.createUser(registerMock);
