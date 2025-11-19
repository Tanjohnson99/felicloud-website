import { NextResponse } from 'next/server';

/**
 * GET /api/webhooks/stripe/test
 * Simple endpoint to test if the webhook URL is accessible
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Webhook endpoint is accessible',
    timestamp: new Date().toISOString(),
  });
}

/**
 * POST /api/webhooks/stripe/test
 * Test webhook handler that logs the request
 */
export async function POST(request: Request) {
  try {
    const body = await request.text();
    console.log('📥 Test webhook received');
    console.log('Headers:', Object.fromEntries(request.headers.entries()));
    console.log('Body length:', body.length);

    return NextResponse.json({
      status: 'received',
      message: 'Test webhook received successfully',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Test webhook error:', error);
    return NextResponse.json(
      { error: 'Test failed' },
      { status: 500 }
    );
  }
}
