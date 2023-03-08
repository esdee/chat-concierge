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
    const body = await response.json();
    console.info(
      'OPEN AI PING RESPONSE ---\n',
      response,
      '\n-- BODY --\n',
      body,
      '\n---\n'
    );
    return response.status === 200;
  } catch (e) {
    console.error(e);
  }
  return false;
}
