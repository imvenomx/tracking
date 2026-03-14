import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      date: "March 10, 2024",
      category: "Product",
      title: "Introducing Smart Delivery Predictions",
      excerpt: "Our new AI-powered system predicts delivery times with 95% accuracy, helping you plan your day better.",
      readTime: "4 min read",
    },
    {
      date: "March 5, 2024",
      category: "Tips",
      title: "5 Ways to Reduce Package Theft",
      excerpt: "Learn how to protect your deliveries with these simple but effective strategies.",
      readTime: "3 min read",
    },
    {
      date: "February 28, 2024",
      category: "Industry",
      title: "The Future of Last-Mile Delivery",
      excerpt: "From drones to autonomous vehicles, here's what's coming to package delivery in 2024.",
      readTime: "6 min read",
    },
    {
      date: "February 20, 2024",
      category: "Product",
      title: "New: Track Multiple Packages at Once",
      excerpt: "Bulk tracking is here. Add up to 100 tracking numbers at once and manage them all in one view.",
      readTime: "2 min read",
    },
    {
      date: "February 15, 2024",
      category: "Company",
      title: "Foxship Hits 15 Million Users",
      excerpt: "We're celebrating this milestone by giving back to our community. Here's what we have planned.",
      readTime: "3 min read",
    },
    {
      date: "February 8, 2024",
      category: "Tips",
      title: "Understanding Tracking Statuses Explained",
      excerpt: "What does 'In Transit' really mean? We break down common tracking statuses across carriers.",
      readTime: "5 min read",
    },
  ];

  const categories = ["All", "Product", "Tips", "Industry", "Company"];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Foxship Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and updates from the Foxship team.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === "All"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="text-sm text-gray-400">&bull;</span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-orange-600 transition-colors cursor-pointer">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium text-sm"
              >
                Read more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
}
