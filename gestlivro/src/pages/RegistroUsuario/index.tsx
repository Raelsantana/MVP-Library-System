"use client"

import type React from "react"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Checkbox } from "../../components/ui/checkbox"
import { Button } from "../../components/ui/button"

type RegisterUserPage = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleCheckboxChange: (checked: boolean) => void
    handleSubmit: (e: React.FormEvent) => void
    handleClearDataModal: () => void
    handleCloseModal: () => void
    formData: {
        name: string,
        email: string,
        cpf: string,
        phone: string,
        isAvailable: boolean
    }
}

export default function RegisterUserPage({ handleChange, handleCheckboxChange, handleSubmit, handleClearDataModal, handleCloseModal, formData }: RegisterUserPage) {

    return (
        <div className="max-w-2xl mx-auto p-4 container bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-medium text-[#21272a] p-6 flex align-center w-full justify-between">
                Cadastrar Livro
                <Button onClick={handleCloseModal} className=" h-8 w-6 bg-inherit hover:bg-gray-200 rounded-full text-gray-500">
                    x
                </Button>
            </h1>

            <form onSubmit={handleSubmit} className="bg-[#f2f4f8] p-6 rounded-md">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="name" className="text-[#21272a] font-medium">
                                Nome
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Ex.: Lorem Ipsum"
                                className="bg-white border-[#dde1e6] h-12"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2 md:col-span-1">
                            <Label htmlFor="cpf" className="text-[#21272a] font-medium">
                                CPF
                            </Label>
                            <Input
                                id="cpf"
                                name="cpf"
                                type="text"
                                placeholder="Ex.: 000.000.000-00"
                                className="bg-white border-[#dde1e6] h-12"
                                value={formData.cpf}
                                onChange={handleChange}
                                maxLength={14} 
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="email" className="text-[#21272a] font-medium">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Ex.: email@exemplo.com.br"
                                className="bg-white border-[#dde1e6] h-12"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="cpf" className="text-[#21272a] font-medium">
                                Telefone
                            </Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="text"
                                maxLength={15}
                                placeholder="Ex.: (00) 00000-0000"
                                className="bg-white border-[#dde1e6] h-12"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 pt-2">
                        <Checkbox
                            id="isAvailable"
                            checked={formData.isAvailable}
                            onCheckedChange={handleCheckboxChange}
                            className="border-[#4d5358] data-[state=checked]:bg-[#0f62fe] data-[state=checked]:border-[#0f62fe]"
                        />
                        <Label htmlFor="isAvailable" className="text-[#21272a] font-medium">
                            Registrar como ativo?
                        </Label>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <Button
                            type="button"
                            variant="outline"
                            className="flex-1 h-12 border-[#0f62fe] text-[#0f62fe] hover:bg-[#0f62fe]/10"
                            onClick={handleClearDataModal}
                        >
                            Cancelar
                        </Button>
                        <Button type="submit" className="flex-1 h-12 bg-[#0f62fe] hover:bg-[#001d6c]">
                            Cadastrar
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}