import { memo } from "react";
import { IAcervo } from "../useApp";
import { MoreVertical } from 'lucide-react'
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Avatar } from "../../../components/ui/avatar";

interface ITableRows{
    dataAcervo: IAcervo[]
    onEdit: (bookId?: number) => void
    onDelete: (bookId?: number) => void
}

export const TableRows = memo(({ dataAcervo, onDelete, onEdit }: ITableRows) => (
    <>
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
                        </div>
                    </div>
                </td>

                <td className="px-4 py-3 text-[#21272a]">{book.title}</td>
                <td className="px-4 py-3 text-[#21272a]">{book.publication_year}</td>
                <td className="px-4 py-3 text-[#21272a]">{book.gender}</td>
                <td className="px-4 py-3 text-[#21272a]">{book.qtt_alugados}</td>
                <td className="px-4 py-3 text-[#21272a]">{book.qtt_estoque}</td>
                <td className="px-4 py-3">
                    <span
                        className={`px-2 py-1 rounded-full text-xs ${book.rented
                            ? "bg-[#f2f4f8] text-[#4d5358]"
                            : "bg-[#dde1e6] text-[#4d5358]"
                            }`}
                    >
                        {book.rented ? "Não Disponível" : "Disponível"}
                    </span>
                </td>
                <td className="px-4 py-3">
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button className="text-[#697077]">
                                <MoreVertical size={18} />
                            </button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.Content
                                className="bg-white rounded-md shadow-md p-2 border border-[#dde1e6] text-sm"
                                sideOffset={5}
                                align="end"
                            >
                                <DropdownMenu.Item
                                    className="px-4 py-2 hover:bg-[#f2f4f8] cursor-pointer rounded-md focus:outline-none"
                                    onClick={() => onEdit(book.id)}
                                >
                                    Editar
                                </DropdownMenu.Item>
                                <DropdownMenu.Item
                                    className="px-4 py-2 hover:bg-[#f2f4f8] cursor-pointer rounded-md focus:outline-none"
                                    onClick={() => onDelete(book.id)}
                                >
                                    Excluir
                                </DropdownMenu.Item>
                                <DropdownMenu.Arrow className="fill-[#dde1e6]" />
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                </td>
            </tr>
        ))}
    </>

))