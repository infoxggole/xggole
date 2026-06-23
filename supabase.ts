import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cgmhoddnybjufmrkkkyw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnbWhvZGRueWJqdWZtcmtra3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNjA5OTcsImV4cCI6MjA5NjkzNjk5N30.zvMugBiFC_JLz3cixCvh3-YWdFjogMNsLGyczXo40qs';

export const supabase = createClient(supabaseUrl, supabaseKey);