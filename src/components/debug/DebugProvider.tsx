'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import DebugOverlay from './DebugOverlay'
import SpacingOverlay from './SpacingOverlay'
import ResponsiveOverlay from './ResponsiveOverlay'

type DebugContextType = {
  debugEnabled: boolean
  spacingDebugEnabled: boolean
  responsiveDebugEnabled: boolean
  toggleDebug: () => void
  toggleSpacingDebug: () => void
  toggleResponsiveDebug: () => void
}

const DebugContext = createContext<DebugContextType | null>(null)

export function useDebug() {
  const context = useContext(DebugContext)
  if (!context) throw new Error('useDebug must be used within DebugProvider')
  return context
}

export function DebugProvider({ children }: { children: ReactNode }) {
  const [debugEnabled, setDebugEnabled] = useState(false)
  const [spacingDebugEnabled, setSpacingDebugEnabled] = useState(false)
  const [responsiveDebugEnabled, setResponsiveDebugEnabled] = useState(false)

  useEffect(() => {
    // Only enable if env var is set
    if (process.env.NEXT_PUBLIC_DEBUG_MODE !== 'true') return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + \ for element debug mode
      if ((e.metaKey || e.ctrlKey) && e.key === '\\') {
        e.preventDefault()
        setDebugEnabled(prev => !prev)
      }
      // Cmd/Ctrl + ] for spacing debug mode
      if ((e.metaKey || e.ctrlKey) && e.key === ']') {
        e.preventDefault()
        setSpacingDebugEnabled(prev => !prev)
      }
      // Cmd/Ctrl + [ for responsive debug mode
      if ((e.metaKey || e.ctrlKey) && e.key === '[') {
        e.preventDefault()
        setResponsiveDebugEnabled(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (debugEnabled) {
      document.documentElement.classList.add('debug-mode')
    } else {
      document.documentElement.classList.remove('debug-mode')
    }
  }, [debugEnabled])

  useEffect(() => {
    if (spacingDebugEnabled) {
      document.documentElement.classList.add('debug-spacing-mode')
    } else {
      document.documentElement.classList.remove('debug-spacing-mode')
    }
  }, [spacingDebugEnabled])

  return (
    <DebugContext.Provider value={{
      debugEnabled,
      spacingDebugEnabled,
      responsiveDebugEnabled,
      toggleDebug: () => setDebugEnabled(p => !p),
      toggleSpacingDebug: () => setSpacingDebugEnabled(p => !p),
      toggleResponsiveDebug: () => setResponsiveDebugEnabled(p => !p)
    }}>
      {children}
      {debugEnabled && <DebugOverlay />}
      {spacingDebugEnabled && <SpacingOverlay />}
      {responsiveDebugEnabled && <ResponsiveOverlay />}
    </DebugContext.Provider>
  )
}
