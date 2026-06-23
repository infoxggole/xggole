
import { createClient } from '@supabase/supabase-js';

// এই লাইনগুলো .env ফাইল থেকে তথ্য তুলে আনবে
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);