"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-linear-to-r from-pink-100 via-purple-100 to-pink-100 py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Made with lots of ❤️ from your best buddy</p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-md ring-2 ring-white">
              <Image src="/placeholder-user.jpg" alt="Nikki" width={80} height={80} className="object-cover" />
            </div>
            <p className="text-gray-800 text-2xl md:text-3xl font-semibold">~Nikki</p>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="text-4xl mb-8"
          >
            🎉✨💕
          </motion.div>

          <p className="text-sm text-gray-500">"Life is a celebration, and you make every moment special!"</p>
        </motion.div>
      </div>
    </footer>
  )
}
