export type Role = 'admin' | 'hilt' | 'recruiter'

export type CandidateStatus =
  | 'New'
  | 'Called'
  | 'Interested'
  | 'Interview Scheduled'
  | 'Interview Completed'
  | 'Client Shared'
  | 'Shortlisted'
  | 'Offer Extended'
  | 'Joined'
  | 'Rejected'
  | 'On Hold'
  | 'Archived'

export interface Candidate {
  id: string
  name: string
  email: string
  phone: string
  industry: string
  category: string
  primarySkill: string
  secondarySkills: string[]
  experience: number
  currentCompany: string
  currentLocation: string
  preferredLocation: string
  expectedSalary: string
  noticePeriod: string
  education: string
  summary: string
  assignedRecruiter: string
  assignedDate: string
  status: CandidateStatus
  aiConfidence: number
  resumeSource: string
  resumeEmail: string
  lastUpdated: string
}

export interface Category {
  id: string
  name: string
  skillCount: number
  candidateCount: number
}

export interface Skill {
  id: string
  name: string
  category: string
  candidateCount: number
}

export type ConnectionStatus = 'connected' | 'disconnected' | 'syncing'

export interface EmailConnection {
  id: string
  mailbox: string
  displayName: string
  lastSync: string
  emailsToday: number
  resumesExtracted: number
  status: ConnectionStatus
}

export interface PendingReview {
  id: string
  candidate: Candidate
  suggestedIndustry: string
  suggestedCategory: string
  suggestedSkills: string[]
  confidenceScore: number
  receivedAt: string
}

export type Availability = 'Available' | 'Busy' | 'Away'

export interface Recruiter {
  id: string
  name: string
  email: string
  assignedCategories: string[]
  assignedSkills: string[]
  queueSize: number
  activeCount: number
  availability: Availability
  status: 'Active' | 'Inactive'
}

export interface AuditLogEntry {
  id: string
  timestamp: string
  user: string
  candidate: string
  action: string
  previousValue: string
  newValue: string
}

export type ProcessingStep =
  | 'Downloading Resume'
  | 'OCR'
  | 'Parsing Resume'
  | 'Extracting Skills'
  | 'Extracting Experience'
  | 'Industry Detection'
  | 'Category Detection'
  | 'Complete'

export interface AIProcessingItem {
  id: string
  candidateName: string
  mailbox: string
  step: ProcessingStep
  progress: number
  confidence: number | null
  assignmentStatus: 'Auto-Assigned' | 'Pending Human Review' | 'Processing'
}

export interface EmailLogEntry {
  id: string
  mailbox: string
  sender: string
  subject: string
  hasAttachment: boolean
  receivedTime: string
  status: 'Parsed' | 'Processing' | 'Failed'
}
