export interface Color {
  name: string
  hex: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  images: string[]
  category: string
  colors: Color[]
  details: string[]
  inStock: boolean
}
