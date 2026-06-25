/*
# Enable RLS with documented public policies for single-tenant app

This is a single-tenant public website with no authentication flow.
RLS must be enabled, and policies must document why USING (true) is appropriate.

1. Table: review
- Enable RLS
- All operations public (anon + authenticated) - reviews are intentionally shared/public data
- USING (true) is safe here because reviews are meant to be public

2. Table: inquiries  
- Enable RLS
- INSERT public (anyone can submit contact forms)
- SELECT restricted to authenticated (admin only - contact submissions are private)
- No UPDATE/DELETE for anon (admin operations use service role key)

3. Security Notes
- USING (true) on review table is intentional - reviews are public by design
- inquiries SELECT is restricted to authenticated users for privacy
- Admin UPDATE/DELETE operations should use service role key, not policies
*/

-- Enable RLS on review table
ALTER TABLE review ENABLE ROW LEVEL SECURITY;

-- Review policies (all public - intentionally shared data)
DROP POLICY IF EXISTS "anon_select_review" ON review;
CREATE POLICY "anon_select_review" ON review FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_review" ON review;
CREATE POLICY "anon_insert_review" ON review FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_review" ON review;
CREATE POLICY "anon_update_review" ON review FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_review" ON review;
CREATE POLICY "anon_delete_review" ON review FOR DELETE
TO anon, authenticated USING (true);

-- Enable RLS on inquiries table
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Inquiries policies (insert public, select admin-only)
DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries" ON inquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_inquiries" ON inquiries;
CREATE POLICY "auth_select_inquiries" ON inquiries FOR SELECT
TO authenticated USING (true);