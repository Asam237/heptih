import { AuthCreateType, AuthLoginType } from "../../types/index"
import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3010",
})

export const authLogin = async (data: AuthLoginType) => {
    return await api.post("/auth/login", data)
}

export const createUser = async (data: AuthCreateType) => {
    return await api.post("/auth/create", data)
}

export const getAll = async (token: any) => {
    api.defaults.headers.common = { 'Authorization': 'Bearer ' + token }
    return await api.get("/links/all").then((res) => res.data)
}

export const getAllLink = async () => {
    return await api.get("/links").then((res) => res.data)
}

export const createLink = async (data: any) => {
    return await api.post("/links/create", data)
}

export const destroyLink = async (id: any) => {
    return await api.delete(`/links/${id}`)
}

export const updateLink = async (id: any, data: any) => {
    return await api.put(`/links/${id}`, data)
}

export const getOneLink = async (id: any) => {
    return await api.get(`/links/${id}`).then((res) => res.data.link)
}

export const me = async (id: any) => {
    return await api.get(`/users/${id}`).then((res) => res.data.data.user)
}