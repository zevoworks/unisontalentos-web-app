import { PageHeader } from '../../components/ui/PageHeader'
import { StatCard } from '../../components/ui/StatCard'
import { BarChart2 } from 'lucide-react'

export default function HILTReports() {
  return (
    <div>
      <PageHeader title="Reports" subtitle="HILT performance and AI accuracy analytics" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <StatCard label="Reviews This Month" value="342" icon={<BarChart2 size={18} />} trend={{ value: '5%', up: true }} />
        <StatCard label="Approval Rate" value="89.2%" icon={<BarChart2 size={18} />} color="#10B981" />
        <StatCard label="Avg Review Time" value="4.1 min" icon={<BarChart2 size={18} />} color="#F59E0B" />
        <StatCard label="AI Override Rate" value="12.4%" icon={<BarChart2 size={18} />} color="#3B82F6" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Reviews Per Day — Last 7 Days</h3>
          <div className="flex items-end gap-3 h-32">
            {[
              { day: 'Mon', count: 38 }, { day: 'Tue', count: 52 }, { day: 'Wed', count: 44 },
              { day: 'Thu', count: 61 }, { day: 'Fri', count: 49 }, { day: 'Sat', count: 15 },
              { day: 'Sun', count: 8 },
            ].map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-[#6C4CF1] rounded-t" style={{ height: `${(d.count / 61) * 100}px` }} />
                <span className="text-[9px] text-gray-400">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">AI Override Categories</h3>
          <div className="space-y-2.5">
            {[
              { label: 'Wrong Category', count: 18, pct: 42 },
              { label: 'Missing Skills', count: 12, pct: 28 },
              { label: 'Wrong Recruiter', count: 8, pct: 19 },
              { label: 'Rejected (Bad Resume)', count: 5, pct: 11 },
            ].map((o) => (
              <div key={o.label}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-700">{o.label}</span>
                  <span className="text-xs text-gray-500">{o.count} · {o.pct}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: `${o.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
