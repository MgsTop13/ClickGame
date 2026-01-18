import UserC from "./Controller/userC.js"
import GameC from "./Controller/gameC.js"

export function Rotas(api){
    api.use(UserC)
    api.use(GameC)
}