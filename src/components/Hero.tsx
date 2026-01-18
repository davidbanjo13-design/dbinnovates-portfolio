'use client'

import { motion } from 'framer-motion'
import RotatingWord from './RotatingWord'
import ShaderBackground from './hero/ShaderBackground'

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* 21st.dev Shader Background - ONLY background */}
      <ShaderBackground />

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          className="container-custom px-4 sm:px-6 lg:px-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-dark-surface border border-accent-cyan/30 text-accent-cyan text-sm font-medium mb-4">
            👋 Welcome to DBinnovates
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-grotesk font-bold mb-4"
          style={{ verticalAlign: 'top' }}
        >
          Do you need a{' '}
          <RotatingWord
            words={['stunning', 'high-performing', 'lead-generating', 'optimised', 'secure']}
            className="gradient-text glow-cyan"
          />
          {' '}website?
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-dark-muted max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{ 
            background: 'transparent !important',
            backgroundImage: 'none !important',
            backgroundColor: 'transparent',
            backgroundClip: 'border-box',
            WebkitBackgroundClip: 'border-box'
          }}
        >
          I build exceptional web applications, mobile apps, and AI-powered solutions that
          transform ideas into reality. Let&apos;s create something extraordinary together.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#projects" className="btn-primary w-full sm:w-auto">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary w-full sm:w-auto">
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center"
        >
          <p className="text-dark-muted text-sm mb-2">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg
              className="w-6 h-6 text-accent-cyan"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent"></div>
    </section>
  )
}

export default Hero

