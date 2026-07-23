import { Plus, Edit2 } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'
import { Button } from '../../components/ui/Button'
import { Table, Tr, Td } from '../../components/ui/Table'
import { recruiters } from '../../data/mockData'
import type { Availability } from '../../types'

const availabilityColor: Record<Availability, string> = {
  Available: 'text-emerald-600 bg-emerald-50',
  Busy: 'text-amber-600 bg-amber-50',
  Away: 'text-gray-500 bg-gray-100',
}

export default function Recruiters() {
  return (
    <div>
      <PageHeader
        title="Recruiters"
        subtitle="Manage recruiter capacity and category/skill assignments"
        actions={<Button variant="primary" icon={<Plus size={14} />}>Add Recruiter</Button>}
      />
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table headers={['Recruiter', 'Assigned Categories', 'Assigned Skills', 'Queue', 'Availability', 'Status', 'Actions']}>
          {recruiters.map((r) => (
            <Tr key={r.id}>
              <Td>
                <div>
                  <p className="text-sm font-medium text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.email}</p>
                </div>
              </Td>
              <Td>
                <div className="flex flex-wrap gap-1 max-w-[180px]">
                  {r.assignedCategories.map((c) => (
                    <span key={c} className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full">{c}</span>
                  ))}
                </div>
              </Td>
              <Td>
                <div className="flex flex-wrap gap-1 max-w-[180px]">
                  {r.assignedSkills.map((s) => (
                    <span key={s} className="text-[10px] font-medium text-[#6C4CF1] bg-[#EEE9FD] px-1.5 py-0.5 rounded-full">{s}</span>
                  ))}
                </div>
              </Td>
              <Td>
                <span className="text-sm text-gray-700">{r.activeCount}</span>
                <span className="text-xs text-gray-400">/{r.queueSize}</span>
              </Td>
              <Td>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${availabilityColor[r.availability]}`}>
                  {r.availability}
                </span>
              </Td>
              <Td><span className="text-xs text-gray-600">{r.status}</span></Td>
              <Td>
                <Button size="sm" variant="ghost" icon={<Edit2 size={12} />}>Edit</Button>
              </Td>
            </Tr>
          ))}
        </Table>
      </div>
    </div>
  )
}
