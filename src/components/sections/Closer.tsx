'use client'

import { motion } from 'motion/react'

export default function Closer() {
  return (
    <section data-debug="closer-section" className="min-h-screen px-6 py-32 flex flex-col justify-center">
      <div className="max-w-[720px] mx-auto">
        {/* Horizontal Rule */}
        <div
          data-debug="closer-divider"
          className="h-px bg-gray-200 mb-16"
        />

        {/* Main Paragraph */}
        <motion.p
          data-debug="closer-body-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-text text-lg leading-[1.75] mb-6"
        >
          I built this because I think better by building. Four years as a founder taught me that the best way to show how you think is to ship something.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          data-debug="closer-body-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted text-lg leading-[1.75] mb-12"
        >
          This isn't a finished strategy — it's a starting point for conversation. I'd love to go deeper on any of this with you.
        </motion.p>

        {/* Signature */}
        <motion.div
          data-debug="closer-signature"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-text text-xl font-semibold mb-2">
            — Logan
          </p>
          <a
            href="https://www.linkedin.com/in/connerloganbell/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm no-underline"
          >
            linkedin.com/in/connerloganbell
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        data-debug="closer-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-24 text-center"
      >
        <p className="text-gray-400 text-xs">
          Built with Next.js and Claude. February 2026.
        </p>
      </motion.footer>
    </section>
  )
}
