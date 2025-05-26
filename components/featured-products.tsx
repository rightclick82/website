import Link from "next/link"
import Image from "next/image"

export default function FeaturedProducts() {
  const products = [
    {
      id: "1",
      name: "Satin Lace Trim Lingerie Set",
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "2",
      name: "Floral Lace Bralette Set",
      price: 999,
      originalPrice: 1499,
      discount: 33,
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "3",
      name: "Silk Nightdress with Lace Detail",
      price: 1599,
      originalPrice: 2499,
      discount: 36,
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "4",
      name: "Push-Up Bra with Lace Overlay",
      price: 899,
      originalPrice: 1299,
      discount: 30,
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/product/${product.id}`}>
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />

                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                      {product.discount}% OFF
                    </div>
                  )}
                </div>
              </Link>

              <div className="mt-3">
                <Link href={`/product/${product.id}`} className="block">
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-red-500">{product.name}</h3>
                </Link>

                <div className="mt-1 flex items-center gap-2">
                  <span className="font-medium">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/shop"
            className="inline-block px-6 py-3 bg-red-500 text-white rounded-md font-medium hover:bg-red-600"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
