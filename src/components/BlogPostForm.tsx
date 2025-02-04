'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BlogPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !image) {
      alert('All fields are required!');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const imageName = `${timestamp}-${image.name}`;
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image, imageName);

    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        router.push('/dashboard/blogs');
      } else {
        alert('Failed to post blog');
      }
    } catch (error) {
      console.error('Error posting blog:', error);
      alert('An error occurred while posting your blog.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-200 p-4">
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg transform transition duration-300 ">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create New Blog Post</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input 
              id="title"
              type="text" 
              placeholder="Enter your blog title"
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea 
              id="content"
              placeholder="Write your blog content here..."
              value={content} 
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 h-96 resize-y"
            />
          </div>
          
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Featured Image
            </label>
            <input 
              id="image"
              type="file" 
              accept="image/*" 
              onChange={handleImageChange}
              className="mt-1 w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200"
          >
            {loading ? 'Posting...' : 'Post Blog'}
          </button>
        </form>
      </div>
    </div>
  );
}
