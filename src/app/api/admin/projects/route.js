import { NextResponse } from 'next/server';
import { readJsonFile, writeJsonFile } from '@/lib/githubStore';

const PASS = process.env.ADMIN_PASSWORD || 'LearnMore@2025';
const FILE = 'data/projects.json';

function auth(req) {
  return req.headers.get('Authorization') === `Bearer ${PASS}`;
}

export async function GET() {
  const { data } = await readJsonFile(FILE);
  return NextResponse.json(data);
}

export async function POST(req) {
  if (!auth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await req.json();
  const { data, sha } = await readJsonFile(FILE);
  const newProject = { ...body, id: Date.now().toString(), createdAt: new Date().toISOString() };
  await writeJsonFile(FILE, [newProject, ...data], sha, `Add project: ${body.title}`);
  return NextResponse.json(newProject, { status: 201 });
}
