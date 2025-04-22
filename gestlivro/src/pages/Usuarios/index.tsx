import { Button } from "../../components/ui/button"
import { MoreVertical, } from 'lucide-react'
import { Avatar } from "../../components/ui/avatar"
import useApp, { IUsers } from "./useApp"
import { Link } from 'react-router-dom';
import RegisterUserPage from "../RegistroUsuario"
import { Sidebar } from "../../components/ui/sidebar";
import { memo } from "react";

export default function UsuariosPage() {

    const TableRows = memo(({ dataAcervo }: { dataAcervo: IUsers[] }) => (
        <>

            {dataAcervo.map((user, index) => (
                <tr key={index} className="border-b border-[#dde1e6]">
                    <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8 bg-[#f2f4f8] flex items-center justify-center">
                                <div className="text-[#697077]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="8" r="5" />
                                        <path d="M20 21a8 8 0 0 0-16 0" />
                                    </svg>
                                </div>
                            </Avatar>
                            <div>
                                <div className="font-medium text-[#21272a]">{user.name}</div>
                            </div>
                        </div>
                    </td>

                    <td className="px-4 py-3 text-[#21272a]">{user.cpf}</td>
                    <td className="px-4 py-3 text-[#21272a]">{user.email}</td>
                    <td className="px-4 py-3">
                    <span
                        className={`px-2 py-1 rounded-full text-xs ${user.pode_alugar
                            ? "bg-[#f2f4f8] text-[#4d5358]"
                            : "bg-[#dde1e6] text-[#4d5358]"
                            }`}
                    >
                        {user.pode_alugar ? "Sim" : "Não"}
                    </span>
                </td>
                    <td className="px-4 py-3">
                        <button className="text-[#697077]">
                            <MoreVertical size={18} />
                        </button>
                    </td>
                </tr>
            ))}
        </>
    ))
    const {
        dataAcervo,
        isRegisterUserOpen,
        formData,
        handleFetchData,
        handleModalRegisterUser,
        handleChangeDataModal,
        handleCheckboxChange,
        handleSubmit,
        handleClearDataModal
    } = useApp()
    return (

        <>
            <div className="flex h-screen bg-[#f2f4f8]">
                <Sidebar />

                {/* Main content */}
                <div className="flex-1 overflow-auto">
                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-[#21272a] mb-6">Usuários</h1>

                        {/* Tabs */}
                        <div className="flex border-b border-[#dde1e6] mb-6">

                            <button className="px-4 py-3 text-[#0f62fe] border-b-2 border-[#0f62fe] flex items-center gap-2">
                                Ativos <span className="bg-[#dde1e6] text-[#4d5358] rounded-full px-1.5 text-xs">15</span>
                            </button>

                            <Link to="register-loan"
                                className="px-4 py-3 text-[#4d5358] flex items-center gap-2">
                                Inativos <span className="bg-[#dde1e6] text-[#4d5358] rounded-full px-1.5 text-xs"></span>
                            </Link>

                            <div className="ml-auto">
                                <Button className="bg-[#0f62fe] hover:bg-[#001d6c] text-white" onClick={handleModalRegisterUser}>Cadastrar Usuário</Button>
                            </div>
                        </div>

                        {/* Table */}

                        <div className="bg-white rounded-md overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-[#f2f4f8] border-b border-[#dde1e6]">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Nome</th>
                                        <th className="px-4 py-3 text-left font-medium text-[#4d5358]">CPF</th>
                                        <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Email</th>
                                        <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Pode Alugar</th>
                                        <th className="w-12"></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* Esse dataAcervo precisa vir do useApp, ele será o que vem da API */}
                                    <TableRows dataAcervo={dataAcervo} />
                                </tbody>
                            </table>

                            {/* Pagination */}
                            {/* <div className="flex items-center justify-center py-4 border-t border-[#dde1e6]">
                                <button className="flex items-center gap-1 px-3 py-1 text-[#0f62fe]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m15 18-6-6 6-6" />
                                    </svg>
                                    Voltar
                                </button>

                                <div className="flex mx-4">
                                    <button className="w-8 h-8 flex items-center justify-center text-[#0f62fe]">1</button>
                                    <button className="w-8 h-8 flex items-center justify-center bg-[#a6c8ff] text-[#001d6c] rounded">
                                        2
                                    </button>
                                    <button className="w-8 h-8 flex items-center justify-center text-[#0f62fe]">3</button>
                                    <button className="w-8 h-8 flex items-center justify-center text-[#0f62fe]">4</button>
                                    <button className="w-8 h-8 flex items-center justify-center text-[#0f62fe]">5</button>
                                    <span className="w-8 h-8 flex items-center justify-center text-[#697077]">...</span>
                                    <button className="w-8 h-8 flex items-center justify-center text-[#0f62fe]">11</button>
                                </div>

                                <button className="flex items-center gap-1 px-3 py-1 text-[#0f62fe]">
                                    Próxima
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
                {
                    isRegisterUserOpen && (
                        <RegisterUserPage
                            handleCloseModal={handleModalRegisterUser}
                            handleClearDataModal={handleClearDataModal}
                            formData={formData}
                            handleChange={handleChangeDataModal}
                            handleCheckboxChange={handleCheckboxChange}
                            handleSubmit={handleSubmit}
                        />
                    )
                }
            </div>

        </>

    )
}