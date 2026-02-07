import { connection } from "../src/supabase.js"
import md5 from "MD5"

export async function Register(dados) {
    const passSecurity = md5(dados.password);
    const data = await connection
        .from("cadastro")
        .insert([{
            name: dados.username,
            email: dados.email,
            password: passSecurity,
            recuperacao: dados.pass,
        }])
    return data;
}

export async function login(username) {
    const data = await connection
        .from("cadastro")
        .select("*")
        .eq("name", username)
    return data;
}

export async function CreateUser(id) {
    const data = await connection
        .from("clickgame")
        .insert({
            id
        })
    return data;
}