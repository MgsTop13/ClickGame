import md5 from "MD5"
import {Router} from "express";
import * as User from "../Repository/userR.js"
import {generateToken} from "../utils/jwt.js"

const endpoint = Router()

endpoint.post("/Register", async(req,res) => {
    const dados = req.body;
    
    try{
        const bancoR = await User.Register(dados);
        const Game = await User.CreateUser(bancoR.insertId)
        res.send({Banco: Game});
    } catch(error){
        res.status(500).send({OiaOError: error})
    }
})

endpoint.post("/Login", async(req,res) => {
    const dados = req.body;
    try{
        const user = await User.login(dados);
        const user1 = user[0]
        
        if(!user){
            return res.send("Usuário nāo encontrado")
        }
        const decoded = md5(dados.password);
        if(dados.username === user1.username && dados.email === user1.email && decoded === user1.password){
            const token = generateToken(user1)
            const resposta = {
                token: token,
                sucess: true
            }
            res.send(resposta)
        }
    } catch(error){
        res.status(500).send({OiaOError: error.message})
    }
})

export default endpoint