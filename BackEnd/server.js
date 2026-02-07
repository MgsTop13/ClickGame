import express from "express"
import cors from "cors"
import {Rotas} from "./routes.js"
import dotenv from "dotenv"

dotenv.config()

const api = express();
const port = process.env.PORT;

api.use(cors());
api.use(express.json());
Rotas(api)

api.listen(port, () => console.log(`Servidor rodando! ${port}`));