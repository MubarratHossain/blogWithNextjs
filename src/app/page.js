import Image from "next/image";
import appleImage from "./apple.jpg";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-teal-700 text-white">
      
      <header className="text-center py-16">
        <h1 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">
          Welcome to EJP Blog
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          A simple blog viewer powered by Next.js and Kinde Auth
        </p>
        <a
          href="#blogs"
          className="bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition shadow-lg"
        >
          Explore Blogs
        </a>
      </header>

      
      <section id="blogs" className="max-w-screen-lg mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">Latest Blog Posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 9).map((post) => (
            <div
              key={post.id}
              className="card bg-white/10 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden border border-gray-700 transition hover:scale-105 duration-300"
            >
              <figure>
                <div className="relative w-full h-full rounded-lg">
                  <Image
                    src={appleImage}  
                    alt={`Image for post ${post.id}`}
                    className="w-auto rounded-lg p-4  shadow-2xl h-full object-cover"
                    width={300}  
                    height={200} 
                  />
                </div>
              </figure>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  Delicious!
                </h3>
                <div className="text-right">
                  <a
                    href={`/blog/${post.id}`}
                    className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition shadow-md"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6">
        <p className="text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} EJP. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
