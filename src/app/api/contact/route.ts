// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { connectDB } from "@/lib/db";
import { Message } from '@/models/Message';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate the request body
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    await connectDB();

    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    return NextResponse.json(
      { message: 'Your message has been received. Thank you!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { error: 'An error occurred while saving your message.' },
      { status: 500 }
    );
  }
}
