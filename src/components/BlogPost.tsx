"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface BlogPostProps {
  slug: string;
}

interface BlogData {
  title: string;
  imagePath: string;
  content: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  const [blog, setBlog] = useState<BlogData | null>(null);

  const getBlog = async () => {
    try {
      const res = await axios.post("/api/singleblog", {
        id: slug,
      });
      console.log(res.data)
      setBlog(res.data);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    getBlog();
  }, [slug]);

  if (!blog) {
    return <div className="text-center text-gray-600">Loading blog post...</div>;
  }

  return (
    <div className="container mx-auto py-12 flex-1">
      {/* Blog Post */}
      <div className="max-w-4xl mx-auto">
        {/* Hero Image */}
        <div className="relative mb-12 rounded-lg overflow-hidden">
          <img
            src={blog.imagePath}
            alt={blog.title}
            className="w-full h-[500px] object-cover shadow-xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-6">
            <h1 className="text-5xl font-bold text-white">{blog.title}</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 rounded-xl">
          <div className="text-lg text-gray-700 font-semibold leading-relaxed whitespace-pre-line">
            {blog.content}
          </div>
        </div>
      </div>
    </div>
  );
}
