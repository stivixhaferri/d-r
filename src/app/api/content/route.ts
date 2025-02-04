import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Content from "@/models/Content";

// GET - Fetch Content
export async function GET() {
  try {
    await connectDB();

    const content = await Content.findOne({});
    if (!content) {
      return NextResponse.json({ success: false, message: "No content found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: content });
  } catch (error) {
    console.error("Error fetching content:", error);
    return NextResponse.json({ success: false, message: "Error fetching data" }, { status: 500 });
  }
}

// POST - Create or Update Content
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const updatedContent = await Content.findOneAndUpdate(
      {}, // Find the first document (only one should exist)
      body, // Replace with new data
      { new: true, upsert: true } // Return updated doc, create if none exists
    );

    return NextResponse.json({ success: true, message: "Content saved successfully", data: updatedContent });
  } catch (error) {
    console.error("Error saving content:", error);
    return NextResponse.json({ success: false, message: "Error saving data" }, { status: 500 });
  }
}
