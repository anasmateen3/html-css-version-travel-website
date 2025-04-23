import { CreditCard, Map, Users } from "lucide-react"

export default function TopValues() {
  return (
    <section className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-orange-500 font-medium mb-2">WHAT WE SERVE</h2>
        <h3 className="text-3xl md:text-4xl font-bold">Top Values For You</h3>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Embrace life's vastness, venture forth,</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-100 p-4 rounded-lg">
              <Map className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          <h4 className="text-xl font-bold mb-2">Lot of choices</h4>
          <p className="text-gray-600">Embrace life's vastness, venture forth,</p>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-100 p-4 rounded-lg">
              <Users className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          <h4 className="text-xl font-bold mb-2">Best Tour Guide</h4>
          <p className="text-gray-600">Embrace life's vastness, venture forth,</p>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-100 p-4 rounded-lg">
              <CreditCard className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          <h4 className="text-xl font-bold mb-2">Easy Booking</h4>
          <p className="text-gray-600">Embrace life's vastness, venture forth,</p>
        </div>
      </div>
    </section>
  )
}
