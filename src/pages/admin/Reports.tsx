import { Mail, FileText, Cpu, UserCheck, Target, TrendingUp } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'
import { StatCard } from '../../components/ui/StatCard'
import { categories } from '../../data/mockData'

const hiringTrend = [
  { month: 'Feb', joins: 4 }, { month: 'Mar', joins: 6 }, { month: 'Apr', joins: 5 },
  { month: 'May', joins: 8 }, { month: 'Jun', joins: 7 }, { month: 'Jul', joins: 9 },
]
const maxJoins = Math.max(...hiringTrend.map((d) => d.joins))

const recruiterProductivity = [
  { name: 'Priya Sharma', assigned: 24, shared: 8, offers: 2 },
  { name: 'Arjun Mehta', assigned: 18, shared: 5, offers: 1 },
  { name: 'Divya Nair', assigned: 21, shared: 6, offers: 1 },
  { name: 'Kiran Patel', assigned: 15, shared: 4, offers: 1 },
]

export default function AdminReports() {
  const totalCandidates = categories.reduce((sum, c) => sum + c.candidateCount, 0)

  return (
    <div>
      <PageHeader title="Reports" subtitle="Platform-wide processing and recruitment analytics" />

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mb-6">
        <StatCard label="Emails Processed" value="1,248" sub="last 30 days" icon={<Mail size={18} />} color="#6C4CF1" trend={{ value: '9%', up: true }} />
        <StatCard label="Resumes Parsed" value="1,062" sub="85% extraction rate" icon={<FileText size={18} />} color="#3B82F6" />
        <StatCard label="AI Assignment Rate" value="91.5%" icon={<Cpu size={18} />} color="#10B981" trend={{ value: '3%', up: true }} />
        <StatCard label="Human Review Rate" value="8.5%" icon={<UserCheck size={18} />} color="#F59E0B" />
        <StatCard label="Average Confidence" value="87.2%" icon={<Target size={18} />} color="#6C4CF1" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={14} className="text-gray-400" />
            <h3 className="text-sm font-semibold text-gray-900">Hiring Trend — Joins per Month</h3>
          </div>
          <div className="flex items-end gap-3 h-32">
            {hiringTrend.map((d) => (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-[#6C4CF1] rounded-t" style={{ height: `${(d.joins / maxJoins) * 100}px` }} />
                <span className="text-[9px] text-gray-400">{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Category Distribution</h3>
          <div className="space-y-2.5">
            {categories.map((c) => (
              <div key={c.id}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">{c.name}</span>
                  <span className="text-xs font-medium text-gray-900">{c.candidateCount}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#6C4CF1] rounded-full"
                    style={{ width: `${totalCandidates ? (c.candidateCount / totalCandidates) * 100 : 0}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-gray-900">Recruiter Productivity</h3>
        </div>
        <div className="divide-y divide-gray-50">
          {recruiterProductivity.map((r) => (
            <div key={r.name} className="px-4 py-3 flex items-center gap-4">
              <span className="text-sm font-medium text-gray-900 w-32 flex-shrink-0">{r.name}</span>
              <span className="text-xs text-gray-500">Assigned: <span className="font-medium text-gray-800">{r.assigned}</span></span>
              <span className="text-xs text-gray-500">Client Shared: <span className="font-medium text-gray-800">{r.shared}</span></span>
              <span className="text-xs text-gray-500">Offers: <span className="font-medium text-gray-800">{r.offers}</span></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
