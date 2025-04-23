"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Plane } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    alert("Thank you for subscribing to our newsletter!")
    setEmail("")
  }

  return (
    <div className="bg-yellow-500 py-12 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sign up to our newsletter</h2>
          <p className="text-gray-800 mb-6">
            Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus enim facilisi nunc blandit nullam.
          </p>

          <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-l-full rounded-r-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button type="submit" className="rounded-r-full rounded-l-none bg-orange-500 hover:bg-orange-600">
              <span className="sr-only">Subscribe</span>
              <Plane className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 800 400" fill="none">
          <path
            d="M100,50 Q400,0 700,100"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="5 5"
            fill="none"
            opacity="0.5"
          />
          <Plane className="text-white opacity-30" x="150" y="100" width="24" height="24" />
          <MapPin className="text-white opacity-30" x="650" y="150" width="24" height="24" />
        </svg>
      </div>
    </div>
  )
}
