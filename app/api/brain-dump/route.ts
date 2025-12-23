import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma.engine';

// GET all brain-dump items
export async function GET() {
  // const brainDumps = await prisma.brainDump.findMany();
  // return NextResponse.json(brainDumps);
  return NextResponse.json({ message: "GET /api/brain-dump not implemented" });
}

// POST a new brain-dump item
export async function POST(req: NextRequest) {
  // const data = await req.json();
  // const newBrainDump = await prisma.brainDump.create({ data });
  // return NextResponse.json(newBrainDump, { status: 201 });
  return NextResponse.json({ message: "POST /api/brain-dump not implemented" }, { status: 201 });
}
