// POST /api/create-pix
// Cria uma cobrança Pix no Mercado Pago para o e-book "Simpatias & Rituais".
// Requer a variável de ambiente MERCADOPAGO_ACCESS_TOKEN configurada no projeto Vercel.

import crypto from 'crypto';

const PRICE = 49.90;
const EXPIRATION_MINUTES = 30;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN;
  if (!ACCESS_TOKEN) {
    return res.status(500).json({ error: 'MERCADOPAGO_ACCESS_TOKEN não configurado no ambiente da Vercel' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const { email, nome } = body || {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Informe um e-mail válido' });
  }

  const dateOfExpiration = new Date(Date.now() + EXPIRATION_MINUTES * 60 * 1000);
  // Mercado Pago exige o formato com offset de timezone, ex: 2024-01-01T10:00:00.000-03:00
  // toISOString() devolve o horário em UTC; para representar esse mesmo instante como
  // horário de Brasília (-03:00), subtraímos 3h antes de formatar como texto.
  const BR_OFFSET_MS = 3 * 60 * 60 * 1000;
  const isoWithOffset = new Date(dateOfExpiration.getTime() - BR_OFFSET_MS)
    .toISOString()
    .replace('Z', '-03:00');

  const parts = (nome || 'Cliente Simpatias').trim().split(/\s+/);
  const firstName = parts[0] || 'Cliente';
  const lastName = parts.slice(1).join(' ') || 'Simpatias';

  const idempotencyKey = crypto.randomUUID();

  try {
    const mpRes = await fetch('https://api.mercadopago.com/v1/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'X-Idempotency-Key': idempotencyKey,
      },
      body: JSON.stringify({
        transaction_amount: PRICE,
        description: 'E-book Simpatias & Rituais',
        payment_method_id: 'pix',
        date_of_expiration: isoWithOffset,
        payer: {
          email,
          first_name: firstName,
          last_name: lastName,
        },
        metadata: {
          produto: 'ebook-simpatias-rituais',
        },
      }),
    });

    const data = await mpRes.json();

    if (!mpRes.ok) {
      console.error('Erro Mercado Pago (create-pix):', JSON.stringify(data));
      return res.status(mpRes.status).json({ error: 'Não foi possível criar o Pix', details: data.message || data });
    }

    const txData = data.point_of_interaction && data.point_of_interaction.transaction_data;
    if (!txData || !txData.qr_code) {
      console.error('Resposta sem QR code:', JSON.stringify(data));
      return res.status(502).json({ error: 'Mercado Pago não retornou o QR code do Pix' });
    }

    return res.status(200).json({
      payment_id: data.id,
      status: data.status,
      qr_code: txData.qr_code,               // string "copia e cola"
      qr_code_base64: txData.qr_code_base64,  // imagem do QR code em base64 (PNG)
      expires_at: isoWithOffset,
    });
  } catch (err) {
    console.error('Erro inesperado (create-pix):', err);
    return res.status(500).json({ error: 'Erro interno ao criar o Pix' });
  }
}
