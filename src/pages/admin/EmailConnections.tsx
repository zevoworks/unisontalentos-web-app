import { Plus, RefreshCw, Eye, Download, RotateCw, Paperclip } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'
import { Button } from '../../components/ui/Button'
import { ConnectionBadge } from '../../components/ui/Badge'
import { Table, Tr, Td } from '../../components/ui/Table'
import { emailConnections, emailLog } from '../../data/mockData'

const statusColor: Record<string, string> = {
  Parsed: 'text-emerald-600 bg-emerald-50',
  Processing: 'text-amber-600 bg-amber-50',
  Failed: 'text-red-500 bg-red-50',
}

export default function EmailConnections() {
  return (
    <div>
      <PageHeader
        title="Email Connections"
        subtitle="Microsoft 365 mailboxes connected for resume intake"
        actions={<Button variant="primary" icon={<Plus size={14} />}>Connect Mailbox</Button>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 mb-6">
        {emailConnections.map((conn) => (
          <div key={conn.id} className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm font-semibold text-gray-900 truncate">{conn.displayName}</p>
              <ConnectionBadge status={conn.status} />
            </div>
            <p className="text-xs text-gray-500 truncate mb-3">{conn.mailbox}</p>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
              <span>{conn.emailsToday} emails today</span>
              <span>{conn.resumesExtracted} resumes</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-gray-400">Last sync: {conn.lastSync}</span>
              <Button size="sm" variant="ghost" icon={<RefreshCw size={12} />} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-gray-900">Recent Emails</h3>
        </div>
        <Table headers={['Mailbox', 'Sender', 'Subject', 'Attachment', 'Received', 'Status', 'Actions']}>
          {emailLog.map((e) => (
            <Tr key={e.id}>
              <Td><span className="text-xs text-gray-600">{e.mailbox}</span></Td>
              <Td><span className="text-xs text-gray-600">{e.sender}</span></Td>
              <Td><span className="text-xs text-gray-900">{e.subject}</span></Td>
              <Td>{e.hasAttachment ? <Paperclip size={12} className="text-gray-400" /> : <span className="text-xs text-gray-300">—</span>}</Td>
              <Td><span className="text-xs text-gray-500">{e.receivedTime}</span></Td>
              <Td><span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${statusColor[e.status]}`}>{e.status}</span></Td>
              <Td>
                <div className="flex items-center gap-1">
                  <Button size="sm" variant="ghost" icon={<Eye size={12} />} />
                  <Button size="sm" variant="ghost" icon={<Download size={12} />} />
                  <Button size="sm" variant="ghost" icon={<RotateCw size={12} />} />
                </div>
              </Td>
            </Tr>
          ))}
        </Table>
      </div>
    </div>
  )
}
