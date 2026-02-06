'use client'

import { motion } from 'motion/react'

export default function Context() {
  return (
    <div data-section-wrapper="context" className="mb-6 sm:mx-6">
      <section id="opportunity" data-debug="context-section" className="py-6 sm:px-6">
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        {/* Section Label */}
        <motion.p
          data-debug="context-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-general-sans)',
            color: '#7b6baa',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontSize: '12px',
            marginBottom: '16px'
          }}
        >
          01 — The Opportunity
        </motion.p>

        {/* Bold Headline */}
        <motion.h2
          data-debug="context-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-general-sans)',
            color: '#2b145c',
            fontSize: 'clamp(32px, 5vw, 44px)',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: '32px'
          }}
        >
          A decade of dominance.
          <br />
          Now, the next chapter.
        </motion.h2>

        {/* Body Paragraph 1 */}
        <motion.p
          data-debug="context-body-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-general-sans)',
            color: '#7b6baa',
            fontSize: '18px',
            lineHeight: '1.75',
            marginBottom: '32px'
          }}
        >
          Fountain has spent a decade building the definitive hiring platform for frontline workers — 8.7-day average time-to-hire, 1M+ applications monthly, clients like Chipotle and UPS.
        </motion.p>

        {/* Accent Subheading */}
        <motion.p
          data-debug="context-body-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontFamily: 'var(--font-general-sans)',
            color: '#7b6baa',
            fontSize: '18px',
            fontWeight: 600,
            lineHeight: '1.75',
            marginBottom: '16px'
          }}
        >
          But the next phase of growth isn't about adding more sales reps.
        </motion.p>

        {/* Body Paragraph 2 */}
        <motion.p
          data-debug="context-body-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            fontFamily: 'var(--font-general-sans)',
            color: '#7b6baa',
            fontSize: '18px',
            lineHeight: '1.75',
            marginBottom: '32px'
          }}
        >
          With Project Nova proving that a product-led approach can acquire customers without a sales conversation, the question becomes: how do you build the lifecycle marketing engine that turns self-serve signups into enterprise revenue?
        </motion.p>

        {/* Punchline */}
        <motion.p
          data-debug="context-body-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontFamily: 'var(--font-general-sans)',
            color: '#2c0976',
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '1.6',
            marginBottom: '48px'
          }}
        >
          That's a land-and-expand problem. And it's the most interesting growth challenge in HR tech right now.
        </motion.p>

        {/* Breakout Callout */}
        <motion.div
          data-debug="context-callout"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            background: 'linear-gradient(to bottom right, #3B82F6 0%, #4F46E5 30%, #7C3AED 60%, #6B21A8 85%, #581C87 100%)',
            borderRadius: '44px',
            padding: '24px'
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              padding: '20px 24px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-general-sans)',
                color: '#FFFFFF',
                fontSize: '16px',
                lineHeight: '1.75',
                margin: 0
              }}
            >
              The companies that master the PLG-to-enterprise handoff — Figma (132% NRR), Datadog (54% using 4+ products), Slack (93% of $100K+ customers started bottom-up) — all share one thing: lifecycle marketing is the engine, not a support function.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  )
}
