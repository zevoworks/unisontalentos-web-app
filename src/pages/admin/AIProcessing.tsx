import { Cpu } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'
import { StatCard } from '../../components/ui/StatCard'
import { Table, Tr, Td } from '../../components/ui/Table'
import { aiProcessingQueue } from '../../data/mockData'

const assignmentColor: Record<string, string> = {
  'Auto-Assigned': 'text-emerald-600 bg-emerald-50',
  'Pending Human Review': 'text-amber-600 bg-amber-50',
  Processing: 'text-blue-500 bg-blue-50',
}

export default function AIProcessing() {
  const processing = aiProcessingQueue.filter((p) => p.step !== 'Complete').length
  const complete = aiProcessingQueue.length - processing

  return (
    <div>
      <PageHeader title="AI Processing" subtitle="Live resume processing queue" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <StatCard label="In Queue" value={aiProcessingQueue.length} icon={<Cpu size={18} />} color="#6C4CF1" />
        <StatCard label="Currently Processing" value={processing} icon={<Cpu size={18} />} color="#3B82F6" />
        <StatCard label="Completed" value={complete} icon={<Cpu size={18} />} color="#10B981" />
        <StatCard label="Avg Processing Time" value="42 sec" icon={<Cpu size={18} />} color="#F59E0B" />
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table headers={['Candidate', 'Mailbox', 'Current Step', 'Progress', 'Confidence', 'Assignment Status']}>
          {aiProcessingQueue.map((item) => (
            <Tr key={item.id}>
              <Td><span className="text-sm font-medium text-gray-900">{item.candidateName}</span></Td>
              <Td><span className="text-xs text-gray-500">{item.mailbox}</span></Td>
              <Td><span className="text-xs text-gray-600">{item.step}</span></Td>
              <Td>
                <div className="w-28 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.step === 'Complete' ? 'bg-emerald-400' : 'bg-[#6C4CF1]'}`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </Td>
              <Td>
                {item.confidence !== null ? (
                  <span className="text-xs font-medium text-gray-700">{item.confidence}%</span>
                ) : (
                  <span className="text-xs text-gray-300">—</span>
                )}
              </Td>
              <Td>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${assignmentColor[item.assignmentStatus]}`}>
                  {item.assignmentStatus}
                </span>
              </Td>
            </Tr>
          ))}
        </Table>
      </div>
    </div>
  )
}
