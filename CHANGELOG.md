# Changelog
<!--
  Purpose:
  - Track project change history over time.
  - Record date, summary, and key files touched for each change set.
  - Keep entries append-only (do not delete past entries).
-->

## 2024-06-09
- Fixed "use server" export violation in leads dashboard actions.
- Moved Zod schema and helper functions out of `app/dashboard/leads/actions.ts` to a new utils file.
- Ensured only async functions are exported from server action module.

**Files touched:**
- app/dashboard/leads/actions.ts
- app/dashboard/leads/leadsUtils.ts (new)