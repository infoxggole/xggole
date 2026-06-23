/*
# Fix RLS policies for better security

Removes overly permissive UPDATE/DELETE policies for anon users.
Reviews: Public read/insert only, authenticated for update/delete.
Inquiries: Public insert only, authenticated for all other operations.
*/

DROP POLICY IF EXISTS "anon_update_review" ON review;
DROP POLICY IF EXISTS "anon_delete_review" ON review;
DROP POLICY IF EXISTS "anon_select_inquiries" ON inquiries;
DROP POLICY IF EXISTS "anon_update_inquiries" ON inquiries;
DROP POLICY IF EXISTS "anon_delete_inquiries" ON inquiries;

DROP POLICY IF EXISTS "auth_update_review" ON review;
CREATE POLICY "auth_update_review" ON review FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_review" ON review;
CREATE POLICY "auth_delete_review" ON review FOR DELETE TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_select_inquiries" ON inquiries;
CREATE POLICY "auth_select_inquiries" ON inquiries FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_inquiries" ON inquiries;
CREATE POLICY "auth_update_inquiries" ON inquiries FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_inquiries" ON inquiries;
CREATE POLICY "auth_delete_inquiries" ON inquiries FOR DELETE TO authenticated USING (true);