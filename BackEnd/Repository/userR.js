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

export async function login(dados){
    const command = `
        SELECT username, email, password FROM username
    `
}

export async function CreateUser(id){
    const command = `
        INSERT INTO ClickGame (id_user)
        VALUES (?);
    `
    const [user] = await connection.query(command, id);
    return user
    
}