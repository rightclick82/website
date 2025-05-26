"use client"

import { useCart } from "@/hooks/use-cart"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, cartTotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <p className="text-gray-600 mb-8">Your cart is currently empty</p>
        <Link href="/" className="inline-block bg-red-500 text-white px-6 py-3 rounded-md font-medium">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="hidden md:grid md:grid-cols-5 text-sm font-medium text-gray-500 bg-gray-50 p-4">
              <div className="col-span-2">Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>

            <div className="divide-y divide-gray-200">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}`}
                  className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 items-center"
                >
                  <div className="col-span-2 flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-md overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="text-sm text-gray-500">
                        <span>Size: {item.size}</span>
                        {item.color && <span className="ml-2">Color: {item.color}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="text-gray-900">{formatPrice(item.price)}</div>

                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1, item.size, item.color)}
                      disabled={item.quantity <= 1}
                      className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-10 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1, item.size, item.color)}
                      className="p-1 rounded-md hover:bg-gray-100"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                    <button
                      onClick={() => removeItem(item.id, item.size, item.color)}
                      className="text-gray-500 hover:text-red-500 p-1"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-between">
            <button onClick={clearCart} className="text-sm text-gray-500 hover:text-red-500">
              Clear Cart
            </button>
            <Link href="/" className="text-sm text-red-500 hover:text-red-600">
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>{formatPrice(cartTotal * 0.18)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>{formatPrice(cartTotal * 1.18)}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-red-500 hover:bg-red-600">Proceed to Checkout</Button>

              <div className="text-center text-sm text-gray-500">
                <p>We accept:</p>
                <div className="flex justify-center gap-2 mt-2">
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
