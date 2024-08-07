import axios from "axios"

axios.defaults.baseURL="https://identitytoolkit.googleapis.com/v1"
const API_KEY = "AIzaSyA4wHUAYCEXbMEOIxIu2vK9TCvD6HJyEJg"
const Register_URL =`/accounts:signUp?key=${API_KEY}`

export const RegisterApi = (inputs) =>{
    let data = {name:inputs.name , email:inputs.email , password:inputs.password}
    return axios.post(Register_URL,data)

}