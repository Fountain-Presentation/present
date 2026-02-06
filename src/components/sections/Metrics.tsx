'use client'

import { motion } from 'motion/react'

const metricRows = [
  {
    header: 'ACQUISITION',
    cards: [
      { name: 'Signup Rate', description: 'Visitors to free accounts', target: 'Target: 4-6%', type: 'leading' },
      { name: 'CAC', description: 'Cost per activated user', target: 'Target: <$200', type: 'lagging' },
      { name: 'Channel Mix', description: 'Attribution by source', target: 'Organic vs Paid', type: 'leading' }
    ]
  },
  {
    header: 'ACTIVATION & RETENTION',
    cards: [
      { name: 'Time-to-First-Hire', description: 'Signup to first hire made', target: 'Target: <48 hours', type: 'leading' },
      { name: 'Activation Rate', description: '% reaching aha moment', target: 'Target: 30-40%', type: 'leading' },
      { name: '30-Day Retention', description: '% active after first month', target: 'Target: >60%', type: 'lagging' }
    ]
  },
  {
    header: 'EXPANSION & CONVERSION',
    cards: [
      { name: 'Network Penetration', description: 'Locations per franchise network', target: 'Target: 5+ = PQA', type: 'leading' },
      { name: 'PQA Score', description: 'Accounts hitting handoff threshold', target: 'Target: 50/quarter', type: 'lagging' },
      { name: 'Enterprise Conversion', description: 'PQA to closed enterprise deal', target: 'Target: 25-35%', type: 'lagging' }
    ]
  }
]

export default function Metrics() {
  let cardIndex = 0

  return (
    <section data-debug="metrics-section" style={{ padding: '24px' }}>
      <div style={{ maxWidth: '896px', margin: '0 auto' }}>
        {/* Section Label */}
        <motion.p
          data-debug="metrics-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-general-sans)',
            color: '#6B7280',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontSize: '12px',
            marginBottom: '16px'
          }}
        >
          04 — Metrics
        </motion.p>

        {/* Title */}
        <motion.h2
          data-debug="metrics-title"
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
          Tracking the Flywheel
        </motion.h2>

        {/* Intro Line */}
        <motion.p
          data-debug="metrics-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-general-sans)',
            color: '#6B7280',
            fontSize: '18px',
            lineHeight: '1.75',
            marginBottom: '64px',
            maxWidth: '640px'
          }}
        >
          Each stage has a leading indicator that predicts momentum and a lagging outcome that confirms it. Here's how I'd know if the flywheel is spinning.
        </motion.p>

        {/* Metric Rows */}
        {metricRows.map((row, rowIndex) => (
          <div key={row.header} data-debug={`metrics-row-${row.header.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} style={{ marginBottom: rowIndex < metricRows.length - 1 ? '48px' : '0' }}>
            {/* Row Header */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-general-sans)',
                color: '#7b6baa',
                fontSize: '11px',
                letterSpacing: '0.15em',
                marginBottom: '16px'
              }}
            >
              {row.header}
            </motion.p>

            {/* Cards Grid */}
            <div
              data-metrics-grid
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px'
              }}
            >
              {row.cards.map((card) => {
                const currentIndex = cardIndex++
                return (
                  <motion.div
                    key={card.name}
                    data-debug={`metrics-card-${card.name.toLowerCase().replace(/ /g, '-')}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1 + (currentIndex % 3) * 0.1 }}
                    whileHover={{
                      y: -2,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    }}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '44px',
                      padding: '24px',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                      position: 'relative',
                      cursor: 'default',
                      transition: 'box-shadow 0.2s ease'
                    }}
                  >
                    {/* Indicator Dot */}
                    <div
                      data-metric-dot
                      style={{
                        position: 'absolute',
                        top: '24px',
                        right: '24px',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: card.type === 'leading' ? '#0066FF' : '#F59E0B'
                      }}
                    />

                    {/* Metric Name */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-general-sans)',
                        color: '#2b145c',
                        fontSize: '16px',
                        fontWeight: 600,
                        marginBottom: '8px',
                        paddingRight: '24px'
                      }}
                    >
                      {card.name}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: 'var(--font-general-sans)',
                        color: '#7b6baa',
                        fontSize: '14px',
                        marginBottom: '16px'
                      }}
                    >
                      {card.description}
                    </p>

                    {/* Target Value */}
                    <p
                      style={{
                        fontFamily: 'var(--font-general-sans)',
                        color: '#2b145c',
                        fontSize: '14px',
                        fontWeight: 500
                      }}
                    >
                      {card.target}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        ))}

        {/* Legend */}
        <motion.div
          data-debug="metrics-legend"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'flex',
            gap: '24px',
            marginTop: '32px',
            justifyContent: 'flex-end'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#0066FF'
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-general-sans)',
                color: '#6B7280',
                fontSize: '12px'
              }}
            >
              Leading indicator
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#F59E0B'
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-general-sans)',
                color: '#6B7280',
                fontSize: '12px'
              }}
            >
              Lagging outcome
            </span>
          </div>
        </motion.div>
      </div>

      {/* Responsive styles for mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
