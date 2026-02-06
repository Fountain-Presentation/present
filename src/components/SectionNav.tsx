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

  const buttonStyle: React.CSSProperties = {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '#E4E4E7',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        display: 'flex',
        gap: '12px',
        zIndex: 9999
      }}
    >
      <button
        onClick={() => scrollToSection('up')}
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#D4D4D8'
          e.currentTarget.style.transform = 'scale(1.05)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#E4E4E7'
          e.currentTarget.style.transform = 'scale(1)'
        }}
        aria-label="Previous section"
      >
        <ChevronUp size={24} color="#581C87" strokeWidth={2.5} />
      </button>
      <button
        onClick={() => scrollToSection('down')}
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#D4D4D8'
          e.currentTarget.style.transform = 'scale(1.05)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#E4E4E7'
          e.currentTarget.style.transform = 'scale(1)'
        }}
        aria-label="Next section"
      >
        <ChevronDown size={24} color="#581C87" strokeWidth={2.5} />
      </button>
    </div>
  )
}
