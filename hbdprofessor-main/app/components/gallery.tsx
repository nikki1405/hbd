"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const photos = [
  { id: 1, src: "/birthday-celebration-party.jpg", alt: "Birthday celebration" },
  { id: 2, src: "/vishu.jpg", alt: "Friend portrait" },
  { id: 3, src: "/colorful-flowers-garden.jpg", alt: "Flowers garden" },
  { id: 4, src: "/beautiful-sunset-painting.jpg", alt: "Sunset painting" },
  { id: 5, src: "/starry-night-sky-painting.jpg", alt: "Starry night" },
  { id: 6, src: "/vishu2.jpg", alt: "Mountain landscape" },
  { id: 7, src: "/ocean-waves-abstract-art.jpg", alt: "Ocean waves" },
  { id: 8, src: "/urban-street-art-modern.jpg", alt: "Urban street art" },
  { id: 9, src: "/placeholder.jpg", alt: "Placeholder" },
]

export default function Gallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
      >
        Vishu-Verse
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative h-72 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          >
            <img
              src={photo.src}
              alt={photo.alt ?? `Gallery ${photo.id}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              className="absolute inset-0 rounded-2xl border-4 border-pink-300/50"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
