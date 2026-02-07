import md5 from "MD5"
import {Router} from "express";
import * as User from "../Repository/userR.js"
import {generateToken} from "../src/utils/jwt.js"

const endpoint = Router()

endpoint.post("/Register", async(req,res) => {
    try{
        const dados = req.body;
        
        const bancoR = await User.Register(dados); //E para inserir o usuario calma kk
        const Game = await User.CreateUser(bancoR.insertId)
        
        //  Envia a constante "Game" para o Id ser mais seguro e também para caso 
        //der erro, ele cancela logo no bancoR
        res.send({Banco: Game});
    } catch(error){
        res.status(500).send({OiaOError: error})
    }
})

endpoint.post("/Login", async(req,res) => {
    const dados = req.body;
    try{
        const user = await User.login(dados.username);
        const user1 = user.data[0]
        if(!user){
            return res.send("Usuário nāo encontrado")
        }
        const decoded = md5(dados.password);
        if(dados.username === user1.name && decoded === user1.password){
            const token = generateToken(user1)
            const resposta = {
                token: token,
                sucess: true
            }
            res.send(resposta)
        } else{
            res.status(403).send("Acesso não autorizado!")
        }
    } catch(error){
        res.status(500).send({OiaOError: error.message})
    }
})

export default endpoint;