import { createClient } from '@supabase/supabase-js';

// এনভায়রনমেন্ট থেকে ভেরিয়েবল রিড করবে
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// সুরক্ষা চেক (যদি কি না থাকে, তবে কোড এখানেই এরর দেবে, লুকানো এরর হবে না)
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL or Anon Key is missing in .env file.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);