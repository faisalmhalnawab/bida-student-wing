-- BIDA Student Wing
-- Draft database schema for review before any production activation.
-- Intended for server-side use with Supabase. Do not expose the service role key.

create extension if not exists pgcrypto;

create table if not exists public.conference_registrations (
  id uuid primary key default gen_random_uuid(),
  conference_code text not null default 'BIDA-SW-2027',
  full_name text not null,
  email text not null,
  medical_school text,
  year_of_study text,
  accessibility_or_dietary_requirements text,
  registration_status text not null default 'registered'
    check (registration_status in ('registered','cancelled','attended')),
  confirmation_sent_at timestamptz,
  reminder_sent_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (conference_code, email)
);

create table if not exists public.research_applications (
  id uuid primary key default gen_random_uuid(),
  project_code text,
  full_name text not null,
  email text not null,
  medical_school text,
  year_of_study text,
  research_interests text,
  relevant_experience text,
  application_status text not null default 'submitted'
    check (application_status in ('submitted','under_review','shortlisted','matched','unsuccessful','withdrawn')),
  reviewer_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  enquiry_type text not null,
  message text not null,
  message_status text not null default 'new'
    check (message_status in ('new','in_progress','closed')),
  created_at timestamptz not null default now()
);

-- All three tables are intended to be written through authenticated server-side
-- routes using a service role. No public database policies are defined here.
alter table public.conference_registrations enable row level security;
alter table public.research_applications enable row level security;
alter table public.contact_messages enable row level security;

comment on table public.conference_registrations is
  'Draft delegate-registration store. Review privacy wording and retention before activation.';

comment on table public.research_applications is
  'Draft research-application store. Review selection, governance and retention before activation.';

comment on table public.contact_messages is
  'Draft public contact-form store. Review routing and retention before activation.';
