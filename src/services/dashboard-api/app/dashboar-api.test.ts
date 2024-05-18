import { describe, expect, it } from "vitest";
import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/drivens";
import { DashboardApi } from "./dashboard-api";
import { AuthenticatedUser, User } from "./schemas";

describe("DashboardAPI", () => {
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQuerierStub = new RepoQuerierStub();

  const dashboardApiMock = new DashboardApi(
    controlAuthenticatorStub,
    repoQuerierStub
  );

  // Exec test in parallel
  // it.concurrent();

  it("should login", async () => {
    // GIVEN
    const mockedParams = {
      email: "jhon@gmail.com",
      password: "123456",
    };

    const expectedResult: AuthenticatedUser = {
      id: "123",
      name: "John Doe",
      email: "jhon@gmail.com",
      token: "token",
      refreshToken: "refreshToken",
      permissions: {
        admin: true,
        user: true,
      },
    };

    // WHEN
    const result = await dashboardApiMock.login(
      mockedParams.email,
      mockedParams.password
    );

    // THEN
    expect(result).toEqual(expectedResult);
  });

  it("should register", async () => {
    // GIVEN
    const mockedUser: User = {
      email: "jhon@gmail.com",
      name: "John Doe",
    };

    const expectedResult: AuthenticatedUser = {
      id: "123",
      name: "John Doe",
      email: "jhon@gmail.com",
      token: "token",
      refreshToken: "refreshToken",
      permissions: {
        admin: true,
        user: true,
      },
    };

    // WHEN
    const result = await dashboardApiMock.register(mockedUser, "123456");

    // THEN
    expect(result).toEqual(expectedResult);
  });
});
