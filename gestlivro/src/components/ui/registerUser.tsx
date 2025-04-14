"use client"

import type React from "react"

import { useState } from "react"
import { Label } from "./label"
import { Input } from "./input"
import { Checkbox } from "./checkbox"
import { Button } from "./button"

export default function RegisterLoanBook() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    cpf: "",
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
      <h1 className="text-2xl font-medium text-[#21272a] mb-6">Cadastrar Usuário</h1>

      <form onSubmit={handleSubmit} className="bg-[#f2f4f8] p-6 rounded-md">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="UserName" className="text-[#21272a] font-medium">
              Nome do Usuário
            </Label>
            <Input
              id="UserName"
              name="UserName"
              placeholder="Ex: João Neto"
              className="bg-white border-[#dde1e6] h-12"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>

          <div className="ace-y-6">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="email" className="text-[#21272a] font-medium">
                E-mail
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Ex: email@gmail.com"
                className="bg-white border-[#dde1e6] h-12"
                value={formData.email}
                onChange={handleChange}
              />
              
            </div>

            
          </div>


          <div className="space-y-2">
              <Label htmlFor="cpf" className="text-[#21272a] font-medium">
                CPF
              </Label>
              <Input
                id="cpf"
                name="cpf"
                type="text"
                placeholder="Ex: 111.444.777.35"
                className="bg-white border-[#dde1e6] h-12"
                value={formData.cpf}
                onChange={handleChange}
              />
            </div>


          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            
            <Button
              type="button"
              variant="outline"
              className="flex-1 h-12 border-[#0f62fe] text-[#0f62fe] hover:bg-[#0f62fe]/10"
              onClick={() => setFormData({ userName: "", email: "", cpf: ""})}>
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