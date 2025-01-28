import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Make sure you're using this only for edge functions or similar

    console.log("Request Body:", body);
    
    const { name, email, message } = body;  // Destructure the values
    
    // Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 }
      );
    }

   
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    // Return a success response
    return new Response(
      JSON.stringify({ message: "Form submitted successfully.", contact }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during form submission:", error);  // Make sure to log the error for more insights
    return new Response(
      JSON.stringify({ error: "Something went wrong." }),
      { status: 500 }
    );
  }
}
