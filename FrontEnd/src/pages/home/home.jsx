import { useEffect, useState } from "react";
import Header from "../../components/header";
import { api } from "../../axios";
import "../../scss/global.scss"
import "./home.scss";
export default function Home(){
    const [maxPoints, setMaxPoints] = useState();
    const [points, setPoints] = useState();
    const [name, setName] = useState('User');

    async function LoadGame(){
        try{
            const response = await api.get("Load/1");
            const dadosUser = response.data.banco[0];
            setName(dadosUser.username)
            setMaxPoints(dadosUser.totalClicks)
            setPoints(dadosUser.clicks)
        } catch(error){
            console.error(error)
        }
    }

    function addPoints(){
        setMaxPoints(maxPoints +1)
        setPoints(points +1)
    }


    
    return(
        <main className="home">
            <Header />
            <div className="game">
                <h1 className="title">Bem-Vindo ao jogo {name}!</h1>

                <table className="tabela" onClick={addPoints}>
                    <tr>
                        <th>Pontos atuais</th>
                        <th>Total de pontos</th>
                    </tr>

                    <tr>
                        <td>{points}</td>
                        <td>{maxPoints}</td>
                    </tr>
                </table>

                <button onClick={LoadGame}>Carregar save</button>
            </div>
        </main>
    )
}