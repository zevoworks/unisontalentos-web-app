import { useState } from 'react'
import { Download, Eye, Phone, StickyNote, Share2, ChevronDown } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'
import { Button } from '../../components/ui/Button'
import { StatusBadge, ConfidenceBadge } from '../../components/ui/Badge'
import { Table, Tr, Td } from '../../components/ui/Table'
import { candidates } from '../../data/mockData'
import type { Candidate, CandidateStatus } from '../../types'

interface Props {
  onSelectCandidate: (c: Candidate) => void
}

const statuses: CandidateStatus[] = [
  'New', 'Called', 'Interested', 'Interview Scheduled', 'Interview Completed',
  'Client Shared', 'Shortlisted', 'Offer Extended', 'Joined', 'Rejected', 'On Hold', 'Archived',
]

export default function MyQueue({ onSelectCandidate }: Props) {
  const myQueue = candidates.filter((c) => c.assignedRecruiter === 'Priya Sharma')
  const [openStatus, setOpenStatus] = useState<string | null>(null)

  return (
    <div>
      <PageHeader
        title="My Queue"
        subtitle={`${myQueue.length} candidates assigned to you`}
        actions={<Button variant="secondary" icon={<Download size={14} />}>Export</Button>}
      />

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table headers={['Candidate', 'Experience', 'Primary Skill', 'Industry', 'AI Confidence', 'Assigned', 'Status', 'Actions']}>
          {myQueue.map((c) => (
            <Tr key={c.id} onClick={() => onSelectCandidate(c)}>
              <Td>
                <div>
                  <p className="text-sm font-medium text-gray-900">{c.name}</p>
                  <p className="text-xs text-gray-400">{c.currentCompany} · {c.currentLocation}</p>
                </div>
              </Td>
              <Td><span className="text-xs text-gray-600">{c.experience} yrs</span></Td>
              <Td>
                <span className="text-xs font-medium text-[#6C4CF1] bg-[#EEE9FD] px-2 py-0.5 rounded-full">
                  {c.primarySkill}
                </span>
              </Td>
              <Td><span className="text-xs text-gray-600">{c.industry}</span></Td>
              <Td><ConfidenceBadge score={c.aiConfidence} /></Td>
              <Td><span className="text-xs text-gray-500">{c.assignedDate}</span></Td>
              <Td onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                <div className="relative">
                  <button
                    onClick={(e: React.MouseEvent) => { e.stopPropagation(); setOpenStatus(openStatus === c.id ? null : c.id) }}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <StatusBadge status={c.status} />
                    <ChevronDown size={10} className="text-gray-400" />
                  </button>
                  {openStatus === c.id && (
                    <div className="absolute left-0 top-7 bg-white border border-gray-200 rounded-lg shadow-lg z-10 py-1 w-44">
                      {statuses.map((s) => (
                        <button
                          key={s}
                          className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50 cursor-pointer"
                          onClick={(e: React.MouseEvent) => { e.stopPropagation(); setOpenStatus(null) }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </Td>
              <Td onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                <div className="flex items-center gap-1">
                  <Button size="sm" variant="ghost" icon={<Eye size={12} />} onClick={() => onSelectCandidate(c)} />
                  <Button size="sm" variant="ghost" icon={<Phone size={12} />} />
                  <Button size="sm" variant="ghost" icon={<StickyNote size={12} />} />
                  <Button size="sm" variant="ghost" icon={<Share2 size={12} />} />
                </div>
              </Td>
            </Tr>
          ))}
        </Table>
      </div>
    </div>
  )
}
