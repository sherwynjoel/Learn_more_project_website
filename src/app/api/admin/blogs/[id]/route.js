import { NextResponse } from 'next/server';
import { readJsonFile, writeJsonFile } from '@/lib/githubStore';

const PASS = process.env.ADMIN_PASSWORD || 'LearnMore@2025';
const FILE = 'data/blogs.json';

function auth(req) {
  return req.headers.get('Authorization') === `Bearer ${PASS}`;
}

export async function PUT(req, { params }) {
  if (!auth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await req.json();
  const { data, sha } = await readJsonFile(FILE);
  const updated = data.map(p => p.id === params.id ? { ...p, ...body } : p);
  await writeJsonFile(FILE, updated, sha, `Update blog: ${params.id}`);
  return NextResponse.json({ success: true });
}

export async function DELETE(req, { params }) {
  if (!auth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { data, sha } = await readJsonFile(FILE);
  const filtered = data.filter(p => p.id !== params.id);
  await writeJsonFile(FILE, filtered, sha, `Delete blog: ${params.id}`);
  return NextResponse.json({ success: true });
}
