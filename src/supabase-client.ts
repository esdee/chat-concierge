import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const globalForSupabase = global as unknown as { supabase: SupabaseClient };

export const supabase =
  globalForSupabase.supabase ||
  createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
  );

if (process.env.NODE_ENV !== 'production')
  globalForSupabase.supabase = supabase;
