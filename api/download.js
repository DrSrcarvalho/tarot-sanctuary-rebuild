// GET /api/download?id=PAYMENT_ID&token=TOKEN
// Libera o PDF apenas se o token (gerado por /api/check-payment) for válido,
// não estiver expirado, e o pagamento estiver, de fato, aprovado no Mercado Pago
// (checagem dupla, por segurança).

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).send('Método não permitido');
  }

  const { id, token } = req.query;
  const SECRET = process.env.DOWNLOAD_TOKEN_SECRET;
  const ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN;

  if (!id || !token) {
    return res.status(400).send('Parâmetros ausentes');
  }
  if (!SECRET || !ACCESS_TOKEN) {
    return res.status(500).send('Variáveis de ambiente não configuradas');
  }

  try {
    const decoded = Buffer.from(String(token), 'base64url').toString('utf8');
    const segments = decoded.split('.');
    if (segments.length !== 3) return res.status(403).send('Token inválido');
    const [paymentId, expiresStr, signature] = segments;

    if (paymentId !== String(id)) {
      return res.status(403).send('Token não corresponde ao pagamento informado');
    }
    if (Date.now() > Number(expiresStr)) {
      return res.status(403).send('Link expirado. Volte à página e clique em "baixar" novamente.');
    }

    const payload = `${paymentId}.${expiresStr}`;
    const expectedSignature = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
    const sigBuf = Buffer.from(signature || '', 'hex');
    const expectedBuf = Buffer.from(expectedSignature, 'hex');
    const validSignature = sigBuf.length === expectedBuf.length && crypto.timingSafeEqual(sigBuf, expectedBuf);
    if (!validSignature) {
      return res.status(403).send('Token inválido');
    }

    // Checagem dupla direto no Mercado Pago antes de liberar o arquivo.
    const mpRes = await fetch(`https://api.mercadopago.com/v1/payments/${encodeURIComponent(id)}`, {
      headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}` },
    });
    const data = await mpRes.json();
    if (!mpRes.ok || data.status !== 'approved') {
      return res.status(403).send('Pagamento não confirmado');
    }

    const filePath = path.join(process.cwd(), 'private', 'Simpatias_e_Rituais.pdf');
    const file = fs.readFileSync(filePath);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Simpatias-e-Rituais.pdf"');
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).send(file);
  } catch (err) {
    console.error('Erro inesperado (download):', err);
    return res.status(500).send('Erro interno');
  }
}
