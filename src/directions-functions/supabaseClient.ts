import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://splfsymwvlirktdoogdb.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwbGZzeW13dmxpcmt0ZG9vZ2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5MzI0OTAsImV4cCI6MjAzODUwODQ5MH0.viw9OPCC6wQj_-ySA5A_u0TNck1YvAUjzpDI1F159lc";

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function addDataToDatabase() {


}
