import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma.engine';

// GET all schoolwork items
export async function GET() {
  // const schoolwork = await prisma.schoolWork.findMany();
  // return NextResponse.json(schoolwork);
  return NextResponse.json({ message: "GET /api/schoolwork not implemented" });
}

// POST a new schoolwork item
export async function POST(req: NextRequest) {
  // const data = await req.json();
  // const newSchoolWork = await prisma.schoolWork.create({ data });
  // return NextResponse.json(newSchoolWork, { status: 201 });
  return NextResponse.json({ message: "POST /api/schoolwork not implemented" }, { status: 201 });
}
