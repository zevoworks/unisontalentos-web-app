import { Plus, Edit2, Trash2 } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'
import { Button } from '../../components/ui/Button'
import { Table, Tr, Td } from '../../components/ui/Table'
import { skills } from '../../data/mockData'

export default function Skills() {
  return (
    <div>
      <PageHeader
        title="Skills"
        subtitle="Technical and domain skills used for candidate matching"
        actions={<Button variant="primary" icon={<Plus size={14} />}>Add Skill</Button>}
      />
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table headers={['Skill', 'Category', 'Candidates', 'Actions']}>
          {skills.map((s) => (
            <Tr key={s.id}>
              <Td>
                <span className="text-xs font-medium text-[#6C4CF1] bg-[#EEE9FD] px-2 py-0.5 rounded-full">
                  {s.name}
                </span>
              </Td>
              <Td><span className="text-sm text-gray-600">{s.category}</span></Td>
              <Td><span className="text-sm text-gray-600">{s.candidateCount}</span></Td>
              <Td>
                <div className="flex items-center gap-1">
                  <Button size="sm" variant="ghost" icon={<Edit2 size={12} />}>Edit</Button>
                  <Button size="sm" variant="ghost" icon={<Trash2 size={12} />} />
                </div>
              </Td>
            </Tr>
          ))}
        </Table>
      </div>
    </div>
  )
}
