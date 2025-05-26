import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">RIGHT CLICK</h3>
            <p className="text-gray-600 text-sm mb-4">
              Premium lingerie brand offering comfortable and stylish intimate wear for women.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-red-500">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-red-500">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-red-500">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-red-500">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-red-500 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-red-500 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-red-500 text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-red-500 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-red-500 text-sm">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/track-order" className="text-gray-600 hover:text-red-500 text-sm">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-red-500 text-sm">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-red-500 text-sm">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-600 hover:text-red-500 text-sm">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/care" className="text-gray-600 hover:text-red-500 text-sm">
                  Lingerie Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-gray-300 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-200 pt-6 mb-6">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-12 h-8 bg-gray-200 rounded"></div>
            <div className="w-12 h-8 bg-gray-200 rounded"></div>
            <div className="w-12 h-8 bg-gray-200 rounded"></div>
            <div className="w-12 h-8 bg-gray-200 rounded"></div>
            <div className="w-12 h-8 bg-gray-200 rounded"></div>
            <div className="w-12 h-8 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} RIGHT CLICK. All Rights Reserved 2025.</p>
        </div>
      </div>
    </footer>
  )
}
