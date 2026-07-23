import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
import type { Role } from '../types'

const pageTitles: Record<string, string> = {
  dashboard: 'Dashboard',
  'email-connections': 'Email Connections',
  'ai-processing': 'AI Processing',
  'human-review': 'Human Review',
  'candidate-intelligence': 'Candidate Intelligence',
  recruiters: 'Recruiters',
  categories: 'Categories',
  skills: 'Skills',
  users: 'Users',
  reports: 'Reports',
  'audit-logs': 'Audit Logs',
  settings: 'Settings',
  'pending-reviews': 'Pending Reviews',
  'candidate-review': 'Candidate Review',
  profile: 'Profile',
  'my-queue': 'My Queue',
  'ai-match': 'AI Candidate Match',
  activities: 'Activities',
  'candidate-360': 'Candidate 360°',
}

interface LayoutProps {
  role: Role
  activePage: string
  onNavigate: (page: string) => void
  onSwitchRole: (role: Role) => void
  children: React.ReactNode
}

export function Layout({ role, activePage, onNavigate, onSwitchRole, children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar role={role} activePage={activePage} onNavigate={onNavigate} collapsed={collapsed} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar
          role={role}
          onToggleSidebar={() => setCollapsed((c) => !c)}
          onSwitchRole={onSwitchRole}
          currentPage={activePage}
          pageTitle={pageTitles[activePage] || 'Dashboard'}
        />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
