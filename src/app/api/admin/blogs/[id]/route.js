import { NextResponse } from 'next/server';
import { supabaseService } from '@/lib/supabase';

const PASS = process.env.ADMIN_PASSWORD || 'LearnMore@2025';

function auth(req) {
  return req.headers.get('Authorization') === `Bearer ${PASS}`;
}

export async function PUT(req, { params }) {
  if (!auth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await req.json();
  const { data, error } = await supabaseService().from('blogs').update(params.id, body);
  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json(data);
}

export async function DELETE(req, { params }) {
  if (!auth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { error } = await supabaseService().from('blogs').delete(params.id);
  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json({ success: true });
}
