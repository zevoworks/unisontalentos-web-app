import { useState } from 'react'
import { Layout } from './components/Layout'
import type { Role, Candidate } from './types'

// Admin pages
import AdminDashboard from './pages/admin/Dashboard'
import EmailConnections from './pages/admin/EmailConnections'
import AIProcessing from './pages/admin/AIProcessing'
import HumanReview from './pages/admin/HumanReview'
import AdminCandidateIntelligence from './pages/admin/CandidateIntelligence'
import Recruiters from './pages/admin/Recruiters'
import Categories from './pages/admin/Categories'
import Skills from './pages/admin/Skills'
import Users from './pages/admin/Users'
import AdminReports from './pages/admin/Reports'
import AuditLogs from './pages/admin/AuditLogs'
import Settings from './pages/admin/Settings'

// HILT pages
import HILTDashboard from './pages/hilt/Dashboard'
import PendingReviews from './pages/hilt/PendingReviews'
import CandidateReview from './pages/hilt/CandidateReview'
import HILTReports from './pages/hilt/Reports'

// Recruiter pages
import RecruiterDashboard from './pages/recruiter/Dashboard'
import MyQueue from './pages/recruiter/MyQueue'
import RecruiterCandidateIntelligence from './pages/recruiter/CandidateIntelligence'
import AIMatch from './pages/recruiter/AIMatch'
import Activities from './pages/recruiter/Activities'
import RecruiterReports from './pages/recruiter/Reports'

// Shared
import Candidate360 from './pages/Candidate360'

const defaultPage: Record<Role, string> = {
  admin: 'dashboard',
  hilt: 'dashboard',
  recruiter: 'dashboard',
}

function Profile({ role }: { role: Role }) {
  const profiles = {
    admin: { name: 'Anil Kumar', email: 'anil.kumar@unison.com', role: 'Administrator', dept: 'Platform Operations' },
    hilt: { name: 'Meena Iyer', email: 'meena.iyer@unison.com', role: 'Human In The Loop', dept: 'AI Quality Control' },
    recruiter: { name: 'Priya Sharma', email: 'priya.sharma@unison.com', role: 'Recruiter', dept: 'Java & Backend' },
  }
  const p = profiles[role]
  return (
    <div className="max-w-lg">
      <h1 className="text-xl font-semibold text-gray-900 mb-4">Profile</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-[#6C4CF1] flex items-center justify-center">
            <span className="text-white text-xl font-bold">{p.name[0]}</span>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">{p.name}</p>
            <p className="text-sm text-gray-500">{p.role}</p>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { label: 'Email', value: p.email },
            { label: 'Role', value: p.role },
            { label: 'Department', value: p.dept },
            { label: 'Organization', value: 'Unison International' },
          ].map((f) => (
            <div key={f.label} className="flex items-center justify-between py-2 border-b border-gray-50">
              <span className="text-xs text-gray-500">{f.label}</span>
              <span className="text-sm font-medium text-gray-900">{f.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [role, setRole] = useState<Role>('admin')
  const [page, setPage] = useState<string>('dashboard')
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null)

  const handleSwitchRole = (newRole: Role) => {
    setRole(newRole)
    setPage(defaultPage[newRole])
    setSelectedCandidate(null)
  }

  const handleNavigate = (newPage: string) => {
    setPage(newPage)
    setSelectedCandidate(null)
  }

  const handleSelectCandidate = (c: Candidate) => {
    setSelectedCandidate(c)
    setPage('candidate-360')
  }

  const handleBack = () => {
    setSelectedCandidate(null)
    setPage(role === 'admin' ? 'candidate-intelligence' : role === 'hilt' ? 'pending-reviews' : 'my-queue')
  }

  const renderPage = () => {
    if (selectedCandidate && page === 'candidate-360') {
      return <Candidate360 candidate={selectedCandidate} onBack={handleBack} />
    }

    if (role === 'admin') {
      switch (page) {
        case 'dashboard': return <AdminDashboard />
        case 'email-connections': return <EmailConnections />
        case 'ai-processing': return <AIProcessing />
        case 'human-review': return <HumanReview />
        case 'candidate-intelligence': return <AdminCandidateIntelligence onSelectCandidate={handleSelectCandidate} />
        case 'recruiters': return <Recruiters />
        case 'categories': return <Categories />
        case 'skills': return <Skills />
        case 'users': return <Users />
        case 'reports': return <AdminReports />
        case 'audit-logs': return <AuditLogs />
        case 'settings': return <Settings />
        default: return <AdminDashboard />
      }
    }

    if (role === 'hilt') {
      switch (page) {
        case 'dashboard': return <HILTDashboard />
        case 'pending-reviews': return <PendingReviews onNavigate={handleNavigate} />
        case 'candidate-review': return <CandidateReview onNavigate={handleNavigate} />
        case 'reports': return <HILTReports />
        case 'profile': return <Profile role={role} />
        default: return <HILTDashboard />
      }
    }

    if (role === 'recruiter') {
      switch (page) {
        case 'dashboard': return <RecruiterDashboard />
        case 'my-queue': return <MyQueue onSelectCandidate={handleSelectCandidate} />
        case 'candidate-intelligence': return <RecruiterCandidateIntelligence onSelectCandidate={handleSelectCandidate} />
        case 'ai-match': return <AIMatch />
        case 'activities': return <Activities />
        case 'reports': return <RecruiterReports />
        case 'profile': return <Profile role={role} />
        default: return <RecruiterDashboard />
      }
    }

    return null
  }

  return (
    <Layout
      role={role}
      activePage={page}
      onNavigate={handleNavigate}
      onSwitchRole={handleSwitchRole}
    >
      {renderPage()}
    </Layout>
  )
}
