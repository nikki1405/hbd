"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function Counter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })
  type Petal = { id: number; angle: number; distance: number }
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    if (!inView) return

    // Petals spawn every 1.5 seconds
    const petalInterval = setInterval(() => {
      const newPetals = Array.from({ length: 25 }).map((_, i) => ({
        id: Date.now() + i,
        angle: (i / 25) * 360,
        distance: 150 + Math.random() * 120,
      }))
      setPetals(newPetals)
    }, 1500)

    return () => clearInterval(petalInterval)
  }, [inView])

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
      >
        Age??😅🤔🤔
      </motion.h2>

      <div className="flex flex-col items-center gap-12">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="w-72 h-72 bg-linear-to-br from-pink-200 via-purple-200 to-lavender-200 rounded-full flex items-center justify-center shadow-2xl"
          >
            <motion.div
              animate={inView ? { scale: [1, 1.15, 1] } : {}}
              transition={{ duration: 1 }}
              className="text-center"
            >
              {/* Infinity symbol */}
              <div className="text-8xl font-bold text-gray-900">∞</div>
              <p className="text-gray-900 text-xl font-semibold mt-2">
                Forever Young
              </p>
            </motion.div>
          </motion.div>

          {/* Repeating flower petals animation */}
          {petals.map((petal) => (
            <motion.div
              key={petal.id}
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{
                x: Math.cos((petal.angle * Math.PI) / 180) * petal.distance,
                y: Math.sin((petal.angle * Math.PI) / 180) * petal.distance,
                opacity: 0,
              }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 w-6 h-6 -ml-3 -mt-3 pointer-events-none"
            >
              <span className="text-3xl">🌸</span>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-gray-900 text-xl md:text-2xl text-center max-w-2xl font-semibold"
        >
          ✨ Age is just a number… but you’re always young and handsome 😎💖
        </motion.p>
      </div>
    </section>
  )
}
