import { createClient } from '@supabase/supabase-js';

// ১. Cloudflare যাতে পুরোনো লিংক ব্যবহার করতে না পারে, তাই আমরা আপনার আসল লিংকটি এখানে "Fallback" হিসেবে ফিক্স করে দিচ্ছি।
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://sgqlqbkmnckejqionpld.supabase.co';

// ২. সতর্কতা: নিচের 'YOUR_ANON_KEY' লেখাটি মুছে ফেলে আপনার Supabase প্রজেক্টের আসল anon key-টি এখানে বসিয়ে দিন।
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);