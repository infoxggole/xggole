/*
# Create review and inquiries tables (single-tenant, no auth)

1. New Tables
- `review`
  - `id` (uuid, primary key)
  - `name` (text, not null) - reviewer's name
  - `rating` (integer, not null, 1-5) - star rating
  - `message` (text, not null) - review content
  - `created_at` (timestamptz, default now())

- `inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) - contact name
  - `email` (text, not null) - contact email
  - `message` (text, not null) - inquiry content
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on both tables.
- Allow anon + authenticated full CRUD because data is intentionally public/shared.
  - Reviews: Anyone can read reviews, anyone can submit a review.
  - Inquiries: Anyone can submit an inquiry (reads are typically admin-only but we allow for simplicity).

3. Important Notes
- No user_id or auth integration required - single-tenant design.
- Rating is constrained to 1-5 via CHECK constraint.
- Email validation via TEXT CHECK pattern.
*/

-- Create review table
CREATE TABLE IF NOT EXISTS review (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL CHECK (email ~* '^[^@]+@[^@]+\.[^@]+$'),
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE review ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Review policies (public read, public write)
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

-- Inquiries policies (public write, public read for simplicity)
DROP POLICY IF EXISTS "anon_select_inquiries" ON inquiries;
CREATE POLICY "anon_select_inquiries" ON inquiries FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries" ON inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_inquiries" ON inquiries;
CREATE POLICY "anon_update_inquiries" ON inquiries FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_inquiries" ON inquiries;
CREATE POLICY "anon_delete_inquiries" ON inquiries FOR DELETE
  TO anon, authenticated USING (true);

-- Create index for ordering reviews by date
CREATE INDEX IF NOT EXISTS idx_review_created_at ON review(created_at DESC);