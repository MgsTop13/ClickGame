import { use, useEffect, useState } from "react";
import Header2 from "../../components/headerP";
import { api } from "../../axios";
import "../../scss/global.scss"

export default function Admin(){
    const [admin, setAdmin] = useState([]);
    const [load, setLoad] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [personDados, setPersonDados] = useState({
        img: '',
        name: '',
        description: '',
        points: '',
        rarity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonDados(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const Dados = async () => {
        try {
            const dadosUser2 = await api.post('VerifyToken', {token});
            setAdmin(dadosUser2);
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }

    async function AddPersonagem(){
        setLoad(true);

        try {
            const response = await api.post("AddPerson", personDados);
            console.log(response);    
        } catch (error) {
            console.error(error)
        } finally{
            setLoad(false)
        }
    }

    useEffect(() => {
        Dados();
    }, []);
    
    return(
        <main className="admin">
            <Header2 />

            <section className="card">
                <div className="inputs">
                    <div className="pt1">
                        <h1>Nome do Personagem</h1>
                        <input 
                            name="name"
                            type="text"
                            value={personDados.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="pt1">
                        <h1>Imagem do personagem</h1>
                        <input 
                            name="img"
                            type="text"
                            value={personDados.img}
                            onChange={handleChange} 
                        />
                    </div>

                    <div className="pt1">
                        <h1>Descrição do personagem</h1>
                        <input 
                            name="description"
                            type="text"
                            value={personDados.description}
                            onChange={handleChange} 
                        />
                    </div>

                    <div className="pt1">
                        <h1>Quantidade de pontos do personagem</h1>
                        <input 
                            name="points"
                            type="text"
                            value={personDados.points}
                            onChange={handleChange} 
                        />
                    </div>

                    <div className="pt1">
                        <h1>Raridade do personagem</h1>
                        <input 
                            name="rarity"
                            type="text"
                            value={personDados.rarity}
                            onChange={handleChange} 
                        />
                    </div>
                </div>

                <button onClick={AddPersonagem}>Enviar Personagem</button>
            </section>
        </main>
    )
}