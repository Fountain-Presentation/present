interface SectionLabelProps {
  children: React.ReactNode
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span>{children}</span>
  )
}
