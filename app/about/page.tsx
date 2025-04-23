import Image from "next/image"
import ExperienceSection from "@/components/experience-section"
import TourGuides from "@/components/tour-guides"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Who We Are Section */}
      <section className="container py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Who <span className="text-orange-500">We are</span>
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Travelers with backpacks"
                width={300}
                height={300}
                className="rounded-2xl w-full h-auto object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="New York skyline"
                width={300}
                height={300}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="pt-8">
              <Image
                src="/placeholder.svg?height=600&width=300"
                alt="Ha Long Bay Vietnam"
                width={300}
                height={600}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Tour Guides Section */}
      <TourGuides />

      {/* Achievements Timeline */}
      <section className="container py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-orange-500 font-medium mb-2">OUR ACHIEVEMENTS</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Why We are Your best Travelling Partners</h3>
        </div>

        <div className="relative">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/placeholder.svg?height=600&width=1200"
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

            <div className="absolute bottom-[350px] left-[100px]">
              <div className="flex items-center">
                <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-bold text-orange-500">2020</h4>
                <p className="max-w-xs text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce</p>
              </div>
            </div>

            <div className="absolute bottom-[200px] left-[400px]">
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-bold text-blue-500">2023</h4>
                <p className="max-w-xs text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce</p>
              </div>
            </div>

            <div className="absolute top-[100px] right-[400px]">
              <div className="flex items-center">
                <div className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-bold text-pink-500">2024</h4>
                <p className="max-w-xs text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce</p>
              </div>
            </div>

            <div className="absolute top-[200px] right-[100px]">
              <div className="flex items-center">
                <div className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-bold text-teal-500">2025</h4>
                <p className="max-w-xs text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-12">
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Hot air balloons"
            width={1200}
            height={400}
            className="w-full h-[300px] object-cover"
          />

          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
              <div className="space-y-2">
                <h3 className="text-5xl font-bold">168k</h3>
                <p className="text-xl">Happy Clients</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-5xl font-bold">+45k</h3>
                <p className="text-xl">Destinations</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-5xl font-bold">+49</h3>
                <p className="text-xl">Global Branch</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-5xl font-bold">+26k</h3>
                <p className="text-xl">Campaigns</p>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 pattern-dots w-32 h-32"></div>
          <div className="absolute bottom-0 left-0 pattern-dots w-32 h-32"></div>
        </div>
      </section>
    </div>
  )
}
