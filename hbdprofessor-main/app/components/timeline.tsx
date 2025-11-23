"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const timelineEvents = [
  { year: "📅 August 22, 2025", event: "The day you called me for the first time for IEEE work....a small call that later became a meaningful connection 📞", emoji: "👋" },
  { year: "📅August 28 , 2025", event: "The day you gave me a pen with your best wishes for my mid exams… a simple gift that meant a lot to me 🖊️", emoji: "🌟" },
  { year: "📅 October 5, 2025", event: "A lifelong memorable day… our trip to Simhachalam temple and the beach and before day movie too 😅 🌺🏞️🌊", emoji: "🚗" },
  { year: "📅 October 18 ,2025 ", event: "The day you brought me sweets for Diwali… a small gesture that felt truly special 🍬💛.", emoji: "🌙" },
  { year: "💖 Forever", event: "Never-Ending - Every moment with you feels special… the way you care, the warmth you show, the friendship you give, and the support you always stand with. These aren’t just memories… they’re pieces of a bond that only grows stronger with time. And I truly wish this timeline never stops — that it keeps flowing, keeps adding new moments, and stays with us for a lifetime and beyond ✨🤍⏳", emoji: "😂" },
  
]

export default function Timeline() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
      >
        Few Memories⏳
      </motion.h2>

      <div className="space-y-8">
        {timelineEvents.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            className={`flex gap-8 items-center ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
          >
            <div className="flex-1" />

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 bg-linear-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-2xl shadow-lg shrink-0"
            >
              {item.emoji}
            </motion.div>

            <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <p className="text-pink-600 font-bold text-lg mb-2">{item.year}</p>
              <p className="text-gray-700 text-lg">{item.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
