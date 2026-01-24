import axios from "axios"

const api = axios.create({
    baseURL:"http://localhost:21457/"
})

export {api};