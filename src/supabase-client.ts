import { createClient, type SupabaseClient } from '@supabase/supabase-js';

export function createSupabaseClient(): SupabaseClient {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const client = createClient(supabaseUrl, supabaseKey);
  return client;
}

export async function pingSupabase(): Promise<boolean> {
  try {
    const supabase = createSupabaseClient();
    await supabase.from('searchables').select('*').limit(1);
    return true;
  } catch (e) {
    console.error('Supabase ping error --\n', e, '\n---\n');
  }
  return false;
}
