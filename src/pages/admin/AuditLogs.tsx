import { useState } from 'react'
import { Search, Download } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'
import { Button } from '../../components/ui/Button'
import { Table, Tr, Td } from '../../components/ui/Table'
import { auditLogs } from '../../data/mockData'

export default function AuditLogs() {
  const [search, setSearch] = useState('')

  const filtered = auditLogs.filter((log) => {
    if (!search) return true
    const term = search.toLowerCase()
    return [log.user, log.candidate, log.action].some((f) => f.toLowerCase().includes(term))
  })

  return (
    <div>
      <PageHeader
        title="Audit Logs"
        subtitle="Full history of status changes and AI/human actions"
        actions={<Button variant="secondary" icon={<Download size={14} />}>Export</Button>}
      />

      <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4 flex items-center gap-2">
        <Search size={14} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search by user, candidate, or action..."
          className="flex-1 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="text-xs text-gray-400">{filtered.length} entries</span>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table headers={['Timestamp', 'User', 'Candidate', 'Action', 'Previous Value', 'New Value']}>
          {filtered.map((log) => (
            <Tr key={log.id}>
              <Td><span className="text-xs text-gray-500">{log.timestamp}</span></Td>
              <Td><span className="text-xs font-medium text-gray-900">{log.user}</span></Td>
              <Td><span className="text-xs text-gray-600">{log.candidate}</span></Td>
              <Td><span className="text-xs text-[#6C4CF1] font-medium">{log.action}</span></Td>
              <Td><span className="text-xs text-gray-500">{log.previousValue}</span></Td>
              <Td><span className="text-xs text-gray-900">{log.newValue}</span></Td>
            </Tr>
          ))}
        </Table>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-sm text-gray-400">No audit entries match your search.</div>
        )}
      </div>
    </div>
  )
}
