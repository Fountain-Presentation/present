'use client'

import { motion } from 'motion/react'

export default function Closer() {
  return (
    <section data-debug="closer-section" style={{ minHeight: '100vh', padding: '128px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        {/* Horizontal Rule */}
        <div
          data-debug="closer-divider"
          style={{
            height: '1px',
            backgroundColor: '#E5E7EB',
            marginBottom: '64px'
          }}
        />

        {/* Main Paragraph */}
        <motion.p
          data-debug="closer-body-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-general-sans)',
            color: '#1A1A1A',
            fontSize: '18px',
            lineHeight: '1.75',
            marginBottom: '24px'
          }}
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
          style={{
            fontFamily: 'var(--font-general-sans)',
            color: '#6B7280',
            fontSize: '18px',
            lineHeight: '1.75',
            marginBottom: '48px'
          }}
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
          <p
            style={{
              fontFamily: 'var(--font-general-sans)',
              color: '#1A1A1A',
              fontSize: '20px',
              fontWeight: 600,
              marginBottom: '8px'
            }}
          >
            — Logan
          </p>
          <a
            href="https://www.linkedin.com/in/connerloganbell/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-general-sans)',
              color: '#0066FF',
              fontSize: '14px',
              textDecoration: 'none'
            }}
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
        style={{
          marginTop: '96px',
          textAlign: 'center'
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-general-sans)',
            color: '#9CA3AF',
            fontSize: '12px'
          }}
        >
          Built with Next.js and Claude. February 2026.
        </p>
      </motion.footer>
    </section>
  )
}
