import { useEffect, useState } from "react";
import Header from "../../components/header";
import { api } from "../../axios";
import "../../scss/global.scss"
import "./home.scss";
export default function Home(){
    const [isLoading, setIsLoading] = useState(false);
    const [maxPoints, setMaxPoints] = useState(0);
    const [name, setName] = useState('User');
    const [points, setPoints] = useState(0);
    const [id, setId] = useState();
    const [token, setToken] = useState(localStorage.getItem('token'));

    async function SaveGame(){
        setIsLoading(true);
        try{
            const response = await api.post("/Save",{
                id,
                totalClicks: maxPoints,
                click: points
            });
            if(response.data.Salvo.changedRows === 1){
                return alert("Jogo salvo com sucesso!")
            } else{
                return alert("Nada para ser salvo")
            }
            
        } catch(error){
            console.error(error);
            return alert(error.message)
        } finally{
            setIsLoading(false)
        }
    }

    async function LoadGame(){
        setIsLoading(true);
        /*let resp = confirm("Você salvou o jogo? \nCancelar para não, Ok para Sim")
        if(resp === false){
            SaveGame();
            alert("Jogo salvo!")
        }
        */
        
        try{
            const dadosUser2 = await api.post('VerifyToken', {token});
            
            setName(await dadosUser2.data.name)
            setId(await dadosUser2.data.id)
            
            const response = await api.get(`Load/${id}`);
            const dadosUser = await response.data.banco[0];
            
            setMaxPoints(dadosUser.totalClicks)
            setPoints(dadosUser.clicks)
        } catch(error){
            console.error(error)
            if(error.message === "Network Error"){
                alert("Error interno no servidor")
            }
        } finally{
            setIsLoading(false)
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

                <h2 className="subtitle">Personagens</h2>

                <div className="buttons">
                <button 
                    onClick={LoadGame}
                    disabled={isLoading}
                    className="botao">
                        {isLoading ? "Carregando...": "Carregar Save"}
                </button>

                <button
                    onClick={SaveGame}
                    disabled={isLoading}
                    className="botao">
                        {isLoading ? "Salvando...": "Salvar Jogo"}
                </button>
                </div>
            </div>
        </main>
    )
}