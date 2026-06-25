/*
# Create INSERT-only policy for anon users on review table

Allows unauthenticated (anon) users to INSERT reviews only.
*/

-- Ensure RLS is enabled
ALTER TABLE review ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if any
DROP POLICY IF EXISTS "anon_insert_review" ON review;

-- Create INSERT-only policy for anon
CREATE POLICY "anon_insert_review" ON review FOR INSERT
TO anon WITH CHECK (true);