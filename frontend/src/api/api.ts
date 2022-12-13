import axios from "axios"

const backend:string = 'http://localhost:5000'

export const api = axios.create({
    baseURL: backend
})