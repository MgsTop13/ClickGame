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


//Personagens
    endpoint.post("/AddPerson", async(req,res) => {
        const {token} = req.body;
        const tokenDecode = verifyToken(token);
        
        try {
            const userInfo = {
                nome: tokenDecode.name,
                email: tokenDecode.email
            };

            if(userInfo.nome === "MgsTop13" && userInfo.email === "mgs350084@gmail.com"){
                const dadosPersonagem = req.body;
                const response = await Game.SavePerson(dadosPersonagem);
                res.send({banco: response})
            }

            else{
                return res.status(401).send("Erro na verificação!")
            }
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

//Admin
    endpoint.post("/VerifyToken", async(req,res) => {
        try {
            const {token} = req.body;
            const dados = verifyToken(token);
            
            if(dados.name === "MgsTop13"){
                const userInfo = {
                    admin: true,
                    name: dados.name,
                    email: dados.email,
                    idUser: dados.id,
                    date: dados.date,
                    sla: dados.iat
                }
                res.send(userInfo);
            } else{
                res.send(dados);
            }
        } catch (error) {
            res.status(500).send(error);
        }
    })

    

export default endpoint;