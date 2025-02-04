import { NextResponse } from 'next/server';
import { connectDB } from "@/lib/db";
import { Message } from '@/models/Message';

export async function GET() {
  try {
    await connectDB();
    const messages = await Message.find({}).sort({ createdAt: -1 }); 
    
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching messages.' },
      { status: 500 }
    );
  }
}
