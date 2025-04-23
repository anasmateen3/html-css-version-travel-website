"use client"

import Image from "next/image"
import { Heart, Users, BookOpen, Send } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

export default function TourGuides() {
  return (
    <section className="container py-12 md:py-24 bg-gray-50 rounded-3xl">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Meet Our Expert Tour Guides</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="bg-white rounded-3xl p-6 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative mb-6">
            <Image
              src="/images/greece.png"
              alt="Greece"
              width={500}
              height={300}
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>

          <h3 className="text-2xl font-bold mb-2">Trip To Greece</h3>
          <p className="text-gray-600 mb-4">14-29 June | by Robbin joe</p>

          <div className="flex gap-4 mb-6">
            <div className="bg-gray-100 p-2 rounded-full">
              <BookOpen className="h-5 w-5 text-gray-500" />
            </div>
            <div className="bg-gray-100 p-2 rounded-full">
              <Send className="h-5 w-5 text-gray-500" />
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-gray-500" />
              <span className="text-gray-600">24 people going</span>
            </div>
            <Heart className="h-5 w-5 text-gray-300" />
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image src="/images/tour-guides.png" alt="Rome" width={40} height={40} className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium">Ongoing</p>
                  <p className="text-sm font-bold">Trip to rome</p>
                </div>
              </div>
              <span className="text-orange-500 font-bold">40%</span>
            </div>
            <Progress value={40} className="h-2 bg-gray-200" indicatorClassName="bg-orange-500" />
          </div>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <div className="bg-orange-500 p-2 rounded-full">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Expertise</h3>
            </div>
            <p className="text-gray-600">
              Our guides are experts in their fields, ensuring in-depth knowledge and insights into every destination.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <div className="bg-orange-500 p-2 rounded-full">
                  <Heart className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Passion</h3>
            </div>
            <p className="text-gray-600">
              They are passionate about travel, culture, and history, making your journey engaging and captivating.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <div className="bg-orange-500 p-2 rounded-full">
                  <Users className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Dedication</h3>
            </div>
            <p className="text-gray-600">
              Our guides are dedicated to providing exceptional service and ensuring your travel memories are truly
              unforgettable.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
