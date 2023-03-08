function apiHeaders() {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', `Bearer ${import.meta.env.VITE_OPENAI_KEY}`);
  return headers;
}

export async function pingOpenAI(): Promise<boolean> {
  const headers = apiHeaders();
  try {
    const response = await fetch('https://api.openai.com/v1/models', {
      method: 'GET',
      headers,
    });
    console.info('OPEN AI PING RESPONSE ---\n', response, '\n---\n');
    return response.status === 200;
  } catch (e) {
    console.error(e);
  }
  return false;
}
