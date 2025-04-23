import Image from "next/image"

export default function PartnerLogos() {
  return (
    <div className="mt-16">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
        <div className="w-24 h-12 relative">
          <Image src="/placeholder.svg?height=48&width=96" alt="Expedia" fill className="object-contain grayscale" />
        </div>
        <div className="w-24 h-12 relative">
          <Image
            src="/placeholder.svg?height=48&width=96"
            alt="TripAdvisor"
            fill
            className="object-contain grayscale"
          />
        </div>
        <div className="w-24 h-12 relative">
          <Image
            src="/placeholder.svg?height=48&width=96"
            alt="Booking.com"
            fill
            className="object-contain grayscale"
          />
        </div>
        <div className="w-24 h-12 relative">
          <Image src="/placeholder.svg?height=48&width=96" alt="Airbnb" fill className="object-contain grayscale" />
        </div>
        <div className="w-24 h-12 relative">
          <Image src="/placeholder.svg?height=48&width=96" alt="Orbitz" fill className="object-contain grayscale" />
        </div>
      </div>
    </div>
  )
}
