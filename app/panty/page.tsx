import ProductGrid from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function PantyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Panties</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <ProductFilters />
        </div>

        <div className="w-full md:w-3/4">
          <ProductGrid category="panty" />
        </div>
      </div>
    </div>
  )
}
