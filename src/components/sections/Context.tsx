'use client'

import { motion } from 'motion/react'

export default function Context() {
  return (
    <div data-section-wrapper="context" className="mb-6 sm:mx-6">
      <section id="opportunity" data-debug="context-section" className="py-6 sm:px-6">
      <div className="max-w-[720px] mx-auto">
        {/* Section Label */}
        <motion.p
          data-debug="context-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-purple-muted uppercase tracking-[0.2em] text-xs mb-4"
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
          className="text-purple-deep text-[clamp(32px,5vw,44px)] font-bold leading-[1.15] mb-8"
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
          className="text-purple-muted text-lg leading-[1.75] mb-8"
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
          className="text-purple-muted text-lg font-semibold leading-[1.75] mb-4"
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
          className="text-purple-muted text-lg leading-[1.75] mb-8"
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
          className="text-purple-punchline text-xl font-semibold leading-[1.6] mb-12"
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
          className="gradient-hero rounded-[44px] p-6"
        >
          <div className="glass rounded-xl py-5 px-6">
            <p className="text-white text-base leading-[1.75] m-0">
              The companies that master the PLG-to-enterprise handoff — Figma (132% NRR), Datadog (54% using 4+ products), Slack (93% of $100K+ customers started bottom-up) — all share one thing: lifecycle marketing is the engine, not a support function.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  )
}
