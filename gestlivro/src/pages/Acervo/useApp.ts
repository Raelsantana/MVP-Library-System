import { useEffect, useState } from "react"
import { listarLivros, removerLivro } from "../../services/bookservice"
import { formatYear, onlyLetters } from "../../utils/formatters"
import { emprestarLivro } from "../../services/emprestimoservice"
import { IEmprestimosData } from "./tables/emprestimos-table"

export interface IAcervo {
    author: string
    title: string
    publication_year: string
    rented: boolean
    gender: string
    qtt_estoque: string
    qtt_alugados: string
    id?: number
}

export default function useApp() {
    const [dataAcervo, setDataAcervo] = useState<IAcervo[]>([])
    const [dataEmprestimos, setDataEmprestimos] = useState<IEmprestimosData[]>([])
    const [isRegisterBookOpen, setIsRegisterBookOpen] = useState(false)
    const [currentTab, setCurrentTab] = useState<"Acervo" | "Emprestados">("Acervo")

    const bookData: IAcervo[] = [
        {
            id: 1,
            author: "J.K. Rowling",
            title: "Harry Potter and the Philosopher's Stone",
            publication_year: "1997",
            rented: false,
            gender: "Fantasy",
            qtt_estoque: "10",
            qtt_alugados: "2"
        },
        {
            id: 2,
            author: "George Orwell",
            title: "1984",
            publication_year: "1949",
            rented: true,
            gender: "Dystopian",
            qtt_estoque: "5",
            qtt_alugados: "3"
        },
        {
            id: 3,
            author: "J.R.R. Tolkien",
            title: "The Lord of the Rings",
            publication_year: "1954",
            rented: false,
            gender: "Fantasy",
            qtt_estoque: "8",
            qtt_alugados: "1"
        },
        {
            id: 4,
            author: "Harper Lee",
            title: "To Kill a Mockingbird",
            publication_year: "1960",
            rented: true,
            gender: "Fiction",
            qtt_estoque: "6",
            qtt_alugados: "4"
        },
        {
            id: 5,
            author: "F. Scott Fitzgerald",
            title: "The Great Gatsby",
            publication_year: "1925",
            rented: false,
            gender: "Classic",
            qtt_estoque: "7",
            qtt_alugados: "0"
        }
    ];

    const emprestimosData: IEmprestimosData[] = [
        {
            id: 1,
            data_emprestimo: "01-04-2025",
            data_devolucao: "15-04-2025",
            devolvido: true,
            titulo_livro: "1984",
            nome_usuario: "João Silva"
        },
        {
            id: 2,
            data_emprestimo: "10-04-2025",
            data_devolucao: null,
            devolvido: false,
            titulo_livro: "The Lord of the Rings",
            nome_usuario: "Maria Oliveira"
        },
        {
            id: 3,
            data_emprestimo: "25-03-2025",
            data_devolucao: "05-04-2025",
            devolvido: true,
            titulo_livro: "To Kill a Mockingbird",
            nome_usuario: "Carlos Souza"
        },
        {
            id: 4,
            data_emprestimo: "12-04-2025",
            data_devolucao: null,
            devolvido: false,
            titulo_livro: "The Great Gatsby",
            nome_usuario: "Ana Pereira"
        },
        {
            id: 5,
            data_emprestimo: "08-04-2025",
            data_devolucao: null,
            devolvido: false,
            titulo_livro: "Harry Potter and the Philosopher's Stone",
            nome_usuario: "Lucas Almeida"
        }
    ];

    const handleFetchData = async () => {
        try {
            if (currentTab === "Acervo") {
                //const response = await listarLivros();
                //setDataAcervo(response.data)

                //dadosMock
                const response = bookData
                setDataAcervo(response)
            } else {
                //const response = await listarEmprestimos();
                //setDataEmprestimos(response.data)

                //dadosMock
                const responseEmprestimos = emprestimosData
                setDataEmprestimos(responseEmprestimos)
            }
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    const handleChangeTab = (tab: "Acervo" | "Emprestados") => {
        setCurrentTab(tab)
    }

    //Funções do Modal de registro

    const handleModalRegisterBook = () => {
        setIsRegisterBookOpen(!isRegisterBookOpen)
    }

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        publication_year: "",
        rented: false,
        qtt_estoque: "",
        qtt_alugados: "",
        gender: "",

    })

    const handleClearDataModal = () => {
        setFormData({
            title: "",
            author: "",
            publication_year: "",
            rented: false,
            qtt_estoque: "",
            qtt_alugados: "",
            gender: ""
        })
    }

    const handleChangeDataModal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        if (name === 'author' || name === 'gender') {
            const formattedValue = onlyLetters(value)
            setFormData((prev) => ({ ...prev, [name]: formattedValue }))
            return
        }

        if (name === 'year') {
            const formattedValue = formatYear(value)
            setFormData((prev) => ({ ...prev, [name]: formattedValue }))
            return
        }

        if (name === 'qtt_estoque' || name === 'qtt_alugados') {
            const regex = /^[0-9]{0,2}$/
            if (!regex.test(value)) return
            const formattedValue = value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1")
            setFormData((prev) => ({ ...prev, [name]: formattedValue }))
            return
        }
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleCheckboxChange = (checked: boolean) => {
        setFormData((prev) => ({ ...prev, rented: checked }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.title || !formData.author || !formData.publication_year) {
            alert("Preencha todos os campos")
            return
        }

        setDataAcervo((prev) => [...prev, { ...formData }])
        handleClearDataModal()
    }

    //Funções dos botões de ação da tabela

    const handleLendBook = async (id?: number) => {
        try {
            const response = await emprestarLivro(id)

            alert(response.message)
        } catch (error) {
            alert("Erro ao emprestar livro")
        }
    }

    const handleEditBook = (id?: number) => {
        const bookToEdit = dataAcervo.find((book) => book.id === id)
        if (bookToEdit) {
            setFormData(bookToEdit)
            handleModalRegisterBook()
            return
        }
    }

    const handleDeleteBook = async (id?: number) => {
        try {
            const response = await removerLivro(id)
            alert(response.message)
        } catch (error) {
            alert("Erro ao remover livro")
        }
    }


    useEffect(() => {
        //setDataAcervo(bookData)
        handleFetchData()
    }, [])

    useEffect(() => {
        handleFetchData()
    }, [currentTab])

    return {
        dataAcervo,
        isRegisterBookOpen,
        formData,
        currentTab,
        dataEmprestimos,
        handleFetchData,
        handleModalRegisterBook,
        handleChangeDataModal,
        handleCheckboxChange,
        handleSubmit,
        handleClearDataModal,
        setCurrentTab,
        handleEditBook,
        handleDeleteBook,
        handleLendBook,
        handleChangeTab
    }
}