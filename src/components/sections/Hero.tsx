'use client'

import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <div data-hero-wrapper className="hero-wrapper" style={{ margin: '24px', backgroundColor: '#F4F4F5' }}>
      <section
        data-debug="hero-section"
        style={{
          background: 'linear-gradient(to bottom right, #3B82F6 0%, #4F46E5 30%, #7C3AED 60%, #6B21A8 85%, #581C87 100%)',
          color: '#FFFFFF',
          minHeight: 'calc(100vh - 48px)',
          borderRadius: '16px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px',
          position: 'relative'
        }}
      >
        <div data-debug="hero-content" style={{ maxWidth: '896px', margin: '0 auto', textAlign: 'center' }}>
          {/* Eyebrow */}
          <motion.p
            data-debug="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-general-sans)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              fontSize: '12px',
              marginBottom: '16px',
              opacity: 0.8
            }}
          >
            Growth Strategy Brief — February 2026
          </motion.p>

          {/* Headline */}
          <motion.h1
            data-debug="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontFamily: 'var(--font-general-sans)',
              fontSize: 'clamp(40px, 6vw, 60px)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '24px',
              color: '#FFFFFF'
            }}
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
            style={{
              fontFamily: 'var(--font-general-sans)',
              fontSize: '18px',
              maxWidth: '640px',
              margin: '0 auto',
              opacity: 0.9
            }}
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
            style={{
              marginTop: '48px',
              padding: '16px 32px',
              fontFamily: 'var(--font-general-sans)',
              fontSize: '16px',
              fontWeight: 500,
              color: '#FFFFFF',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '100px',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transition: 'all 0.2s ease'
            }}
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
          style={{
            position: 'absolute',
            bottom: '48px',
            opacity: 0.7
          }}
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
