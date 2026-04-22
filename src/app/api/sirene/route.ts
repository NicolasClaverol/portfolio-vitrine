import { NextRequest, NextResponse } from 'next/server';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

async function getAccessToken(clientCredentials: string): Promise<string> {
  const tokenResponse = await fetch('https://api.insee.fr/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(clientCredentials).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!tokenResponse.ok) {
    const body = await tokenResponse.text();
    console.error(`[sirene] OAuth2 token failed: ${tokenResponse.status}`, body);
    throw new Error(`OAuth2 token request failed: ${tokenResponse.status}`);
  }

  const { access_token } = await tokenResponse.json();
  return access_token;
}

export async function GET(request: NextRequest) {
  const inseeToken = process.env.INSEE_TOKEN;
  if (!inseeToken) {
    return NextResponse.json(
      { error: 'INSEE_TOKEN not configured' },
      { status: 500, headers: CORS_HEADERS }
    );
  }

  let accessToken: string;
  try {
    accessToken = await getAccessToken(inseeToken);
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 502, headers: CORS_HEADERS }
    );
  }

  const { searchParams } = request.nextUrl;
  const params = new URLSearchParams();

  const q = searchParams.get('q');
  const nombre = searchParams.get('nombre');
  const debut = searchParams.get('debut');

  if (q) params.set('q', q);
  if (nombre) params.set('nombre', nombre);
  if (debut) params.set('debut', debut);

  const url = `https://api.insee.fr/entreprises/sirene/V3/siret?${params.toString()}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    console.error(`[sirene] ${response.status} ${url}`, JSON.stringify(data));
  }

  return NextResponse.json(data, {
    status: response.status,
    headers: CORS_HEADERS,
  });
}
