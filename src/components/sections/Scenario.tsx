'use client'

import { motion } from 'motion/react'
import { ChevronRight } from 'lucide-react'

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
    <div data-scenario-wrapper style={{ padding: '24px' }}>
      <section data-debug="scenario-section" data-scenario-card style={{ background: 'linear-gradient(180deg, #1E2A5E 0%, #2D3A8C 30%, #3B4AAE 60%, #5B3D9E 85%, #7C5CB8 100%)', color: '#E6EDF3', padding: '24px', borderRadius: '16px' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto' }}>
        {/* Section Label */}
        <motion.p
          data-debug="scenario-label"
          className="md:mt-[48px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-general-sans)',
            color: '#9CA3AF',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontSize: '12px',
            marginBottom: '16px'
          }}
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
          style={{
            fontFamily: 'var(--font-general-sans)',
            fontSize: '40px',
            fontWeight: 600,
            color: '#FFFFFF',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}
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
          style={{
            fontFamily: 'var(--font-general-sans)',
            fontSize: '18px',
            lineHeight: '1.75',
            color: '#E6EDF3',
            marginBottom: '64px'
          }}
        >
          Here's how the lifecycle engine would power that motion:
        </motion.p>

        {/* Vertical Timeline */}
        <div data-debug="scenario-timeline" style={{ position: 'relative' }}>
          {/* Timeline Line */}
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
              style={{
                position: 'relative',
                paddingTop: '48px',
                paddingLeft: '40px',
                paddingBottom: index < phases.length - 1 ? '48px' : '0'
              }}
            >
              {/* Glassmorphic Time Label Pill */}
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '100px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  padding: '8px 16px'
                }}
              >
                {/* Dot inside pill */}
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '50%',
                    flexShrink: 0
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-general-sans)',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {phase.time}
                </span>
              </div>

              {/* Phase Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-general-sans)',
                  color: '#FFFFFF',
                  fontSize: '22px',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}
              >
                {phase.title}
              </h3>

              {/* Bullet Points */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {phase.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      marginBottom: '12px'
                    }}
                  >
                    <ChevronRight
                      size={16}
                      style={{
                        color: '#6B7280',
                        marginTop: '4px',
                        flexShrink: 0
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-general-sans)',
                        color: '#D1D5DB',
                        fontSize: '16px',
                        lineHeight: '1.6'
                      }}
                    >
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
