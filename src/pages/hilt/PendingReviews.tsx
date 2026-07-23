import { Clock } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'
import { ConfidenceBadge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { pendingReviews } from '../../data/mockData'

interface Props {
  onNavigate: (page: string) => void
}

export default function PendingReviews({ onNavigate }: Props) {
  return (
    <div>
      <PageHeader
        title="Pending Reviews"
        subtitle={`${pendingReviews.length} candidates awaiting human review`}
      />

      <div className="space-y-3">
        {pendingReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span className="text-sm font-semibold text-gray-900">{review.candidate.name}</span>
                  <ConfidenceBadge score={review.confidenceScore} />
                  <span className="text-xs text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                    <Clock size={10} /> Pending Review
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  {review.candidate.currentCompany} · {review.candidate.currentLocation} · {review.candidate.experience} yrs exp
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-3 bg-gray-50 rounded-md">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">AI Suggested Industry</p>
                    <p className="text-xs font-medium text-gray-800">{review.suggestedIndustry}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">AI Suggested Category</p>
                    <p className="text-xs font-medium text-gray-800">{review.suggestedCategory}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Confidence Score</p>
                    <p className="text-xs font-bold text-amber-600">{review.confidenceScore}%</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">AI Suggested Skills</p>
                    <div className="flex flex-wrap gap-1">
                      {review.suggestedSkills.map((s) => (
                        <span key={s} className="text-[10px] bg-white border border-gray-200 text-gray-600 px-1.5 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-gray-400 mt-2">Received: {review.receivedAt} · Source: {review.candidate.resumeEmail}</p>
              </div>

              <div className="flex flex-col gap-2 flex-shrink-0">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => onNavigate('candidate-review')}
                >
                  Open Review
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
