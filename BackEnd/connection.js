import mysql from "mysql2/promise"
import dotenv from "dotenv"
import fs from "fs"

dotenv.config();

const connection = await mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: "AVNS_WLceBE9PdcdXVWUfgth",
    database: "defaultdb",
    ssl: {
        ca: fs.readFileSync("ca.pem")
    }
})


/*
CELL:
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "MgsTop13",
        password: "Potato10!",
        database: "ClickGame"
    })

*/
export {connection};