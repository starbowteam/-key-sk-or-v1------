export default async function handler(req, res) {
  // Разрешаем CORS для твоего приложения (опционально)
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Можно ограничить метод GET (или оставить POST)
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENROUTER_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Key not configured' });
  }

  res.status(200).json({ key: apiKey });
}
