import { Clock, CheckCircle, TrendingUp, Target } from 'lucide-react'
import { StatCard } from '../../components/ui/StatCard'
import { PageHeader } from '../../components/ui/PageHeader'
import { ConfidenceBadge } from '../../components/ui/Badge'
import { pendingReviews } from '../../data/mockData'

export default function HILTDashboard() {
  return (
    <div>
      <PageHeader title="Dashboard" subtitle="Human Review overview — July 23, 2026" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <StatCard label="Pending Reviews" value={pendingReviews.length} sub="awaiting action" icon={<Clock size={18} />} color="#F59E0B" />
        <StatCard label="Completed Today" value="47" sub="reviews done" icon={<CheckCircle size={18} />} color="#10B981" trend={{ value: '12% vs yesterday', up: true }} />
        <StatCard label="Avg Review Time" value="4.2 min" sub="per candidate" icon={<TrendingUp size={18} />} color="#6C4CF1" />
        <StatCard label="AI Accuracy" value="91.4%" sub="HILT validation rate" icon={<Target size={18} />} color="#3B82F6" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Pending Queue */}
        <div className="xl:col-span-2 bg-white rounded-lg border border-gray-200">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900">Pending Review Queue</h3>
          </div>
          <div className="divide-y divide-gray-50">
            {pendingReviews.map((r) => (
              <div key={r.id} className="px-4 py-3 flex items-center gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{r.candidate.name}</p>
                  <p className="text-xs text-gray-500">{r.candidate.currentCompany} · {r.suggestedCategory}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Received: {r.receivedAt}</p>
                </div>
                <ConfidenceBadge score={r.confidenceScore} />
                <button className="text-xs text-[#6C4CF1] font-medium hover:underline cursor-pointer">Review</button>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Panel */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">My Review Stats — Today</h3>
            <div className="space-y-2">
              {[
                { label: 'Approved', value: '41', color: 'text-emerald-600' },
                { label: 'Rejected', value: '4', color: 'text-red-500' },
                { label: 'Reassigned Category', value: '7', color: 'text-amber-600' },
                { label: 'Reassigned Recruiter', value: '3', color: 'text-blue-500' },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between py-1.5 border-b border-gray-50">
                  <span className="text-xs text-gray-500">{s.label}</span>
                  <span className={`text-sm font-semibold ${s.color}`}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Confidence Score Distribution</h3>
            <div className="space-y-2">
              {[
                { range: '50–60%', count: 8, pct: 40 },
                { range: '61–65%', count: 12, pct: 60 },
              ].map((d) => (
                <div key={d.range}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500">{d.range}</span>
                    <span className="text-xs font-medium text-gray-700">{d.count}</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full" style={{ width: `${d.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
