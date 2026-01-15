import mysql from "mysql2/promise"

const connection = await mysql.createConnection({
    host: "localhost",
    user: "MgsTop13",
    password: "Potato10!",
    database: "ClickGame"
})

export {connection};