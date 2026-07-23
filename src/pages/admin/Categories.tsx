import { Plus, Edit2, Trash2 } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'
import { Button } from '../../components/ui/Button'
import { Table, Tr, Td } from '../../components/ui/Table'
import { categories } from '../../data/mockData'

export default function Categories() {
  return (
    <div>
      <PageHeader
        title="Categories"
        subtitle="Job function categories used for candidate classification"
        actions={<Button variant="primary" icon={<Plus size={14} />}>Add Category</Button>}
      />
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table headers={['Category Name', 'Skills Mapped', 'Candidates', 'Actions']}>
          {categories.map((c) => (
            <Tr key={c.id}>
              <Td><span className="text-sm font-medium text-gray-900">{c.name}</span></Td>
              <Td><span className="text-sm text-gray-600">{c.skillCount}</span></Td>
              <Td><span className="text-sm text-gray-600">{c.candidateCount}</span></Td>
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
