'use client'

import { ChevronUp, ChevronDown } from 'lucide-react'
import { useCallback } from 'react'

const SECTION_IDS = [
  'hero-section',
  'context-section',
  'framework-section',
  'scenario-section',
  'metrics-section',
  'aizone-section',
  'closer-section'
]

export default function SectionNav() {
  const scrollToSection = useCallback((direction: 'up' | 'down') => {
    const sections = SECTION_IDS.map(id =>
      document.querySelector(`[data-debug="${id}"]`) || document.getElementById(id)
    ).filter(Boolean) as HTMLElement[]

    const scrollY = window.scrollY
    const viewportHeight = window.innerHeight

    if (direction === 'down') {
      // Find next section below current view
      // Use 100px threshold to skip sections that are already mostly visible
      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top > 100) {
          const top = window.scrollY + rect.top
          window.scrollTo({ top, behavior: 'smooth' })
          return
        }
      }
    } else {
      // Find previous section above current view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const rect = section.getBoundingClientRect()
        if (rect.top < -10) {
          const top = window.scrollY + rect.top
          window.scrollTo({ top, behavior: 'smooth' })
          return
        }
      }
      // If at top, scroll to very top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="fixed bottom-8 right-8 flex gap-3 z-[9999]">
      <button
        onClick={() => scrollToSection('up')}
        className="w-14 h-14 rounded-full bg-zinc-200 border-none cursor-pointer flex items-center justify-center transition-all shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-zinc-300 hover:scale-105"
        aria-label="Previous section"
      >
        <ChevronUp size={24} color="#581C87" strokeWidth={2.5} />
      </button>
      <button
        onClick={() => scrollToSection('down')}
        className="w-14 h-14 rounded-full bg-zinc-200 border-none cursor-pointer flex items-center justify-center transition-all shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-zinc-300 hover:scale-105"
        aria-label="Next section"
      >
        <ChevronDown size={24} color="#581C87" strokeWidth={2.5} />
      </button>
    </div>
  )
}
