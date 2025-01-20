import { initTRPC } from "@trpc/server";
import { authDetailsProxy } from "../../control-plane/app/composition-root";
import { userManagerProxy } from "../../repository/app/composition-root";
import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/drivens";
import {
  AuthenticatorProxyAdapter,
  authTRPCAdapter,
} from "../adapters/drivers";
import { DashboardApi } from "./dashboard-api";

const compositionMock = () => {
  const repoQuerierStub = new RepoQuerierStub(userManagerProxy); // dependency injection
  const controlAuthenticatorStub = new ControlAuthenticatorStub(
    authDetailsProxy
  );

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

export const localTRPCCompose = () => {
  // * DRIVENS
  const repoQuerierStub = new RepoQuerierStub(userManagerProxy); // dependency injection
  const controlAuthenticatorStub = new ControlAuthenticatorStub(
    authDetailsProxy
  );

  // * APP
  const dashboardApiMock = new DashboardApi(
    controlAuthenticatorStub,
    repoQuerierStub
  );

  // * TRPC INSTANCE
  const t = initTRPC.create();

  // * TRPC DRIVER
  const authTRPCAdapterRouter = authTRPCAdapter(dashboardApiMock, t);

  const appRouter = t.router({
    auth: authTRPCAdapterRouter,
  });

  return { appRouter };
};

// const registerMock = {
//   name: "Judá",
//   email: "juda@gmail.com",
//   password: "juda123",
//   isAdmin: true,
//   isUser: true,
// };

// authenticatorProxyAdapter.register(registerMock);
// authenticatorProxyAdapter.login("juda@gmail.com", "123456");
