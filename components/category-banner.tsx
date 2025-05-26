import Link from "next/link"
import Image from "next/image"

export default function CategoryBanner() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Shop By Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-lg overflow-hidden group h-80">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Lingerie Sets"
              fill
              className="object-cover transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-3">Lingerie Sets</h3>
                <Link
                  href="/lingerie-set"
                  className="inline-block px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-red-500 hover:text-white"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden group h-80">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Bras"
              fill
              className="object-cover transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-3">Bras</h3>
                <Link
                  href="/bra"
                  className="inline-block px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-red-500 hover:text-white"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden group h-80">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Panties"
              fill
              className="object-cover transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-3">Panties</h3>
                <Link
                  href="/panty"
                  className="inline-block px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-red-500 hover:text-white"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
