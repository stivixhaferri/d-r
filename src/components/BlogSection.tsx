import Link from 'next/link';

const BlogSection = () => {
  return (
    <section className="bg-white py-5 px-5 sm:px-6 lg:px-[5%]">
      <div className="w-full mx-auto text-center">
        <h2 className="text-4xl stretch font-extrabold text-gray-900 mb-8">
          Latest Blog Posts
        </h2>
        <p className="text-lg text-gray-500 mb-12">
          Check out our latest insights and articles to stay updated.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Blog 1 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-56 object-cover"
              src="/1.jpg"
              alt="Blog Image"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Future of Web Development
              </h3>
              <p className="text-gray-600 mb-4">
                Web development is evolving rapidly. Learn about new technologies, frameworks, and best practices.
              </p>
              <Link href="/blog/future-of-web-development" className="text-blue-600 font-semibold hover:underline">
                Read more
              </Link>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-56 object-cover"
              src="/2.jpg"
              alt="Blog Image"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Tailwind CSS Best Practices
              </h3>
              <p className="text-gray-600 mb-4">
                Tailwind CSS is a utility-first CSS framework that makes designing easier and faster. Here&apos;s how to use it best.
              </p>
              <Link href="/blog/tailwind-best-practices" className="text-blue-600 font-semibold hover:underline">
                Read more
              </Link>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-56 object-cover"
              src="/ant.jpg"
              alt="Blog Image"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Importance of UI/UX Design
              </h3>
              <p className="text-gray-600 mb-4">
                Learn why user interface and user experience design matter so much in the development of modern web applications.
              </p>
              <Link href="/blog/ui-ux-design" className="text-blue-600 font-semibold hover:underline">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
