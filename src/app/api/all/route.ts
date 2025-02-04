import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
   
    const contacts = await prisma.contact.findMany();

    return new Response(
      JSON.stringify({ message: "Contacts fetched successfully.", contacts }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching contacts:", error);  // Log the error for debugging
    return new Response(
      JSON.stringify({ error: "Something went wrong while fetching contacts." }),
      { status: 500 }
    );
  }
}
