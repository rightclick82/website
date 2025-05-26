"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  size: string
  color: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string, size?: string, color?: string) => void
  updateQuantity: (id: string, quantity: number, size?: string, color?: string) => void
  clearCart: () => void
  itemCount: number
  cartTotal: number
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  itemCount: 0,
  cartTotal: 0,
})

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
    setMounted(true)
  }, [])

  // Save cart to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(items))
    }
  }, [items, mounted])

  const findItemIndex = (id: string, size?: string, color?: string) => {
    return items.findIndex(
      (item) => item.id === id && (size ? item.size === size : true) && (color ? item.color === color : true),
    )
  }

  const addItem = (item: CartItem) => {
    setItems((prevItems) => {
      const existingIndex = findItemIndex(item.id, item.size, item.color)

      if (existingIndex !== -1) {
        // Item exists, update quantity
        const updatedItems = [...prevItems]
        updatedItems[existingIndex].quantity += item.quantity
        return updatedItems
      } else {
        // Item doesn't exist, add it
        return [...prevItems, item]
      }
    })
  }

  const removeItem = (id: string, size?: string, color?: string) => {
    setItems((prevItems) => {
      const existingIndex = findItemIndex(id, size, color)

      if (existingIndex !== -1) {
        const updatedItems = [...prevItems]
        updatedItems.splice(existingIndex, 1)
        return updatedItems
      }

      return prevItems
    })
  }

  const updateQuantity = (id: string, quantity: number, size?: string, color?: string) => {
    setItems((prevItems) => {
      const existingIndex = findItemIndex(id, size, color)

      if (existingIndex !== -1) {
        const updatedItems = [...prevItems]

        if (quantity <= 0) {
          // Remove item if quantity is 0 or less
          updatedItems.splice(existingIndex, 1)
        } else {
          // Update quantity
          updatedItems[existingIndex].quantity = quantity
        }

        return updatedItems
      }

      return prevItems
    })
  }

  const clearCart = () => {
    setItems([])
  }

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
