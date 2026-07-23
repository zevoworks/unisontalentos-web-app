import type { ReactNode } from 'react'
import type { CandidateStatus, ConnectionStatus } from '../../types'

interface BadgeProps {
  children: ReactNode
  variant?: 'purple' | 'neutral' | 'success' | 'warning' | 'danger'
}

const variantClasses: Record<string, string> = {
  purple: 'bg-[#EEE9FD] text-[#6C4CF1]',
  neutral: 'bg-gray-100 text-gray-600',
  success: 'bg-emerald-50 text-emerald-700',
  warning: 'bg-amber-50 text-amber-700',
  danger: 'bg-red-50 text-red-600',
}

export function Badge({ children, variant = 'neutral' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${variantClasses[variant]}`}>
      {children}
    </span>
  )
}

const statusVariant: Record<CandidateStatus, 'purple' | 'neutral' | 'success' | 'warning' | 'danger'> = {
  New: 'neutral',
  Called: 'warning',
  Interested: 'purple',
  'Interview Scheduled': 'purple',
  'Interview Completed': 'purple',
  'Client Shared': 'warning',
  Shortlisted: 'success',
  'Offer Extended': 'success',
  Joined: 'success',
  Rejected: 'danger',
  'On Hold': 'neutral',
  Archived: 'neutral',
}

export function StatusBadge({ status }: { status: CandidateStatus }) {
  return <Badge variant={statusVariant[status] ?? 'neutral'}>{status}</Badge>
}

export function ConfidenceBadge({ score }: { score: number }) {
  const variant = score >= 80 ? 'success' : score >= 60 ? 'warning' : 'danger'
  return <Badge variant={variant}>{score}% Confidence</Badge>
}

const connectionLabel: Record<ConnectionStatus, string> = {
  connected: 'Connected',
  disconnected: 'Disconnected',
  syncing: 'Syncing',
}

export function ConnectionBadge({ status }: { status: ConnectionStatus }) {
  const variant = status === 'connected' ? 'success' : status === 'syncing' ? 'warning' : 'danger'
  return <Badge variant={variant}>{connectionLabel[status]}</Badge>
}
