import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { connectDB } from '@/lib/db';
import { Blog } from '@/models/Blog';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const image = formData.get('image') as File;

    if (!title || !content || !image) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `${timestamp}-${image.name}`;
    const filePath = path.join(process.cwd(), 'public/uploads', fileName);

    const buffer = Buffer.from(await image.arrayBuffer());
    await writeFile(filePath, buffer);

    await connectDB();
    const newBlog = new Blog({
      title,
      content,
      imagePath: `/uploads/${fileName}`,
      createdAt: new Date(),
    });
    await newBlog.save();

    return NextResponse.json({ message: 'Blog posted successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Error posting blog:', error);
    return NextResponse.json({ error: 'An error occurred while posting the blog' }, { status: 500 });
  }
}
