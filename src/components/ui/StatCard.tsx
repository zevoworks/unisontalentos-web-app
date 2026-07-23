import type { ReactNode } from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'

interface StatCardProps {
  label: string
  value: string | number
  sub?: string
  icon: ReactNode
  color?: string
  trend?: { value: string; up: boolean }
}

export function StatCard({ label, value, sub, icon, color = '#6C4CF1', trend }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3.5">
      <div className="flex items-start justify-between mb-2">
        <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: `${color}1A`, color }}>
          {icon}
        </div>
        {trend && (
          <span className={`flex items-center gap-0.5 text-[10px] font-medium ${trend.up ? 'text-emerald-600' : 'text-red-500'}`}>
            {trend.up ? <ArrowUp size={10} /> : <ArrowDown size={10} />}
            {trend.value}
          </span>
        )}
      </div>
      <p className="text-xl font-bold text-gray-900 leading-tight">{value}</p>
      <p className="text-xs text-gray-500 mt-0.5">{label}</p>
      {sub && <p className="text-[10px] text-gray-400 mt-0.5">{sub}</p>}
    </div>
  )
}
