"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown, ChevronUp } from "lucide-react"

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([500, 3000])
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    category: true,
    size: true,
    color: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  return (
    <div className="space-y-6">
      {/* Price Filter */}
      <div>
        <button
          className="flex items-center justify-between w-full text-left font-medium"
          onClick={() => toggleSection("price")}
        >
          <span>Price Range</span>
          {expandedSections.price ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {expandedSections.price && (
          <div className="mt-4 px-1">
            <Slider
              defaultValue={priceRange}
              min={0}
              max={5000}
              step={100}
              onValueChange={(value) => setPriceRange(value as number[])}
              className="mb-6"
            />

            <div className="flex items-center justify-between">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Category Filter */}
      <div className="border-t border-gray-200 pt-6">
        <button
          className="flex items-center justify-between w-full text-left font-medium"
          onClick={() => toggleSection("category")}
        >
          <span>Category</span>
          {expandedSections.category ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {expandedSections.category && (
          <div className="mt-4 space-y-3">
            {["Bra Sets", "Nightwear", "Babydolls", "Camisoles", "Bodysuits"].map((category) => (
              <div key={category} className="flex items-center">
                <Checkbox id={`category-${category}`} />
                <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-600">
                  {category}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Size Filter */}
      <div className="border-t border-gray-200 pt-6">
        <button
          className="flex items-center justify-between w-full text-left font-medium"
          onClick={() => toggleSection("size")}
        >
          <span>Size</span>
          {expandedSections.size ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {expandedSections.size && (
          <div className="mt-4 space-y-3">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <div key={size} className="flex items-center">
                <Checkbox id={`size-${size}`} />
                <label htmlFor={`size-${size}`} className="ml-2 text-sm text-gray-600">
                  {size}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Color Filter */}
      <div className="border-t border-gray-200 pt-6">
        <button
          className="flex items-center justify-between w-full text-left font-medium"
          onClick={() => toggleSection("color")}
        >
          <span>Color</span>
          {expandedSections.color ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {expandedSections.color && (
          <div className="mt-4 grid grid-cols-5 gap-2">
            {[
              { name: "Black", hex: "#000000" },
              { name: "White", hex: "#FFFFFF" },
              { name: "Red", hex: "#FF0000" },
              { name: "Pink", hex: "#FFC0CB" },
              { name: "Blue", hex: "#0000FF" },
              { name: "Purple", hex: "#800080" },
              { name: "Green", hex: "#008000" },
              { name: "Yellow", hex: "#FFFF00" },
              { name: "Orange", hex: "#FFA500" },
              { name: "Brown", hex: "#A52A2A" },
            ].map((color) => (
              <div key={color.name} className="flex flex-col items-center">
                <button
                  className="w-8 h-8 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
                <span className="text-xs mt-1">{color.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
