/*
# Fix RLS security issues - restrict overly permissive policies

This migration removes unrestricted access policies and implements proper security:

1. review table:
   - SELECT: Public (reviews are meant to be displayed)
   - INSERT: Public (anyone can submit a review)
   - UPDATE/DELETE: Authenticated only (admin operations)

2. inquiries table:
   - INSERT: Public (anyone can submit contact forms)
   - SELECT/UPDATE/DELETE: Authenticated only (admin operations - private data)
*/

-- Drop all existing policies on review table
DROP POLICY IF EXISTS "anon_delete_review" ON review;
DROP POLICY IF EXISTS "anon_update_review" ON review;
DROP POLICY IF EXISTS "anon_insert_review" ON review;
DROP POLICY IF EXISTS "anon_select_review" ON review;

-- Drop all existing policies on inquiries table
DROP POLICY IF EXISTS "anon_delete_inquiries" ON inquiries;
DROP POLICY IF EXISTS "anon_update_inquiries" ON inquiries;
DROP POLICY IF EXISTS "anon_select_inquiries" ON inquiries;
DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
DROP POLICY IF EXISTS "auth_select_inquiries" ON inquiries;
DROP POLICY IF EXISTS "auth_update_inquiries" ON inquiries;
DROP POLICY IF EXISTS "auth_delete_inquiries" ON inquiries;
DROP POLICY IF EXISTS "auth_insert_inquiries" ON inquiries;

-- Review: Public read (reviews are public)
CREATE POLICY "public_select_review" ON review FOR SELECT
  TO anon, authenticated USING (true);

-- Review: Public insert (anyone can submit)
CREATE POLICY "public_insert_review" ON review FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Review: Authenticated only for update/delete (admin)
CREATE POLICY "auth_update_review" ON review FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "auth_delete_review" ON review FOR DELETE
  TO authenticated USING (true);

-- Inquiries: Public insert only (contact form submissions)
CREATE POLICY "public_insert_inquiries" ON inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Inquiries: Authenticated only for select/update/delete (admin operations)
CREATE POLICY "auth_select_inquiries" ON inquiries FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "auth_update_inquiries" ON inquiries FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "auth_delete_inquiries" ON inquiries FOR DELETE
  TO authenticated USING (true);