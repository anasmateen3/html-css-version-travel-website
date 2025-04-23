import Link from "next/link"
import { Button } from "@/components/ui/button"
import DestinationCard from "@/components/destination-card"

export default function DestinationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-orange-500 font-medium mb-2">TOP DESTINATION</h2>
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
            <Link href="#" className="text-orange-500 hover:underline">
              see all
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DestinationCard
            image="/placeholder.svg?height=300&width=400"
            title="Tokyo"
            description="Lorem ipsum is simply dummy text of the printing and..."
            location="Tokyo, Japan"
            price={360}
            rating={5.0}
          />
          <DestinationCard
            image="/placeholder.svg?height=300&width=400"
            title="Rome"
            description="Lorem ipsum is simply dummy text of the printing and..."
            location="Rome, Italy"
            price={370}
            rating={5.0}
          />
          <DestinationCard
            image="/placeholder.svg?height=300&width=400"
            title="Barcelona"
            description="Lorem ipsum is simply dummy text of the printing and..."
            location="Barcelona, Spain"
            price={400}
            rating={5.0}
          />
          <DestinationCard
            image="/placeholder.svg?height=300&width=400"
            title="Bangkok"
            description="Lorem ipsum is simply dummy text of the printing and..."
            location="Bangkok, Thailand"
            price={300}
            rating={5.0}
          />
          <DestinationCard
            image="/placeholder.svg?height=300&width=400"
            title="Sydney"
            description="Lorem ipsum is simply dummy text of the printing and..."
            location="Sydney, Australia"
            price={300}
            rating={5.0}
          />
          <DestinationCard
            image="/placeholder.svg?height=300&width=400"
            title="Toronto"
            description="Lorem ipsum is simply dummy text of the printing and..."
            location="Toronto, Canada"
            price={370}
            rating={5.0}
          />
        </div>
      </section>
    </div>
  )
}
