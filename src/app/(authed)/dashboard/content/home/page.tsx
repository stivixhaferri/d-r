"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface ContentData {
  heroText: string;
  aboutTitle: string;
  aboutText: string;
  featuresText: string;
  f1Title: string;
  f1Text: string;
  f2Title: string;
  f2Text: string;
  f3Title: string;
  f3Text: string;
  f4Title: string;
  f4Text: string;
  yearsNumber: number;
  projectsNumber: number;
  awardsNumber: number;
  clientsNumber: number;
  s1Title: string;
  s1Sub: string;
  s1Text: string;
  s2Title: string;
  s2Sub: string;
  s2Text: string;
  s3Title: string;
  s3Sub: string;
  s3Text: string;
  faqQ1: string;
  faqA1: string;
  faqQ2: string;
  faqA2: string;
  faqQ3: string;
  faqA3: string;
  faqQ4: string;
  faqA4: string;
  t1Title: string;
  t1Text: string;
  t1User: string;
  t1UserJob: string;
  t2Title: string;
  t2Text: string;
  t2User: string;
  t2UserJob: string;
  t3Title: string;
  t3Text: string;
  t3User: string;
  t3UserJob: string;
  t4Title: string;
  t4Text: string;
  t4User: string;
  t4UserJob: string;
}

const fieldNames: (keyof ContentData)[] = [
  "heroText",
  "aboutTitle",
  "aboutText",
  "featuresText",
  "f1Title",
  "f1Text",
  "f2Title",
  "f2Text",
  "f3Title",
  "f3Text",
  "f4Title",
  "f4Text",
  "yearsNumber",
  "projectsNumber",
  "awardsNumber",
  "clientsNumber",
  "s1Title",
  "s1Sub",
  "s1Text",
  "s2Title",
  "s2Sub",
  "s2Text",
  "s3Title",
  "s3Sub",
  "s3Text",
  "faqQ1",
  "faqA1",
  "faqQ2",
  "faqA2",
  "faqQ3",
  "faqA3",
  "faqQ4",
  "faqA4",
  "t1Title",
  "t1Text",
  "t1User",
  "t1UserJob",
  "t2Title",
  "t2Text",
  "t2User",
  "t2UserJob",
  "t3Title",
  "t3Text",
  "t3User",
  "t3UserJob",
  "t4Title",
  "t4Text",
  "t4User",
  "t4UserJob",
];

export default function ContentPage() {
  const [formData, setFormData] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      try {
        const res = await axios.get("/api/content");
        if (res.data.success) {
          // Initialize formData with the fetched data (ensuring non-null)
          setFormData(res.data.data);
        } else {
          toast.error("Failed to load content");
        }
      } catch (error) {
        console.error("Error fetching content:", error);
        toast.error("Error fetching content");
      } finally {
        setLoading(false);
      }
    }
    fetchContent();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Ensure the formData is not null and update the corresponding field
    if (formData) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    try {
      const res = await axios.post("/api/content", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data.success) {
        toast.success("Content saved successfully!");
      } else {
        toast.error("Failed to save content");
      }
    } catch (error) {
      console.error("Error saving content:", error);
      toast.error("Error saving content");
    }
  };

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Manage Content</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardContent className="space-y-4 p-4">
            {fieldNames.map((field) => (
              <div key={field}>
                <Label htmlFor={field}>{field}</Label>
                {typeof formData?.[field] === "number" ? (
                  <Input
                    name={field}
                    type="number"
                    value={formData?.[field] ?? ""}
                    onChange={handleChange}
                    className="w-full"
                  />
                ) : (
                  <Textarea
                    name={field}
                    value={formData?.[field] || ""}
                    onChange={handleChange}
                    className="w-full"
                  />
                )}
              </div>
            ))}
            <Button type="submit" className="w-full bg-black text-white p-2 rounded">Save</Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
