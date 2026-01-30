import Header from "../../components/header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { api } from "../../axios";
import "../../scss/global.scss"
import "./login.scss";
export default function Login(){
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    async function Logar(){
        setIsLoading(true);
        try{
            const response = await api.post("Login",{
                username: name,
                email,
                password
            })
            console.log(response.data.token)
            if(response.data.sucess === true){
                alert("Login feito com sucesso!")
                localStorage.setItem("token", response.data.token)
                //navigate('/');
            }
        } catch(error){
            console.error(error)
        } finally{
            setIsLoading(false)
        }
        
    }
    
    return(
        <main className="login">
            <Header />

            <section className="form">
                <div className="inputs">

                <input 
                    type="text"
                    placeholder="Carlinhos"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                
                <input 
                    type="email"
                    placeholder="carlinhos909@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                    type="password"
                    placeholder="******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                </div>

                <button
                    onClick={Logar}
                    disabled={isLoading}
                    className="botao">
                        {isLoading ? "Logando...": "Logar"}
                </button>
            </section>
        </main>
    )
}