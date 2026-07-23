import { Users, Phone, CalendarCheck, Send, Briefcase, UserCheck } from 'lucide-react'
import { StatCard } from '../../components/ui/StatCard'
import { PageHeader } from '../../components/ui/PageHeader'
import { StatusBadge } from '../../components/ui/Badge'
import { candidates } from '../../data/mockData'

const myQueue = candidates.filter((c) => c.assignedRecruiter === 'Priya Sharma')

const tasks = [
  { time: '10:00 AM', task: 'Follow-up call with Rahul Gupta', type: 'call' },
  { time: '11:30 AM', task: 'Share Kavitha Reddy profile with client', type: 'share' },
  { time: '02:00 PM', task: 'Update status for Rohan Desai', type: 'update' },
  { time: '03:30 PM', task: 'Interview prep — Ananya Krishnan (Jul 25)', type: 'interview' },
]

export default function RecruiterDashboard() {
  return (
    <div>
      <PageHeader title="Dashboard" subtitle="Good morning, Priya · July 23, 2026" />

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 mb-6">
        <StatCard label="Assigned Candidates" value={myQueue.length} icon={<Users size={18} />} color="#6C4CF1" />
        <StatCard label="New Today" value="2" sub="just assigned" icon={<UserCheck size={18} />} color="#3B82F6" />
        <StatCard label="Pending Calls" value="4" icon={<Phone size={18} />} color="#F59E0B" />
        <StatCard label="Interviews" value="1" sub="upcoming" icon={<CalendarCheck size={18} />} color="#10B981" />
        <StatCard label="Client Submissions" value="3" sub="this week" icon={<Send size={18} />} color="#6C4CF1" />
        <StatCard label="Offers" value="1" sub="this month" icon={<Briefcase size={18} />} color="#10B981" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Recent Candidates */}
        <div className="xl:col-span-2 bg-white rounded-lg border border-gray-200">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900">Recent Candidate Activity</h3>
          </div>
          <div className="divide-y divide-gray-50">
            {myQueue.slice(0, 5).map((c) => (
              <div key={c.id} className="px-4 py-3 flex items-center gap-4">
                <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold text-gray-600">{c.name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{c.name}</p>
                  <p className="text-xs text-gray-500">{c.primarySkill} · {c.experience} yrs · {c.currentLocation}</p>
                </div>
                <StatusBadge status={c.status} />
                <span className="text-xs text-gray-400">{c.lastUpdated}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Tasks */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900">Today"s Tasks</h3>
          </div>
          <div className="divide-y divide-gray-50">
            {tasks.map((t, i) => (
              <div key={i} className="px-4 py-3 flex items-start gap-3">
                <div className="w-14 flex-shrink-0">
                  <span className="text-[10px] text-gray-400 font-medium">{t.time}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-700">{t.task}</p>
                </div>
                <div className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${
                  t.type === 'call' ? 'bg-amber-400' :
                  t.type === 'share' ? 'bg-blue-400' :
                  t.type === 'interview' ? 'bg-[#6C4CF1]' : 'bg-gray-300'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
