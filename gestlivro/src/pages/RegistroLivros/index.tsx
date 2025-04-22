"use client"

import type React from "react"

import { useState } from "react"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Checkbox } from "../../components/ui/checkbox"
import { Button } from "../../components/ui/button"

type BookRegistrationFormData = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleCheckboxChange: (checked: boolean) => void
    handleSubmit: (e: React.FormEvent) => void
    handleClearDataModal: () => void
    handleCloseModal: () => void
    formData: {
        author: string
        title: string
        publication_year: string | number
        rented: boolean
        gender: string
        qtt_estoque: string
        qtt_alugados: string
    }
}

export default function BookRegistrationForm({ handleChange, handleCheckboxChange, handleSubmit, handleClearDataModal, handleCloseModal, formData }: BookRegistrationFormData) {

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
                    <div className="space-y-2">
                        <Label htmlFor="title" className="text-[#21272a] font-medium">
                            Título do livro
                        </Label>
                        <Input
                            id="title"
                            name="title"
                            placeholder="Ex.: Lorem Ipsum"
                            className="bg-white border-[#dde1e6] h-12"
                            value={formData.title}
                            onChange={handleChange}
                            maxLength={50}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="author" className="text-[#21272a] font-medium">
                                Autor do Livro
                            </Label>
                            <Input
                                id="author"
                                name="author"
                                placeholder="Ex.: Lorem Ipsum"
                                className="bg-white border-[#dde1e6] h-12"
                                value={formData.author}
                                onChange={handleChange}
                                maxLength={50}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="publication_year" className="text-[#21272a] font-medium">
                                Ano
                            </Label>
                            <Input
                                id="publication_year"
                                name="publication_year"
                                placeholder="00/00/0000"
                                className="bg-white border-[#dde1e6] h-12"
                                value={formData.publication_year}
                                onChange={handleChange}
                                maxLength={4}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="gender" className="text-[#21272a] font-medium">
                                Gênero
                            </Label>
                            <Input
                                id="gender"
                                name="gender"
                                placeholder="Ex.: Ficção"
                                className="bg-white border-[#dde1e6] h-12"
                                value={formData.gender}
                                onChange={handleChange}
                                maxLength={50}
                            />
                        </div>

                        <div className="space-y-2 md:col-span-1">
                            <Label htmlFor="qtt_estoque" className="text-[#21272a] font-medium">
                                Quant. em Estoque
                            </Label>
                            <Input
                                id="qtt_estoque"
                                name="qtt_estoque"
                                placeholder="Ex.: 10"
                                className="bg-white border-[#dde1e6] h-12"
                                value={formData.qtt_estoque}
                                onChange={handleChange}
                                maxLength={2}
                            />
                        </div>

                        <div className="space-y-2 md:col-span-1">
                            <Label htmlFor="qtt_alugados" className="text-[#21272a] font-medium">
                                Quant. Alugados
                            </Label>
                            <Input
                                id="qtt_alugados"
                                name="qtt_alugados"
                                placeholder="Ex.: 5"
                                className="bg-white border-[#dde1e6] h-12"
                                value={formData.qtt_alugados}
                                onChange={handleChange}
                                maxLength={2}
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 pt-2">
                        <Checkbox
                            id="rented"
                            checked={formData.rented}
                            onCheckedChange={handleCheckboxChange}
                            className="border-[#4d5358] data-[state=checked]:bg-[#0f62fe] data-[state=checked]:border-[#0f62fe]"
                        />
                        <Label htmlFor="rented" className="text-[#21272a] font-medium">
                            Disponível no Acervo?
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