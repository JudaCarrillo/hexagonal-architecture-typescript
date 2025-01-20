import express from "express"
import cors from "cors"
import * as trpcExpress from "@trpc/server/adapters/express"
import { localTRPCCompose } from "./app/composition-root"


// * Create for each request
const createContext = () => ({})
const app = express()

app.use(cors());
app.use(
    "http://localhost:3000",
    trpcExpress.createExpressMiddleware({
        router: localTRPCCompose().appRouter,
        createContext,
    })
)

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})