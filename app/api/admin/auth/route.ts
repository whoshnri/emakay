import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma.engine';

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ message: 'Missing username or password' }, { status: 400 });
    }

    // In a real application, you would fetch the site settings from the database
    // and compare the provided credentials against the stored hashes.
    const siteSettings = await prisma.siteSettings.findUnique({
      where: { id: 'singleton' },
    });

    if (!siteSettings) {
      // It's important to handle the case where settings are not configured.
      // Returning a generic error message is safer than exposing internal state.
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // NOTE: Passwords should be hashed and salted, not stored in plaintext.
    // The following is a simplified example for demonstration purposes.
    const isValid = username === siteSettings.adminUsername && password === siteSettings.adminPassword;

    if (isValid) {
      // In a real app, you would create a session or JWT here.
      // For now, we'll return a success message. The actual route protection
      // will be handled by middleware.
      return NextResponse.json({ message: 'Login successful' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'An internal server error occurred' }, { status: 500 });
  }
}
