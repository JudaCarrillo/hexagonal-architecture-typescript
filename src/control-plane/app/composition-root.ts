import { userManagerProxy } from "../../repository/app/composition-root";
import {
    MonitorStubAdapter,
    RepoQuerierStubAdapter,
} from "../adapters/drivens";
import { GenerateTokensAdapter } from "../adapters/drivens/generate-tokens-adapter";
import { AuthDetailsProxy } from "../adapters/drivers";
import { ControlPlane } from "./control-plane";

const composition = () => {
  const jwtKey = "mySecretKey";

  const generateTokens = new GenerateTokensAdapter(jwtKey);
  const logger = new MonitorStubAdapter();
  const repoStub = new RepoQuerierStubAdapter(userManagerProxy);

  const controlPlane = new ControlPlane(generateTokens, logger, repoStub);

  const authenticatorProxyAdapter = new AuthDetailsProxy(controlPlane);

  return { authenticatorProxyAdapter };
};

export const { authenticatorProxyAdapter } = composition();

const registerMock = {
    email: "juda@gmail.com",
    password: "juda123",
}

authenticatorProxyAdapter.getAuthDetails(
    registerMock.email, 
    registerMock.password
);

authenticatorProxyAdapter.getPermissions(
    registerMock.email
)

