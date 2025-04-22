import axios from "axios";
import { API_URL } from "../utils/api";

export const listarEmprestimos = async () => {
    const response = await axios.get(`${API_URL}emprestimos/listar`);
    return response.data;
}

export const emprestarLivro = async (id?: number) => {
    const response = await axios.post(`${API_URL}emprestimos/criar/${id}`);
    return response.data;
};

export const devolverLivro = async (id?: number) => {
    const response = await axios.post(`${API_URL}emprestimos/devolver/${id}`);
    return response.data;
};

export const adiarEmprestimoLivro = async (id: number) => {
    const response = await axios.post(`${API_URL}emprestimos/adiar/${id}`);
    return response.data;
};