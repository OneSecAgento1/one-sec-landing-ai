// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nyeodlhdwuucjnvornvb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55ZW9kbGhkd3V1Y2pudm9ybnZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxMDY2NzgsImV4cCI6MjA2MTY4MjY3OH0.1f4TKu9uRHxoS0cRzYvpkRPNjrc3j-antypir3JEnWU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);