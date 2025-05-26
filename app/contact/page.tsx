// app/contact/page.tsx
import React from "react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-8">
          Contact Us
        </h1>

        <div className="space-y-6 text-gray-700 text-lg">
          <div className="flex items-start">
            <span className="w-40 font-semibold">Phone Number:</span>
            <span>9254495786</span>
          </div>

          <div className="flex items-start">
            <span className="w-40 font-semibold">Email:</span>
            <a
              href="mailto:rightclick1008@gmail.com"
              className="text-blue-600 hover:underline"
            >
              rightclick1008@gmail.com
            </a>
          </div>

          {/* <div className="flex items-start">
            <span className="w-40 font-semibold">Contact Person:</span>
            <span>AHMAD</span>
          </div> */}

          <div className="flex items-start">
            <span className="w-40 font-semibold">Address:</span>
            <div>
              A-132, First Floor, Gali No. 2,<br />
              Chandu Nagar, Karawal Nagar,<br />
              New Delhi, North East Delhi,<br />
              Delhi – 110094
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
