import { Activity, Phone, Mail, FileText, Calendar } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'

const activities = [
  { id: 1, type: 'call', icon: <Phone size={13} />, text: 'Called Rahul Gupta — Interested, will share updated resume by EOD', candidate: 'Rahul Gupta', time: '09:42 AM', color: 'bg-amber-50 text-amber-600' },
  { id: 2, type: 'note', icon: <FileText size={13} />, text: 'Added interview notes for Kavitha Reddy — Strong QA background, recommend to proceed', candidate: 'Kavitha Reddy', time: '09:15 AM', color: 'bg-blue-50 text-blue-500' },
  { id: 3, type: 'email', icon: <Mail size={13} />, text: 'Sent profile of Kavitha Reddy to client Airtel — awaiting feedback', candidate: 'Kavitha Reddy', time: 'Yesterday 5:30 PM', color: 'bg-purple-50 text-purple-500' },
  { id: 4, type: 'status', icon: <Activity size={13} />, text: 'Updated Ananya Krishnan status: Interested → Interview Scheduled', candidate: 'Ananya Krishnan', time: 'Yesterday 4:15 PM', color: 'bg-emerald-50 text-emerald-600' },
  { id: 5, type: 'interview', icon: <Calendar size={13} />, text: 'Interview scheduled for Ananya Krishnan — July 25 at 11:00 AM with Flipkart Tech Lead', candidate: 'Ananya Krishnan', time: 'Yesterday 4:15 PM', color: 'bg-[#EEE9FD] text-[#6C4CF1]' },
]

export default function Activities() {
  return (
    <div>
      <PageHeader title="Activities" subtitle="Your recent actions and updates" />

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
          <Activity size={14} className="text-gray-400" />
          <span className="text-sm font-semibold text-gray-900">Activity Log</span>
        </div>
        <div className="divide-y divide-gray-50">
          {activities.map((a) => (
            <div key={a.id} className="px-4 py-4 flex items-start gap-3">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${a.color}`}>
                {a.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700">{a.text}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-medium text-[#6C4CF1]">{a.candidate}</span>
                  <span className="text-[10px] text-gray-400">·</span>
                  <span className="text-xs text-gray-400">{a.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 py-3 border-t border-gray-100">
          <button className="text-xs text-[#6C4CF1] hover:underline cursor-pointer">Load older activities</button>
        </div>
      </div>
    </div>
  )
}
