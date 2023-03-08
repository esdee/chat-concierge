import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
});

const globalForOpenAI = global as unknown as { openAI: OpenAIApi };

export const openAI = globalForOpenAI.openAI || new OpenAIApi(configuration);

if (process.env.NODE_ENV !== 'production') globalForOpenAI.openAI = openAI;
