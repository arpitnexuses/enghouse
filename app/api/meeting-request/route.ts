import { NextResponse } from 'next/server';
import { sendMeetingRequest } from '@/app/lib/emailService';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await sendMeetingRequest(body);
    
    if (result.success) {
      return NextResponse.json({ message: 'Email sent successfully' });
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error occurred'}` },
      { status: 500 }
    );
  }
} 