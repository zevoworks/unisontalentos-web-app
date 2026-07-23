import { useState } from 'react'
import { Search, Filter, Eye } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'
import { Button } from '../../components/ui/Button'
import { StatusBadge, ConfidenceBadge } from '../../components/ui/Badge'
import { Table, Tr, Td } from '../../components/ui/Table'
import { candidates } from '../../data/mockData'
import type { Candidate } from '../../types'

interface Props {
  onSelectCandidate: (c: Candidate) => void
}

export default function RecruiterCandidateIntelligence({ onSelectCandidate }: Props) {
  const [search, setSearch] = useState('')
  const [skillFilter, setSkillFilter] = useState('All')

  const skillOptions = ['All', 'Java', 'React', 'Python', 'AWS', 'Node.js', 'React Native', 'Power BI', 'Selenium']

  const filtered = candidates.filter((c) => {
    const matchSearch = !search || [c.name, c.primarySkill, c.currentCompany, c.currentLocation, ...c.secondarySkills]
      .some((f) => f.toLowerCase().includes(search.toLowerCase()))
    const matchSkill = skillFilter === 'All' || c.primarySkill === skillFilter || c.secondarySkills.includes(skillFilter)
    return matchSearch && matchSkill
  })

  return (
    <div>
      <PageHeader
        title="Candidate Intelligence"
        subtitle={`Full candidate database · ${candidates.length} total candidates`}
      />

      {/* Semantic Search */}
      <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4 flex items-center gap-3">
        <Search size={15} className="text-[#6C4CF1] flex-shrink-0" />
        <input
          type="text"
          placeholder='AI Search — try "React Lead Bangalore Retail" or "Java AWS Immediate Joiner"'
          className="flex-1 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button size="sm" variant="primary">Search</Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <Filter size={13} className="text-gray-400" />
        <span className="text-xs text-gray-500">Primary Skill:</span>
        {skillOptions.map((s) => (
          <button
            key={s}
            onClick={() => setSkillFilter(s)}
            className={`text-xs px-2.5 py-1 rounded-full border cursor-pointer transition-colors ${
              skillFilter === s
                ? 'bg-[#6C4CF1] text-white border-[#6C4CF1]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
            }`}
          >
            {s}
          </button>
        ))}
        <span className="ml-auto text-xs text-gray-400">{filtered.length} candidates</span>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table headers={['Candidate', 'Skills', 'Exp', 'Company', 'Location', 'Notice', 'Salary', 'Recruiter', 'Status', 'Score', '']}>
          {filtered.map((c) => (
            <Tr key={c.id} onClick={() => onSelectCandidate(c)}>
              <Td>
                <div>
                  <p className="text-sm font-medium text-gray-900">{c.name}</p>
                  <p className="text-xs text-gray-400">{c.industry}</p>
                </div>
              </Td>
              <Td>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-medium text-[#6C4CF1] bg-[#EEE9FD] px-1.5 py-0.5 rounded-full w-fit">{c.primarySkill}</span>
                  {c.secondarySkills.slice(0, 1).map((s) => (
                    <span key={s} className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-full w-fit">{s}</span>
                  ))}
                </div>
              </Td>
              <Td><span className="text-xs text-gray-600">{c.experience}y</span></Td>
              <Td><span className="text-xs text-gray-600">{c.currentCompany}</span></Td>
              <Td><span className="text-xs text-gray-600">{c.currentLocation}</span></Td>
              <Td><span className="text-xs text-gray-600">{c.noticePeriod}</span></Td>
              <Td><span className="text-xs text-gray-600">{c.expectedSalary}</span></Td>
              <Td><span className="text-xs text-gray-600">{c.assignedRecruiter.split(' ')[0]}</span></Td>
              <Td><StatusBadge status={c.status} /></Td>
              <Td><ConfidenceBadge score={c.aiConfidence} /></Td>
              <Td onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                <Button size="sm" variant="ghost" icon={<Eye size={12} />} onClick={() => onSelectCandidate(c)}>View</Button>
              </Td>
            </Tr>
          ))}
        </Table>
      </div>
    </div>
  )
}
