import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      id: "1",
      name: "Priya S.",
      location: "Mumbai",
      quote: "The quality of lingerie from Right Click is exceptional. Comfortable, stylish, and long-lasting.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "2",
      name: "Ananya R.",
      location: "Delhi",
      quote: "I love how Right Click offers such a wide range of sizes. Finally found lingerie that fits perfectly!",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "3",
      name: "Meera K.",
      location: "Bangalore",
      quote: "The satin lingerie set I purchased is so luxurious. The fabric feels amazing against the skin.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-12">
      {/* <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <div className="mt-4 flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  )
}
