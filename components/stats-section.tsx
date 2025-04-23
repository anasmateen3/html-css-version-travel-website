import Image from "next/image"

export default function StatsSection() {
  return (
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
  )
}
