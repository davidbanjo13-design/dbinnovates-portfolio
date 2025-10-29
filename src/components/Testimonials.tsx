'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { testimonials } from '@/lib/data'

const Testimonials = () => {
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
    <section id="testimonials" className="section-padding bg-dark-bg">
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
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-neon mx-auto rounded-full mb-6"></div>
            <p className="text-dark-muted text-lg max-w-2xl mx-auto">
              Don&apos;t just take my word for it - hear from clients I&apos;ve worked with
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="h-full bg-dark-surface rounded-2xl p-8 border border-dark-border hover:border-accent-cyan transition-all duration-300 card-hover">
                  {/* Quote Icon */}
                  <div className="text-accent-cyan text-5xl mb-4 opacity-50">&quot;</div>

                  {/* Testimonial Content */}
                  <p className="text-dark-muted mb-6 leading-relaxed italic">
                    {testimonial.content}
                  </p>

                  {/* Rating Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-accent-cyan"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-dark-border">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent-cyan/30">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-text">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-dark-muted">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges / Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div className="p-6 bg-dark-surface rounded-xl border border-dark-border">
              <div className="text-3xl font-grotesk font-bold gradient-text mb-2">
                100%
              </div>
              <div className="text-dark-muted text-sm">Client Satisfaction</div>
            </div>
            <div className="p-6 bg-dark-surface rounded-xl border border-dark-border">
              <div className="text-3xl font-grotesk font-bold gradient-text mb-2">
                24/7
              </div>
              <div className="text-dark-muted text-sm">Support Available</div>
            </div>
            <div className="p-6 bg-dark-surface rounded-xl border border-dark-border">
              <div className="text-3xl font-grotesk font-bold gradient-text mb-2">
                95%
              </div>
              <div className="text-dark-muted text-sm">On-Time Delivery</div>
            </div>
            <div className="p-6 bg-dark-surface rounded-xl border border-dark-border">
              <div className="text-3xl font-grotesk font-bold gradient-text mb-2">
                5★
              </div>
              <div className="text-dark-muted text-sm">Average Rating</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

