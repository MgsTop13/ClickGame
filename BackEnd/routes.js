import UserC from "./Controller/userC.js"


export function Rotas(api){
    api.use(UserC)
}