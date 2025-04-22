import axios from "axios";
import { API_URL } from "../utils/api";

export const emprestarLivro = async (id: number) => {
    const response = await axios.post(`${API_URL}emprestimos/devolver/${id}`);
    return response.data;
};

export const devolverLivro = async (id: string) => {
    const response = await axios.post(`${API_URL}emprestimos/devolver/${id}`);
    return response.data;
};

export const adiarEmprestimoLivro = async (id: string) => {
    const response = await axios.post(`${API_URL}emprestimos/adiar/${id}`);
    return response.data;
};