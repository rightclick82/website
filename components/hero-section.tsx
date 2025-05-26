import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative w-full h-[600px] bg-[#FFF8F0]">
      <div className="absolute inset-0 flex">
        {/* Left product section */}
        <div className="w-1/3 relative overflow-hidden">
          <div className="absolute inset-0 bg-pink-100 transform -skew-x-12 origin-top-right scale-110">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Lingerie products"
                width={400}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Center style section */}
        <div className="w-1/3 flex items-center justify-center bg-red-600">
          <div className="text-cream-100 text-8xl font-bold transform -rotate-90">STYLE IT</div>
        </div>

        {/* Right product section */}
        <div className="w-1/3 relative overflow-hidden">
          <div className="absolute inset-0 bg-green-800 transform skew-x-12 origin-top-left scale-110">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Lingerie product"
                width={400}
                height={500}
                className="object-cover"
              />
              <div className="absolute bottom-20 right-10 bg-black text-white text-4xl font-bold p-2">50% OFF</div>
            </div>
          </div>
        </div>
      </div>

      {/* Side navigation */}
      <div className="absolute right-0 top-0 bottom-0 bg-red-600 w-12 flex flex-col justify-center items-center text-white">
        <div className="transform -rotate-90 whitespace-nowrap mb-16 font-bold">SHOP NOW</div>
        <div className="transform -rotate-90 whitespace-nowrap mb-16 font-bold">NEW IN</div>
        <div className="transform -rotate-90 whitespace-nowrap mb-16 font-bold">SALE</div>
        <div className="transform -rotate-90 whitespace-nowrap font-bold">OFFERS</div>
      </div>
    </div>
  )
}
