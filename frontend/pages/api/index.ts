import { AuthCreateType, AuthLoginType } from "../../types/index";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3010",
});

export const authLogin = async (data: AuthLoginType) => {
  return await api.post("/auth/login", data);
};

export const createUser = async (data: AuthCreateType) => {
  return await api.post("/auth/create", data);
};

export const getAllWantedPoster = async (token: any) => {
  api.defaults.headers.common = { Authorization: "Bearer " + token };
  return await api.get("/wanted-poster").then((res) => res.data);
};

export const findAllWantedPoster = async (token: any) => {
  api.defaults.headers.common = { Authorization: "Bearer " + token };
  return await api.get("/wanted-poster/all").then((res) => res.data);
};

export const createWantedPoster = async (data: any) => {
  return await api.post("/wanted-poster", data);
};

export const destroyWantedPoster = async (id: any) => {
  return await api.delete(`/wanted-poster/${id}`);
};

export const updateWantedPoster = async (id: any, data?: any) => {
  return await api.put(`/wanted-poster/${id}`, data);
};

export const getOneWantedPoster = async (id: any) => {
  return await api.get(`/wanted-poster/${id}`).then((res) => res.data);
};
