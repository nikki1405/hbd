"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

const facts = [
  { title: "💬✨ Your words never carry anger — instead, you always support me with your pure friendliness. 🤝💛", emoji: "🥰", description: "My Best Buddy😇🥰" },
  { title: "💪🌟 You always motivate me like my strength, and you bear with great patience that feels endless. 💛🕊️", emoji: "🥰", description: "My Motivator😇🥰" },
  { title: "🤝💫 You are always there for me in my low times, and your words lift me back up, making me stronger every single time.", emoji: "🥰", description: "My Energy booster😇🥰" },
  { title: "✨ You created unforgettable days ,turning moments into lifelong memories that I’ll always cherish. 💖", emoji: "🥰", description: "My Stress burster😇🥰" },
  { title: "💗 You’re the one and only person with whom I can be completely myself— just my true, original self. 🌟", emoji: "🥰", description: "Sweet Heart😇🥰" },
  { title: "📞 Your presence brings happiness that has no words,your messages & calls melt my stress, cools my heart,mind. 🌿", emoji: "🥰", description: "My dear Professor😇🥰" },
]

export default function FunFacts() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [flipped, setFlipped] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
      >
        You are Sooo Special🌟
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setFlipped(flipped === index ? null : index)}
            className="h-48 cursor-pointer"
          >
            <motion.div
              animate={{ rotateY: flipped === index ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 bg-linear-to-br from-pink-300 to-purple-300 rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-lg"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="text-5xl mb-4">{fact.emoji}</div>
                <h3 className="text-xl font-bold text-center">{fact.title}</h3>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 bg-linear-to-br from-purple-300 to-pink-300 rounded-2xl p-6 flex items-center justify-center text-white shadow-lg"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <p className="text-center font-semibold text-lg">{fact.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
