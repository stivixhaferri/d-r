"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  content: string;
  imagePath: string;
  createdAt: string;
}

const BlogSection = () => {
  const [data, setData] = useState<Blog[]>([]);

  const getBlogs = async () => {
    try {
      const res = await axios.get("/api/blogs");
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  if (data.length <= 0) {
    return <></>;
  }

  return (
    <div className="py-16 lg:px-[5%] px-5">
      <h2 className="text-5xl py-4 font-semibold ">Latest Blogs</h2>
      <div className="grid lg:grid-cols-3 gap-3 py-2">
        {data &&
          data.map((el: Blog, index: number) => {
            return (
              <Link  key={index} href={`/blog/${el._id}`}>
                <div
                 
                  className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="#">
                    <img
                      className="rounded-t-lg h-[250px] object-cover w-full"
                      src={`${el.imagePath}`}
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {el.title}
                      </h5>
                    </a>
                    <pre className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {el.content?.substring(0, 40)}{" "}
                      {el.content.length > 40 && "..."}
                    </pre>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default BlogSection;
