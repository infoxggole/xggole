-- XGGOLE Portfolio Database Schema
-- Run this in your Supabase SQL Editor

-- Reviews table
CREATE TABLE IF NOT EXISTS review (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contact inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE review ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Allow public read on reviews
CREATE POLICY "Anyone can read reviews"
  ON review FOR SELECT
  USING (true);

-- Allow public insert on reviews
CREATE POLICY "Anyone can submit reviews"
  ON review FOR INSERT
  WITH CHECK (true);

-- Allow public insert on inquiries
CREATE POLICY "Anyone can submit inquiries"
  ON inquiries FOR INSERT
  WITH CHECK (true);

-- Allow service role to read inquiries (for admin)
CREATE POLICY "Service role can read inquiries"
  ON inquiries FOR SELECT
  USING (auth.role() = 'service_role');
