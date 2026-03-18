import Header from "../../components/header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {toast} from "react-toastify"
import Unlock from "/img/unlock.png"
import Lock from "/img/lock.png"
import { api } from "../../axios";
import "../../scss/global.scss"
import "./login.scss";

export default function Login(){
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    async function Logar(){
        setIsLoading(true)
        try{
            const response = await api.post("Login",{
                username: name,
                password
            });

            if(response.data.sucess === true){
                toast.success("Login feito com sucesso!", {
                    position: "top-center",
                    autoClose: 3000,
                    closeOnClick: true
                })
            };
            localStorage.setItem("token", response.data.token)    
            
            setTimeout(() => 
                navigate('/'), 2500
            );

        } catch(error){
            console.error("Detalhe: ", error);
            toast.error("Falha no login!")
        } finally{
            setIsLoading(false)
        }
    };

    function ShowPassword(){
        setShowPass(!showPass);
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
                        required
                    />
                    
                    <input 
                        type={`${showPass ? "text": "password"}`}
                        placeholder="******"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        id="pass"
                    />

                    <div className="showPass" onClick={ShowPassword}>
                        <img src={showPass ? Unlock: Lock} alt="Icone de olho" />
                    </div>
                
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