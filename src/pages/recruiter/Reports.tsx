import { PageHeader } from '../../components/ui/PageHeader'
import { StatCard } from '../../components/ui/StatCard'
import { BarChart2 } from 'lucide-react'

export default function RecruiterReports() {
  return (
    <div>
      <PageHeader title="Reports" subtitle="Your recruitment performance analytics" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <StatCard label="Candidates Assigned" value="24" sub="active queue" icon={<BarChart2 size={18} />} color="#6C4CF1" />
        <StatCard label="Client Submissions" value="12" sub="this month" icon={<BarChart2 size={18} />} color="#3B82F6" trend={{ value: '20%', up: true }} />
        <StatCard label="Offers Extended" value="4" sub="this month" icon={<BarChart2 size={18} />} color="#10B981" />
        <StatCard label="Joinings" value="2" sub="this month" icon={<BarChart2 size={18} />} color="#F59E0B" trend={{ value: '1 vs last month', up: true }} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Pipeline Summary</h3>
          <div className="space-y-2.5">
            {[
              { stage: 'New', count: 2 }, { stage: 'Called', count: 3 }, { stage: 'Interested', count: 5 },
              { stage: 'Interview Scheduled', count: 2 }, { stage: 'Client Shared', count: 4 },
              { stage: 'Shortlisted', count: 3 }, { stage: 'Offer Extended', count: 1 },
            ].map((s) => (
              <div key={s.stage} className="flex items-center gap-3">
                <span className="text-xs text-gray-600 w-40 flex-shrink-0">{s.stage}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#6C4CF1] rounded-full" style={{ width: `${(s.count / 5) * 100}%` }} />
                </div>
                <span className="text-xs font-medium text-gray-900 w-4">{s.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Monthly Performance</h3>
          <div className="space-y-2.5">
            {[
              { metric: 'Call-to-Interest Rate', value: '58%', trend: '+4%', up: true },
              { metric: 'Interest-to-Interview Rate', value: '67%', trend: '+8%', up: true },
              { metric: 'Interview-to-Offer Rate', value: '40%', trend: '-5%', up: false },
              { metric: 'Offer-to-Joining Rate', value: '75%', trend: '+10%', up: true },
              { metric: 'Avg Time to Place', value: '18 days', trend: '-2 days', up: true },
            ].map((m) => (
              <div key={m.metric} className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="text-xs text-gray-600">{m.metric}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-900">{m.value}</span>
                  <span className={`text-[10px] font-medium ${m.up ? 'text-emerald-600' : 'text-red-500'}`}>{m.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
