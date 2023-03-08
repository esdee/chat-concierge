import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
});

export function createOpenAIClient(): OpenAIApi {
  return new OpenAIApi(configuration);
}
