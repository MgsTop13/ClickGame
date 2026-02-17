import {Router} from "express";
import * as Game from "../Repository/gameR.js"
import {verifyToken} from "../src/utils/jwt.js"
const endpoint = Router()

endpoint.get("/Load/:id", async(req,res) => {
    const id = req.params.id;
    try{
        const dados = await Game.Load(id)
        res.send(dados)
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

endpoint.post("/VerifyToken", async(req,res) => {
    const token = req.body.token;
    const dados = verifyToken(token);
    res.send(dados)
})

//Personagens

endpoint.post("/AddPerson", async(req,res) => {
    const dadosPersonagem = req.body;
    try {
        const response = await Game.SavePerson(dadosPersonagem);
        res.send({banco: response})
    } catch (error) {
        res.status(500).send({Err: error.message})
    }
})

endpoint.get("/ListenPerson", async(req,res) => {
    try {
        const personagens = await Game.Persons();
        res.send(personagens)
    } catch (error) {
        res.status(500).send({Err: error.message})
    }
})

export default endpoint;