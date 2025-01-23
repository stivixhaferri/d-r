"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button";




export default function ContactForm() {
  // Declare state variables
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    try {
      // Send a POST request to the API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      // Handle success or error
      if (response.ok) {
        setSuccess(data.message);
        setError(null); // Clear any previous errors
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while submitting the form.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 text-gray-900 bg-white px-[4%] py-[6%] rounded-2xl">
      <h2 className="text-4xl font-semibold py-3 w-full text-start">Send a message</h2>
      <div className="flex flex-col gap-2">
        <Label htmlFor="name" className="text-lg">Name</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="text-black bg-white border-black"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-lg">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="text-black bg-white border-black"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-lg">Message</Label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={10}
          className="p-2 rounded-lg border-[0.3px] bg-white text-black border-black"
        />
      </div>
     
      <Button type="submit" className="mt-5 bg-gray-900 text-white">Submit</Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

     
    </form>
  );
}
