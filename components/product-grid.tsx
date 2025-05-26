"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { getProductsByCategory } from "@/lib/products"
import { formatPrice } from "@/lib/utils"

export default function ProductGrid({ category }: { category: string }) {
  const products = getProductsByCategory(category)
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <Link href={`/product/${product.id}`}>
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={
                    hoveredProduct === product.id && product.images.length > 1 ? product.images[1] : product.images[0]
                  }
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                />

                {product.discount && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                    {product.discount}% OFF
                  </div>
                )}

                <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full text-gray-600 hover:text-red-500">
                  <Heart className="h-5 w-5" />
                </button>
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

              <div className="mt-2 flex items-center gap-1">
                {product.colors.slice(0, 4).map((color) => (
                  <div
                    key={color.name}
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
                {product.colors.length > 4 && (
                  <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
