import { Checkbox } from "@radix-ui/react-checkbox"
import { Button } from "../../components/ui/button"
import { Bell, Home, MoreVertical, Settings, Users } from 'lucide-react'
import { Avatar } from "../../components/ui/avatar"
import Sidebar from "../../components/ui/sidebar"
import useApp from "./useApp"

export default function AcervoPage() {
    const { dataAcervo } = useApp()
    return (
        <div className="flex h-screen bg-[#f2f4f8]">
            <Sidebar />

            {/* Main content */}
            <div className="flex-1 overflow-auto">
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-[#21272a] mb-6">Acervo</h1>

                    {/* Tabs */}
                    <div className="flex border-b border-[#dde1e6] mb-6">
                        <button className="px-4 py-3 text-[#4d5358]">Overview</button>
                        <button className="px-4 py-3 text-[#4d5358] flex items-center gap-2">
                            Emprestados <span className="bg-[#dde1e6] text-[#4d5358] rounded-full px-1.5 text-xs">2</span>
                        </button>
                        <button className="px-4 py-3 text-[#0f62fe] border-b-2 border-[#0f62fe] flex items-center gap-2">
                            Disponíveis <span className="bg-[#dde1e6] text-[#4d5358] rounded-full px-1.5 text-xs">3</span>
                        </button>
                        <button className="px-4 py-3 text-[#4d5358] flex items-center gap-2">
                            Manutenção <span className="bg-[#dde1e6] text-[#4d5358] rounded-full px-1.5 text-xs">1</span>
                        </button>

                        <div className="ml-auto">
                            <Button className="bg-[#0f62fe] hover:bg-[#001d6c] text-white">Adicionar Livro</Button>
                        </div>
                    </div>

                    {/* Table */}
                    
                    <div className="bg-white rounded-md overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-[#f2f4f8] border-b border-[#dde1e6]">
                                <tr>
                                    <th className="w-12 px-4 py-3">
                                        <Checkbox />
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Autor</th>
                                    <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Título</th>
                                    <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Ano</th>
                                    <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Status</th>
                                    <th className="w-12"></th>
                                </tr>
                            </thead>
                            <tbody>

                                {/* Esse dataAcervo precisa vir do useApp, ele será o que vem da API */}

                                {dataAcervo.map((book, index) => (
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
                                                    <div className="font-medium text-[#21272a]">{book.author}</div>
                                                    <div className="text-xs text-[#697077]">{book.subtitle}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-[#21272a]">Lorem Ipsum</td>
                                        <td className="px-4 py-3 text-[#21272a]">{book.year}</td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs ${book.status === "Disponível"
                                                        ? "bg-[#f2f4f8] text-[#4d5358]"
                                                        : book.status === "Emprestado"
                                                            ? "bg-[#dde1e6] text-[#4d5358]"
                                                            : "bg-[#c1c7cd] text-[#4d5358]"
                                                    }`}
                                            >
                                                {book.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <button className="text-[#697077]">
                                                <MoreVertical size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="flex items-center justify-center py-4 border-t border-[#dde1e6]">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}