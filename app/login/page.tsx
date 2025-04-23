"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"
import { motion } from "framer-motion"
import { useAuth } from "@/context/auth-context"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, rememberMe: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await login(formData.email, formData.password)
      router.push("/home")
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      <motion.div
        className="hidden md:flex md:w-1/2 bg-orange-50 items-center justify-center p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">Start your journey by one click, explore beautiful world!</h2>
          <Image src="/images/login.png" alt="Traveler with camera" width={400} height={400} className="rounded-xl" />
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex items-center justify-center p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-orange-500 mb-2">Travloving</h1>
            <h2 className="text-2xl font-bold">Don't just imagine paradise, Experience it!</h2>
            <p className="text-gray-600">We'll help you plan your dream escape.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">{error}</div>}

            <div className="space-y-2">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="sandeep.samay@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-orange-500"
              />
            </div>

            <div className="space-y-2 relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-orange-500"
              />
              <button
                type="button"
                className="absolute right-0 top-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="rememberMe" checked={formData.rememberMe} onCheckedChange={handleCheckboxChange} />
                <Label htmlFor="rememberMe" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>
              <Link href="/forgot-password" className="text-sm text-gray-600 hover:text-orange-500">
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-yellow-500 hover:bg-yellow-600"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>

            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-orange-500 hover:underline font-medium">
                Sign up!
              </Link>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
