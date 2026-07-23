import { useState } from 'react'
import { ChevronLeft, FileText, Brain, User, Briefcase, GraduationCap, Phone, Mail, MapPin, Clock, DollarSign, Building, MessageSquare, Activity } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { StatusBadge, ConfidenceBadge, Badge } from '../components/ui/Badge'
import type { Candidate, CandidateStatus } from '../types'

interface Props {
  candidate: Candidate
  onBack: () => void
}

const tabs = ['Resume', 'AI Summary', 'Details', 'Experience', 'Skills', 'Notes', 'Activity']

const statusStages: CandidateStatus[] = [
  'New', 'Called', 'Interested', 'Interview Scheduled', 'Interview Completed',
  'Client Shared', 'Shortlisted', 'Offer Extended', 'Joined',
]

export default function Candidate360({ candidate, onBack }: Props) {
  const [activeTab, setActiveTab] = useState('AI Summary')

  const stageIndex = statusStages.indexOf(candidate.status as CandidateStatus)

  return (
    <div>
      {/* Back */}
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 cursor-pointer mb-4"
      >
        <ChevronLeft size={12} /> Back
      </button>

      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#6C4CF1] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-lg font-bold">{candidate.name[0]}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-lg font-bold text-gray-900">{candidate.name}</h1>
              <StatusBadge status={candidate.status} />
              <ConfidenceBadge score={candidate.aiConfidence} />
            </div>
            <p className="text-sm text-gray-600 mt-0.5">{candidate.primarySkill} · {candidate.experience} years · {candidate.currentCompany}</p>
            <div className="flex items-center gap-4 mt-2 flex-wrap">
              <span className="flex items-center gap-1 text-xs text-gray-500"><Mail size={11} />{candidate.email}</span>
              <span className="flex items-center gap-1 text-xs text-gray-500"><Phone size={11} />{candidate.phone}</span>
              <span className="flex items-center gap-1 text-xs text-gray-500"><MapPin size={11} />{candidate.currentLocation}</span>
              <span className="flex items-center gap-1 text-xs text-gray-500"><Clock size={11} />{candidate.noticePeriod}</span>
              <span className="flex items-center gap-1 text-xs text-gray-500"><DollarSign size={11} />{candidate.expectedSalary}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 flex-wrap justify-end">
            <Button size="sm" variant="secondary" icon={<Phone size={12} />}>Call</Button>
            <Button size="sm" variant="secondary" icon={<Mail size={12} />}>Email</Button>
            <Button size="sm" variant="primary">Share with Client</Button>
          </div>
        </div>

        {/* Status Pipeline */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-0 overflow-x-auto">
            {statusStages.map((stage, i) => {
              const isPast = i < stageIndex
              const isCurrent = i === stageIndex
              return (
                <div key={stage} className="flex items-center flex-shrink-0">
                  <div className={`px-2.5 py-1 text-[10px] font-medium rounded-full transition-colors ${
                    isCurrent ? 'bg-[#6C4CF1] text-white' :
                    isPast ? 'bg-emerald-100 text-emerald-700' :
                    'bg-gray-100 text-gray-400'
                  }`}>
                    {stage}
                  </div>
                  {i < statusStages.length - 1 && (
                    <div className={`w-4 h-px ${isPast ? 'bg-emerald-300' : 'bg-gray-200'}`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 border-b border-gray-200 mb-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 text-xs font-medium whitespace-nowrap cursor-pointer transition-colors border-b-2 -mb-px ${
              activeTab === tab
                ? 'border-[#6C4CF1] text-[#6C4CF1]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          {activeTab === 'AI Summary' && (
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-3">
                <Brain size={15} className="text-[#6C4CF1]" />
                <h3 className="text-sm font-semibold text-gray-900">AI Candidate Summary</h3>
                <Badge variant="purple">AI Generated</Badge>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">{candidate.summary}</p>
              <div className="grid grid-cols-2 gap-3 p-3 bg-[#F5F3FF] rounded-md">
                <div>
                  <p className="text-[10px] text-[#6C4CF1] uppercase tracking-wide">Industry</p>
                  <p className="text-xs font-medium text-gray-900">{candidate.industry}</p>
                </div>
                <div>
                  <p className="text-[10px] text-[#6C4CF1] uppercase tracking-wide">Category</p>
                  <p className="text-xs font-medium text-gray-900">{candidate.category}</p>
                </div>
                <div>
                  <p className="text-[10px] text-[#6C4CF1] uppercase tracking-wide">AI Confidence</p>
                  <p className="text-xs font-bold text-gray-900">{candidate.aiConfidence}%</p>
                </div>
                <div>
                  <p className="text-[10px] text-[#6C4CF1] uppercase tracking-wide">Resume Source</p>
                  <p className="text-xs font-medium text-gray-900">{candidate.resumeSource}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Resume' && (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
                <FileText size={14} className="text-gray-400" />
                <span className="text-sm font-semibold text-gray-900">Resume Viewer</span>
                <Badge variant="neutral">PDF</Badge>
                <Button size="sm" variant="ghost" className="ml-auto">Download</Button>
              </div>
              <div className="p-6 bg-gray-50 font-mono text-[11px] text-gray-600 space-y-4 min-h-96">
                <div className="bg-white rounded-md p-4 border border-gray-100 shadow-sm">
                  <p className="text-base font-bold text-gray-900">{candidate.name}</p>
                  <p className="text-gray-500">{candidate.email} | {candidate.phone} | {candidate.currentLocation}</p>
                  <p className="text-gray-500">LinkedIn: linkedin.com/in/{candidate.name.toLowerCase().replace(' ', '-')}</p>
                </div>
                <div className="bg-white rounded-md p-4 border border-gray-100 shadow-sm">
                  <p className="font-bold text-gray-800 uppercase tracking-wide text-xs mb-2 border-b border-gray-100 pb-1">Professional Summary</p>
                  <p className="text-gray-600 leading-relaxed">{candidate.summary}</p>
                </div>
                <div className="bg-white rounded-md p-4 border border-gray-100 shadow-sm">
                  <p className="font-bold text-gray-800 uppercase tracking-wide text-xs mb-2 border-b border-gray-100 pb-1">Work Experience</p>
                  <p className="font-semibold text-gray-800">{candidate.currentCompany}</p>
                  <p className="text-gray-500 mb-1">Senior {candidate.primarySkill} Engineer · 2021 – Present</p>
                  <p className="text-gray-600">• Led architecture design and implementation of core systems</p>
                  <p className="text-gray-600">• Collaborated with cross-functional teams to deliver key product features</p>
                  <p className="text-gray-600">• Mentored junior engineers and conducted code reviews</p>
                </div>
                <div className="bg-white rounded-md p-4 border border-gray-100 shadow-sm">
                  <p className="font-bold text-gray-800 uppercase tracking-wide text-xs mb-2 border-b border-gray-100 pb-1">Technical Skills</p>
                  <p><span className="font-medium">Primary:</span> {candidate.primarySkill}</p>
                  <p><span className="font-medium">Secondary:</span> {candidate.secondarySkills.join(', ')}</p>
                </div>
                <div className="bg-white rounded-md p-4 border border-gray-100 shadow-sm">
                  <p className="font-bold text-gray-800 uppercase tracking-wide text-xs mb-2 border-b border-gray-100 pb-1">Education</p>
                  <p className="text-gray-700">{candidate.education}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Details' && (
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2"><User size={14} />Personal & Professional Details</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Current Company', value: candidate.currentCompany, icon: <Building size={12} /> },
                  { label: 'Current Location', value: candidate.currentLocation, icon: <MapPin size={12} /> },
                  { label: 'Preferred Location', value: candidate.preferredLocation, icon: <MapPin size={12} /> },
                  { label: 'Expected Salary', value: candidate.expectedSalary, icon: <DollarSign size={12} /> },
                  { label: 'Notice Period', value: candidate.noticePeriod, icon: <Clock size={12} /> },
                  { label: 'Assigned Recruiter', value: candidate.assignedRecruiter, icon: <User size={12} /> },
                  { label: 'Resume Source', value: candidate.resumeSource, icon: <Mail size={12} /> },
                  { label: 'Last Updated', value: candidate.lastUpdated, icon: <Clock size={12} /> },
                ].map((f) => (
                  <div key={f.label} className="p-3 bg-gray-50 rounded-md">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide flex items-center gap-1 mb-0.5">{f.icon}{f.label}</p>
                    <p className="text-xs font-medium text-gray-900">{f.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Skills' && (
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Skills</h3>
              <div className="mb-3">
                <p className="text-xs font-medium text-gray-500 mb-2">Primary Skill</p>
                <span className="text-sm font-semibold text-[#6C4CF1] bg-[#EEE9FD] px-3 py-1 rounded-full">{candidate.primarySkill}</span>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 mb-2">Secondary Skills</p>
                <div className="flex flex-wrap gap-2">
                  {candidate.secondarySkills.map((s) => (
                    <span key={s} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Notes' && (
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2"><MessageSquare size={14} />Recruiter Notes</h3>
              <textarea
                className="w-full h-32 text-sm text-gray-700 border border-gray-200 rounded-md p-3 resize-none outline-none focus:border-[#6C4CF1] placeholder:text-gray-400"
                placeholder="Add a note about this candidate..."
              />
              <div className="flex justify-end mt-2">
                <Button size="sm" variant="primary">Save Note</Button>
              </div>
              <div className="mt-4 space-y-2">
                <div className="p-3 bg-gray-50 rounded-md">
                  <p className="text-xs text-gray-700">Spoke with candidate — very motivated, flexible on location. Has competing offer from TCS, follow up by Jul 26.</p>
                  <p className="text-[10px] text-gray-400 mt-1">Priya Sharma · Jul 22, 2026</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Activity' && (
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2"><Activity size={14} />Activity Timeline</h3>
              <div className="space-y-3">
                {[
                  { event: 'Status changed to ' + candidate.status, time: candidate.lastUpdated, by: candidate.assignedRecruiter },
                  { event: 'Assigned to recruiter ' + candidate.assignedRecruiter, time: candidate.assignedDate, by: 'AI Auto-Assign' },
                  { event: 'Resume ingested from ' + candidate.resumeSource, time: candidate.assignedDate, by: 'System' },
                ].map((a, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6C4CF1] mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-700">{a.event}</p>
                      <p className="text-[10px] text-gray-400">{a.time} · {a.by}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Experience' && (
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2"><Briefcase size={14} />Professional Experience</h3>
              <div className="space-y-4">
                {[
                  { company: candidate.currentCompany, role: `Senior ${candidate.primarySkill} Engineer`, period: '2021 – Present', location: candidate.currentLocation, desc: candidate.summary },
                  { company: 'Previous Company', role: `${candidate.primarySkill} Developer`, period: '2018 – 2021', location: candidate.currentLocation, desc: 'Contributed to core product development and feature delivery across multiple release cycles.' },
                ].map((exp, i) => (
                  <div key={i} className="p-3 border border-gray-100 rounded-md">
                    <p className="text-sm font-semibold text-gray-900">{exp.company}</p>
                    <p className="text-xs text-gray-600">{exp.role} · {exp.period} · {exp.location}</p>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-3">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Info</h3>
            <div className="space-y-2.5">
              {[
                { label: 'Assigned Recruiter', value: candidate.assignedRecruiter },
                { label: 'AI Confidence', value: `${candidate.aiConfidence}%` },
                { label: 'Industry', value: candidate.industry },
                { label: 'Category', value: candidate.category },
                { label: 'Assigned Date', value: candidate.assignedDate },
              ].map((f) => (
                <div key={f.label} className="flex items-center justify-between py-1.5 border-b border-gray-50">
                  <span className="text-xs text-gray-500">{f.label}</span>
                  <span className="text-xs font-medium text-gray-900">{f.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Change Status</h3>
            <select className="w-full text-xs px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-700 outline-none focus:border-[#6C4CF1] cursor-pointer mb-2">
              {['New', 'Called', 'Interested', 'Interview Scheduled', 'Client Shared', 'Shortlisted', 'Offer Extended', 'Joined', 'Rejected', 'On Hold'].map((s) => (
                <option key={s} selected={s === candidate.status}>{s}</option>
              ))}
            </select>
            <Button variant="primary" size="sm" className="w-full">Update Status</Button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Education</h3>
            <p className="text-xs text-gray-700 flex items-start gap-1.5">
              <GraduationCap size={13} className="text-gray-400 mt-0.5 flex-shrink-0" />
              {candidate.education}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
