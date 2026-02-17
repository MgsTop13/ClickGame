import { useEffect, useState } from "react";
import Header from "../../components/header";
import { api } from "../../axios";
import "../../scss/global.scss"
import "./home.scss";
export default function Home() {
    const [id, setId] = useState();
    const [name, setName] = useState('User');
    const [persons, setPersons] = useState([]);
    const [points, setPoints] = useState(0);
    const [maxPoints, setMaxPoints] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));

    async function SaveGame() {
        setIsLoading(true);
        try {
            const response = await api.post("Save", {
                id,
                totalClicks: maxPoints,
                click: points
            });
            if (response.data.Salvo.changedRows === 1) {
                return alert("Jogo salvo com sucesso!")
            } else {
                return alert("Nada para ser salvo")
            }

        } catch (error) {
            console.error(error);
            return alert(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    async function LoadGame() {
        setIsLoading(true)

        try {
            const dadosUser2 = await api.post('VerifyToken', { token });

            setName(await dadosUser2.data.name);
            setId(await dadosUser2.data.id);

            const response = await api.get(`Load/${id}`);
            const dadosUser = await response.data.data[0];

            setMaxPoints(dadosUser.totalclicks)
            setPoints(dadosUser.clicksatual)

        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false)
        }
    }

    async function LoadPersons(){
        setIsLoading(true);
        try {
            const response = await api.get("ListenPerson");
            console.log(response.data)
            setPersons(response.data);
        } catch (error) {
            console.error(error)
        }
    }

    function addPoints() {
        setMaxPoints(maxPoints + 1)
        setPoints(points + 1)
    }



    return (
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

                <h2 className="subtitle" onClick={LoadPersons}>Personagens</h2>
                
                <div className="persons">
                    {persons.map((personagem, index) => {
                        return(
                            <div className="person" key={index}>
                                <h1>IMG</h1>
                                <h2>{personagem.img}</h2>
                            </div>
                        )
                    })}
                </div>

                <div className="buttons">
                    <button
                        onClick={LoadGame}
                        disabled={isLoading}
                        className="botao">
                        {isLoading ? "Carregando..." : "Carregar Save"}
                    </button>

                    <button
                        onClick={SaveGame}
                        disabled={isLoading}
                        className="botao">
                        {isLoading ? "Salvando..." : "Salvar Jogo"}
                    </button>
                </div>
            </div>
        </main>
    )
}