import { DashboardApi } from "./dashboard-api";
import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/drivens";
import { AuthenticatorProxyAdapter } from "../adapters/drivers";

const compositionMock = () => {
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQuerierStub = new RepoQuerierStub();

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
  name: "John Doe",
  email: "jhon@gmail.com",
  password: "password",
};

authenticatorProxyAdapter.login("jhon@gmail.com", "123456");
authenticatorProxyAdapter.register(registerMock);
