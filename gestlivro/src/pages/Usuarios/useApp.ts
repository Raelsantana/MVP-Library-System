import { useEffect, useState } from "react"
import { listarUsuarios, cadastrarUsuario, removerUsuario } from "../../services/usersservice"
import { onlyLetters } from "../../utils/formatters"

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
    const [currentTab, setCurrentTab] = useState<"Ativos" | "Inativos">("Ativos")

    const userData = [
        { name: "Johnny Silva", email: "meunomenaoejohnny@gmail.com", cpf: "123.456.789-00", pode_alugar: "Não " },
        { name: "Maria Oliveira", email: "maria.oliveira@gmail.com", cpf: "987.654.321-00", pode_alugar: "Devolveu" },
        { name: "Carlos Pereira", email: "carlos.pereira@hotmail.com", cpf: "456.789.123-00", pode_alugar: "Não devolveu" },
        { name: "Ana Souza", email: "ana.souza@yahoo.com", cpf: "321.654.987-00", pode_alugar: "Devolveu" },
        { name: "Pedro Santos", email: "pedro.santos@outlook.com", cpf: "654.321.987-00", pode_alugar: "Devolveu" }

    ]

    const handleFetchData = async () => {
            try{
                if(currentTab === "Ativos"){
                const response = await listarUsuarios();
                setDataAcervo(response)
                }else{
                const response = await listarUsuarios();
                setDataAcervo(response)
                }
            }catch(error){
                console.error("Error fetching data:", error)
            }
    }

    const handleChangeTab = (tab: "Ativos" | "Inativos") => {
            setCurrentTab(tab)
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
            const formattedValue = onlyLetters(value)
            setFormData((prev) => ({ ...prev, [name]: formattedValue }))
            return
        }

        setFormData((prev) => ({ ...prev, [name]: value }))
        
    }

    const handleCheckboxChange = (checked: boolean) => {
        setFormData((prev) => ({ ...prev, pode_alugar: checked }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        for (const key in formData) {
            if (formData[key as keyof typeof formData] === "") {
                alert(`Preencha o campo ${key}`)
                return
            }
        }

        // Aqui, limpa o CPF ANTES de enviar
        const cleanFormData = {
        ...formData,
        cpf: formData.cpf.replace(/\D/g, ""), // Tira pontos e traços
        };


        try {
            const response = await cadastrarUsuario(cleanFormData)
            setDataAcervo((prev) => [...prev, { ...formData }])
            alert(response.message)
        } catch (error) {
            alert("Erro ao cadastrar usuário")
        }
        handleClearDataModal()
    }

    //Funções dos botões de ação da tabela
    const handleEditUser = (id?: number) => {
            const userToEdit = dataAcervo.find((user) => user.id === id)
            if (userToEdit) {
                setFormData(userToEdit)
                handleModalRegisterUser()
                return
            }
        }
    
        const handleDeleteUser = async (id?: number) => {
            try {
                const response = await removerUsuario(id)
                alert(response.message)
                handleFetchData()
            } catch (error) {
                alert("Erro ao remover Usuario")
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
        isRegisterUserOpen,
        formData,
        currentTab,
        handleFetchData,
        handleModalRegisterUser,
        handleChangeDataModal,
        handleCheckboxChange,
        handleSubmit,
        handleClearDataModal,
        setCurrentTab,
        handleChangeTab,
        handleDeleteUser,
        handleEditUser
    }
}