'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

const CalendlyEmbed = () => {
  // Replace with your actual Calendly URL
  const CALENDLY_URL = 'https://calendly.com/dbinnovates/30min'

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="booking" className="section-padding bg-dark-bg">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold mb-4">
              Schedule a <span className="gradient-text">Free Consultation</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-neon mx-auto rounded-full mb-6"></div>
            <p className="text-dark-muted text-lg max-w-2xl mx-auto">
              Book a 30-minute discovery call to discuss your project needs and how I can help
            </p>
          </div>

          {/* Calendly Embed */}
          <div className="bg-dark-surface rounded-2xl p-4 border border-dark-border overflow-hidden">
            {/* 
              Calendly inline widget embed 
              Replace CALENDLY_URL with your actual Calendly link
            */}
            <div
              className="calendly-inline-widget"
              data-url={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=151515&text_color=e5e5e5&primary_color=00baff`}
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>

          {/* Alternative CTA if Calendly doesn't load */}
          <div className="text-center mt-8">
            <p className="text-dark-muted text-sm mb-4">
              Calendar not loading?{' '}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-cyan hover:underline"
              >
                Open in new window
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-dark-muted text-sm">
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-accent-cyan"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Free 30-min session
              </span>
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-accent-cyan"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                No commitment required
              </span>
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-accent-cyan"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Instant confirmation
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CalendlyEmbed

