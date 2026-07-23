import { Plus, Edit2 } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'
import { Button } from '../../components/ui/Button'
import { Table, Tr, Td } from '../../components/ui/Table'

const platformUsers = [
  { id: 'u1', name: 'Anil Kumar', email: 'anil.kumar@unison.com', role: 'Administrator', status: 'Active', lastActive: 'Jul 23, 2026 9:50 AM' },
  { id: 'u2', name: 'Meena Iyer', email: 'meena.iyer@unison.com', role: 'Human In The Loop', status: 'Active', lastActive: 'Jul 23, 2026 9:40 AM' },
  { id: 'u3', name: 'Priya Sharma', email: 'priya.sharma@unison.com', role: 'Recruiter', status: 'Active', lastActive: 'Jul 23, 2026 9:35 AM' },
  { id: 'u4', name: 'Arjun Mehta', email: 'arjun.mehta@unison.com', role: 'Recruiter', status: 'Active', lastActive: 'Jul 23, 2026 8:55 AM' },
  { id: 'u5', name: 'Divya Nair', email: 'divya.nair@unison.com', role: 'Recruiter', status: 'Active', lastActive: 'Jul 22, 2026 6:20 PM' },
  { id: 'u6', name: 'Kiran Patel', email: 'kiran.patel@unison.com', role: 'Recruiter', status: 'Active', lastActive: 'Jul 22, 2026 5:45 PM' },
  { id: 'u7', name: 'Sunita Rao', email: 'sunita.rao@unison.com', role: 'Human In The Loop', status: 'Inactive', lastActive: 'Jul 10, 2026 2:15 PM' },
]

const roleColor: Record<string, string> = {
  Administrator: 'text-[#6C4CF1] bg-[#EEE9FD]',
  'Human In The Loop': 'text-blue-600 bg-blue-50',
  Recruiter: 'text-emerald-600 bg-emerald-50',
}

export default function Users() {
  return (
    <div>
      <PageHeader
        title="Users"
        subtitle="Platform accounts and role-based access"
        actions={<Button variant="primary" icon={<Plus size={14} />}>Add User</Button>}
      />
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table headers={['Name', 'Email', 'Role', 'Status', 'Last Active', 'Actions']}>
          {platformUsers.map((u) => (
            <Tr key={u.id}>
              <Td><span className="text-sm font-medium text-gray-900">{u.name}</span></Td>
              <Td><span className="text-xs text-gray-500">{u.email}</span></Td>
              <Td>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${roleColor[u.role]}`}>{u.role}</span>
              </Td>
              <Td>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${u.status === 'Active' ? 'text-emerald-600 bg-emerald-50' : 'text-gray-500 bg-gray-100'}`}>
                  {u.status}
                </span>
              </Td>
              <Td><span className="text-xs text-gray-400">{u.lastActive}</span></Td>
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
