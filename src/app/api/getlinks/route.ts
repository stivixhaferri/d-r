import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import SocialProfile from "@/models/SocialProfile";

export async function GET() {
  try {
    await connectDB();

    // Fetch the only existing social profile (since there's always one)
    const profile = await SocialProfile.findOne({});

    if (!profile) {
      return NextResponse.json({ success: false, message: "No profile found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: profile });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json({ success: false, message: "Error fetching data" }, { status: 500 });
  }
}
