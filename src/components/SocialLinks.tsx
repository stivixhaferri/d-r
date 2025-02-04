'use client';

import { useState, useEffect } from "react";
import { Facebook, Instagram, Mail, X, Phone } from "lucide-react";
import axios from "axios";

interface UserSocialProfile {
  id: string;
  facebook: string;
  instagram: string;
  gmail: string;
  twitter: string;
  phone?: string;
  createdAt: string | Date;
}

export default function SocialLinksForm() {
  const [formData, setFormData] = useState({
    facebook: "",
    instagram: "",
    gmail: "",
    twitter: "",
    phone: "",
  });
  const [message, setMessage] = useState("");
  const [current, setCurrent] = useState<UserSocialProfile>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      // Use axios to send the POST request
      const res = await axios.post("/api/social-links", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data.success) {
        setMessage("Saved successfully!");
        // Optionally refresh current links
        getCurrent();
      } else {
        setMessage("Error saving data.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error saving data.");
    }
  };

  const getCurrent = async () => {
    try {
      const res = await axios.get("/api/getlinks");
      setCurrent(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrent();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-200 p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Form Section */}
          <div className="p-8 border-r border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Save Your Social Links
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="facebook"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Facebook Link
                </label>
                <input
                  id="facebook"
                  type="url"
                  name="facebook"
                  placeholder="https://www.facebook.com/yourprofile"
                  value={formData.facebook}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label
                  htmlFor="instagram"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Instagram Link
                </label>
                <input
                  id="instagram"
                  type="url"
                  name="instagram"
                  placeholder="https://www.instagram.com/yourprofile"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label
                  htmlFor="gmail"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Gmail Address
                </label>
                <input
                  id="gmail"
                  type="email"
                  name="gmail"
                  placeholder="your.email@gmail.com"
                  value={formData.gmail}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label
                  htmlFor="twitter"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Twitter (X) Link
                </label>
                <input
                  id="twitter"
                  type="url"
                  name="twitter"
                  placeholder="https://twitter.com/yourprofile"
                  value={formData.twitter}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 transition duration-200"
              >
                Save
              </button>
            </form>
            {message && (
              <p className="mt-4 text-center text-green-600 font-medium">
                {message}
              </p>
            )}
          </div>

          {/* Display Section */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Links</h2>
            <div className="space-y-4">
              {current && (
                <>
                  <div className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-lg transition">
                    <Facebook className="text-indigo-600" />
                    <a
                      href={current.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-gray-700 break-all"
                    >
                      {current.facebook}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-lg transition">
                    <Instagram className="text-pink-500" />
                    <a
                      href={current.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-gray-700 break-all"
                    >
                      {current.instagram}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-lg transition">
                    <Mail className="text-red-500" />
                    <a
                      href={`mailto:${current.gmail}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-gray-700 break-all"
                    >
                      {current.gmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-lg transition">
                    <X className="text-blue-600" />
                    <a
                      href={current.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-gray-700 break-all"
                    >
                      {current.twitter}
                    </a>
                  </div>
                  {current.phone && (
                    <div className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-lg transition">
                      <Phone className="text-green-600" />
                      <a
                        href={`tel:${current.phone}`}
                        className="text-lg text-gray-700 break-all"
                      >
                        {current.phone}
                      </a>
                    </div>
                  )}
                </>
              )}
              {!current && (
                <p className="text-gray-500">No social links available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
