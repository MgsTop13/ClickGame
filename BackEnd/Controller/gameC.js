import {Router} from "express";
import * as Game from "../Repository/gameR.js"
import {verifyToken} from "../utils/jwt.js"
const endpoint = Router()

endpoint.get("/Load/:id", async(req,res) => {
    const id = req.params.id;
    try{
        const dados = await Game.Load(id)
        res.send({banco: dados})
    } catch(error){
        res.status(500).send({OiaOError: error})
    }
})

endpoint.post("/Save", async(req,res) =>{
    const dados = req.body;
    try{
        const banco = await Game.Save(dados.id, dados.totalClicks, dados.click)
        res.send({Salvo: banco})
    } catch(error){
        res.status(500).send({OiaOError: error.message})
    }
})

export default endpoint;