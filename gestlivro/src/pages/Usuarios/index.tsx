import { Button } from "../../components/ui/button"
import useApp from "./useApp"
import RegisterUserPage from "../RegistroUsuario"
import { Sidebar } from "../../components/ui/sidebar"
import { TableRowsUser } from "../Acervo/tables/usuarios-table"



export default function UsuariosPage() {
    const {
        dataAcervo,
        isRegisterUserOpen,
        formData,
        currentTab,
        handleModalRegisterUser,
        handleChangeDataModal,
        handleCheckboxChange,
        handleSubmit,
        handleClearDataModal,
        handleChangeTab,
        handleDeleteUser,
        handleEditUser
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

                            <button 
                                id="Usuarios"
                                className={`px-4 py-3 flex items-center gap-2 ${currentTab === "Ativos" ? "border-b-2 border-[#0f62fe] text-[#0f62fe]" : "text-[#4d5358]"
                                }`}
                            onClick={handleChangeTab.bind(null, "Ativos")}
                        >
                            Ativos <span className="bg-[#dde1e6] text-[#4d5358] rounded-full px-1.5 text-xs">{dataAcervo.length || 0}</span>
                        </button>

                        <button className={`px-4 py-3 flex items-center gap-2 ${currentTab === "Inativos" ? "border-b-2 border-[#0f62fe] text-[#0f62fe]" : "text-[#4d5358]"
                            }`}
                            onClick={handleChangeTab.bind(null, "Inativos")}>
                            Inativos <span className="bg-[#dde1e6] text-[#4d5358] rounded-full px-1.5 text-xs">{dataAcervo.length || 0}</span>
                        </button>


                        <div className="ml-auto">
                            <Button className="bg-[#0f62fe] hover:bg-[#001d6c] text-white" onClick={handleModalRegisterUser}>Cadastrar Usuário</Button>
                        </div>
                    </div>


                        {/* Table */}

                        <div className="bg-white rounded-md overflow-hidden">
                                                    <table className="w-full">
                                                        <thead className="bg-[#f2f4f8] border-b border-[#dde1e6]">
                                                            {currentTab === "Ativos" && (
                                                                <tr>
                                                                <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Nome</th>
                                                                <th className="px-4 py-3 text-left font-medium text-[#4d5358]">CPF</th>
                                                                <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Email</th>
                                                                <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Pode Alugar</th>
                                                                <th className="w-12"></th>
                                                            </tr>
                                                            )}
                                                            {currentTab === "Inativos" && (
                                                                <tr>
                                                                <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Nome</th>
                                                                <th className="px-4 py-3 text-left font-medium text-[#4d5358]">CPF</th>
                                                                <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Email</th>
                                                                <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Pode Alugar</th>
                                                                <th className="w-12"></th>
                                                            </tr>
                                                            )}
                                                        </thead>
                                                        <tbody>
                        
                                                            {/* Esse dataAcervo precisa vir do useApp, ele será o que vem da API */}
                                                            {currentTab === "Ativos" && dataAcervo.length > 0 && (
                                                                <TableRowsUser dataAcervo={dataAcervo} onEdit={handleEditUser} onDelete={handleDeleteUser} />
                                                            )}
                                                            {currentTab === "Inativos" && dataAcervo.length > 0 && (
                                                                <TableRowsUser dataAcervo={dataAcervo} onEdit={handleEditUser} onDelete={handleDeleteUser} />
                                                            )}
                                                        </tbody>
                                                    </table>
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