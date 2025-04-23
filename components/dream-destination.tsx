"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function DreamDestination() {
  return (
    <section className="container py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-yellow-500 rounded-full w-[90%] aspect-square overflow-hidden">
            <Image
              src="/images/dream-destination.png"
              alt="Happy traveler with suitcase"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>

          <div className="absolute -z-10 inset-0">
            <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-orange-500"></div>
            <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-yellow-300"></div>
            <div className="absolute bottom-1/4 right-1/3 w-5 h-5 rounded-full bg-orange-300"></div>
            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-red-400"></div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-orange-500 font-medium">WE ARE THE BEST FOR YOU</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Unlock Your Dream Destination</h3>
          <p className="text-gray-600">
            We are dedicated to making your journey of discovery truly unforgettable. Our team of passionate travel
            experts is here to assist you in finding the destination of your dreams.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-4xl font-bold text-orange-500">4k+</h4>
              <p className="text-gray-600">Satisfied Customers</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-4xl font-bold text-orange-500">1000+</h4>
              <p className="text-gray-600">Global Destinations</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-4xl font-bold text-orange-500">24/7</h4>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-4xl font-bold text-orange-500">100%</h4>
              <p className="text-gray-600">Dedication</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
