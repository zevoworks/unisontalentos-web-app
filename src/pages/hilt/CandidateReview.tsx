import { useState } from 'react'
import { CheckCircle, XCircle, FileText, ChevronLeft } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'
import { Button } from '../../components/ui/Button'
import { ConfidenceBadge } from '../../components/ui/Badge'
import { pendingReviews, recruiters, categories, skills } from '../../data/mockData'

interface Props {
  onNavigate: (page: string) => void
}

export default function CandidateReview({ onNavigate }: Props) {
  const review = pendingReviews[0]
  const candidate = review.candidate

  const [manualCategory, setManualCategory] = useState(review.suggestedCategory)
  const [manualRecruiter, setManualRecruiter] = useState('Kiran Patel')
  const [selectedSkills, setSelectedSkills] = useState<string[]>(review.suggestedSkills)
  const [approved, setApproved] = useState<boolean | null>(null)

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill])
  }

  if (approved !== null) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${approved ? 'bg-emerald-50' : 'bg-red-50'}`}>
          {approved ? <CheckCircle size={32} className="text-emerald-500" /> : <XCircle size={32} className="text-red-400" />}
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          {approved ? 'Candidate Approved' : 'Candidate Rejected'}
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          {approved
            ? `${candidate.name} has been assigned to ${manualRecruiter}.`
            : `${candidate.name} has been rejected and archived.`}
        </p>
        <Button variant="secondary" onClick={() => onNavigate('pending-reviews')}>
          Back to Queue
        </Button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => onNavigate('pending-reviews')}
          className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <ChevronLeft size={12} /> Pending Reviews
        </button>
        <span className="text-gray-300 text-xs">/</span>
        <span className="text-xs text-gray-700 font-medium">Review: {candidate.name}</span>
      </div>

      <PageHeader
        title={`Review: ${candidate.name}`}
        subtitle={`AI Confidence: ${review.confidenceScore}% · Below threshold · Requires manual validation`}
      />

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        {/* Resume Preview */}
        <div className="xl:col-span-2 bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
            <FileText size={14} className="text-gray-400" />
            <span className="text-sm font-semibold text-gray-900">Resume Preview</span>
          </div>
          <div className="p-4 bg-gray-50 min-h-96 font-mono text-[11px] text-gray-600 space-y-3">
            <div className="bg-white rounded p-3 border border-gray-100">
              <p className="text-sm font-bold text-gray-900">{candidate.name}</p>
              <p className="text-gray-500">{candidate.email} · {candidate.phone}</p>
              <p className="text-gray-500">{candidate.currentLocation}</p>
            </div>
            <div className="bg-white rounded p-3 border border-gray-100">
              <p className="font-bold text-gray-800 mb-1 text-xs uppercase tracking-wide">Professional Summary</p>
              <p className="text-gray-600 leading-relaxed">{candidate.summary}</p>
            </div>
            <div className="bg-white rounded p-3 border border-gray-100">
              <p className="font-bold text-gray-800 mb-1 text-xs uppercase tracking-wide">Experience</p>
              <p className="font-medium text-gray-800">{candidate.currentCompany}</p>
              <p className="text-gray-500">Senior Engineer · 2021–Present · {candidate.currentLocation}</p>
              <p className="text-gray-600 mt-1">Led multiple high-impact projects delivering measurable business value.</p>
            </div>
            <div className="bg-white rounded p-3 border border-gray-100">
              <p className="font-bold text-gray-800 mb-1 text-xs uppercase tracking-wide">Skills</p>
              <div className="flex flex-wrap gap-1">
                {[candidate.primarySkill, ...candidate.secondarySkills].map((s) => (
                  <span key={s} className="bg-gray-100 px-2 py-0.5 rounded text-[10px]">{s}</span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded p-3 border border-gray-100">
              <p className="font-bold text-gray-800 mb-1 text-xs uppercase tracking-wide">Education</p>
              <p className="text-gray-600">{candidate.education}</p>
            </div>
          </div>
        </div>

        {/* Review Panel */}
        <div className="xl:col-span-3 space-y-4">
          {/* AI Suggestions */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-900">AI Suggestions</h3>
              <ConfidenceBadge score={review.confidenceScore} />
            </div>
            <div className="grid grid-cols-2 gap-3 p-3 bg-amber-50 border border-amber-100 rounded-md">
              <div>
                <p className="text-[10px] text-amber-700 uppercase tracking-wide">Industry</p>
                <p className="text-xs font-semibold text-gray-900">{review.suggestedIndustry}</p>
              </div>
              <div>
                <p className="text-[10px] text-amber-700 uppercase tracking-wide">Category</p>
                <p className="text-xs font-semibold text-gray-900">{review.suggestedCategory}</p>
              </div>
              <div className="col-span-2">
                <p className="text-[10px] text-amber-700 uppercase tracking-wide mb-1">Suggested Skills</p>
                <div className="flex flex-wrap gap-1">
                  {review.suggestedSkills.map((s) => (
                    <span key={s} className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Manual Overrides */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Manual Classification</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-gray-600 block mb-1">Category</label>
                <select
                  value={manualCategory}
                  onChange={(e) => setManualCategory(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-700 outline-none focus:border-[#6C4CF1] cursor-pointer"
                >
                  {categories.map((c) => <option key={c.id}>{c.name}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-gray-600 block mb-2">Skills (select all that apply)</label>
                <div className="flex flex-wrap gap-1.5 p-3 border border-gray-200 rounded-md bg-gray-50 min-h-[60px]">
                  {skills.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => toggleSkill(s.name)}
                      className={`text-[10px] px-2 py-0.5 rounded-full cursor-pointer transition-colors ${
                        selectedSkills.includes(s.name)
                          ? 'bg-[#6C4CF1] text-white'
                          : 'bg-white border border-gray-200 text-gray-600 hover:border-[#6C4CF1]'
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-gray-600 block mb-1">Assign Recruiter</label>
                <select
                  value={manualRecruiter}
                  onChange={(e) => setManualRecruiter(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-700 outline-none focus:border-[#6C4CF1] cursor-pointer"
                >
                  {recruiters.map((r) => (
                    <option key={r.id}>{r.name} ({r.activeCount} active)</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              icon={<CheckCircle size={14} />}
              className="flex-1"
              onClick={() => setApproved(true)}
            >
              Approve & Assign to {manualRecruiter.split(' ')[0]}
            </Button>
            <Button
              variant="danger"
              icon={<XCircle size={14} />}
              onClick={() => setApproved(false)}
            >
              Reject
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
