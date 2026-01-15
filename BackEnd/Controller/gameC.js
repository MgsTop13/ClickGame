import {Router} from "express";
import * as Game from "../repository/gameR.js"
const endpoint = Router()

endpoint.get("/Load", async(req,res) => {
    const {id} = req.body;
    try{
        const dados = Game.Load(id)
        res.send({banco: dados})
    } catch(error){
        res.status(500).send({OiaOError: error})
    }
})

export default endpoint