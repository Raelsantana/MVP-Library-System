import { useEffect, useState } from "react"

export interface IAcervo {
    author: string
    bookName: string
    year: string | number
    status: string
}

export default function useApp() {
    const [dataAcervo, setDataAcervo] = useState<IAcervo[]>([])
    const [isRegisterBookOpen, setIsRegisterBookOpen] = useState(false)

    const bookData = [
        { author: "Jane Doe", bookName: "Livro sem nome", year: "2025", status: "Disponível" },
        { author: "Maria Silva", bookName: "O livro do nome do livro", year: 2002, status: "Emprestado" },
        { author: "Maria Silva", bookName: "O livro do nome do livro 2", year: "2002", status: "Disponível" },
        { author: "Jhon Marston", bookName: "Red Dead Redemption II", year: 1983, status: "Manutenção" },
        { author: "Jhonny Silveira", bookName: "Meu nome não é livro", year: "2012", status: "Disponível" },
        { author: "João Batista", bookName: "Lorem Ipsum - O livro", year: "2002", status: "Emprestado" },
        { author: "João Batista", bookName: "Lorem Ipsum - O livro 2", year: "2002", status: "Disponível" },
    ]

    // Exemplo de função simples, para o chamar a api e buscar os dados
    // Não contém tratativa de erros, não contém nada, só para exemplificar como seria a chamada da API
    // Essa função pode ser chamada dentro do useEffect, ou seja, quando o componente for montado, ele vai chamar a função e buscar os dados
    // Ou seja, quando o componente for montado, ele vai chamar a função e buscar os dados

    // A Mesma função pode ser utilizada para atualizar os dados, ou seja, quando o usuário clicar em um botão, ele vai chamar a função e buscar os dados novamente

    const handleFetchData = async () => {
        try {
            const response = await fetch("https://api.example.com/books")
            const data = await response.json()
            setDataAcervo(data)

        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    //Funções do Modal de registro

    const handleModalRegisterBook = () => {
        setIsRegisterBookOpen(!isRegisterBookOpen)
    }

    const [formData, setFormData] = useState({
        bookName: "",
        author: "",
        year: "",
        isAvailable: false,
    })

    const handleClearDataModal = () => {
        setFormData({
            bookName: "",
            author: "",
            year: "",
            isAvailable: false,
        })
    }

    const handleChangeDatamodal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        if (name === 'year') {
            const regex = /^[0-9]{0,4}$/
            if (!regex.test(value)) return
            const formattedValue = value.replace(/\D/g, "").replace(/(\d{4})(\d)/, "$1")
            setFormData((prev) => ({ ...prev, [name]: formattedValue }))
            return
        }
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleCheckboxChange = (checked: boolean) => {
        setFormData((prev) => ({ ...prev, isAvailable: checked }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.bookName || !formData.author || !formData.year) {
            alert("Preencha todos os campos")
            return
        }

        setDataAcervo((prev) => [...prev, { ...formData, status: formData.isAvailable ? "Disponível" : "Emprestado" }])
        handleClearDataModal()
    }

    // Esse useEffect é só para simular a chamada da API, ele vai setar o bookData no dataAcervo assim que o componente for montado
    // Pois não possui uma dependência, algo para ela monitorar dentro do [] array, ele só vai rodar uma vez, quando o componente for montado
    // Se tivesse algo dentro do array, ele rodaria sempre que o valor mudasse, como por exemplo [bookData]
    // Ou seja, se o bookData mudasse, ele rodaria novamente o useEffect
    // E setaria o valor novamente no dataAcervo, mas como o bookData não muda, ele só vai rodar uma vez
    // Para a chamada da API podemos utilizar o mesmo conceito, mas com o axios ou fetch e o useEffect de array vazio
    // pois ele servirá somente para puxar os dados da api quando a tela for motada

    // A atualização dos dados pode ser feita utilizando a mudança dos dados passando o response da API para o setDataAcervo
    // Ou seja, quando a API retornar os dados, ele vai setar o valor no dataAcervo e atualizar a tela

    useEffect(() => {
        setDataAcervo(bookData)
        //com o uso do setDataAcervo aqui, não precisamos passar a variável de Mock "bookData" diretamente para o componente
    }, [])

    // Retornando o dataAcervo e a função handleFetchData, para que possamos utilizar no componente
    return {
        dataAcervo,
        isRegisterBookOpen,
        formData,
        handleFetchData,
        handleModalRegisterBook,
        handleChangeDatamodal,
        handleCheckboxChange,
        handleSubmit,
        handleClearDataModal
    }
}