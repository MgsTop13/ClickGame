import {BrowserRouter, Routes, Route} from "react-router"
import Home from "./pages/home/home"
import Login from "./pages/login/login"
import Admin from "./pages/admin/admin"
import Register from "./pages/register/register"

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Admin" element={<Admin />} />
                <Route path="/Registrar" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}