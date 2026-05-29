import { NextResponse } from 'next/server';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const ALLOWED = ['blogs', 'projects', 'domains', 'builtinblogs'];
const PASS = 'LearnMore@2025';

function dataPath(type) {
  return join(process.cwd(), 'public', 'data', `${type}.json`);
}

function readData(type) {
  const path = dataPath(type);
  if (!existsSync(path)) return [];
  try { return JSON.parse(readFileSync(path, 'utf-8')); } catch { return []; }
}

function writeData(type, data) {
  writeFileSync(dataPath(type), JSON.stringify(data, null, 2));
}

function isAuth(req) {
  return req.headers.get('Authorization') === `Bearer ${PASS}`;
}

function getParams(req) {
  const p = req.nextUrl.searchParams;
  return { type: p.get('type') || '', id: p.get('id') || '' };
}

export async function GET(req) {
  const { type } = getParams(req);
  if (!ALLOWED.includes(type)) return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  return NextResponse.json(readData(type));
}

export async function POST(req) {
  const { type } = getParams(req);
  if (!ALLOWED.includes(type)) return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await req.json();
  const data = readData(type);
  const item = { id: Date.now().toString(36) + Math.random().toString(36).slice(2), createdAt: new Date().toISOString(), ...body };
  data.unshift(item);
  writeData(type, data);
  return NextResponse.json(item, { status: 201 });
}

export async function PUT(req) {
  const { type, id } = getParams(req);
  if (!ALLOWED.includes(type) || !id) return NextResponse.json({ error: 'Invalid' }, { status: 400 });
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await req.json();
  const data = readData(type).map(item => item.id === id ? { ...item, ...body } : item);
  writeData(type, data);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req) {
  const { type, id } = getParams(req);
  if (!ALLOWED.includes(type) || !id) return NextResponse.json({ error: 'Invalid' }, { status: 400 });
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const data = readData(type).filter(item => item.id !== id);
  writeData(type, data);
  return NextResponse.json({ ok: true });
}
