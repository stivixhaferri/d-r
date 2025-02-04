'use client';
import { useEffect, useState } from 'react';


interface Blog {
  _id: string;
  title: string;
  content: string;
  imagePath: string;
  createdAt: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/blogs');
      if (response.ok) {
        const data: Blog[] = await response.json();
        setBlogs(data);
      } else {
        alert('Failed to fetch blogs');
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Delete a blog
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
    if (confirmDelete) {
      try {
        const response = await fetch('/api/deleteblog', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json', // ✅ Specify JSON content type
          },
          body: JSON.stringify({ id }), // ✅ Correctly pass `id` in the body
        });
  
        if (response.ok) {
          alert('Blog deleted successfully!');
          fetchBlogs(); // ✅ Re-fetch the blogs after deletion
        } else {
          alert('Failed to delete blog');
        }
      }catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="w-full  mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">All Blog Posts</h2>
      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <div className=" grid lg:grid-cols-3 grid-cols-2 gap-3">
          {blogs.length === 0 ? (
            <p>No blogs found.</p>
          ) : (
            blogs.map((blog) => (
              <div key={blog._id} className="bg-white p-4 rounded-lg shadow-md border-[0.3px]">
                <h3 className="text-xl font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-600">{new Date(blog.createdAt).toLocaleDateString()}</p>
                <p className="mt-2 text-gray-800">{blog.content.slice(0, 100)}...</p>
                {blog.imagePath && (
                  <img src={blog.imagePath} alt={blog.title} className="mt-4 rounded-md w-full max-h-60 object-cover" />
                )}
                <div className="mt-4">
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
