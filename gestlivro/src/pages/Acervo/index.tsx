import { Button } from "../../components/ui/button"
import useApp from "./useApp"
import RegisterBookPage from "../RegistroLivros"
import { Sidebar } from "../../components/ui/sidebar"
import { TableRows } from "./tables/acervo-table"


export default function AcervoPage() {
    const {
        dataAcervo,
        isRegisterBookOpen,
        formData,
        currentTab,
        setCurrentTab,
        handleModalRegisterBook,
        handleChangeDataModal,
        handleCheckboxChange,
        handleSubmit,
        handleClearDataModal,
        handleEditBook,
        handleDeleteBook
    } = useApp()
    return (

        <>
            <div className="flex h-screen bg-[#f2f4f8]">
                <Sidebar />

                {/* Main content */}
                <div className="flex-1 overflow-auto">
                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-[#21272a] mb-6">Acervo</h1>

                        {/* Tabs */}
                        <div className="flex border-b border-[#dde1e6] mb-6">

                            <button
                                id="Acervo"
                                className={`px-4 py-3 flex items-center gap-2 ${currentTab === "Acervo" ? "border-b-2 border-[#0f62fe] text-[#0f62fe]" : "text-[#4d5358]"
                                    }`}
                                onClick={() => setCurrentTab("Acervo")}
                            >
                                Disponíveis <span className="bg-[#dde1e6] text-[#4d5358] rounded-full px-1.5 text-xs">{dataAcervo.length}</span>
                            </button>

                            <button
                                id="Emprestar"
                                className={`px-4 py-3 flex items-center gap-2 ${currentTab === "Emprestar" ? "border-b-2 border-[#0f62fe] text-[#0f62fe]" : "text-[#4d5358]"
                                    }`}
                                onClick={() => setCurrentTab("Emprestar")}
                            >
                                Emprestar <span className="bg-[#dde1e6] text-[#4d5358] rounded-full px-1.5 text-xs"></span>
                            </button>

                            <button className="px-4 py-3 text-[#4d5358] flex items-center gap-2">
                                Emprestados <span className="bg-[#dde1e6] text-[#4d5358] rounded-full px-1.5 text-xs">2</span>
                            </button>


                            <div className="ml-auto">
                                <Button className="bg-[#0f62fe] hover:bg-[#001d6c] text-white" onClick={handleModalRegisterBook}>Adicionar Livro</Button>
                            </div>
                        </div>

                        {/* Table */}

                        <div className="bg-white rounded-md overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-[#f2f4f8] border-b border-[#dde1e6]">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Autor</th>
                                        <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Título</th>
                                        <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Ano</th>
                                        <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Gênero</th>
                                        <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Alugados</th>
                                        <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Estoque</th>
                                        <th className="px-4 py-3 text-left font-medium text-[#4d5358]">Status</th>
                                        <th className="w-12"></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* Esse dataAcervo precisa vir do useApp, ele será o que vem da API */}
                                    <TableRows dataAcervo={dataAcervo} onEdit={handleEditBook} onDelete={handleDeleteBook} />

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {
                    isRegisterBookOpen && (
                        <RegisterBookPage
                            handleCloseModal={handleModalRegisterBook}
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