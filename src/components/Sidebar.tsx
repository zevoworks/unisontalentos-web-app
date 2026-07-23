import {
  LayoutDashboard, Mail, Cpu, UserCheck, Search, Users, Tags,
  Sparkles, UserCog, BarChart2, ClipboardList, Settings,
  ClipboardCheck, ListChecks, Wand2, Activity, User,
} from 'lucide-react'
import type { Role } from '../types'

interface NavItem {
  key: string
  label: string
  icon: React.ReactNode
}

const navByRole: Record<Role, NavItem[]> = {
  admin: [
    { key: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={16} /> },
    { key: 'email-connections', label: 'Email Connections', icon: <Mail size={16} /> },
    { key: 'ai-processing', label: 'AI Processing', icon: <Cpu size={16} /> },
    { key: 'human-review', label: 'Human Review', icon: <UserCheck size={16} /> },
    { key: 'candidate-intelligence', label: 'Candidate Intelligence', icon: <Search size={16} /> },
    { key: 'recruiters', label: 'Recruiters', icon: <Users size={16} /> },
    { key: 'categories', label: 'Categories', icon: <Tags size={16} /> },
    { key: 'skills', label: 'Skills', icon: <Sparkles size={16} /> },
    { key: 'users', label: 'Users', icon: <UserCog size={16} /> },
    { key: 'reports', label: 'Reports', icon: <BarChart2 size={16} /> },
    { key: 'audit-logs', label: 'Audit Logs', icon: <ClipboardList size={16} /> },
    { key: 'settings', label: 'Settings', icon: <Settings size={16} /> },
  ],
  hilt: [
    { key: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={16} /> },
    { key: 'pending-reviews', label: 'Pending Reviews', icon: <ClipboardCheck size={16} /> },
    { key: 'reports', label: 'Reports', icon: <BarChart2 size={16} /> },
    { key: 'profile', label: 'Profile', icon: <User size={16} /> },
  ],
  recruiter: [
    { key: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={16} /> },
    { key: 'my-queue', label: 'My Queue', icon: <ListChecks size={16} /> },
    { key: 'candidate-intelligence', label: 'Candidate Intelligence', icon: <Search size={16} /> },
    { key: 'ai-match', label: 'AI Candidate Match', icon: <Wand2 size={16} /> },
    { key: 'activities', label: 'Activities', icon: <Activity size={16} /> },
    { key: 'reports', label: 'Reports', icon: <BarChart2 size={16} /> },
    { key: 'profile', label: 'Profile', icon: <User size={16} /> },
  ],
}

interface SidebarProps {
  role: Role
  activePage: string
  onNavigate: (page: string) => void
  collapsed: boolean
}

export function Sidebar({ role, activePage, onNavigate, collapsed }: SidebarProps) {
  const items = navByRole[role]

  return (
    <aside className={`flex flex-col bg-white border-r border-gray-200 flex-shrink-0 transition-all ${collapsed ? 'w-16' : 'w-60'} overflow-hidden`}>
      <div className="h-14 flex items-center gap-2 px-4 border-b border-gray-100 flex-shrink-0">
        <div className="w-7 h-7 rounded-md bg-[#6C4CF1] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">U</span>
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">Unison TalentOS</p>
            <p className="text-[10px] text-gray-400 truncate">AI Recruitment Platform</p>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => onNavigate(item.key)}
            title={collapsed ? item.label : undefined}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm cursor-pointer transition-colors ${
              activePage === item.key
                ? 'bg-[#F5F3FF] text-[#6C4CF1] font-medium border-r-2 border-[#6C4CF1]'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <span className="flex-shrink-0">{item.icon}</span>
            {!collapsed && <span className="truncate">{item.label}</span>}
          </button>
        ))}
      </nav>

      {!collapsed && (
        <div className="px-4 py-3 border-t border-gray-100 flex-shrink-0">
          <p className="text-[10px] text-gray-400">Powered by Zevoworks Technologies</p>
        </div>
      )}
    </aside>
  )
}
