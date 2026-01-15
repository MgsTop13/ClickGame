import express from "express"
import cors from "cors"
import {Rotas} from "./routes.js"

const api = express();
const port = 5010;

api.use(cors());
api.use(express.json());
Rotas(api)

api.listen(port, () => console.log(`Port: ${port}`));