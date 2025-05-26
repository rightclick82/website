import type { Product } from "@/types/product"

// Mock product data
const products: Product[] = [
  {
    id: "1",
    name: "Satin Lace Trim Lingerie Set",
    description: "Elegant satin lingerie set with delicate lace trim for a luxurious feel.",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    images: [
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
    ],
    category: "lingerie-set",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Red", hex: "#FF0000" },
      { name: "Pink", hex: "#FFC0CB" },
    ],
    details: [
      "Made from premium satin fabric",
      "Adjustable straps for perfect fit",
      "Lace trim detailing",
      "Underwired cups for support",
      "Hand wash recommended",
    ],
    inStock: true,
  },
  {
    id: "2",
    name: "Floral Lace Bralette Set",
    description: "Comfortable and stylish floral lace bralette set with matching panty.",
    price: 999,
    originalPrice: 1499,
    discount: 33,
    images: [
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
    ],
    category: "lingerie-set",
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Blue", hex: "#0000FF" },
      { name: "Purple", hex: "#800080" },
    ],
    details: [
      "Soft floral lace material",
      "Non-wired for comfort",
      "Scalloped edges",
      "Stretchy fabric for perfect fit",
      "Machine washable in delicate cycle",
    ],
    inStock: true,
  },
  {
    id: "3",
    name: "Silk Nightdress with Lace Detail",
    description: "Luxurious silk nightdress with delicate lace detailing for elegant nightwear.",
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    images: ["/placeholder.svg?height=600&width=450", "/placeholder.svg?height=600&width=450"],
    category: "lingerie-set",
    colors: [
      { name: "Burgundy", hex: "#800020" },
      { name: "Navy", hex: "#000080" },
      { name: "Champagne", hex: "#F7E7CE" },
    ],
    details: [
      "100% pure silk fabric",
      "Adjustable spaghetti straps",
      "Lace trim on neckline and hem",
      "Mid-thigh length",
      "Dry clean only",
    ],
    inStock: true,
  },
  {
    id: "4",
    name: "Push-Up Bra with Lace Overlay",
    description: "Enhance your silhouette with this push-up bra featuring beautiful lace overlay.",
    price: 899,
    originalPrice: 1299,
    discount: 30,
    images: ["/placeholder.svg?height=600&width=450", "/placeholder.svg?height=600&width=450"],
    category: "bra",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Nude", hex: "#E6BEA5" },
      { name: "Red", hex: "#FF0000" },
    ],
    details: [
      "Push-up padding for enhanced cleavage",
      "Underwired cups for support",
      "Adjustable straps",
      "Hook and eye closure",
      "Hand wash recommended",
    ],
    inStock: true,
  },
  {
    id: "5",
    name: "Seamless Comfort Bra",
    description: "Experience all-day comfort with this seamless wireless bra.",
    price: 699,
    originalPrice: 999,
    discount: 30,
    images: ["/placeholder.svg?height=600&width=450", "/placeholder.svg?height=600&width=450"],
    category: "bra",
    colors: [
      { name: "Beige", hex: "#F5F5DC" },
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Pink", hex: "#FFC0CB" },
    ],
    details: [
      "Seamless construction for invisible look under clothes",
      "Wireless design for all-day comfort",
      "Removable pads",
      "Wide band for support",
      "Machine washable",
    ],
    inStock: true,
  },
  {
    id: "6",
    name: "Lace Thong Panty",
    description: "Delicate lace thong panty for a seamless look under clothing.",
    price: 399,
    originalPrice: 599,
    discount: 33,
    images: ["/placeholder.svg?height=600&width=450", "/placeholder.svg?height=600&width=450"],
    category: "panty",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Red", hex: "#FF0000" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Blue", hex: "#0000FF" },
    ],
    details: [
      "Soft lace material",
      "Thong style for no visible panty line",
      "Elastic waistband for comfort",
      "Cotton gusset",
      "Hand wash recommended",
    ],
    inStock: true,
  },
  {
    id: "7",
    name: "Cotton Bikini Panty Set",
    description: "Comfortable cotton bikini panties in a set of three.",
    price: 599,
    originalPrice: 899,
    discount: 33,
    images: ["/placeholder.svg?height=600&width=450", "/placeholder.svg?height=600&width=450"],
    category: "panty",
    colors: [{ name: "Multicolor", hex: "#FFFFFF" }],
    details: [
      "100% cotton material",
      "Bikini cut for full coverage",
      "Elastic waistband",
      "Set of 3 panties",
      "Machine washable",
    ],
    inStock: true,
  },
  {
    id: "8",
    name: "Satin and Lace Babydoll",
    description: "Elegant satin babydoll with lace cups and matching thong.",
    price: 1199,
    originalPrice: 1799,
    discount: 33,
    images: ["/placeholder.svg?height=600&width=450", "/placeholder.svg?height=600&width=450"],
    category: "lingerie-set",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Red", hex: "#FF0000" },
      { name: "Pink", hex: "#FFC0CB" },
    ],
    details: [
      "Satin fabric with lace cups",
      "Adjustable straps",
      "Comes with matching thong",
      "Flowy silhouette",
      "Hand wash only",
    ],
    inStock: true,
  },
]

// Get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

// Get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

// Get related products (excluding current product)
export function getRelatedProducts(currentProductId: string): Product[] {
  const currentProduct = getProductById(currentProductId)

  if (!currentProduct) {
    return products.slice(0, 4)
  }

  return products
    .filter((product) => product.id !== currentProductId && product.category === currentProduct.category)
    .slice(0, 4)
}
