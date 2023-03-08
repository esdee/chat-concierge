import type { RequestHandler } from '@builder.io/qwik-city';
import { openAI } from '../../../openAI-client';
import { supabase } from '../../../supabase-client';

async function pingSupabase() {
  return await supabase.from('searchables').select('*').limit(1);
}

async function pingOpenAI() {
  const openAIResponse = await openAI.createEmbedding({
    model: 'text-embedding-ada-002',
    input: 'hello world',
  });
  const [{ embedding }] = openAIResponse.data.data;
  return embedding;
}

export const onGet: RequestHandler = async ({ json }) => {
  const supabaseResults = await pingSupabase();
  const embeddings = await pingOpenAI();

  json(200, {
    message: 'Hello World !!',
    random: Math.random() * 100,
    supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
    supabaseOk: !!supabaseResults,
    openAIOK: embeddings.length === 1536,
  });
};
