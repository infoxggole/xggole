/*
# Remove overly permissive UPDATE/DELETE policies

Single-tenant public website - no auth flow.
Admin operations should use service role key, not authenticated user policies.
*/

DROP POLICY IF EXISTS "auth_update_review" ON review;
DROP POLICY IF EXISTS "auth_delete_review" ON review;
DROP POLICY IF EXISTS "auth_update_inquiries" ON inquiries;
DROP POLICY IF EXISTS "auth_delete_inquiries" ON inquiries;