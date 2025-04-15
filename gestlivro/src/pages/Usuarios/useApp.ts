import { useEffect, useState } from "react"

interface IAcervo {
    name: string
    email: string
    cpf: string | number
    phone: string | number
    status: string
}

export default function useApp() {
    const [dataAcervo, setDataAcervo] = useState<IAcervo[]>([])
    const [isRegisterUserOpen, setIsRegisterUserOpen] = useState(false)

    const userData = [
        { name: "Johnny Silva", email: "meunomenaoejohnny@gmail.com", cpf: "123.456.789-00", phone: "(79) 9 8123-4566", status: "Disponível" },
        { name: "Maria Oliveira", email: "maria.oliveira@gmail.com", cpf: "987.654.321-00", phone: "(11) 9 8765-4321", status: "Emprestado" },
        { name: "Carlos Pereira", email: "carlos.pereira@hotmail.com", cpf: "456.789.123-00", phone: "(21) 9 9988-7766", status: "Disponível" },
        { name: "Ana Souza", email: "ana.souza@yahoo.com", cpf: "321.654.987-00", phone: "(31) 9 8877-6655", status: "Emprestado" },
        { name: "Pedro Santos", email: "pedro.santos@outlook.com", cpf: "654.321.987-00", phone: "(41) 9 7766-5544", status: "Disponível" }

    ]

    const handleFetchData = async () => {
        try {
            const response = await fetch("https://api.example.com/users")
            const data = await response.json()
            setDataAcervo(data)

        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    //Funções do Modal de registro

    const handleModalRegisterUser = () => {
        setIsRegisterUserOpen(!isRegisterUserOpen)
    }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        cpf: "",
        phone: "",
        isAvailable: false,
    })

    const handleClearDataModal = () => {
        setFormData({
            name: "",
            email: "",
            cpf: "",
            phone: "",
            isAvailable: false,
        })
    }

    const handleChangeDatamodal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        if(name === "cpf"){
            const formattedValue = value.replace(/\D/g, "").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1-$2")
            setFormData((prev) => ({ ...prev, [name]: formattedValue }))
            return
        }

        if(name === "phone"){
            const formattedValue = value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2")
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
        setFormData((prev) => ({ ...prev, isAvailable: checked }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.cpf || !formData.phone) {
            alert("Preencha todos os campos")
            return
        }

        setDataAcervo((prev) => [...prev, { ...formData, status: formData.isAvailable ? "Ativo" : "Inativo" }])
        handleClearDataModal()
    }

    useEffect(() => {
        setDataAcervo(userData)
    }, [])

    return {
        dataAcervo,
        isRegisterUserOpen,
        formData,
        handleFetchData,
        handleModalRegisterUser,
        handleChangeDatamodal,
        handleCheckboxChange,
        handleSubmit,
        handleClearDataModal
    }
}