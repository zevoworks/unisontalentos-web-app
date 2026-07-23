import { Clock, CheckCircle } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'
import { ConfidenceBadge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { pendingReviews } from '../../data/mockData'

export default function HumanReview() {
  return (
    <div>
      <PageHeader
        title="Human Review"
        subtitle="Candidates below confidence threshold awaiting HILT review"
      />

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-2xl font-bold text-amber-600">{pendingReviews.length}</p>
          <p className="text-xs text-gray-500 mt-0.5">Pending Reviews</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-2xl font-bold text-emerald-600">47</p>
          <p className="text-xs text-gray-500 mt-0.5">Completed Today</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-2xl font-bold text-gray-900">4.2 min</p>
          <p className="text-xs text-gray-500 mt-0.5">Avg Review Time</p>
        </div>
      </div>

      <div className="space-y-3">
        {pendingReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-gray-900">{review.candidate.name}</span>
                  <ConfidenceBadge score={review.confidenceScore} />
                  <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                    <Clock size={10} />Pending
                  </span>
                </div>
                <p className="text-xs text-gray-500">{review.candidate.currentCompany} · {review.candidate.currentLocation}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">Suggested Industry</p>
                    <p className="text-xs font-medium text-gray-700">{review.suggestedIndustry}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">Suggested Category</p>
                    <p className="text-xs font-medium text-gray-700">{review.suggestedCategory}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">Suggested Skills</p>
                    <div className="flex flex-wrap gap-1 mt-0.5">
                      {review.suggestedSkills.slice(0, 3).map((s) => (
                        <span key={s} className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">Received At</p>
                    <p className="text-xs font-medium text-gray-700">{review.receivedAt}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button size="sm" variant="primary" icon={<CheckCircle size={12} />}>Review</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
