import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma.engine';

// GET the site settings
export async function GET() {
  // const settings = await prisma.siteSettings.findUnique({ where: { id: 'singleton' } });
  // return NextResponse.json(settings);
  return NextResponse.json({ message: "GET /api/settings not implemented" });
}

// UPDATE the site settings
export async function PUT(req: NextRequest) {
  // const data = await req.json();
  // const updatedSettings = await prisma.siteSettings.update({
  //   where: { id: 'singleton' },
  //   data,
  // });
  // return NextResponse.json(updatedSettings);
  return NextResponse.json({ message: "PUT /api/settings not implemented" });
}
