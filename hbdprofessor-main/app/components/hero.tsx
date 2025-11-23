"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Confetti = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const confettiPieces = Array.from({ length: 50 }).map((_, i) => {
      const element = document.createElement("div")
      element.className = "confetti"
      element.style.left = Math.random() * 100 + "%"
      element.style.backgroundColor = ["#ec4899", "#a855f7", "#f0abfc", "#87ceeb"][Math.floor(Math.random() * 4)]
      element.style.width = Math.random() * 8 + 4 + "px"
      element.style.height = Math.random() * 8 + 4 + "px"
      element.style.animationDuration = Math.random() * 2 + 2 + "s"
      document.body.appendChild(element)

      setTimeout(() => element.remove(), 4000)
    })

    setTimeout(onComplete, 4000)
  }, [onComplete])

  return null
}

export default function Hero() {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleScrollClick = () => {
    setShowConfetti(true)
    setTimeout(() => {
      const aboutSection = document.getElementById("about")
      aboutSection?.scrollIntoView({ behavior: "smooth" })
    }, 300)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {showConfetti && <Confetti onComplete={() => setShowConfetti(false)} />}

      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-pink-200 to-purple-200 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-linear-to-br from-lavender-200 to-sky-200 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-linear-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Happy Birthday!
            </span>
          </div>
          <p className="text-5xl md:text-7xl text-pink-600 font-semibold tracking-tight drop-shadow-sm">
  Vishu Ji
</p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 flex gap-4 justify-center flex-wrap"
        >
          {["❤️", "💕", "🎉", "✨", "🎂", "💗"].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
              className="text-4xl md:text-5xl"
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={handleScrollClick} // updated to use new scroll handler
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          🎊 Scroll for Surprises
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-gray-500 animate-bounce"
        >
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
