import axios from "axios";
import { API_URL } from "../utils/api";

export const cadastrarUsuario = async (data: string) => {
    const response = await axios.post(`${API_URL}users/adicionar`, data);
    return response.data;
};

export const listarUsuarios = async () => {
    const response = await axios.get(`${API_URL}users/listar`);
    return response.data;
};
