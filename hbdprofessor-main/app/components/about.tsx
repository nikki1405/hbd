"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-linear-to-br from-pink-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-lg"
      >
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="text-4xl"
          >
            ✨
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">My dear Professor😇</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              ✨ You're not just a birthday person today…
You’re someone with an incredible personality, a positive aura ✨ and a clean, disciplined lifestyle  that very few in our generation can even follow.
Honestly, the way you live your life is a big inspiration for me 🙌💚.

You are already a successful person 🌟
And I pray your future is filled with even more achievements, joy, and higher steps in life 🚀💫.

Wishing you all the best for everything ahead ❤️
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From Bottom of my heart, I’m wishing you a very, very Happy Birthday 🎉🎂💫
May God bless you with double the happiness you have given me 🤍🙏…
And may He gently heal every pain you’ve ever carried 💛🌼.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center md:justify-end"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white">
              <Image
                src="/placeholder-user.jpg"
                alt="Picture of friend"
                fill
                sizes="(max-width: 768px) 224px, 288px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
