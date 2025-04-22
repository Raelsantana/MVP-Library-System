import axios from "axios";
import { API_URL } from "../utils/api";

export const cadastrarLivro = async (livro: string) => {
  const response = await axios.post(API_URL, livro);
  return response.data;
};

export const removerLivro = async (id?: number) => {
  const response = await axios.delete(`${API_URL}books/deletar/${id}`);
  return response.data;
}

export const listarLivros = async () => {
  const response = await axios.get(`${API_URL}books/listar`);
  return response.data;
};