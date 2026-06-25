/*
# Force RLS for table owner

This ensures that even the table owner must pass through RLS policies,
providing defense in depth.

1. Changes:
- ALTER TABLE review FORCE ROW LEVEL SECURITY
- ALTER TABLE inquiries FORCE ROW LEVEL SECURITY

2. Security:
- Guarantees all queries go through RLS policies, including those from the table owner
- Defense in depth against accidental or malicious bypass through superuser accounts
*/

ALTER TABLE review FORCE ROW LEVEL SECURITY;
ALTER TABLE inquiries FORCE ROW LEVEL SECURITY;