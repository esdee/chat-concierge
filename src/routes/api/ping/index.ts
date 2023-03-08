import type { RequestHandler } from '@builder.io/qwik-city';
import { pingOpenAI } from '../../../openAI-client';
import { pingSupabase } from '../../../supabase-client';

export const onGet: RequestHandler = async ({ json }) => {
  const [okOne, okTwo] = await Promise.all([pingSupabase(), pingOpenAI()]);

  json(200, {
    message: 'Hello World !!',
    random: Math.random() * 100,
    supabaseOk: okOne,
    openAIOK: okTwo,
  });
};
