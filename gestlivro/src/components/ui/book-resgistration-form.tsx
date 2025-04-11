"use client"

import type React from "react"

import { useState } from "react"
import { Label } from "./label"
import { Input } from "./input"
import { Checkbox } from "./checkbox"
import { Button } from "./button"

export default function BookRegistrationForm() {
  const [formData, setFormData] = useState({
    bookName: "",
    author: "",
    year: "",
    isAvailable: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, isAvailable: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-medium text-[#21272a] mb-6">Cadastrar Livro</h1>

      <form onSubmit={handleSubmit} className="bg-[#f2f4f8] p-6 rounded-md">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="bookName" className="text-[#21272a] font-medium">
              Nome do livro
            </Label>
            <Input
              id="bookName"
              name="bookName"
              placeholder="Ex.: Lorem Ipsum"
              className="bg-white border-[#dde1e6] h-12"
              value={formData.bookName}
              onChange={handleChange}
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
              />
              <p className="text-sm text-[#697077]">Informe o nome do autor!</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="year" className="text-[#21272a] font-medium">
                Ano
              </Label>
              <Input
                id="year"
                name="year"
                placeholder="00/00/0000"
                className="bg-white border-[#dde1e6] h-12"
                value={formData.year}
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
              Disponível no Acervo?
            </Label>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              type="button"
              variant="outline"
              className="flex-1 h-12 border-[#0f62fe] text-[#0f62fe] hover:bg-[#0f62fe]/10"
              onClick={() => setFormData({ bookName: "", author: "", year: "", isAvailable: false })}
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