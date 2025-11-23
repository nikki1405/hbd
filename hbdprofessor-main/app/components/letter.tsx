"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function Letter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [displayedText, setDisplayedText] = useState("")
  const fullText =
    "My dear Buddy, Happy Birthday to the person whose presence has brought light, peace, and warmth into my life in ways he may never fully realize. On your special day, I pray that Lord Shiva showers you with blessings, protects your pure heart, and fills your life with endless happiness, love, and calmness. You truly deserve every good thing this universe holds. Sometimes a person enters your life so quietly that you don’t even realize how deeply they’re changing you. They don’t make promises, they don’t try to impress… they just be themselves — kind, gentle, pure — and somehow your heart starts feeling happy around them. That’s what you became to me. You didn’t try to become special… your presence itself made you special. You just existed, and I smiled. Your presence became my comfort. It still surprises me how naturally you found me — how unknowingly your care became something I began to rely on… and how beautifully my soul settles when it’s you. And now… You became that one person whose presence feels like peace, comfort, warmth, love. And if destiny allows… I want this bond to grow that stays for a lifetime. You are not just someone in my life, You are someone my heart quietly says in a way it never cared me anyone before like u. Yours lovingly ~ Nikki"
  useEffect(() => {
    if (!inView) return

    let currentIndex = 0
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, currentIndex))
      currentIndex++
      if (currentIndex > fullText.length) clearInterval(interval)
    }, 30)

    return () => clearInterval(interval)
  }, [inView])

  return (
    <section ref={ref} className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800"
      >
        A Letter for You 💌
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="paper-texture bg-linear-to-br from-yellow-50 to-pink-50 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden border-2 border-pink-200/50"
      >
        <motion.div
          className="absolute top-0 right-0 text-6xl opacity-20"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          📝
        </motion.div>

        <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap font-serif">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>
      </motion.div>
    </section>
  )
}
