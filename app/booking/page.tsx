import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Plane, Calendar } from "lucide-react"

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="container py-12">
        <div className="text-center mb-12">
          <h2 className="text-orange-500 font-medium mb-2">TRAVEL WITH TRAVLOVING</h2>
          <h1 className="text-4xl md:text-5xl font-bold">My Bookings</h1>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Paris"
                width={300}
                height={300}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>

            <div className="md:w-2/3 space-y-4">
              <h2 className="text-2xl font-bold">Paris Tour Family Package</h2>

              <div className="flex items-center gap-2">
                <div className="bg-green-100 text-green-800 rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
                <span className="font-semibold">Confirmed</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <Plane className="h-5 w-5 text-orange-500" />
                <span>Delhi to Paris | Emirates | Booking ID: EMX123456</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="h-5 w-5 text-orange-500" />
                <span>10 - May 17, 2025</span>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="outline" className="rounded-full">
                  View Details
                </Button>
                <Button className="rounded-full bg-yellow-500 hover:bg-yellow-600">Download Itinerary</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
