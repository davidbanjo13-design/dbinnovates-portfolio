'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/data'

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="services" className="section-padding bg-dark-bg">
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
              My <span className="gradient-text">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-neon mx-auto rounded-full mb-6"></div>
            <p className="text-dark-muted text-lg max-w-2xl mx-auto">
              Comprehensive development solutions tailored to your business needs
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="h-full bg-dark-surface rounded-2xl p-8 border border-dark-border hover:border-accent-cyan transition-all duration-300 card-hover">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>

                  {/* Icon */}
                  <div className="relative text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-grotesk font-bold text-dark-text mb-4 group-hover:text-accent-cyan transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-dark-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-dark-muted"
                      >
                        <svg
                          className="w-5 h-5 text-accent-cyan mr-3 flex-shrink-0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <div className="mt-6 pt-6 border-t border-dark-border">
                    <a
                      href="#contact"
                      className="inline-flex items-center text-accent-cyan font-semibold group-hover:underline"
                    >
                      Get Started
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-dark-muted text-lg mb-6">
              Have a custom project in mind?
            </p>
            <a href="#contact" className="btn-primary">
              Let&apos;s Discuss Your Project
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

