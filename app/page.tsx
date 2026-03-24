"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const timelineData = [
  {
    date: "September 2025",
    title: "Charvex Global Founded",
    description:
      "Charvex Global was officially launched with a bold vision to redefine IT consulting and deliver enterprise-grade technology solutions.",
  },
  {
    date: "October 2025",
    title: "100+ Interns Joined",
    description:
      "Over 100 passionate interns joined Charvex Global, forming a strong foundation of innovation, learning, and collaboration.",
  },
  {
    date: "November 2025",
    title: "First Client – Parishrama Patashala",
    description:
      "We secured our first official client partnership with Parishrama Patashala, marking the beginning of our service journey.",
    link: "https://www.parishramapatashala.org/",
  },
  {
    date: "November 2025",
    title: "Second Client – Dolphin Tutorials",
    description:
      "Expanded our client portfolio by partnering with Dolphin Tutorials for digital and technology solutions.",
    link: "https://www.dolphintutorials.com/",
  },
  {
    date: "December 2025",
    title: "50+ Interns Joined",
    description:
      "Over 50 passionate interns joined Charvex Global, forming a strong foundation of innovation, learning, and collaboration.",
  },
  {
    date: "January 2026",
    title: "Vikas Centre for Learning",
    description:
      "Partnered with Vikas Centre for Learning to strengthen their digital presence and infrastructure.",
    link: "https://www.vikascentreforlearning.com/",
  },
  {
    date: "February 2026",
    title: "Banashree Tutorials",
    description:
      "Successfully onboarded Banashree Tutorials as a valued client, expanding our impact in the education sector.",
    link: "https://www.banashreetutorials.org/",
  },
  {
    date: "March 2026",
    title: "50+ Interns Added",
    description:
      "Expanded our team further by welcoming 50 additional interns, accelerating growth and operational capacity.",
  },
  {
  "date": "17th March 2026",
  "title": "Charvex Global LLP Incorporated",
  "description": "Charvex Global LLP was officially incorporated with a bold vision to redefine IT consulting and deliver enterprise-grade technology solutions.",
  "documents": [
    {
      "name": "Incorporation Certificate",
      "type": "pdf",
      "file": "/llpin.pdf"
    }
  ]
  }
]

export default function JourneyPage() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Charvex Logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold text-[#FF6B00]">
              Charvex Global
            </span>
          </a>

          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a href="/" className="hover:text-[#FF6B00]">Home</a>
            <a href="/about" className="hover:text-[#FF6B00]">About</a>
            <a href="/services" className="hover:text-[#FF6B00]">Services</a>
            <a href="/projects" className="hover:text-[#FF6B00]">Projects</a>
            <a href="/careers" className="hover:text-[#FF6B00]">Careers</a>
            <a href="/contact" className="hover:text-[#FF6B00]">Contact</a>
          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main className="min-h-screen bg-black text-white px-6 py-20 pt-32">
        
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-bold mb-4">
            Our <span className="text-[#FF6B00]">Journey</span>
          </h1>
          <p className="text-gray-400">
            A timeline of growth and milestones.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 w-[3px] bg-[#FF6B00] h-full" />

          <div className="space-y-20">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "justify-start pr-10"
                    : "justify-end pl-10"
                }`}
              >
                <div className="w-1/2">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    
                    <span className="text-sm text-[#FF6B00] font-semibold">
                      {item.date}
                    </span>

                    <h3 className="text-xl font-bold mt-2 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      {item.description}
                    </p>

                    {/* WEBSITE LINK */}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        className="text-[#FF6B00] text-sm mt-3 block underline"
                      >
                        Visit Website →
                      </a>
                    )}

                    {/* PDF DOCUMENT */}
                    {item.documents &&
                      item.documents.map((doc, i) => (
                        <div key={i} className="mt-3">
                          
                          {/* OPEN PDF */}
                          <a
                            href={doc.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#FF6B00] text-sm underline block"
                          >
                            📄 {doc.name}
                          </a>

                          {/* OPTIONAL EMBED PREVIEW */}
                          <iframe
                            src={doc.file}
                            className="mt-3 w-full h-64 rounded-lg border border-white/10"
                          />
                        </div>
                      ))}
                  </div>
                </div>

                {/* DOT */}
                <span className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF6B00] rounded-full border-4 border-black" />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}