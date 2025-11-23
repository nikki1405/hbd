"use client"

import { useEffect, useState } from "react"

const COLORS = ["#ec4899", "#a855f7", "#f0abfc", "#87ceeb", "#e9d5ff"]

function makeDeterministicBalloons(count = 15) {
  // Deterministic initial values so SSR and initial client render match
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    color: COLORS[i % COLORS.length],
    left: `${((i * 37) % 97).toFixed(6)}%`,
    delay: (0).toFixed(6),
    duration: (8).toFixed(6),
  }))
}

export default function BalloonBackground() {
  const [balloons, setBalloons] = useState(() => makeDeterministicBalloons())

  useEffect(() => {
    // Run only on client after hydration — safe to use Math.random here
    setBalloons((prev) =>
      prev.map((b) => ({
        ...b,
        left: `${(Math.random() * 100).toFixed(6)}%`,
        delay: (Math.random() * 5).toFixed(6),
        duration: (8 + Math.random() * 4).toFixed(6),
      }))
    )
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="balloon absolute w-12 h-12 rounded-full opacity-60"
          style={{
            backgroundColor: balloon.color,
            left: balloon.left,
            animationDelay: `${balloon.delay}s`,
            animationDuration: `${balloon.duration}s`,
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  )
}
