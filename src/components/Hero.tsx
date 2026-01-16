'use client'

import { motion } from 'framer-motion'
import RotatingWord from './RotatingWord'

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
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center"
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
        >
          Do you need a{' '}
          <RotatingWord
            words={['stunning', 'high-performing', 'lead-generating', 'optimised', 'secure']}
            className="gradient-text glow-cyan"
          />
          {' '}website?
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-inter font-semibold text-dark-text mb-6"
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text glow-cyan">David Banjo</span>
          {' '}— Full-Stack Developer
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-dark-muted max-w-3xl mx-auto mb-10 leading-relaxed"
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

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent"></div>
    </section>
  )
}

export default Hero

