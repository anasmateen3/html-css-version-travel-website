"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Irfan Rahmat",
    role: "Travel Enthusiast",
    avatar: "/placeholder.svg?height=100&width=100",
    content: "I love Traveloving, this is the best place to buy ticket and help you find your dream holiday.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Adventure Seeker",
    avatar: "/placeholder.svg?height=100&width=100",
    content: "Traveloving made planning my trip so easy. Their customer service is exceptional!",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Digital Nomad",
    avatar: "/placeholder.svg?height=100&width=100",
    content: "As someone who travels frequently, I can say Traveloving offers the best deals and service.",
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <div className="relative bg-white rounded-2xl shadow-md p-8 md:p-12">
      <div className="absolute top-0 right-0 -z-10">
        <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M400,50 Q500,150 550,300" stroke="#FF5A1F" strokeWidth="2" strokeDasharray="5 5" fill="none" />
          <path d="M500,100 Q400,200 300,250" stroke="#FF5A1F" strokeWidth="2" strokeDasharray="5 5" fill="none" />
        </svg>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="mb-6">
          <Image
            src={testimonials[currentIndex].avatar || "/placeholder.svg"}
            alt={testimonials[currentIndex].name}
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        <h3 className="text-2xl font-bold">{testimonials[currentIndex].name}</h3>
        <p className="text-gray-500 mb-4">{testimonials[currentIndex].role}</p>

        <div className="flex mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? "fill-yellow-500 text-yellow-500" : "fill-gray-200 text-gray-200"}`}
            />
          ))}
        </div>

        <p className="text-xl text-gray-600 max-w-2xl mb-8">{testimonials[currentIndex].content}</p>
      </div>

      <div className="absolute bottom-1/2 left-4 transform translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gray-200 hover:bg-yellow-500 hover:text-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
      </div>

      <div className="absolute bottom-1/2 right-4 transform translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gray-200 hover:bg-yellow-500 hover:text-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}
