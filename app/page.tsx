import HeroSection from "@/components/hero-section"
import FeaturedProducts from "@/components/featured-products"
import CategoryBanner from "@/components/category-banner"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <CategoryBanner />
      <Testimonials />
    </main>
  )
}
