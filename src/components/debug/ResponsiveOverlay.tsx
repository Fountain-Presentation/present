'use client'

import { useState, useEffect } from 'react'
import { Monitor, Smartphone, TabletSmartphone } from 'lucide-react'

type ViewportSize = 'desktop' | 'sm' | 'xs'

const VIEWPORT_WIDTHS: Record<ViewportSize, number | null> = {
  desktop: null,    // No constraint
  sm: 640,          // Tailwind sm breakpoint
  xs: 375           // iPhone width
}

export default function ResponsiveOverlay() {
  const [activeSize, setActiveSize] = useState<ViewportSize>('desktop')

  useEffect(() => {
    const main = document.querySelector('main')
    if (!main) return

    const width = VIEWPORT_WIDTHS[activeSize]

    // Remove any existing responsive debug classes
    document.documentElement.classList.remove('debug-viewport-sm', 'debug-viewport-xs')

    if (width) {
      main.style.maxWidth = `${width}px`
      main.style.marginLeft = 'auto'
      main.style.marginRight = 'auto'
      main.style.boxShadow = '0 0 0 1px rgba(88, 28, 135, 0.2), 0 4px 24px rgba(0, 0, 0, 0.1)'

      // Add class for CSS targeting
      if (activeSize === 'sm') {
        document.documentElement.classList.add('debug-viewport-sm')
      } else if (activeSize === 'xs') {
        document.documentElement.classList.add('debug-viewport-xs')
      }
    } else {
      main.style.maxWidth = ''
      main.style.marginLeft = ''
      main.style.marginRight = ''
      main.style.boxShadow = ''
    }

    return () => {
      main.style.maxWidth = ''
      main.style.marginLeft = ''
      main.style.marginRight = ''
      main.style.boxShadow = ''
      document.documentElement.classList.remove('debug-viewport-sm', 'debug-viewport-xs')
    }
  }, [activeSize])

  const buttonStyle = (isActive: boolean): React.CSSProperties => ({
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: isActive ? '#581C87' : '#E4E4E7',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
  })

  const buttons: { size: ViewportSize; icon: typeof Monitor; label: string }[] = [
    { size: 'desktop', icon: Monitor, label: 'Desktop (100%)' },
    { size: 'sm', icon: TabletSmartphone, label: 'SM (640px)' },
    { size: 'xs', icon: Smartphone, label: 'XS (375px)' }
  ]

  return (
    <div
      style={{
        position: 'fixed',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        padding: '8px 16px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '32px',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
        zIndex: 99999
      }}
    >
      {buttons.map(({ size, icon: Icon, label }) => {
        const isActive = activeSize === size
        return (
          <button
            key={size}
            onClick={() => setActiveSize(size)}
            style={buttonStyle(isActive)}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = '#D4D4D8'
                e.currentTarget.style.transform = 'scale(1.05)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = '#E4E4E7'
                e.currentTarget.style.transform = 'scale(1)'
              }
            }}
            aria-label={label}
            title={label}
          >
            <Icon size={20} color={isActive ? '#FFFFFF' : '#581C87'} strokeWidth={2} />
          </button>
        )
      })}
    </div>
  )
}
