'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Email {
  _id: number;
  name: string;
  message: string;
  email: string;
  createdAt: Date;
}

function Page(){
  const [emails, setEmails] = useState<Email[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchEmails = async (): Promise<void> => {
      setLoading(true);
      try {
        const response = await axios.get<Email[]>('/api/messages');
        setEmails(response.data);
      } catch (error) {
        console.error('Error fetching emails:', error);
        setEmails([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
      {/* Sidebar: Email List */}
      <aside className="lg:w-1/3 w-full lg:border-r border-gray-200 p-6 overflow-y-auto lg:h-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Inbox</h2>
        {loading ? (
          <p className="text-gray-600">Loading emails...</p>
        ) : (
          <ul>
            {emails.map((email) => (
              <li
                key={email._id}
                onClick={() => setSelectedEmail(email)}
                className={`cursor-pointer p-4 rounded-lg mb-3 border border-gray-100 shadow-sm transition duration-150 ease-in-out 
                  ${
                    selectedEmail && selectedEmail._id === email._id
                      ? 'bg-gray-200'
                      : 'bg-white hover:bg-gray-100'
                  }`}
              >
                <div className="text-sm font-medium text-gray-700">{email.name}</div>
                <div className="mt-1 text-xs text-gray-500 line-clamp-2">
                  {email.message}
                </div>
              </li>
            ))}
          </ul>
        )}
      </aside>

      {/* Main: Email Detail View */}
      <main className="lg:flex-1 p-8 overflow-y-auto lg:h-full">
        {selectedEmail ? (
          <Card className="shadow-lg border border-gray-200">
            <CardHeader className="border-b border-gray-200 pb-4">
              <CardTitle className="text-xl font-semibold text-gray-800">
                {selectedEmail.name}
              </CardTitle>
              <p className="text-sm text-gray-500">
                {new Date(selectedEmail.createdAt).toLocaleString()}
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-base text-gray-700 whitespace-pre-wrap">
                {selectedEmail.message}
              </p>
              <div className="mt-6">
                <a href={`mailto:${selectedEmail.email}`}>
                  <Button variant="outline">Reply</Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-lg">
              Please select an email from the inbox to view its details.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Page;
