import axios from "axios"
import { RegisterUser, User, LoginUser } from "../models/auth"

const axiosInstance = axios.create({
    baseURL: "https://pc-builder-backend-rho.vercel.app/users/",
})

async function registerUser(data: RegisterUser): Promise<User> {
    const resp = await axiosInstance.post("register", data, { withCredentials: true })
    return resp.data
}

async function loginUser(data: LoginUser): Promise<User> {
    const resp = await axiosInstance.post("login", data, { withCredentials: true })
    return resp.data
}

const AuthApi = {
    post: axiosInstance.post,
    registerUser,
    loginUser,
}

export default AuthApi
