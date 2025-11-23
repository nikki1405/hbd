"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const wishes = [
  { name: "Friend 1", message: "You make every day brighter! Happy Birthday! 🌟", emoji: "👩‍🦰" },
  { name: "Friend 2", message: "To more adventures and unforgettable memories! 🎉", emoji: "👨‍🦱" },
  { name: "Friend 3", message: "May your year be filled with joy and laughter! 😄", emoji: "👱‍♀️" },
  { name: "Friend 4", message: "You deserve the best birthday ever! 🎂", emoji: "🧔" },
  { name: "Friend 5", message: "Celebrate big, dream bigger! 🚀", emoji: "👩‍🦳" },
  { name: "Friend 6", message: "Another year older, still as amazing! 💫", emoji: "👨‍🦲" },
]

export default function Wishes() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
      >
        Wishes From Friends 💌
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishes.map((wish, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">{wish.emoji}</div>
              <h3 className="font-bold text-gray-800">{wish.name}</h3>
            </div>
            <p className="text-gray-700 italic">{wish.message}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
