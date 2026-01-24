import { useState } from "react";
import Header from "../../components/header";
import { api } from "../../axios";
import "../../scss/global.scss"
import "./home.scss";

export default function Home(){
    const [maxPoints, setMaxPoints] = useState();
    const [points, setPoints] = useState();
    const [name, setName] = useState('');

    async function LoadGame(){
        try{
            const response = await api.get("Load/1");
            const dadosUser = response.data.banco;
            console.log(response.data)
        } catch(error){
            alert(error.message)
        }
    }
    return(
        <main className="home">
            <Header />
            <div className="game">
                <h1 className="title">Bem-Vindo ao jogo!</h1>
                <button onClick={LoadGame}>Carregar</button>
            </div>
        </main>
    )
}