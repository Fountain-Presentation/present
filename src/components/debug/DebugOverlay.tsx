'use client'

import { useEffect, useState, useCallback } from 'react'

type DebugElement = {
  id: string
  name: string
  rect: DOMRect
}

export default function DebugOverlay() {
  const [elements, setElements] = useState<DebugElement[]>([])

  const updateElements = useCallback(() => {
    const debugElements = document.querySelectorAll('[data-debug]')
    const newElements: DebugElement[] = []

    debugElements.forEach((el, index) => {
      const rect = el.getBoundingClientRect()
      const name = el.getAttribute('data-debug') || `element-${index}`
      newElements.push({
        id: `${name}-${index}`,
        name,
        rect
      })
    })

    setElements(newElements)
  }, [])

  useEffect(() => {
    updateElements()

    window.addEventListener('scroll', updateElements, true)
    window.addEventListener('resize', updateElements)

    const observer = new MutationObserver(updateElements)
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-debug']
    })

    return () => {
      window.removeEventListener('scroll', updateElements, true)
      window.removeEventListener('resize', updateElements)
      observer.disconnect()
    }
  }, [updateElements])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 99999
      }}
    >
      {elements.map((el) => (
        <div
          key={el.id}
          style={{
            position: 'fixed',
            top: el.rect.top,
            left: el.rect.left,
            transform: 'translateY(-100%)',
            backgroundColor: 'rgba(255, 0, 0, 0.85)',
            color: '#FFFFFF',
            fontFamily: 'monospace',
            fontSize: '10px',
            fontWeight: 600,
            padding: '2px 6px',
            borderRadius: '2px',
            whiteSpace: 'nowrap',
            zIndex: 99999
          }}
        >
          {el.name}
        </div>
      ))}
    </div>
  )
}
