// GET /api/check-payment?id=PAYMENT_ID
// Consulta o status do pagamento no Mercado Pago. Quando aprovado, devolve
// um token assinado (HMAC) de curta duração para liberar o download em /api/download.

import crypto from 'crypto';

const TOKEN_VALID_MINUTES = 15;

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ error: 'Parâmetro "id" é obrigatório' });
  }

  const ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN;
  const SECRET = process.env.DOWNLOAD_TOKEN_SECRET;
  if (!ACCESS_TOKEN || !SECRET) {
    return res.status(500).json({ error: 'Variáveis de ambiente não configuradas (MERCADOPAGO_ACCESS_TOKEN / DOWNLOAD_TOKEN_SECRET)' });
  }

  try {
    const mpRes = await fetch(`https://api.mercadopago.com/v1/payments/${encodeURIComponent(id)}`, {
      headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}` },
    });
    const data = await mpRes.json();

    if (!mpRes.ok) {
      console.error('Erro Mercado Pago (check-payment):', JSON.stringify(data));
      return res.status(mpRes.status).json({ error: 'Não foi possível consultar o pagamento' });
    }

    if (data.status === 'approved') {
      const expiresAt = Date.now() + TOKEN_VALID_MINUTES * 60 * 1000;
      const payload = `${data.id}.${expiresAt}`;
      const signature = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
      const token = Buffer.from(`${payload}.${signature}`).toString('base64url');
      return res.status(200).json({ status: 'approved', download_token: token });
    }

    // outros status possíveis: pending, in_process, rejected, cancelled, expired
    return res.status(200).json({ status: data.status });
  } catch (err) {
    console.error('Erro inesperado (check-payment):', err);
    return res.status(500).json({ error: 'Erro interno ao consultar o pagamento' });
  }
}
