import React from "react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-8">
          About Us
        </h1>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome to Piylu – Where Comfort Meets Confidence
            </h2>
            <p className="text-lg leading-relaxed">
              At Piylu, we believe that every woman deserves to feel confident, comfortable, and beautiful in her own skin. Our mission is to provide high-quality, stylish, and affordable lingerie that caters to the diverse needs of modern women.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed">
              Founded with a passion for empowering women, Piylu was established to bridge the gap between comfort and style in the lingerie industry. We understand that lingerie is not just about aesthetics; it's about how it makes you feel. That's why we've dedicated ourselves to creating pieces that enhance your natural beauty while providing the support you need.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What We Offer
            </h2>
            <div className="space-y-4 text-lg">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Wide Range of Products:</h3>
                <p className="leading-relaxed">
                  From everyday essentials to special occasion pieces, our collection includes bras, panties, lingerie sets, and more, designed to suit every body type and preference.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Quality and Comfort:</h3>
                <p className="leading-relaxed">
                  We use premium fabrics and materials to ensure that our products are not only stylish but also comfortable for all-day wear.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Affordable Luxury:</h3>
                <p className="leading-relaxed">
                  At Piylu, luxury doesn't come with a hefty price tag. Our products are priced to provide the best value without compromising on quality.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Commitment
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Customer satisfaction is at the heart of everything we do. We are committed to:
            </p>
            <div className="space-y-4 text-lg">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Inclusivity:</h3>
                <p className="leading-relaxed">
                  Celebrating all body types and ensuring our products cater to a diverse clientele.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Sustainability:</h3>
                <p className="leading-relaxed">
                  Implementing eco-friendly practices in our production and packaging processes.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Continuous Improvement:</h3>
                <p className="leading-relaxed">
                  Listening to our customers and constantly evolving to meet their needs and preferences.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Connect With Us
            </h2>
            <p className="text-lg leading-relaxed">
              We love hearing from our customers! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us at{" "}
              <a
                href="mailto:connect@piylu.in"
                className="text-blue-600 hover:underline font-semibold"
              >
                connect@piylu.in
              </a>
              .
            </p>
            <p className="text-lg leading-relaxed mt-4 font-semibold text-red-600">
              Join the Piylu community and experience the perfect blend of comfort, style, and confidence.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
} 