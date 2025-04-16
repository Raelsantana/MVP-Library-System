import axios from "axios";

const API_URL = "http://127.0.0.1:8000/"; // ajuste se sua rota for diferente



export const cadastrarLivro = async (livro:string)=> {
  const response = await axios.post(API_URL, livro);
  return response.data;
};

export const listarLivros = async () => {
  const response = await axios.get(`${API_URL}books`);
  return response.data;
};


export const cadastrarUsuario = async (usuario: string) => {
const response = await axios.post(`${API_URL}users`);
return response.data;
};

export const listarUsuarios = async ()=> {
const response = await axios.get(API_URL);
return response.data;
};
