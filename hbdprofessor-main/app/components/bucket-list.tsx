"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

const bucketListItems = [
  { icon: "🔓", title: "Don’t hide yourself from me… be open and straightforward — I value your honesty more than anything" },
  { icon: "💛", title: "Never feel alone… I’m always here to listen to you — just feel my company, even in silence." },
  { icon: "❤️", title: "Never think you’re disturbing me… you’re not an interruption, you’re my priority" },
  { icon: "🕉️", title: "Always stay happy…Lord Shiva’s blessings always keep your heart peaceful and your smile forever bright" },
  { icon: "🔐", title: "Never hesitate to tell me anything either about college or personal, you can trust me not just 100%, but 1000%." },
  { icon: "🥲", title: "Heartfelt sorry if I ever  disturb you and hurt you unknowingly your feelings matter to me more" },
]

export default function BucketList() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [completed, setCompleted] = useState<number[]>([])

  const toggleComplete = (index: number) => {
    setCompleted((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
      >
       💛Things I Want You to Know 
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bucketListItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => toggleComplete(index)}
            className="relative cursor-pointer"
          >
            <motion.div
              animate={completed.includes(index) ? { scale: 1.05, rotate: 5 } : {}}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${
                completed.includes(index) ? "ring-2 ring-green-400 bg-green-50" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl">{item.icon}</span>
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={completed.includes(index) ? { scale: 1.05, rotate: 5, opacity: 1 } : { opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`text-green-500 text-2xl transition-opacity duration-200 ${
                    completed.includes(index) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  ✓
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
            </motion.div>

            {completed.includes(index) && (
              <motion.div
                layoutId={`line-${index}`}
                className="absolute inset-x-0 top-1/2 h-0.5 bg-linear-to-r from-green-400 to-green-600"
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
