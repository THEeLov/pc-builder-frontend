import axios from "axios"
import { PartialConfig, PartialConfigCreate, PartialConfigEdit } from "../models/configuration"

const axiosInstance = axios.create({
    baseURL: "https://pc-builder-backend-rho.vercel.app/configurations/partial",
})

async function getConfig(userId: string): Promise<PartialConfig> {
    const resp = await axiosInstance.get(`${userId}`, { withCredentials: true })
    return resp.data
}

async function postConfig(userId: string, payload: PartialConfigCreate): Promise<PartialConfig> {
    const resp = await axiosInstance.post(`${userId}`, payload, { withCredentials: true })
    return resp.data
}

async function putConfig(userId: string, payload: PartialConfigEdit): Promise<PartialConfig> {
    const resp = await axiosInstance.put(`${userId}`, payload, { withCredentials: true })
    return resp.data
}

async function deleteConfig(userId: string) {
    const resp = await axiosInstance.delete(`${userId}`, { withCredentials: true })
    return resp.data
}

const ConfigurationApi = {
    get: axiosInstance.get,
    getConfig,
    post: axiosInstance.post,
    postConfig,
    put: axiosInstance.put,
    putConfig,
    delete: axiosInstance.delete,
    deleteConfig,
}

export default ConfigurationApi
