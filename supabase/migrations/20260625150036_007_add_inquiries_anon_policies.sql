/*
# Add missing anon policies for inquiries table

Add SELECT, UPDATE, DELETE policies for anon access to inquiries table,
matching the review table's public access pattern.

1. Changes:
- Add anon SELECT policy on inquiries
- Add anon UPDATE policy on inquiries
- Add anon DELETE policy on inquiries

2. Security Note:
- inquiries are now fully public (anon + authenticated) for all operations
*/

-- Enable RLS on inquiries (in case not already enabled)
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Add missing public policies for inquiries
DROP POLICY IF EXISTS "anon_select_inquiries" ON inquiries;
CREATE POLICY "anon_select_inquiries" ON inquiries FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_update_inquiries" ON inquiries;
CREATE POLICY "anon_update_inquiries" ON inquiries FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_inquiries" ON inquiries;
CREATE POLICY "anon_delete_inquiries" ON inquiries FOR DELETE
TO anon, authenticated USING (true);