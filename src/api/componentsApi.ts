import axios from "axios"
import { Component, ComponentTypes } from "../models/components"

const axiosInstance = axios.create({
    baseURL: "https://pc-builder-backend-rho.vercel.app/components",
})

async function getSingle(name: ComponentTypes, componentId: string): Promise<Component> {
    const resp = await axiosInstance.get(`${name}/${componentId}`, { withCredentials: true })
    return resp.data
}

async function getAll(component: ComponentTypes, queryParams: string): Promise<Component[]> {
    const resp = await axiosInstance.get(`${component}?${queryParams}`, { withCredentials: true })
    return resp.data
}

async function postSingle(component: ComponentTypes, payload: unknown) {
    const resp = await axiosInstance.post(`${component}`, payload, { withCredentials: true })
    return resp.data
}

async function putSingle(id: string, payload: unknown) {
    const resp = await axiosInstance.put(`${id}`, payload, { withCredentials: true })
    return resp.data
}

async function deleteSingle(id: string): Promise<Component> {
    const resp = await axiosInstance.delete(`${id}`, { withCredentials: true })
    return resp.data
}

const ComponentsApi = {
    get: axiosInstance.get,
    getSingle,
    getAll,
    post: axiosInstance.post,
    postSingle,
    put: axiosInstance.put,
    putSingle,
    delete: axiosInstance.delete,
    deleteSingle,
}

export default ComponentsApi
