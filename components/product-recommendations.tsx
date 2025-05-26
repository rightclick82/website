import { getRelatedProducts } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"
import { formatPrice } from "@/lib/utils"

interface ProductRecommendationsProps {
  currentProductId: string
}

export default function ProductRecommendations({ currentProductId }: ProductRecommendationsProps) {
  const relatedProducts = getRelatedProducts(currentProductId)

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {relatedProducts.map((product) => (
        <div key={product.id} className="group">
          <Link href={`/product/${product.id}`}>
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={product.images[0] || "/placeholder.svg"}
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
              <span className="font-medium">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
