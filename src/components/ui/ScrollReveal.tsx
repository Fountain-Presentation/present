'use client'

import { useInView } from 'react-intersection-observer'

interface ScrollRevealProps {
  children: React.ReactNode
}

export default function ScrollReveal({ children }: ScrollRevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0 }}>
      {children}
    </div>
  )
}
