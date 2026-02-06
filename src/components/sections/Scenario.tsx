'use client'

import { motion } from 'motion/react'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/cn'

const phases = [
  {
    time: 'MONTH 1-2',
    title: 'Seed the Network',
    bullets: [
      'Targeted campaigns to McDonald\'s franchise operators in 2-3 high-density metros: Chicago, Dallas, Atlanta',
      'Channel mix: LinkedIn targeting by title + franchise association partnerships + QSR industry content',
      'Landing pages speak franchisee language: "Hire shift workers in days, not weeks. See it work at your location."',
      'Lifecycle trigger: Signup to immediate onboarding focused on posting first job within 15 minutes'
    ]
  },
  {
    time: 'MONTH 2-4',
    title: 'Activate and Retain',
    bullets: [
      'Behavioral emails based on product milestones, not time delays',
      'First hire made triggers: "You just hired 4x faster than the QSR average"',
      'Week 3 with no second posting triggers re-engagement with peer benchmarks',
      'Monthly ROI snapshots auto-generated from usage data'
    ]
  },
  {
    time: 'MONTH 3-5',
    title: 'Champion Development',
    bullets: [
      'Identify top-performing operators by hiring speed and retention',
      'Send shareable content: "You\'ve saved 142 hiring days this quarter"',
      'Referral program: "Know other operators who need faster hiring?"',
      'PQA scoring triggers when 5+ McDonald\'s locations are active independently'
    ]
  },
  {
    time: 'MONTH 5-7',
    title: 'Enterprise Handoff',
    bullets: [
      'PQA threshold met — sales receives full account brief',
      'Brief includes: active locations, aggregate metrics, champion contacts with engagement scores',
      'Sales outreach: "12 of your franchisees average 9-day time-to-hire vs. your network\'s 34-day average"',
      'The conversation is about standardization, not discovery'
    ]
  }
]

export default function Scenario() {
  return (
    <div data-scenario-wrapper className="p-6">
      <section data-debug="scenario-section" data-scenario-card className="gradient-scenario text-dark-text p-6 rounded-2xl">
        <div className="max-w-[768px] mx-auto">
        {/* Section Label */}
        <motion.p
          data-debug="scenario-label"
          className="md:mt-12 text-gray-400 uppercase tracking-[0.2em] text-xs mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          03 — Applied: The McDonald's Play
        </motion.p>

        {/* Section Title */}
        <motion.h2
          data-debug="scenario-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[40px] font-semibold text-white mb-6 leading-[1.2]"
        >
          Land One Location, Win the Network
        </motion.h2>

        {/* Intro Line */}
        <motion.p
          data-debug="scenario-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg leading-[1.75] text-dark-text mb-16"
        >
          Here's how the lifecycle engine would power that motion:
        </motion.p>

        {/* Vertical Timeline */}
        <div data-debug="scenario-timeline" className="relative">
          {/* Timeline Line — keeps inline style for Framer Motion scaleY animation */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              position: 'absolute',
              left: '20px',
              top: '20px',
              bottom: '20px',
              width: '2px',
              backgroundColor: '#FFFFFF',
              transformOrigin: 'top'
            }}
          />

          {/* Phases */}
          {phases.map((phase, index) => (
            <motion.div
              key={phase.time}
              data-debug={`scenario-phase-${index + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className={cn(
                "relative pt-12 pl-10",
                index < phases.length - 1 ? "pb-12" : "pb-0"
              )}
            >
              {/* Glassmorphic Time Label Pill */}
              <div className="absolute left-0 top-0 flex items-center gap-2 glass-pill py-2 px-4">
                {/* Dot inside pill */}
                <div className="w-2 h-2 bg-white rounded-full shrink-0" />
                <span className="text-white text-[11px] font-medium tracking-[0.1em] whitespace-nowrap">
                  {phase.time}
                </span>
              </div>

              {/* Phase Title */}
              <h3 className="text-white text-[22px] font-semibold mb-4">
                {phase.title}
              </h3>

              {/* Bullet Points */}
              <ul className="list-none p-0 m-0">
                {phase.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="flex items-start gap-2 mb-3"
                  >
                    <ChevronRight
                      size={16}
                      className="text-muted mt-1 shrink-0"
                    />
                    <span className="text-gray-300 text-base leading-[1.6]">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        </div>
      </section>
    </div>
  )
}
