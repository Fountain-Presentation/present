'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/cn'

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
    <section data-debug="metrics-section" className="p-6">
      <div className="max-w-[896px] mx-auto">
        {/* Section Label */}
        <motion.p
          data-debug="metrics-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-muted uppercase tracking-[0.2em] text-xs mb-4"
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
          className="text-purple-deep text-[clamp(32px,5vw,44px)] font-bold leading-[1.15] mb-8"
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
          className="text-muted text-lg leading-[1.75] mb-16 max-w-[640px]"
        >
          Each stage has a leading indicator that predicts momentum and a lagging outcome that confirms it. Here's how I'd know if the flywheel is spinning.
        </motion.p>

        {/* Metric Rows */}
        {metricRows.map((row, rowIndex) => (
          <div key={row.header} data-debug={`metrics-row-${row.header.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className={rowIndex < metricRows.length - 1 ? "mb-12" : ""}>
            {/* Row Header */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-purple-muted text-[11px] tracking-[0.15em] mb-4"
            >
              {row.header}
            </motion.p>

            {/* Cards Grid */}
            <div
              data-metrics-grid
              className="grid grid-cols-3 max-sm:grid-cols-1 gap-4"
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
                    className="bg-white rounded-[44px] p-6 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] relative cursor-default transition-shadow"
                  >
                    {/* Indicator Dot */}
                    <div
                      data-metric-dot
                      className={cn(
                        "absolute top-6 right-6 w-2 h-2 rounded-full",
                        card.type === 'leading' ? "bg-accent" : "bg-accent-warm"
                      )}
                    />

                    {/* Metric Name */}
                    <h3 className="text-purple-deep text-base font-semibold mb-2 pr-6">
                      {card.name}
                    </h3>

                    {/* Description */}
                    <p className="text-purple-muted text-sm mb-4">
                      {card.description}
                    </p>

                    {/* Target Value */}
                    <p className="text-purple-deep text-sm font-medium">
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
          className="flex gap-6 mt-8 justify-end"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-muted text-xs">
              Leading indicator
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-warm" />
            <span className="text-muted text-xs">
              Lagging outcome
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
