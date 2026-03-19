import {Link} from "react-router"
import "./index.scss"
import { api } from "../../axios"
import { useState } from "react"

export default function Header(){
    const [admin, setAdmin] = useState(false);


    const AdminVerf = async() => {
        try {
            const userInfo = await api.post("")
        } catch (error) {
            
        } finally{

        }
    } 

    return(
        <header>
            <Link to={'/Registrar'} className="link">
                <h3 className="link">Register</h3>
            </Link>

            <Link to={'/Login'} className="link">
                <h3 className="link">Login</h3>
            </Link>

            <Link to={''} className="link">
                <h3 className="link">Settings</h3>
            </Link>
            
        </header>
    )
}