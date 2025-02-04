import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import SocialProfile from "@/models/SocialProfile";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const updatedProfile = await SocialProfile.findOneAndUpdate(
      {}, // Find the first document (empty object means match any)
      body, // Update with new data
      { new: true, upsert: true } // Return the updated doc, create if not exists
    );

    return NextResponse.json({ success: true, message: "Profile saved successfully", data: updatedProfile });
  } catch (error) {
    console.error("Error saving profile:", error);
    return NextResponse.json({ success: false, message: "Error saving data" }, { status: 500 });
  }
}
