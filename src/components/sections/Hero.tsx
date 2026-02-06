'use client'

import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <div data-hero-wrapper className="hero-wrapper m-6 bg-zinc-100">
      <section
        data-debug="hero-section"
        className="gradient-hero text-white min-h-[calc(100vh-48px)] rounded-2xl overflow-hidden flex flex-col items-center justify-center py-20 px-6 relative"
      >
        <div data-debug="hero-content" className="max-w-[896px] mx-auto text-center">
          {/* Eyebrow */}
          <motion.p
            data-debug="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="uppercase tracking-[0.2em] text-xs mb-4 opacity-80"
          >
            Growth Strategy Brief — February 2026
          </motion.p>

          {/* Headline */}
          <motion.h1
            data-debug="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[clamp(40px,6vw,60px)] font-bold leading-[1.1] mb-6 text-white"
          >
            How I'd Build Fountain's
            <br />
            Land-and-Expand Engine
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            data-debug="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg max-w-[640px] mx-auto opacity-90"
          >
            A lifecycle marketing framework for turning individual franchise operators into enterprise contracts. By Logan.
          </motion.p>

          {/* Get Started Button */}
          <motion.button
            data-debug="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onClick={() => {
              document.getElementById('opportunity')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="mt-12 py-4 px-8 text-base font-medium text-white glass-pill cursor-pointer transition-all"
            whileHover={{
              background: 'rgba(255, 255, 255, 0.25)',
              scale: 1.02
            }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          data-debug="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-12 opacity-70"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <ChevronDown size={28} color="#FFFFFF" />
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
