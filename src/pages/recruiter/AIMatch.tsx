import { useState } from 'react'
import { Sparkles, Upload } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'
import { Button } from '../../components/ui/Button'
import { Badge, StatusBadge } from '../../components/ui/Badge'
import { candidates } from '../../data/mockData'

const sampleJD = `We are looking for a Senior Java Backend Engineer with strong experience in Spring Boot and microservices architecture.

Requirements:
- 5+ years of Java development experience
- Strong Spring Boot, Kafka, and REST API skills
- Experience with AWS (EC2, S3, RDS)
- PostgreSQL and Redis experience preferred
- Location: Bangalore preferred, open to Pune
- Immediate or 30-day joiners preferred
- Budget: ₹20-25 LPA`

const matchResults = [
  { candidate: candidates[0], matchPct: 94, reason: 'Java + Spring Boot + Kafka + AWS · Bangalore relocation · 30-day notice', missing: 'Redis', action: 'Shortlist' },
  { candidate: candidates[7], matchPct: 72, reason: 'Java + Selenium (automation) · Bangalore · 30-day notice', missing: 'Spring Boot, Kafka, AWS', action: 'Consider' },
  { candidate: candidates[2], matchPct: 65, reason: 'Backend + Python (similar stack) · Strong data engineering skills', missing: 'Java, Spring Boot', action: 'Backup' },
]

export default function AIMatch() {
  const [jd, setJd] = useState('')
  const [analyzed, setAnalyzed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleAnalyze = () => {
    setLoading(true)
    setTimeout(() => { setLoading(false); setAnalyzed(true) }, 1500)
  }

  return (
    <div>
      <PageHeader
        title="AI Candidate Match"
        subtitle="Paste a Job Description to find the best matching candidates"
      />

      {!analyzed ? (
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={14} className="text-[#6C4CF1]" />
            <h3 className="text-sm font-semibold text-gray-900">Job Description Input</h3>
          </div>
          <textarea
            className="w-full h-64 text-sm text-gray-700 border border-gray-200 rounded-md p-3 resize-none outline-none focus:border-[#6C4CF1] placeholder:text-gray-400"
            placeholder={sampleJD}
            value={jd}
            onChange={(e) => setJd(e.target.value)}
          />
          <div className="flex items-center justify-between mt-3">
            <Button variant="ghost" size="sm" icon={<Upload size={12} />}>Upload JD (PDF/DOCX)</Button>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm" onClick={() => setJd(sampleJD)}>Load Sample JD</Button>
              <Button
                variant="primary"
                size="sm"
                icon={loading ? undefined : <Sparkles size={12} />}
                onClick={handleAnalyze}
                disabled={!jd && loading}
              >
                {loading ? 'Analyzing...' : 'Find Matching Candidates'}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* AI Extracted Requirements */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#6C4CF1]" />
                <h3 className="text-sm font-semibold text-gray-900">AI Extracted Requirements</h3>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setAnalyzed(false)}>New Search</Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 bg-[#F5F3FF] rounded-md">
              {[
                { label: 'Industry', value: 'Information Technology' },
                { label: 'Primary Skill', value: 'Java' },
                { label: 'Experience', value: '5+ years' },
                { label: 'Location', value: 'Bangalore / Pune' },
                { label: 'Notice Period', value: 'Immediate / 30 days' },
                { label: 'Salary Range', value: '₹20–25 LPA' },
              ].map((r) => (
                <div key={r.label}>
                  <p className="text-[10px] text-[#6C4CF1] uppercase tracking-wide">{r.label}</p>
                  <p className="text-xs font-medium text-gray-900">{r.value}</p>
                </div>
              ))}
              <div className="col-span-2 md:col-span-4">
                <p className="text-[10px] text-[#6C4CF1] uppercase tracking-wide mb-1">Required Skills</p>
                <div className="flex flex-wrap gap-1">
                  {['Java', 'Spring Boot', 'Kafka', 'AWS', 'REST APIs', 'PostgreSQL'].map((s) => (
                    <span key={s} className="text-[10px] bg-[#6C4CF1] text-white px-2 py-0.5 rounded-full">{s}</span>
                  ))}
                  {['Redis', 'Kubernetes'].map((s) => (
                    <span key={s} className="text-[10px] bg-white border border-[#6C4CF1] text-[#6C4CF1] px-2 py-0.5 rounded-full">+ {s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Match Results */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Ranked Matches · {matchResults.length} candidates found
            </h3>
            <div className="space-y-3">
              {matchResults.map((result, i) => (
                <div key={result.candidate.id} className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 font-bold text-gray-500 text-sm">
                      #{i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-sm font-semibold text-gray-900">{result.candidate.name}</span>
                        <div className="flex items-center gap-1">
                          <span className={`text-sm font-bold ${result.matchPct >= 85 ? 'text-emerald-600' : result.matchPct >= 70 ? 'text-amber-600' : 'text-gray-500'}`}>
                            {result.matchPct}% Match
                          </span>
                        </div>
                        <StatusBadge status={result.candidate.status} />
                      </div>
                      <p className="text-xs text-gray-500 mb-2">
                        {result.candidate.currentCompany} · {result.candidate.experience} yrs · {result.candidate.currentLocation} · {result.candidate.noticePeriod} notice · {result.candidate.expectedSalary}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Match Reason</p>
                          <p className="text-xs text-gray-700">{result.reason}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Missing Skills</p>
                          <p className="text-xs text-amber-700">{result.missing}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Recommended Action</p>
                          <Badge variant={result.action === 'Shortlist' ? 'success' : result.action === 'Consider' ? 'warning' : 'neutral'}>
                            {result.action}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="primary">View Profile</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
