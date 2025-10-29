'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { skills } from '@/lib/data'

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  }

  return (
    <section id="about" className="section-padding bg-dark-surface">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-neon mx-auto rounded-full"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-neon rounded-2xl opacity-20 blur-2xl"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-accent-cyan/30">
                  <Image
                    src="/portfolio.JPG"
                    alt="David Banjo - Full-Stack Developer"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-dark-text">
                Crafting Digital Experiences
              </h3>
              <p className="text-dark-muted text-lg leading-relaxed">
                I&apos;m a passionate full-stack developer specializing in building modern,
                scalable web and mobile applications. With expertise in React, Next.js, and AI
                integration, I transform complex problems into elegant solutions.
              </p>
              <p className="text-dark-muted text-lg leading-relaxed">
                My approach combines technical excellence with creative problem-solving. Whether
                it&apos;s a sleek web app, a cross-platform mobile solution, or an AI-powered
                automation system, I deliver results that exceed expectations.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-grotesk font-bold gradient-text mb-2">
                    50+
                  </div>
                  <div className="text-dark-muted text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-grotesk font-bold gradient-text mb-2">
                    30+
                  </div>
                  <div className="text-dark-muted text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-grotesk font-bold gradient-text mb-2">
                    5+
                  </div>
                  <div className="text-dark-muted text-sm">Years Experience</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a href="#contact" className="btn-primary inline-block">
                  Let&apos;s Work Together
                </a>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-center mb-12">
              Technical <span className="gradient-text">Skills</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="bg-dark-bg rounded-xl p-6 border border-dark-border hover:border-accent-cyan transition-all duration-300 card-hover">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="text-3xl mb-2">{getSkillIcon(skill.name)}</div>
                      <h4 className="font-semibold text-dark-text">{skill.name}</h4>
                      {/* Skill level bar */}
                      <div className="w-full bg-dark-surface rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-neon rounded-full"
                        />
                      </div>
                      <span className="text-xs text-dark-muted">{skill.level}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Helper function to get skill icons (you can customize these)
const getSkillIcon = (skillName: string) => {
  const icons: { [key: string]: string } = {
    React: '⚛️',
    'Next.js': '▲',
    TypeScript: '📘',
    'Node.js': '🟢',
    Python: '🐍',
    'React Native': '📱',
    'Tailwind CSS': '🎨',
    PostgreSQL: '🐘',
    MongoDB: '🍃',
    Firebase: '🔥',
    AWS: '☁️',
    Docker: '🐳',
  }
  return icons[skillName] || '⚡'
}

export default About

