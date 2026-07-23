import { Mail, FileText, Cpu, UserCheck, Users, TrendingUp } from 'lucide-react'
import { StatCard } from '../../components/ui/StatCard'
import { PageHeader } from '../../components/ui/PageHeader'
import { ConnectionBadge } from '../../components/ui/Badge'
import { emailConnections } from '../../data/mockData'

const dailyData = [
  { hour: '08:00', emails: 12, resumes: 10 },
  { hour: '09:00', emails: 28, resumes: 24 },
  { hour: '10:00', emails: 19, resumes: 15 },
  { hour: '11:00', emails: 34, resumes: 29 },
  { hour: '12:00', emails: 22, resumes: 18 },
  { hour: '13:00', emails: 8, resumes: 6 },
  { hour: '14:00', emails: 31, resumes: 27 },
  { hour: '15:00', emails: 17, resumes: 14 },
]

const maxEmails = Math.max(...dailyData.map((d) => d.emails))

export default function AdminDashboard() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="Platform overview — July 23, 2026"
      />

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 mb-6">
        <StatCard label="Connected Mailboxes" value="3" sub="1 disconnected" icon={<Mail size={18} />} color="#6C4CF1" />
        <StatCard label="Emails Today" value="71" sub="across all inboxes" icon={<Mail size={18} />} color="#3B82F6" trend={{ value: '12% vs yesterday', up: true }} />
        <StatCard label="Resumes Parsed" value="59" sub="AI extracted" icon={<FileText size={18} />} color="#10B981" trend={{ value: '8% vs yesterday', up: true }} />
        <StatCard label="AI Assignment Rate" value="91.5%" sub="auto-assigned" icon={<Cpu size={18} />} color="#6C4CF1" />
        <StatCard label="Human Review Queue" value="3" sub="pending" icon={<UserCheck size={18} />} color="#F59E0B" />
        <StatCard label="Recruiter Capacity" value="78%" sub="avg utilization" icon={<Users size={18} />} color="#EF4444" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">
        {/* Daily Processing Chart */}
        <div className="xl:col-span-2 bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Daily Processing</h3>
              <p className="text-xs text-gray-500">Emails received vs resumes extracted</p>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-[#6C4CF1] inline-block" />Emails</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-400 inline-block" />Resumes</span>
            </div>
          </div>
          <div className="flex items-end gap-2 h-32">
            {dailyData.map((d) => (
              <div key={d.hour} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex gap-0.5 items-end" style={{ height: 100 }}>
                  <div
                    className="flex-1 bg-[#6C4CF1] rounded-t opacity-80"
                    style={{ height: `${(d.emails / maxEmails) * 100}%` }}
                  />
                  <div
                    className="flex-1 bg-emerald-400 rounded-t"
                    style={{ height: `${(d.resumes / maxEmails) * 100}%` }}
                  />
                </div>
                <span className="text-[9px] text-gray-400">{d.hour}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recruiter Capacity */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Recruiter Capacity</h3>
          <div className="space-y-3">
            {[
              { name: 'Priya Sharma', used: 24, total: 30, skill: 'Java' },
              { name: 'Arjun Mehta', used: 18, total: 25, skill: 'React' },
              { name: 'Divya Nair', used: 21, total: 25, skill: 'Python' },
              { name: 'Kiran Patel', used: 15, total: 25, skill: 'DevOps' },
            ].map((r) => (
              <div key={r.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-700">{r.name}</span>
                  <span className="text-xs text-gray-400">{r.used}/{r.total}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${r.used / r.total > 0.85 ? 'bg-red-400' : r.used / r.total > 0.7 ? 'bg-amber-400' : 'bg-emerald-400'}`}
                    style={{ width: `${(r.used / r.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mailbox Status */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900">Connected Mailboxes</h3>
          <TrendingUp size={14} className="text-gray-400" />
        </div>
        <div className="divide-y divide-gray-50">
          {emailConnections.map((conn) => (
            <div key={conn.id} className="px-4 py-3 flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{conn.mailbox}</p>
                <p className="text-xs text-gray-500">{conn.displayName} · Last sync: {conn.lastSync}</p>
              </div>
              <div className="text-right text-xs text-gray-500 hidden sm:block">
                <p>{conn.emailsToday} emails</p>
                <p>{conn.resumesExtracted} resumes</p>
              </div>
              <ConnectionBadge status={conn.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
