import { useEffect, useState } from "react"
import { listarUsuarios } from "../../services/usersservice"

export interface IUsers {
    cpf: string
    name: string
    email: string 
    pode_alugar: boolean
    id?: number
}

export default function useApp() {
    const [dataAcervo, setDataAcervo] = useState<IUsers[]>([])
    const [isRegisterUserOpen, setIsRegisterUserOpen] = useState(false)

    const userData = [
        { name: "Johnny Silva", email: "meunomenaoejohnny@gmail.com", cpf: "123.456.789-00", phone: "(79) 9 8123-4566", status: "Não devolveu" },
        { name: "Maria Oliveira", email: "maria.oliveira@gmail.com", cpf: "987.654.321-00", phone: "(11) 9 8765-4321", status: "Devolveu" },
        { name: "Carlos Pereira", email: "carlos.pereira@hotmail.com", cpf: "456.789.123-00", phone: "(21) 9 9988-7766", status: "Não devolveu" },
        { name: "Ana Souza", email: "ana.souza@yahoo.com", cpf: "321.654.987-00", phone: "(31) 9 8877-6655", status: "Devolveu" },
        { name: "Pedro Santos", email: "pedro.santos@outlook.com", cpf: "654.321.987-00", phone: "(41) 9 7766-5544", status: "Devolveu" }

    ]

    const handleFetchData = async () => {
            try{
                const response = await listarUsuarios();
                setDataAcervo(response)
            }catch(error){
                console.error("Error fetching data:", error)
            }
        }

    //Funções do Modal de registro

    const handleModalRegisterUser = () => {
        setIsRegisterUserOpen(!isRegisterUserOpen)
    }

    const [formData, setFormData] = useState({
        cpf: "",
        name: "",
        email: "",
        pode_alugar: true,
    })

    const handleClearDataModal = () => {
        setFormData({
            cpf: "",
            name: "",
            email: "",
            pode_alugar: true,
        })
    }

    const handleChangeDataModal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        if(name === "cpf"){
            const formattedValue = value.replace(/\D/g, "").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1-$2")
            setFormData((prev) => ({ ...prev, [name]: formattedValue }))
            return
        }

        if(name === "email"){
            const formattedValue = value.replace(/\s/g, "")
            setFormData((prev) => ({ ...prev, [name]: formattedValue }))
            return
        }

        if(name === "name"){
            const formattedValue = value.replace(/\s/g, "")
            setFormData((prev) => ({ ...prev, [name]: formattedValue }))
            return
        }

        setFormData((prev) => ({ ...prev, [name]: value }))
        
    }

    const handleCheckboxChange = (checked: boolean) => {
        setFormData((prev) => ({ ...prev, pode_alugar: checked }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.cpf || !formData.name || !formData.email || !formData.pode_alugar) {
            alert("Preencha todos os campos")
            return
        }

        setDataAcervo((prev) => [...prev, { ...formData, status: formData.pode_alugar ? "Sim" : "Não" }])
        handleClearDataModal()
    }

    useEffect(() => {
        //setDataAcervo(bookData)
        handleFetchData()
        //com o uso do setDataAcervo aqui, não precisamos passar a variável de Mock "bookData" diretamente para o componente
    }, [])

    return {
        dataAcervo,
        isRegisterUserOpen,
        formData,
        handleFetchData,
        handleModalRegisterUser,
        handleChangeDataModal,
        handleCheckboxChange,
        handleSubmit,
        handleClearDataModal
    }
}