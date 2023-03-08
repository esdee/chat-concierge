import type { RequestHandler } from '@builder.io/qwik-city';
import { createOpenAIClient } from '../../../openAI-client';
import { createSupabaseClient } from '../../../supabase-client';

async function pingSupabase(): Promise<boolean> {
  try {
    const supabase = createSupabaseClient();
    await supabase.from('searchables').select('*').limit(1);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function pingOpenAI(): Promise<number[]> {
  try {
    const openAIClient = createOpenAIClient();
    const openAIResponse = await openAIClient.createEmbedding({
      model: 'text-embedding-ada-002',
      input: 'hello world',
    });
    const [{ embedding }] = openAIResponse.data.data;
    return embedding;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export const onGet: RequestHandler = async ({ json }) => {
  const okOne = await pingSupabase();
  const embeddings = await pingOpenAI();

  json(200, {
    message: 'Hello World !!',
    random: Math.random() * 100,
    supabaseOk: okOne,
    openAIOK: embeddings,
  });
};
