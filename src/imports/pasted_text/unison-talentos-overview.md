You are a Principal Product Designer designing a production-ready enterprise SaaS application.

============================================================

PRODUCT

Unison TalentOS

AI Powered Recruitment Intelligence Platform

Powered by Zevoworks Technologies

============================================================

PRODUCT VISION

Design an enterprise platform that acts as the operating system for Unison International's recruitment consultancy.

Every day the organization receives resumes through multiple Microsoft 365 mailboxes.

Instead of manually downloading resumes, categorizing candidates and assigning consultants, AI performs the first level of recruitment operations.

The platform should feel comparable to Microsoft 365 Admin Center, Azure Portal, Atlassian Jira and Salesforce Lightning.

This is NOT an Applicant Tracking System.

Do NOT include

• Job Posting
• Career Portal
• Applicant Login
• Public Website
• HRMS
• Payroll
• Employee Management

Everything begins with incoming resumes received through Microsoft 365.

============================================================

APPLICATION ARCHITECTURE

One application.

Role Based Access Control (RBAC).

The interface changes based on the logged in user.

Three Roles

1. Administrator

2. Human In The Loop (HILT)

3. Recruiter / Consultant

The application should reuse the same design system and components across all roles.

============================================================

GLOBAL DESIGN

Microsoft Fluent Design

White backgrounds

Light grey surfaces

Purple primary (#6C4CF1)

Rounded cards

Enterprise tables

Minimal animations

Professional typography

Responsive

Desktop

Tablet

Mobile

Avoid

Large search bars

Profile photos

Fake notifications

Marketing dashboards

Decorative graphics

Everything should feel like software people use 8 hours a day.

============================================================
ROLE 1

ADMINISTRATOR
============================================================

Purpose

Configure and manage the platform.

Navigation

Dashboard

Email Connections

AI Processing

Human Review

Candidate Intelligence

Recruiters

Categories

Skills

Users

Reports

Audit Logs

Settings

Administrator Responsibilities

Connect Microsoft 365 mailboxes

Configure AI confidence threshold

Manage Categories

Manage Skills

Map Skills to Recruiters

Manage Recruiters

Manage Users

Manage Email Templates

View Reports

Audit Logs

Configure AI Models

Dashboard Widgets

Connected Mailboxes

Emails Today

Resumes Parsed

AI Assignment Rate

Human Review Queue

Recruiter Capacity

Daily Processing

============================================================
ROLE 2

HUMAN IN THE LOOP (HILT)
============================================================

Purpose

Validate resumes where AI confidence is below the configured threshold.

Navigation

Dashboard

Pending Reviews

Candidate Review

Reports

Profile

Dashboard

Pending Reviews

Completed Reviews

Average Review Time

AI Accuracy

Main Screen

Candidate

Resume Preview

Suggested Industry

Suggested Category

Suggested Skills

Confidence Score

Manual Category

Manual Skill

Assign Recruiter

Approve

Reject

Approving immediately sends the candidate to the assigned Recruiter's queue.

============================================================
ROLE 3

RECRUITER / CONSULTANT
============================================================

Purpose

Daily recruiter workspace.

Navigation

Dashboard

My Queue

Candidate Intelligence

AI Candidate Match

Activities

Reports

Profile

Dashboard

Assigned Candidates

New Today

Pending Calls

Interviews

Client Submissions

Offers

Joined

Today's Tasks

Upcoming Follow Ups

Recent Candidate Activity

============================================================

MY QUEUE

Only candidates assigned to the recruiter.

Columns

Candidate

Experience

Primary Skill

Industry

AI Confidence

Assigned Date

Current Status

Actions

View

Call

Add Notes

Share with Client

Change Status

============================================================

CANDIDATE INTELLIGENCE

The complete searchable candidate database.

Enterprise table.

Columns

Candidate

Industry

Primary Skill

Secondary Skills

Experience

Current Company

Current Location

Preferred Location

Expected Salary

Notice Period

Assigned Recruiter

Current Status

AI Confidence

Resume Source

Last Updated

Advanced Filters

Industry

Category

Primary Skill

Secondary Skill

Experience

Company

Location

Notice Period

Expected Salary

Recruiter

Status

AI Confidence

Semantic AI Search

Examples

Java Spring Boot Kafka AWS Gurgaon Immediate Joiner

React Lead Bangalore Retail

SEO Digital Marketing Delhi

============================================================

CANDIDATE 360

Selecting a candidate opens a full Candidate 360 page.

Sections

Resume Viewer

AI Candidate Summary

Personal Details

Professional Experience

Skills

Education

Projects

Certifications

Current Company

Salary

Notice Period

AI Summary

Recruiter Notes

Activity Timeline

Email History

Call History

Interview History

Client Submission History

Resume Versions

Attachments

============================================================

CANDIDATE STATUS

Recruiters manage candidate lifecycle.

Stages

New

Called

Interested

Interview Scheduled

Interview Completed

Client Shared

Client Feedback

Shortlisted

Offer Extended

Joined

Rejected

On Hold

Archived

Every change automatically updates Activity Timeline and Audit Logs.

============================================================

AI CANDIDATE MATCH

Recruiter uploads or pastes a Job Description.

AI extracts

Industry

Primary Skills

Secondary Skills

Experience

Location

Notice Period

Salary

The platform searches Candidate Intelligence.

Display ranked candidates.

Columns

Rank

Candidate

Match %

Skills

Experience

Location

Notice Period

Current Status

Reason For Match

Missing Skills

Recommended Action

============================================================

REPORTS

Recruiter Productivity

Emails Processed

Candidates Assigned

Candidates Shared

Offers

Joins

Category Distribution

Processing Time

AI Accuracy

============================================================

SETTINGS

Microsoft 365

Email Templates

AI Configuration

Confidence Threshold

Recruiter Assignment Rules

Role Permissions

============================================================

FINAL REQUIREMENTS

Use one unified design system.

Reuse components throughout the application.

Maintain consistent sidebar, spacing, typography, tables and forms.

Design this application as if it is shipping to Unison International tomorrow.

The application should look indistinguishable from a professionally built Microsoft enterprise application.