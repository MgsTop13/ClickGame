import {Router} from "express";
import * as User from "../Repository/userR.js"
const endpoint = Router()

endpoint.post("/Register", async(req,res) => {
    const dados = req.body;
    
    try{
        const bancoR = await User.Register(dados);
        res.send({Banco: bancoR});
    } catch(error){
        res.status(500).send({OiaOError: error})
    }
})

export default endpoint