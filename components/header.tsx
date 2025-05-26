import Image from "next/image"
import Link from "next/link"
import { Search, User, ShoppingBag } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center w-1/3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-md w-full max-w-xs focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
        </div>

        <div className="flex justify-center w-1/3">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=100"
              alt="RIGHT CLICL Logo"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <div className="flex items-center justify-end gap-4 w-1/3">
          <Link href="/account" className="hover:text-red-500">
            <User className="h-6 w-6" />
          </Link>
          <Link href="/cart" className="hover:text-red-500">
            <ShoppingBag className="h-6 w-6" />
          </Link>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-3">
        <ul className="flex justify-center space-x-12">
          <li>
            <Link href="/" className="font-medium hover:text-red-500">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/lingerie-set" className="font-medium hover:text-red-500">
              LINGERIE SET
            </Link>
          </li>
          <li>
            <Link href="/bra" className="font-medium hover:text-red-500">
              BRA
            </Link>
          </li>
          <li>
            <Link href="/panty" className="font-medium hover:text-red-500">
              PANTY
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-medium hover:text-red-500">
            Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
