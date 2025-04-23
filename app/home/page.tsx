"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plane, MapPin, Play } from "lucide-react"
import DestinationCard from "@/components/destination-card"
import TestimonialSlider from "@/components/testimonial-slider"
import StatsSection from "@/components/stats-section"
import TopValues from "@/components/top-values"
import ExperienceSection from "@/components/experience-section"
import TourGuides from "@/components/tour-guides"
import DreamDestination from "@/components/dream-destination"
import PartnerLogos from "@/components/partner-logos"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-gray-100 rounded-full px-4 py-1 text-orange-500 font-medium">
              Explore the world!
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Travel <span className="text-orange-500">top destination</span> of the world
            </h1>
            <p className="text-gray-600">Where adventure meets comfort. We create unforgettable travel experiences</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="rounded-full bg-yellow-500 hover:bg-yellow-600">
                <Link href="/destinations">Get Started</Link>
              </Button>
              <Button variant="outline" className="rounded-full gap-2">
                <Play className="h-4 w-4 fill-orange-500 text-orange-500" />
                <span>Watch Demo</span>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-full bg-orange-500 w-[90%] aspect-square overflow-hidden">
              <Image
                src="/images/hero-main.png"
                alt="Happy traveler with tickets"
                width={600}
                height={600}
                className="object-cover"
              />

              <div className="absolute top-1/4 right-0 transform translate-x-1/2 bg-white rounded-full px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <span className="font-medium">Top Places</span>
                </div>
              </div>

              <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 bg-white rounded-full px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <span className="font-medium">Top Hotels</span>
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
                <Plane className="text-orange-500 absolute top-0 right-0" />
                <Plane className="text-orange-500 absolute bottom-1/4 left-1/4" />
              </svg>
            </div>
          </motion.div>
        </div>

        <PartnerLogos />
      </section>

      {/* Who We Are Section */}
      <section className="container py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Who <span className="text-orange-500">We are</span>
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <Button asChild className="rounded-full bg-yellow-500 hover:bg-yellow-600">
              <Link href="/about">Know More</Link>
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <Image
                src="/images/who-we-are.png"
                alt="Travelers with backpacks"
                width={300}
                height={300}
                className="rounded-2xl w-full h-auto object-cover"
              />
              <Image
                src="/images/who-we-are.png"
                alt="New York skyline"
                width={300}
                height={300}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="pt-8">
              <Image
                src="/images/who-we-are.png"
                alt="Ha Long Bay Vietnam"
                width={300}
                height={600}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Top Values Section */}
      <TopValues />

      {/* Top Destinations Section */}
      <section className="container py-12">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-orange-500 font-medium mb-2">CHOOSE YOUR NEXT DESTINATION</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Explore top destination</h3>
          </div>
          <div className="flex mt-4 md:mt-0 space-x-4">
            <Button variant="ghost" className="rounded-full">
              City
            </Button>
            <Button variant="ghost" className="rounded-full">
              Mountain
            </Button>
            <Button variant="ghost" className="rounded-full">
              Forest
            </Button>
            <Button variant="ghost" className="rounded-full">
              Island
            </Button>
            <Link href="/destinations" className="text-orange-500 hover:underline">
              see all
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <DestinationCard
              image="/images/cappadocia.png"
              title="Cappadocia"
              description="Lorem ipsum is simply dummy text of the printing and..."
              location="Turkey"
              price={380}
              rating={5.0}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <DestinationCard
              image="/images/lavender.png"
              title="Nice and Cannes"
              description="Lorem ipsum is simply dummy text of the printing and..."
              location="French Riviera, France"
              price={300}
              rating={5.0}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <DestinationCard
              image="/images/seville.png"
              title="Seville"
              description="Lorem ipsum is simply dummy text of the printing and..."
              location="Seville, Spain"
              price={200}
              rating={5.0}
            />
          </motion.div>
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild className="rounded-full bg-yellow-500 hover:bg-yellow-600">
            <Link href="/destinations">View All Destinations</Link>
          </Button>
        </div>
      </section>

      {/* Dream Destination Section */}
      <DreamDestination />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Tour Guides Section */}
      <TourGuides />

      {/* Achievements Timeline */}
      <section className="container py-12 md:py-24">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-orange-500 font-medium mb-2">OUR ACHIEVEMENTS</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Why We are Your best Travelling Partners</h3>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/timeline.png"
              alt="World map"
              width={1200}
              height={600}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative">
            <svg className="w-full h-[400px]" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100,350 Q400,50 600,200 Q800,350 1100,100"
                stroke="#888"
                strokeWidth="2"
                fill="none"
                className="flight-path"
              />
            </svg>

            <motion.div
              className="absolute bottom-[350px] left-[100px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-bold text-orange-500">2020</h4>
                <p className="max-w-xs text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-[200px] left-[400px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-bold text-blue-500">2023</h4>
                <p className="max-w-xs text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-[100px] right-[400px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <div className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-bold text-pink-500">2024</h4>
                <p className="max-w-xs text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-[200px] right-[100px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <div className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-bold text-teal-500">2025</h4>
                <p className="max-w-xs text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-12">
        <h2 className="text-4xl font-bold text-center mb-12">Real Experiences</h2>
        <TestimonialSlider />
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Contact Teaser */}
      <section className="container py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold">
              Get In <span className="text-orange-500">Touch</span>
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/get-in-touch.png"
                alt="Coastal view"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/images/get-in-touch.png"
                alt="Temple at sunset"
                width={300}
                height={300}
                className="rounded-lg mt-8"
              />
              <Image
                src="/images/get-in-touch.png"
                alt="Temple at night"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <Image src="/images/get-in-touch.png" alt="Mosque" width={300} height={300} className="rounded-lg mt-8" />
            </div>

            <div className="absolute -z-10 top-1/4 right-1/4 w-full h-full">
              <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M150,0 C150,100 250,150 300,150 C250,150 150,200 150,300 C150,200 50,150 0,150 C50,150 150,100 150,0Z"
                  stroke="#FF5A1F"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  fill="none"
                />
                <Plane className="text-orange-500 absolute top-0 right-0" />
                <Plane className="text-orange-500 absolute bottom-1/4 left-1/4" />
                <Plane className="text-orange-500 absolute bottom-0 right-1/3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
