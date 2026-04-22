import { NextRequest, NextResponse } from 'next/server';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET(request: NextRequest) {
  const token = process.env.INSEE_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: 'INSEE_TOKEN not configured' },
      { status: 500, headers: CORS_HEADERS }
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

  const url = `https://api.insee.fr/api-sirene/3.11/siret?${params.toString()}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });

  const data = await response.json();

  return NextResponse.json(data, {
    status: response.status,
    headers: CORS_HEADERS,
  });
}
