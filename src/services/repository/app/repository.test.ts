import { describe, expect, it } from "vitest";
import { MonitorStubAdapter } from "../adapters/drivens";
import { Repository } from "./repository";

describe("Repository", () => {
  const forMonitoringMock = new MonitorStubAdapter();
  const repositoryMock = new Repository(forMonitoringMock);

  /* beforeEach(() => {
    repositoryMock = new Repository(forMonitoringMock);
  }); */

  it.concurrent("should control that the user does not exists", async () => {
    // GIVEN
    const mockedEmail = "jhon@gmail.com";

    const expectedResult = {
      id: "1",
      name: "John Doe",
      email: "jhon@gmail.com",
    };

    // WHEN
    let result;
    try {
      result = await repositoryMock.getUser(mockedEmail);
    } catch (error) {}

    // THEN
    expect(result).not.toEqual(expectedResult);
  });

  it.concurrent("should create a new user", async () => {
    // GIVEN
    const mockedUser = {
      email: "jhon@gmail.com",
      name: "John Doe",
      password: "password",
    };

    const expectedResult = {
      id: "1",
      ...mockedUser,
    };

    // WHEN
    let result;
    try {
      result = await repositoryMock.createUser(mockedUser);
    } catch (error) {}

    // THEN
    expect(result).toEqual(expectedResult);
  });

  it.concurrent("should control that the user exists", async () => {
    // GIVEN
    const mockedUser = {
      email: "jhon@gmail.com",
      name: "John Doe",
      password: "password",
    };

    const expectedResult = {
      id: "1",
      ...mockedUser,
    };

    // WHEN
    let result;
    try {
      result = await repositoryMock.createUser(mockedUser);
    } catch (error) {}

    // THEN
    expect(result).not.toEqual(expectedResult);
  });

  it.concurrent("should get a user", async () => {
    // GIVEN
    const mockedEmail = "jhon@gmail.com";

    const expectedResult = {
      id: "1",
      name: "John Doe",
      email: "jhon@gmail.com",
    };

    // WHEN
    let result;
    try {
      result = await repositoryMock.getUser(mockedEmail);
    } catch (error) {}

    //  THEN
    expect(result).toEqual(expectedResult);
  });
});
