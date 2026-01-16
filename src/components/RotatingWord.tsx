'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

interface RotatingWordProps {
  words: string[]
  intervalMs?: number
  className?: string
}

const RotatingWord = ({
  words,
  intervalMs = 2000,
  className = '',
}: RotatingWordProps) => {
  const [index, setIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, intervalMs)

    return () => clearInterval(interval)
  }, [words.length, intervalMs])

  // Animation variants
  const variants = shouldReduceMotion
    ? {
        enter: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        enter: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 60,
            damping: 18,
          },
        },
        exit: {
          opacity: 0,
          y: -18,
          transition: {
            duration: 0.35,
            ease: 'easeOut',
          },
        },
      }

  return (
    <span
      className={`min-w-[16ch] whitespace-nowrap flex justify-center items-center ${className}`}
      style={{ verticalAlign: 'middle' }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial="exit"
          animate="enter"
          exit="exit"
          variants={variants}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default RotatingWord
