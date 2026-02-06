'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const stages = [
  {
    number: '1',
    title: 'Acquire Franchisee',
    label: 'Targeted campaigns',
    tag: 'PLG',
    description: 'Individual franchise operator discovers Fountain through targeted content, peer referral, or industry event. They self-serve into a free trial. No sales conversation needed.',
    metric: 'Signup-to-activation rate'
  },
  {
    number: '2',
    title: 'Activate First Hire',
    label: 'Product-led onboarding',
    tag: 'PRODUCT',
    description: 'The operator posts their first job and receives their first qualified applicant. This is the "aha moment" — Fountain proves it\'s faster than their current process.',
    metric: 'Time-to-first-hire (target: under 48 hours)'
  },
  {
    number: '3',
    title: 'Prove Value',
    label: 'Data-driven retention',
    tag: 'DATA',
    description: 'Over weeks 2-8, lifecycle marketing reinforces value through usage reports, hiring velocity benchmarks, and optimization tips. The operator sees measurable improvement.',
    metric: '30-day retention rate'
  },
  {
    number: '4',
    title: 'Build Champions',
    label: 'Lifecycle expansion',
    tag: 'LIFECYCLE',
    description: 'As one franchisee succeeds, lifecycle marketing identifies other operators in the same network. Champions get shareable ROI snapshots and referral incentives. The account becomes a PQA when 3+ locations are active.',
    metric: 'Network penetration rate, PQA score'
  },
  {
    number: '5',
    title: 'Expand to Corporate',
    label: 'Enterprise handoff',
    tag: 'SLG',
    description: 'Once a franchise network hits the PQA threshold, sales receives a warm handoff with full context: active locations, results achieved, champion contacts. The conversation shifts from discovery to standardization.',
    metric: 'PQA-to-enterprise conversion rate'
  }
]

const tagColors: Record<string, { bg: string; text: string }> = {
  PLG: { bg: '#DBEAFE', text: '#1D4ED8' },
  PRODUCT: { bg: '#F3E8FF', text: '#7C3AED' },
  DATA: { bg: '#D1FAE5', text: '#059669' },
  LIFECYCLE: { bg: '#FEF3C7', text: '#D97706' },
  SLG: { bg: '#FCE7F3', text: '#DB2777' }
}

interface StageCardProps {
  stage: typeof stages[0]
  index: number
  isExpanded: boolean
  isLocked: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick: () => void
  flex?: number
}

function StageCard({ stage, isExpanded, isLocked, onMouseEnter, onMouseLeave, onClick, flex = 1 }: StageCardProps) {
  return (
    <motion.div
      data-debug={`framework-card-${stage.number}`}
      layout
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        flex,
        backgroundColor: isExpanded ? '#F8FAFC' : '#FFFFFF',
        borderRadius: '44px',
        padding: '24px',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'background-color 0.2s ease',
        boxShadow: isExpanded
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        overflow: 'hidden'
      }}
    >
      <p style={{ fontFamily: 'var(--font-general-sans)', color: '#D1D5DB', fontSize: '18px', fontWeight: 300, marginBottom: '8px' }}>
        {stage.number}
      </p>
      <h3 style={{ fontFamily: 'var(--font-general-sans)', color: '#2b145c', fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>
        {stage.title}
      </h3>
      <p style={{ fontFamily: 'var(--font-general-sans)', color: '#7b6baa', fontSize: '13px', marginBottom: '12px' }}>
        {stage.label}
      </p>
      <span style={{ display: 'inline-block', backgroundColor: tagColors[stage.tag].bg, color: tagColors[stage.tag].text, fontFamily: 'var(--font-general-sans)', fontSize: '10px', fontWeight: 600, padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.05em' }}>
        {stage.tag}
      </span>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingTop: '16px', borderTop: '1px solid #E5E7EB', marginTop: '16px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-general-sans)',
                  color: '#7b6baa',
                  fontSize: '14px',
                  lineHeight: '1.65',
                  marginBottom: '12px'
                }}
              >
                {stage.description}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontFamily: 'var(--font-general-sans)', color: '#7b6baa', fontSize: '12px' }}>
                  Key metric:
                </span>
                <span style={{ fontFamily: 'var(--font-general-sans)', color: '#2b145c', fontSize: '12px', fontWeight: 600 }}>
                  {stage.metric}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Framework() {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null)
  const [lockedStage, setLockedStage] = useState<number | null>(null)

  const isExpanded = (index: number) => hoveredStage === index || lockedStage === index

  const handleMouseEnter = (index: number) => setHoveredStage(index)
  const handleMouseLeave = () => setHoveredStage(null)
  const handleClick = (index: number) => setLockedStage(lockedStage === index ? null : index)

  return (
    <section data-debug="framework-section" style={{ padding: '24px' }}>
      {/* Text content - narrower */}
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        {/* Section Label */}
        <motion.p
          data-debug="framework-label"
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
          02 — The Framework
        </motion.p>

        {/* Bold Headline */}
        <motion.h2
          data-debug="framework-title"
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
          One operator becomes
          <br />
          an enterprise deal.
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          data-debug="framework-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-general-sans)',
            color: '#7b6baa',
            fontSize: '18px',
            lineHeight: '1.75',
            marginBottom: '64px'
          }}
        >
          The land-and-expand playbook follows five stages. Each stage builds on the last — the output of one becomes the input of the next. That's what makes it a flywheel, not a funnel.
        </motion.p>
      </div>

      {/* Flywheel Diagram */}
      <div data-framework-container style={{ maxWidth: '720px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Grid layout: Row 1 (1&2), Row 2 (3), Row 3 (4&5) */}
          <div data-debug="framework-grid" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Row 1: Cards 1 & 2 */}
            <div data-framework-row style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              {[0, 1].map((index) => (
                <StageCard
                  key={stages[index].number}
                  stage={stages[index]}
                  index={index}
                  isExpanded={isExpanded(index)}
                  isLocked={lockedStage === index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(index)}
                />
              ))}
            </div>

            {/* Row 2: Card 3 (full width) */}
            <StageCard
              stage={stages[2]}
              index={2}
              isExpanded={isExpanded(2)}
              isLocked={lockedStage === 2}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(2)}
            />

            {/* Row 3: Cards 4 & 5 */}
            <div data-framework-row style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              {[3, 4].map((index) => (
                <StageCard
                  key={stages[index].number}
                  stage={stages[index]}
                  index={index}
                  isExpanded={isExpanded(index)}
                  isLocked={lockedStage === index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
