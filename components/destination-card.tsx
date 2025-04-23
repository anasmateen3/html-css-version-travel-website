import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

interface DestinationCardProps {
  image: string
  title: string
  description: string
  location: string
  price: number
  rating: number
}

export default function DestinationCard({ image, title, description, location, price, rating }: DestinationCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-lg">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white flex items-center">
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
          <span className="text-sm font-medium">{rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}{" "}
          <Link href={`/destinations/${title.toLowerCase()}`} className="text-orange-500">
            see more
          </Link>
        </p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-sm mb-1">{location}</p>
            <p className="text-2xl font-bold">
              ${price} <span className="text-sm font-normal text-gray-500">x 12 interest free</span>
            </p>
          </div>
          <Button asChild className="bg-yellow-500 hover:bg-yellow-600 rounded-full">
            <Link href={`/destinations/${title.toLowerCase()}`}>See More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
