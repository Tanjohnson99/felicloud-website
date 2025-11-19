import { NextRequest, NextResponse } from 'next/server';
import { notifyAdminPaymentInitiated } from '@/lib/services/admin-notifications';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, plan, billing, storage, isUpgrade } = body;

    // Validate required fields
    if (!email || !plan) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send notification to admin
    await notifyAdminPaymentInitiated(
      email,
      plan,
      billing || 'lifetime',
      storage || plan,
      isUpgrade || false
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending payment initiation notification:', error);
    // Don't fail the request if notification fails
    return NextResponse.json({ success: true });
  }
}
