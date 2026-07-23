import { useState } from 'react'
import { Search, Filter, Download } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'
import { Button } from '../../components/ui/Button'
import { StatusBadge, ConfidenceBadge } from '../../components/ui/Badge'
import { Table, Tr, Td } from '../../components/ui/Table'
import { candidates } from '../../data/mockData'
import type { Candidate } from '../../types'

interface Props {
  onSelectCandidate: (c: Candidate) => void
}

export default function CandidateIntelligence({ onSelectCandidate }: Props) {
  const [search, setSearch] = useState('')
  const [industryFilter, setIndustryFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')

  const industries = ['All', ...Array.from(new Set(candidates.map((c) => c.industry)))]
  const statuses = ['All', 'New', 'Called', 'Interested', 'Interview Scheduled', 'Client Shared', 'Offer Extended', 'Shortlisted']

  const filtered = candidates.filter((c) => {
    const matchSearch = !search || [c.name, c.primarySkill, c.currentCompany, c.currentLocation]
      .some((f) => f.toLowerCase().includes(search.toLowerCase()))
    const matchIndustry = industryFilter === 'All' || c.industry === industryFilter
    const matchStatus = statusFilter === 'All' || c.status === statusFilter
    return matchSearch && matchIndustry && matchStatus
  })

  return (
    <div>
      <PageHeader
        title="Candidate Intelligence"
        subtitle={`${candidates.length} candidates in database`}
        actions={<Button variant="secondary" icon={<Download size={14} />}>Export</Button>}
      />

      {/* Semantic Search */}
      <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4 flex items-center gap-3">
        <Search size={15} className="text-[#6C4CF1] flex-shrink-0" />
        <input
          type="text"
          placeholder='Semantic AI Search — e.g. "Java Spring Boot Kafka AWS Bangalore Immediate"'
          className="flex-1 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button size="sm" variant="primary">Search</Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <Filter size={13} className="text-gray-400" />
        <span className="text-xs text-gray-500 mr-1">Filters:</span>
        <select
          className="text-xs border border-gray-200 rounded-md px-2 py-1.5 text-gray-700 bg-white cursor-pointer outline-none"
          value={industryFilter}
          onChange={(e) => setIndustryFilter(e.target.value)}
        >
          {industries.map((i) => <option key={i}>{i}</option>)}
        </select>
        <select
          className="text-xs border border-gray-200 rounded-md px-2 py-1.5 text-gray-700 bg-white cursor-pointer outline-none"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          {statuses.map((s) => <option key={s}>{s}</option>)}
        </select>
        {(search || industryFilter !== 'All' || statusFilter !== 'All') && (
          <button
            className="text-xs text-[#6C4CF1] hover:underline cursor-pointer"
            onClick={() => { setSearch(''); setIndustryFilter('All'); setStatusFilter('All') }}
          >
            Clear filters
          </button>
        )}
        <span className="ml-auto text-xs text-gray-400">{filtered.length} results</span>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table
          headers={['Candidate', 'Industry', 'Primary Skill', 'Secondary Skills', 'Experience', 'Location', 'Notice Period', 'Recruiter', 'Status', 'AI Score', 'Source', 'Updated']}
        >
          {filtered.map((c) => (
            <Tr key={c.id} onClick={() => onSelectCandidate(c)}>
              <Td>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{c.name}</p>
                  <p className="text-xs text-gray-400">{c.currentCompany}</p>
                </div>
              </Td>
              <Td><span className="text-xs text-gray-600">{c.industry}</span></Td>
              <Td><span className="text-xs font-medium text-[#6C4CF1] bg-[#EEE9FD] px-2 py-0.5 rounded-full">{c.primarySkill}</span></Td>
              <Td>
                <div className="flex gap-1 flex-wrap max-w-[160px]">
                  {c.secondarySkills.slice(0, 2).map((s) => (
                    <span key={s} className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full">{s}</span>
                  ))}
                  {c.secondarySkills.length > 2 && <span className="text-[10px] text-gray-400">+{c.secondarySkills.length - 2}</span>}
                </div>
              </Td>
              <Td><span className="text-xs text-gray-600">{c.experience} yrs</span></Td>
              <Td><span className="text-xs text-gray-600">{c.currentLocation}</span></Td>
              <Td><span className="text-xs text-gray-600">{c.noticePeriod}</span></Td>
              <Td><span className="text-xs text-gray-600">{c.assignedRecruiter.split(' ')[0]}</span></Td>
              <Td><StatusBadge status={c.status} /></Td>
              <Td><ConfidenceBadge score={c.aiConfidence} /></Td>
              <Td><span className="text-xs text-gray-500">{c.resumeSource}</span></Td>
              <Td><span className="text-xs text-gray-400">{c.lastUpdated}</span></Td>
            </Tr>
          ))}
        </Table>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-sm text-gray-400">No candidates match the current filters.</div>
        )}
      </div>
    </div>
  )
}
