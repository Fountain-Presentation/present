'use client'

import { useEffect, useState, useCallback } from 'react'

type SpacingInfo = {
  id: string
  name: string
  rect: DOMRect
  margin: { top: number; right: number; bottom: number; left: number }
  padding: { top: number; right: number; bottom: number; left: number }
  gap: number | null
}

export default function SpacingOverlay() {
  const [elements, setElements] = useState<SpacingInfo[]>([])

  const updateElements = useCallback(() => {
    const debugElements = document.querySelectorAll('[data-debug]')
    const newElements: SpacingInfo[] = []

    debugElements.forEach((el, index) => {
      const htmlEl = el as HTMLElement
      const rect = htmlEl.getBoundingClientRect()
      const name = htmlEl.getAttribute('data-debug') || `element-${index}`
      const styles = window.getComputedStyle(htmlEl)

      const margin = {
        top: parseFloat(styles.marginTop) || 0,
        right: parseFloat(styles.marginRight) || 0,
        bottom: parseFloat(styles.marginBottom) || 0,
        left: parseFloat(styles.marginLeft) || 0
      }

      const padding = {
        top: parseFloat(styles.paddingTop) || 0,
        right: parseFloat(styles.paddingRight) || 0,
        bottom: parseFloat(styles.paddingBottom) || 0,
        left: parseFloat(styles.paddingLeft) || 0
      }

      const gap = styles.gap && styles.gap !== 'normal' ? parseFloat(styles.gap) : null

      newElements.push({
        id: `${name}-${index}`,
        name,
        rect,
        margin,
        padding,
        gap
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
      attributeFilter: ['data-debug', 'style', 'class']
    })

    return () => {
      window.removeEventListener('scroll', updateElements, true)
      window.removeEventListener('resize', updateElements)
      observer.disconnect()
    }
  }, [updateElements])

  const green = 'rgba(34, 197, 94, 0.7)'
  const greenLight = 'rgba(34, 197, 94, 0.15)'

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 99998
      }}
    >
      {elements.map((el) => {
        const hasMargin = el.margin.top || el.margin.right || el.margin.bottom || el.margin.left
        const hasPadding = el.padding.top || el.padding.right || el.padding.bottom || el.padding.left

        return (
          <div key={el.id}>
            {/* Margin visualization - outer dashed box */}
            {hasMargin && (
              <div
                style={{
                  position: 'fixed',
                  top: el.rect.top - el.margin.top,
                  left: el.rect.left - el.margin.left,
                  width: el.rect.width + el.margin.left + el.margin.right,
                  height: el.rect.height + el.margin.top + el.margin.bottom,
                  border: `1px dashed ${green}`,
                  backgroundColor: greenLight,
                  zIndex: 99998
                }}
              >
                {/* Margin labels */}
                {el.margin.top > 0 && (
                  <SpacingLabel
                    value={el.margin.top}
                    position="top"
                    elementWidth={el.rect.width + el.margin.left + el.margin.right}
                    marginTop={el.margin.top}
                  />
                )}
                {el.margin.bottom > 0 && (
                  <SpacingLabel
                    value={el.margin.bottom}
                    position="bottom"
                    elementWidth={el.rect.width + el.margin.left + el.margin.right}
                    marginBottom={el.margin.bottom}
                  />
                )}
                {el.margin.left > 0 && (
                  <SpacingLabel
                    value={el.margin.left}
                    position="left"
                    elementHeight={el.rect.height + el.margin.top + el.margin.bottom}
                    marginLeft={el.margin.left}
                  />
                )}
                {el.margin.right > 0 && (
                  <SpacingLabel
                    value={el.margin.right}
                    position="right"
                    elementHeight={el.rect.height + el.margin.top + el.margin.bottom}
                    marginRight={el.margin.right}
                  />
                )}
              </div>
            )}

            {/* Padding visualization - inner solid box */}
            {hasPadding && (
              <div
                style={{
                  position: 'fixed',
                  top: el.rect.top,
                  left: el.rect.left,
                  width: el.rect.width,
                  height: el.rect.height,
                  border: `2px solid ${green}`,
                  boxSizing: 'border-box',
                  zIndex: 99998
                }}
              >
                {/* Padding inner area */}
                <div
                  style={{
                    position: 'absolute',
                    top: el.padding.top,
                    left: el.padding.left,
                    right: el.padding.right,
                    bottom: el.padding.bottom,
                    border: `1px solid ${green}`,
                    backgroundColor: greenLight
                  }}
                />
                {/* Padding labels */}
                {el.padding.top > 0 && (
                  <PaddingLabel value={el.padding.top} position="top" />
                )}
                {el.padding.bottom > 0 && (
                  <PaddingLabel value={el.padding.bottom} position="bottom" />
                )}
                {el.padding.left > 0 && (
                  <PaddingLabel value={el.padding.left} position="left" />
                )}
                {el.padding.right > 0 && (
                  <PaddingLabel value={el.padding.right} position="right" />
                )}
              </div>
            )}

            {/* Gap indicator */}
            {el.gap && (
              <div
                style={{
                  position: 'fixed',
                  top: el.rect.top - 16,
                  left: el.rect.left,
                  backgroundColor: green,
                  color: '#FFFFFF',
                  fontFamily: 'monospace',
                  fontSize: '9px',
                  fontWeight: 600,
                  padding: '1px 4px',
                  borderRadius: '2px',
                  whiteSpace: 'nowrap'
                }}
              >
                gap: {el.gap}px
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function SpacingLabel({
  value,
  position,
  elementWidth,
  elementHeight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight
}: {
  value: number
  position: 'top' | 'bottom' | 'left' | 'right'
  elementWidth?: number
  elementHeight?: number
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
}) {
  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: 'rgba(34, 197, 94, 0.9)',
    color: '#FFFFFF',
    fontFamily: 'monospace',
    fontSize: '9px',
    fontWeight: 600,
    padding: '1px 3px',
    borderRadius: '2px',
    whiteSpace: 'nowrap'
  }

  if (position === 'top' && marginTop) {
    return (
      <span style={{ ...baseStyle, top: marginTop / 2 - 7, left: (elementWidth || 0) / 2 - 12 }}>
        {value}px
      </span>
    )
  }
  if (position === 'bottom' && marginBottom) {
    return (
      <span style={{ ...baseStyle, bottom: marginBottom / 2 - 7, left: (elementWidth || 0) / 2 - 12 }}>
        {value}px
      </span>
    )
  }
  if (position === 'left' && marginLeft) {
    return (
      <span style={{ ...baseStyle, left: marginLeft / 2 - 12, top: (elementHeight || 0) / 2 - 7 }}>
        {value}px
      </span>
    )
  }
  if (position === 'right' && marginRight) {
    return (
      <span style={{ ...baseStyle, right: marginRight / 2 - 12, top: (elementHeight || 0) / 2 - 7 }}>
        {value}px
      </span>
    )
  }
  return null
}

function PaddingLabel({
  value,
  position
}: {
  value: number
  position: 'top' | 'bottom' | 'left' | 'right'
}) {
  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: 'rgba(34, 197, 94, 0.75)',
    color: '#FFFFFF',
    fontFamily: 'monospace',
    fontSize: '8px',
    fontWeight: 600,
    padding: '0px 2px',
    borderRadius: '1px',
    whiteSpace: 'nowrap'
  }

  if (position === 'top') {
    return <span style={{ ...baseStyle, top: 2, left: '50%', transform: 'translateX(-50%)' }}>{value}</span>
  }
  if (position === 'bottom') {
    return <span style={{ ...baseStyle, bottom: 2, left: '50%', transform: 'translateX(-50%)' }}>{value}</span>
  }
  if (position === 'left') {
    return <span style={{ ...baseStyle, left: 2, top: '50%', transform: 'translateY(-50%)' }}>{value}</span>
  }
  if (position === 'right') {
    return <span style={{ ...baseStyle, right: 2, top: '50%', transform: 'translateY(-50%)' }}>{value}</span>
  }
  return null
}
