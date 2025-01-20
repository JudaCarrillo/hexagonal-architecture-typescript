import { userManagerProxy } from "../../repository/app/composition-root";
import {
  MonitorStubAdapter,
  RepoQuerierStubAdapter,
} from "../adapters/drivens";
import { GenerateTokensAdapter } from "../adapters/drivens/generate-tokens-adapter";
import { AuthDetailsProxy } from "../adapters/drivers";
import { ControlPlane } from "./control-plane";

export const composition = () => {
  const jwtKey = "mySecretKey";

  const generateTokens = new GenerateTokensAdapter(jwtKey);
  const logger = new MonitorStubAdapter();
  const repoStub = new RepoQuerierStubAdapter(userManagerProxy);

  const controlPlane = new ControlPlane(generateTokens, logger, repoStub);

  const authDetailsProxy = new AuthDetailsProxy(controlPlane);

  return { authDetailsProxy };
};

export const { authDetailsProxy } = composition();