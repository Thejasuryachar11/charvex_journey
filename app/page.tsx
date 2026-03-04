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
]

export default function JourneyPage() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo + Brand */}
          <a
            href="https://www.charvexglobal.com/"
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.png"   // Make sure logo.png is inside public folder
              alt="Charvex Logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold text-[#FF6B00]">
              Charvex Global
            </span>
          </a>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <a href="https://www.charvexglobal.com/" className="hover:text-[#FF6B00] transition">
              Home
            </a>
            <a href="https://www.charvexglobal.com/about" className="hover:text-[#FF6B00] transition">
              About
            </a>
            <a href="https://www.charvexglobal.com/services" className="hover:text-[#FF6B00] transition">
              Services
            </a>
            <a href="https://www.charvexglobal.com/projects" className="hover:text-[#FF6B00] transition">
              Projects
            </a>
            <a href="https://www.charvexglobal.com/careers" className="hover:text-[#FF6B00] transition">
              Careers
            </a>
            <a href="https://www.charvexglobal.com/contact" className="hover:text-[#FF6B00] transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ================= MAIN CONTENT ================= */}
      <main className="min-h-screen bg-black text-white px-6 py-20 pt-32">
        
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-bold mb-4">
            Our <span className="text-[#FF6B00]">Journey</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A timeline of growth, partnerships, and milestones that define
            Charvex Global’s visionary path.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-[#FF6B00] h-full" />

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
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg">
                    <span className="text-sm text-[#FF6B00] font-semibold">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF6B00] text-sm mt-3 inline-block underline"
                      >
                        Visit Website →
                      </a>
                    )}
                  </div>
                </div>

                {/* Circle Dot */}
                <span className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FF6B00] rounded-full border-4 border-black" />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}