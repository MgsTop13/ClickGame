import {connection} from "../connection.js"

export async function Register(dados){
    const command = `
        INSERT INTO User (username, email, password, pass)
        value(?,?,MD5(?), ?)
    `
    
    const [banco] = await connection.query(command, [
        dados.username,
        dados.email,
        dados.password,
        dados.pass
    ])
    return banco;
}