import {Link} from "react-router"
import "./index.scss"

export default function Header2(){
    return(
        <header>
            <Link to={'/'} className="link">
                <h3 className="link">Voltar</h3>
            </Link>
        </header>
    )
}