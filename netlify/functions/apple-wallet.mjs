import { timingSafeEqual } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';
import { PKPass } from 'passkit-generator';

const QR_DESTINATION = 'https://seifotefa.com/links';
const requiredEnvironment = [
  'APPLE_WALLET_ACCESS_TOKEN',
  'APPLE_PASS_TYPE_IDENTIFIER',
  'APPLE_TEAM_IDENTIFIER',
  'APPLE_WWDR_CERTIFICATE',
  'APPLE_SIGNER_CERTIFICATE',
  'APPLE_SIGNER_PRIVATE_KEY',
];

const jsonResponse = (statusCode, payload) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store, private' },
  body: JSON.stringify(payload),
});

const isAuthorized = (providedToken) => {
  const expectedToken = process.env.APPLE_WALLET_ACCESS_TOKEN;
  if (!providedToken || !expectedToken) return false;

  const provided = Buffer.from(providedToken);
  const expected = Buffer.from(expectedToken);
  return provided.length === expected.length && timingSafeEqual(provided, expected);
};

export async function handler(event) {
  if (event.httpMethod !== 'GET') {
    return { ...jsonResponse(405, { error: 'Method not allowed' }), headers: { Allow: 'GET' } };
  }

  if (process.env.APPLE_WALLET_ENABLED !== 'true') {
    return jsonResponse(404, { error: 'Apple Wallet download is disabled' });
  }

  const token = event.queryStringParameters?.token || '';
  if (!isAuthorized(token)) {
    return jsonResponse(401, { error: 'A valid private Apple Wallet access code is required' });
  }

  const missingEnvironment = requiredEnvironment.filter((name) => !process.env[name]);
  if (missingEnvironment.length > 0) {
    return jsonResponse(500, { error: 'Apple Wallet signing is not configured yet' });
  }

  try {
    const [icon, icon2x] = await Promise.all([
      readFile(new URL('./apple-wallet-assets/icon.png', import.meta.url)),
      readFile(new URL('./apple-wallet-assets/icon@2x.png', import.meta.url)),
    ]);

    const passJson = {
      formatVersion: 1,
      passTypeIdentifier: process.env.APPLE_PASS_TYPE_IDENTIFIER,
      serialNumber: 'seif-otefa-digital-business-card-2026',
      teamIdentifier: process.env.APPLE_TEAM_IDENTIFIER,
      organizationName: 'Seif Otefa',
      description: 'Seif Otefa digital business card',
      logoText: 'Seif Otefa',
      foregroundColor: 'rgb(17, 17, 17)',
      backgroundColor: 'rgb(255, 255, 255)',
      labelColor: 'rgb(107, 114, 128)',
      generic: {
        primaryFields: [{ key: 'name', label: 'NAME', value: 'Seif Otefa' }],
        secondaryFields: [{ key: 'website', label: 'WEBSITE', value: 'seifotefa.com' }],
        auxiliaryFields: [{ key: 'purpose', label: 'CONNECT', value: 'Scan the QR code' }],
        backFields: [{ key: 'links', label: 'LINKS', value: QR_DESTINATION }],
      },
    };

    const pass = new PKPass(
      {
        'icon.png': icon,
        'icon@2x.png': icon2x,
        'pass.json': Buffer.from(JSON.stringify(passJson)),
      },
      {
        wwdr: process.env.APPLE_WWDR_CERTIFICATE,
        signerCert: process.env.APPLE_SIGNER_CERTIFICATE,
        signerKey: process.env.APPLE_SIGNER_PRIVATE_KEY,
        signerKeyPassphrase: process.env.APPLE_SIGNER_KEY_PASSPHRASE,
      },
    );

    pass.setBarcodes({
      message: QR_DESTINATION,
      format: 'PKBarcodeFormatQR',
      messageEncoding: 'iso-8859-1',
      altText: 'seifotefa.com/links',
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/vnd.apple.pkpass',
        'Content-Disposition': 'attachment; filename="seif-otefa-business-card.pkpass"',
        'Cache-Control': 'no-store, private',
      },
      isBase64Encoded: true,
      body: pass.getAsBuffer().toString('base64'),
    };
  } catch (error) {
    console.error('Apple Wallet pass generation failed:', error instanceof Error ? error.message : error);
    return jsonResponse(500, { error: 'Apple Wallet pass generation failed' });
  }
}
