import { MonitorStubAdapter } from "../adapters/drivens";
import { UserManagerProxy } from "../adapters/drivers";
import { Repository } from "./repository";

export const compositionMock = () => {
  const monitorStub = new MonitorStubAdapter();
  const repositoryMock = new Repository(monitorStub);

  const userManagerProxy = new UserManagerProxy(repositoryMock);

  return {
    userManagerProxy,
  };
};

export const { userManagerProxy } = compositionMock();