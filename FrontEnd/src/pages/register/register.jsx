import "./register.scss"
import "../../scss/global.scss"
import { api } from "../../axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header2 from "../../components/headerP"

export default function Register(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    async function Cadastrar() {
        setIsLoading(true);

        try {
            const sucesso = await api.post("/Register");
        } catch (error) {
            
        } finally{
            setIsLoading(false);
        }
    }

    return(
        <main className="register">
            <Header2 />

            <section className="card">

            </section>
        </main>
    )
}
