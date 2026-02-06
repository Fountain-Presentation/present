interface MetricCardProps {
  label: string
  value: string
}

export default function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
}
