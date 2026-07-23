You are a Senior Enterprise Product Designer.

Design a complete responsive web application called:

Unison AI Recruit Desk

Tagline:
AI Powered Recruitment Intelligence Platform

Footer:
Powered by Zevoworks Technologies

======================================================
ABOUT THE PRODUCT
======================================================

Unison International is a recruitment consultancy.

Recruiters receive resumes across multiple Microsoft 365 mailboxes.

The platform automates resume intake using AI and provides recruiters with a powerful searchable candidate database.

This is NOT an Applicant Tracking System.

There are NO Jobs.
There is NO Career Portal.
There is NO Applicant Portal.
There is NO Job Posting.

Everything starts from incoming resumes received through Microsoft 365 email.

======================================================
SYSTEM WORKFLOW
======================================================

Microsoft 365 Inbox

↓

Retrieve Emails

↓

Download Resume Attachments

↓

AI Resume Parsing

↓

Extract Candidate Information

↓

Extract Experience

↓

Extract Education

↓

Extract Current Company

↓

Extract Current Location

↓

Extract Expected Salary

↓

Extract Notice Period

↓

Detect Industry

↓

Detect Primary Skill

↓

Detect Secondary Skills

↓

Generate AI Candidate Summary

↓

Calculate Confidence Score

↓

IF Confidence >= 80%

Automatically Assign Recruiter

Automatically Send Thank You Email

Candidate added into Recruiter Workspace

ELSE

Move to Human Review (HILT)

Recruiter validates AI prediction

Candidate assigned manually

======================================================
DESIGN STYLE
======================================================

Use Microsoft Fluent Design.

Inspired by

• Microsoft 365 Admin Center

• Azure Portal

• Outlook Web

• Microsoft Power Platform

Professional

Minimal

Enterprise

Functional

Avoid startup style dashboards.

======================================================
COLORS
======================================================

Primary

#6C4CF1

Background

White

Secondary Background

#F5F7FA

Success

Green

Warning

Orange

Error

Red

======================================================
RESPONSIVE
======================================================

Generate

Desktop

Tablet

Mobile

======================================================
VERY IMPORTANT UI RULES
======================================================

Keep the LEFT SIDEBAR identical on every page.

Do NOT redesign navigation.

No large hero banners.

No giant search bars.

No profile photos.

No fake notifications.

No unnecessary widgets.

Keep layouts practical.

Enterprise data density.

Tables should contain 8–12 realistic rows.

Maintain identical spacing and typography across all screens.

======================================================
LEFT SIDEBAR
======================================================

Dashboard

Email Inbox

AI Processing Queue

Human Review (HILT)

Recruiter Workspace

Categories & Skills

Users

Reports

Audit Logs

Settings

======================================================
PAGE 1
Dashboard
======================================================

Summary Cards

Connected Mailboxes

Emails Received Today

Resumes Parsed

AI Auto Assigned

Pending Human Review

Average AI Confidence

Recent Processing Table

Candidate

Detected Category

Primary Skill

Confidence

Assigned Recruiter

Current Status

Processing Funnel

Emails

↓

Resume Parsed

↓

AI Processing

↓

Categorized

↓

Assigned

↓

Recruiter Workspace

Charts

Category Distribution

Daily Resume Processing

Recruiter Workload

======================================================
PAGE 2
Email Inbox
======================================================

Connected Microsoft 365 mailboxes.

Columns

Mailbox

Sender

Subject

Attachment

Received Time

Processing Status

Actions

Preview

Download

Reprocess

======================================================
PAGE 3
AI Processing Queue
======================================================

Live AI Processing

Each row

Candidate

Current Processing Step

Downloading Resume

OCR

Parsing Resume

Extracting Skills

Extracting Experience

Industry Detection

Category Detection

Confidence Score

Assignment Status

======================================================
PAGE 4
Human Review (HILT)
======================================================

Only resumes below 80% confidence.

Columns

Candidate

Suggested Category

Suggested Skills

Confidence

Resume Preview

Category Dropdown

Skill Dropdown

Recruiter Dropdown

Approve

Reject

======================================================
PAGE 5
Recruiter Workspace
======================================================

This is the primary working area for recruiters.

Display the complete candidate database.

No cards.

Professional enterprise data table.

Columns

Candidate Name

Primary Skill

Secondary Skills

Industry

Experience

Current Company

Current Location

Notice Period

Expected Salary

Assigned Recruiter

Current Status

AI Confidence

Last Updated

Advanced Filters

Industry

Primary Skill

Secondary Skill

Experience

Location

Notice Period

Current Company

Assigned Recruiter

Candidate Status

AI Confidence

Resume Source

Date Received

Search should support semantic AI search.

Example

Java Spring Boot Kafka AWS Gurgaon Immediate Joiner Banking

======================================================
Candidate Detail View
======================================================

Open from Recruiter Workspace.

Three-panel layout.

Left

Resume Viewer

Center

AI Candidate Summary

Overall Score

Industry

Primary Skill

Secondary Skills

Experience

Current Company

Current Location

Expected Salary

Notice Period

Education

Certifications

Strengths

Weaknesses

AI Recommendation

Right

Recruiter Notes

Activity Timeline

Email History

Call Notes

Attachments

======================================================
Candidate Lifecycle
======================================================

Recruiters can update candidate status.

Pipeline

New

Called

Interested

Interview Scheduled

Interview Completed

Client Shared

Shortlisted

Offer Extended

Joined

Rejected

On Hold

Archived

Every status change creates an Audit Log.

======================================================
AI JD Matching
======================================================

Recruiter uploads or pastes a Job Description.

AI analyses

Skills

Experience

Industry

Location

Salary

Notice Period

Then searches the entire candidate database.

Display ranked candidates.

Columns

Candidate

Match %

Primary Skills

Experience

Location

Notice Period

Current Status

Reason for Match

Clicking a candidate opens the detailed profile.

======================================================
PAGE 6
Categories & Skills
======================================================

Tree view.

Information Technology

Java

Spring Boot

NodeJS

React

Angular

Python

AWS

Azure

DevOps

Marketing

SEO

Finance

Healthcare

Retail

Each Skill maps to one or more Recruiters.

======================================================
PAGE 7
Users
======================================================

Recruiter

Email

Assigned Categories

Assigned Skills

Queue Size

Availability

Status

======================================================
PAGE 8
Reports
======================================================

Emails Processed

Resumes Parsed

AI Assignment %

Human Review %

Average Confidence

Recruiter Productivity

Category Distribution

Candidate Status Distribution

Hiring Trend

======================================================
PAGE 9
Audit Logs
======================================================

Timestamp

User

Candidate

Action

Previous Value

New Value

======================================================
PAGE 10
Settings
======================================================

Microsoft 365 Connections

Email Templates

AI Confidence Threshold

Category Mapping

Skill Mapping

Recruiter Assignment Rules

User Roles

======================================================
FINAL REQUIREMENTS
======================================================

Build the entire application as one cohesive enterprise product.

Maintain identical sidebar, spacing, colors, typography and components across every page.

Use compact enterprise tables.

Avoid excessive graphics.

Prioritize usability over decoration.

The final design should look like a production-ready Microsoft enterprise application that Unison International could deploy tomorrow.