import { NextResponse } from 'next/server';

/**
 * GET /api/health
 * Health check endpoint to verify API is running
 */
export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    },
    { status: 200 }
  );
}
