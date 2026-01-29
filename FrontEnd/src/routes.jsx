import {BrowserRouter, Routes, Route} from "react-router"
import Home from "./pages/home/home"
import Login from "./pages/login/login"
export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}