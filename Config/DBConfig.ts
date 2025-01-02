import { createClient } from 'npm:@supabase/supabase-js'
 
const SUPABASE_URL ='https://wtalsuyzkcogrsrpgoqz.supabase.co';
const SUPABASE_ANON_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0YWxzdXl6a2NvZ3JzcnBnb3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwMjkwODksImV4cCI6MjA1MDYwNTA4OX0.3V1iHJvdZoQUPsIKRL0xFjffnUxY-JCZrEoPQbieLRY';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
 
export default supabase;


