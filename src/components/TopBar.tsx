import { useState } from 'react'
import { Menu, ChevronDown, User } from 'lucide-react'
import type { Role } from '../types'

const roleLabels: Record<Role, string> = {
  admin: 'Administrator',
  hilt: 'Human In The Loop',
  recruiter: 'Recruiter',
}

interface TopBarProps {
  role: Role
  onToggleSidebar: () => void
  onSwitchRole: (role: Role) => void
  currentPage: string
  pageTitle: string
}

export function TopBar({ role, onToggleSidebar, onSwitchRole, pageTitle }: TopBarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="h-14 flex items-center justify-between gap-4 px-4 md:px-6 bg-white border-b border-gray-200 flex-shrink-0">
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onToggleSidebar}
          className="w-8 h-8 flex items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 cursor-pointer flex-shrink-0"
        >
          <Menu size={16} />
        </button>
        <h2 className="text-sm font-semibold text-gray-900 truncate">{pageTitle}</h2>
      </div>

      <div className="relative flex-shrink-0">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 pl-2 pr-1.5 py-1.5 rounded-md hover:bg-gray-50 cursor-pointer"
        >
          <div className="w-6 h-6 rounded-full bg-[#6C4CF1] flex items-center justify-center">
            <User size={12} className="text-white" />
          </div>
          <span className="text-xs font-medium text-gray-700 hidden sm:inline">{roleLabels[role]}</span>
          <ChevronDown size={12} className="text-gray-400" />
        </button>

        {open && (
          <div className="absolute right-0 top-10 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1 w-56">
            <p className="px-3 py-1.5 text-[10px] text-gray-400 uppercase tracking-wide">Switch Role (Demo)</p>
            {(Object.keys(roleLabels) as Role[]).map((r) => (
              <button
                key={r}
                onClick={() => { onSwitchRole(r); setOpen(false) }}
                className={`w-full text-left px-3 py-2 text-xs cursor-pointer hover:bg-gray-50 ${
                  r === role ? 'text-[#6C4CF1] font-medium' : 'text-gray-700'
                }`}
              >
                {roleLabels[r]}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
