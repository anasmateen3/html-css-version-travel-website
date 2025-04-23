"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function ExperienceSection() {
  return (
    <section className="container py-12 md:py-24 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-orange-500 font-medium">Our Experience</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Crafting Unforgettable Adventures</h3>
          <p className="text-gray-600">
            We excel in curating remarkable journeys, specializing in outdoor destinations around the globe. With a
            wealth of experience, we bring adventures to life and invite you to embark on your own. The call of nature
            awaits—begin your adventure today!
          </p>

          <div className="grid grid-cols-3 gap-8 pt-6">
            <div>
              <h4 className="text-4xl font-bold text-orange-500">1,000+</h4>
              <p className="text-gray-600">outdoor destinations</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-orange-500">98%</h4>
              <p className="text-gray-600">customer satisfaction</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-orange-500">15+</h4>
              <p className="text-gray-600">Years Of Experience</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-blue-500 rounded-full w-[90%] aspect-square overflow-hidden">
            <Image
              src="/images/experience.png"
              alt="Happy traveler"
              width={600}
              height={600}
              className="object-cover"
            />

            <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 bg-white rounded-full px-3 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">best fun</span>
              </div>
            </div>

            <div className="absolute bottom-0 right-1/4 transform translate-y-1/2 bg-white rounded-full px-3 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">Best Adventures</span>
              </div>
            </div>

            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
              <div className="bg-white rounded-full p-3 shadow-lg">
                <div className="text-center">
                  <div className="text-purple-600 font-bold text-xl">5000+</div>
                  <div className="text-xs text-gray-500">Customers</div>
                </div>
              </div>
            </div>
          </div>

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
        </motion.div>
      </div>
    </section>
  )
}
