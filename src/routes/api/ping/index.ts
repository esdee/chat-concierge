import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ json }) => {
  json(200, {
    message: 'Hello World !!',
    random: Math.random() * 100,
    supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  });
};
