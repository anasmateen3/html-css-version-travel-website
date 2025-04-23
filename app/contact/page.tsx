"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Message sent successfully!")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="container py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold">
              Get In <span className="text-orange-500">Touch</span>
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -z-10 top-0 right-0 w-full h-full">
              <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M150,0 C150,100 250,150 300,150 C250,150 150,200 150,300 C150,200 50,150 0,150 C50,150 150,100 150,0Z"
                  stroke="#FF5A1F"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="max-w-4xl mx-auto bg-orange-50/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 pattern-dots w-32 h-32"></div>
          <div className="absolute bottom-0 left-0 pattern-dots w-32 h-32"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Send us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">
                  First Name <span className="text-orange-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Your First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="rounded-full bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">
                  Last Name <span className="text-orange-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Your Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="rounded-full bg-white"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-orange-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-full bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Mobile Number <span className="text-orange-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+91 - 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="rounded-full bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Addition message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[150px] bg-white rounded-3xl"
              />
            </div>

            <div className="flex justify-center">
              <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 rounded-full px-12 py-6 h-auto">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
