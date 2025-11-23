"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const artworks = [
  {
    id: 1,
    title: "✨Devotional – You carry a pure faith that reflects beautifully in everything you do.",
    image: "/v1.jpg",
  },
  {
    id: 2,
    title: "🌿 Positive – You bring a calming, uplifting vibe wherever you go.",
    image: "/v2.jpg",
  },
  {
    id: 3,
    title: "❤️ Kind-Hearted – You treat everyone with genuine warmth and care",
    image: "/v3.jpg",
  },
  {
    id: 4,
    title: "😇 Humble – You stay grounded… no ego, no attitude, just simplicity.",
    image: "/v4.jpg",
  },
  {
    id: 5,
    title: "🌊 Easy-Going – You’re always chilled and know how to enjoy every moment.",
    image: "/starry-night-sky-painting.jpg",
  },
  {
    id: 6,
    title: "🤝 Bond-Builder – You maintain happy bonds with everyone and never disappoint anyone.",
    image: "/v5.jpg",
  },
]

export default function ArtGallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800"
      >
        The Heart of Vishu🥰🥰
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        className="text-center text-gray-600 mb-16 text-lg"
      >
    Vishu that I know — a pure man where positivity ✨, patience 🧘‍♂️, love ❤️, care 🤗, trust 🤝, and warmth 🌿 come together to make every moment feel better

      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((artwork, index) => (
          <motion.div
            key={artwork.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-white"
          >
            <div className="relative h-64 w-full overflow-hidden bg-linear-to-br from-purple-100 to-pink-100">
              <img
                src={artwork.image || "/placeholder.svg"}
                alt={artwork.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{artwork.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
