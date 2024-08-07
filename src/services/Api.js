import axios from "axios"
import { getUserData } from "./Storage"

axios.defaults.baseURL="https://identitytoolkit.googleapis.com/v1"
const API_KEY = "AIzaSyA4wHUAYCEXbMEOIxIu2vK9TCvD6HJyEJg"
const Register_URL =`/accounts:signUp?key=${API_KEY}`
const Login_URL =`/accounts:signInWithPassword?key=${API_KEY}`
const USERDATA_URL=`/accounts:lookup?key=${API_KEY}`

export const RegisterApi = (inputs) =>{
    let data = {name:inputs.name , email:inputs.email , password:inputs.password}
    return axios.post(Register_URL,data)
}

export const LoginApi = (inputs) =>{
    let data = {email:inputs.email , password:inputs.password}
    return axios.post(Login_URL,data)
}

export const UserdataAPI = ()=>{
    let data = {idToken:getUserData()}
    return axios.post(USERDATA_URL,data)
}
