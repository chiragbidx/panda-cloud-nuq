-- 0003_add_leads_table.sql: Add leads table for LeadNest CRM

CREATE TABLE "leads" (
  "id" text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "team_id" text NOT NULL REFERENCES "teams" ("id") ON DELETE CASCADE,
  "owner_id" text NOT NULL REFERENCES "users" ("id") ON DELETE SET NULL,
  "name" text NOT NULL,
  "email" text,
  "phone" text,
  "status" text NOT NULL DEFAULT 'open',
  "source" text DEFAULT '',
  "value" text DEFAULT '',
  "notes" text DEFAULT '',
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz NOT NULL DEFAULT now()
);