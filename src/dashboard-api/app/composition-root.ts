import { userManagerProxy } from "../../repository/app/composition-root";
import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/drivens";
import { AuthenticatorProxyAdapter } from "../adapters/drivers";
import { DashboardApi } from "./dashboard-api";

const compositionMock = () => {

  // * DASHBOARD API 
  const repoQuerierStub = new RepoQuerierStub(userManagerProxy); // dependency injection
  const controlAuthenticatorStub = new ControlAuthenticatorStub();

  const dashboardApiMock = new DashboardApi(
    controlAuthenticatorStub,
    repoQuerierStub
  );

  const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(
    dashboardApiMock
  );

  return { authenticatorProxyAdapter };
};

export const { authenticatorProxyAdapter } = compositionMock();

const registerMock = {
  name: "Judá",
  email: "juda@gmail.com",
  password: "juda123",
  isAdmin: true,
  isUser: true,
};

authenticatorProxyAdapter.register(registerMock);
// authenticatorProxyAdapter.login("jhon@gmail.com", "123456");
