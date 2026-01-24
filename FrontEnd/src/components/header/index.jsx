import {Link} from "react-router"
import "./index.scss"

export default function Header(){
    return(
        <header>
            <Link to={''} className="link">
                <h3 className="link">Register</h3>
            </Link>

            <Link to={''} className="link">
                <h3 className="link">Login</h3>
            </Link>

            <Link to={''} className="link">
                <h3 className="link">Settings</h3>
            </Link>
            
        </header>
    )
}