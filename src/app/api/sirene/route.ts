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
  const inseeToken = process.env.INSEE_TOKEN;
  if (!inseeToken) {
    return NextResponse.json(
      { error: 'INSEE_TOKEN not configured' },
      { status: 500, headers: CORS_HEADERS }
    );
  }

  const { searchParams } = request.nextUrl;

  const naf        = searchParams.get('naf');
  const departement = searchParams.get('departement');
  const dateMin    = searchParams.get('dateMin');
  const nombre     = searchParams.get('nombre');
  const debut      = searchParams.get('debut');

  if (!naf || !departement) {
    return NextResponse.json(
      { error: 'Paramètres naf et departement requis' },
      { status: 400, headers: CORS_HEADERS }
    );
  }

  let q = `activitePrincipaleEtablissement:${naf} AND etatAdministratifEtablissement:A AND codePostalEtablissement:${departement}*`;
  if (dateMin) {
    q += ` AND dateCreationEtablissement:[${dateMin} TO *]`;
  }

  const params = new URLSearchParams({ q });
  if (nombre) params.set('nombre', nombre);
  if (debut)  params.set('debut', debut);

  const url = `https://api.insee.fr/api-sirene/3.11/siret?${params.toString()}`;

  const response = await fetch(url, {
    headers: {
      'X-INSEE-Api-Key-Integration': inseeToken,
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
