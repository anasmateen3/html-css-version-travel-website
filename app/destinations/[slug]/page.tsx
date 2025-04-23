import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Calendar, Users, Clock, Check } from "lucide-react"

interface DestinationPageProps {
  params: {
    slug: string
  }
}

export default function DestinationPage({ params }: DestinationPageProps) {
  // This would typically come from a database or API
  const destinations = {
    tokyo: {
      title: "Tokyo",
      location: "Tokyo, Japan",
      price: 360,
      rating: 5.0,
      description:
        "Experience the perfect blend of traditional and ultramodern in Japan's bustling capital. From ancient temples to neon-lit skyscrapers, Tokyo offers a unique cultural experience unlike any other city in the world.",
      features: [
        "5-star accommodations",
        "Guided city tours",
        "Traditional tea ceremony",
        "Robot restaurant experience",
        "Mt. Fuji day trip",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    rome: {
      title: "Rome",
      location: "Rome, Italy",
      price: 370,
      rating: 5.0,
      description:
        "Discover the eternal city where ancient history and modern life collide in spectacular fashion. Explore iconic landmarks like the Colosseum, Roman Forum, and Vatican City while enjoying world-class cuisine and vibrant street life.",
      features: [
        "4-star accommodations",
        "Skip-the-line Vatican tour",
        "Colosseum guided visit",
        "Italian cooking class",
        "Countryside wine tasting",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    barcelona: {
      title: "Barcelona",
      location: "Barcelona, Spain",
      price: 400,
      rating: 5.0,
      description:
        "Immerse yourself in the vibrant culture of Barcelona, where stunning architecture, beautiful beaches, and delicious cuisine create an unforgettable Mediterranean experience.",
      features: [
        "Beachfront hotel",
        "Sagrada Familia guided tour",
        "Tapas walking tour",
        "Flamenco show",
        "Montserrat day trip",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    bangkok: {
      title: "Bangkok",
      location: "Bangkok, Thailand",
      price: 300,
      rating: 5.0,
      description:
        "Explore the vibrant streets, ornate temples, and floating markets of Thailand's capital city. Bangkok offers a perfect mix of traditional culture and modern urban experiences.",
      features: [
        "Luxury riverside hotel",
        "Grand Palace tour",
        "Floating market excursion",
        "Thai cooking class",
        "Evening tuk-tuk food tour",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    sydney: {
      title: "Sydney",
      location: "Sydney, Australia",
      price: 300,
      rating: 5.0,
      description:
        "Experience the stunning harbor city of Sydney with its iconic Opera House, beautiful beaches, and vibrant culture. The perfect blend of urban excitement and natural beauty.",
      features: [
        "Harbor view accommodations",
        "Sydney Opera House tour",
        "Blue Mountains day trip",
        "Bondi Beach surfing lesson",
        "Harbor dinner cruise",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    toronto: {
      title: "Toronto",
      location: "Toronto, Canada",
      price: 370,
      rating: 5.0,
      description:
        "Discover Canada's diverse cultural hub with its impressive skyline, multicultural neighborhoods, and proximity to natural wonders like Niagara Falls.",
      features: [
        "Downtown hotel",
        "CN Tower experience",
        "Niagara Falls day trip",
        "Distillery District tour",
        "Island ferry adventure",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
  }

  const destination = destinations[params.slug as keyof typeof destinations] || destinations.tokyo

  return (
    <div className="flex flex-col min-h-screen">
      <section className="container py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <Image
              src={destination.image || "/placeholder.svg"}
              alt={destination.title}
              width={800}
              height={600}
              className="rounded-3xl w-full h-auto object-cover"
            />

            <div className="grid grid-cols-4 gap-4 mt-4">
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  src="/placeholder.svg?height=150&width=200"
                  alt={`${destination.title} thumbnail ${i + 1}`}
                  width={200}
                  height={150}
                  className="rounded-xl w-full h-auto object-cover"
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-600">{destination.location}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{destination.title} Tour Package</h1>

              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
                <span className="text-gray-600 ml-2">(120+ reviews)</span>
              </div>
            </div>

            <p className="text-gray-700">{destination.description}</p>

            <div className="border-t border-b py-6 space-y-4">
              <h3 className="text-xl font-semibold">Package Includes:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {destination.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
              <div>
                <span className="text-gray-600">Starting from</span>
                <div className="text-3xl font-bold">
                  ${destination.price} <span className="text-sm font-normal text-gray-500">x 12 interest free</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" className="rounded-full">
                  Add to Wishlist
                </Button>
                <Button className="rounded-full bg-yellow-500 hover:bg-yellow-600">Book Now</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <Calendar className="h-6 w-6 text-orange-500" />
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-medium">7 Days</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <Users className="h-6 w-6 text-orange-500" />
                <div>
                  <div className="text-sm text-gray-500">Group Size</div>
                  <div className="font-medium">12 People</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <Clock className="h-6 w-6 text-orange-500" />
                <div>
                  <div className="text-sm text-gray-500">Departure</div>
                  <div className="font-medium">Flexible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
