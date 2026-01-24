import {BrowserRouter, Routes, Route} from "react-router"
import Home from "./pages/home/home"

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}