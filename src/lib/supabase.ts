
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uuapaszbwtjfsgqrzlbo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1YXBhc3pid3RqZnNncXJ6bGJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5MzY4MzksImV4cCI6MjA5NzUxMjgzOX0.zNSq_8LlQTEAXMODbRCGKHPEDgl0jC7f6AlaRkvq5zM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);