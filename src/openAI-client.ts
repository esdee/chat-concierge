function apiHeaders() {
  return {
    Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
    'OpenAI-Organization': import.meta.env.VITE_OPENAI_ORGANIZATION,
    'Content-Type': 'application/json',
  };
}

export async function pingOpenAI(): Promise<boolean> {
  const headers = apiHeaders();
  try {
    const response = await fetch('https://api.openai.com/v1/models', {
      method: 'GET',
      headers,
    });
    return response.status === 200;
  } catch (e) {
    console.error('OpenAI ping error --\n', e, '\n---\n');
  }
  return false;
}
