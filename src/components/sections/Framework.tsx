'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/cn'

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

const tagStyles: Record<string, string> = {
  PLG: 'bg-blue-100 text-blue-700',
  PRODUCT: 'bg-purple-100 text-violet-600',
  DATA: 'bg-emerald-100 text-emerald-600',
  LIFECYCLE: 'bg-amber-100 text-amber-600',
  SLG: 'bg-pink-100 text-pink-600'
}

interface StageCardProps {
  stage: typeof stages[0]
  index: number
  isExpanded: boolean
  isLocked: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick: () => void
}

function StageCard({ stage, isExpanded, isLocked, onMouseEnter, onMouseLeave, onClick }: StageCardProps) {
  return (
    <motion.div
      data-debug={`framework-card-${stage.number}`}
      layout
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "flex-1 rounded-[44px] p-6 cursor-pointer text-left transition-colors overflow-hidden",
        isExpanded
          ? "bg-slate-50 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]"
          : "bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]"
      )}
    >
      <p className="text-gray-300 text-lg font-light mb-2">
        {stage.number}
      </p>
      <h3 className="text-purple-deep text-base font-semibold mb-1">
        {stage.title}
      </h3>
      <p className="text-purple-muted text-[13px] mb-3">
        {stage.label}
      </p>
      <span className={cn(
        "inline-block text-[10px] font-semibold py-1 px-2 rounded tracking-[0.05em]",
        tagStyles[stage.tag]
      )}>
        {stage.tag}
      </span>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-gray-200 mt-4">
              <p className="text-purple-muted text-sm leading-[1.65] mb-3">
                {stage.description}
              </p>
              <div className="flex items-center gap-1.5">
                <span className="text-purple-muted text-xs">
                  Key metric:
                </span>
                <span className="text-purple-deep text-xs font-semibold">
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
    <section data-debug="framework-section" className="p-6">
      {/* Text content - narrower */}
      <div className="max-w-[720px] mx-auto">
        {/* Section Label */}
        <motion.p
          data-debug="framework-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-purple-muted uppercase tracking-[0.2em] text-xs mb-4"
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
          className="text-purple-deep text-[clamp(32px,5vw,44px)] font-bold leading-[1.15] mb-8"
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
          className="text-purple-muted text-lg leading-[1.75] mb-16"
        >
          The land-and-expand playbook follows five stages. Each stage builds on the last — the output of one becomes the input of the next. That's what makes it a flywheel, not a funnel.
        </motion.p>
      </div>

      {/* Flywheel Diagram */}
      <div data-framework-container className="max-w-[720px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Grid layout: Row 1 (1&2), Row 2 (3), Row 3 (4&5) */}
          <div data-debug="framework-grid" className="flex flex-col gap-4">
            {/* Row 1: Cards 1 & 2 */}
            <div data-framework-row className="flex gap-4 items-start">
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
            <div data-framework-row className="flex gap-4 items-start">
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
