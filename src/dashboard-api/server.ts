import express, { Request, Response } from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import { localTRPCCompose } from "./app/composition-root";
import { renderTrpcPanel } from "trpc-panel";

// * Create for each request
const createContext = () => ({});
const app = express();

app.use(cors());
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: localTRPCCompose().appRouter,
    createContext,
  })
);

app.use("/panel", (_, res) => {
  return res.send(
    renderTrpcPanel(localTRPCCompose().appRouter, {
      url: "http://localhost:3000/trpc",
    })
  );
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
