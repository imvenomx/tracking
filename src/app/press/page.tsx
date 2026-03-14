import Link from "next/link";

export default function PressPage() {
  const pressReleases = [
    {
      date: "March 2024",
      title: "Foxship Raises $50M Series C to Expand Global Carrier Network",
      excerpt: "Funding will accelerate expansion into emerging markets and enhance AI-powered delivery predictions.",
    },
    {
      date: "January 2024",
      title: "Foxship Surpasses 15 Million Active Users",
      excerpt: "Milestone reached as platform tracks over 12 billion shipments annually.",
    },
    {
      date: "October 2023",
      title: "Foxship Launches Enterprise API 3.0 with Real-Time Webhooks",
      excerpt: "New API version offers sub-second tracking updates for e-commerce integrations.",
    },
    {
      date: "July 2023",
      title: "Foxship Partners with Top 10 Global Carriers",
      excerpt: "Direct integrations provide faster and more accurate tracking data.",
    },
  ];

  const mediaFeatures = [
    { outlet: "TechCrunch", quote: "The most comprehensive package tracking solution we've tested." },
    { outlet: "Forbes", quote: "Foxship is revolutionizing how consumers track their online purchases." },
    { outlet: "Wired", quote: "A must-have tool for anyone who shops online." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Press & Media
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Latest news and media resources from Foxship.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Press Contact</h2>
          <p className="text-gray-600 mb-4">
            For media inquiries, please contact our press team:
          </p>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="font-medium text-gray-900">press@foxship.com</p>
            <p className="text-sm text-gray-600">We typically respond within 24 hours.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">In the Media</h2>
          <div className="space-y-6">
            {mediaFeatures.map((feature, index) => (
              <div key={index} className="border-l-4 border-orange-500 pl-4">
                <p className="text-gray-600 italic mb-2">&quot;{feature.quote}&quot;</p>
                <p className="font-semibold text-gray-900">- {feature.outlet}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <p className="text-sm text-orange-600 font-medium mb-1">{release.date}</p>
                <h3 className="font-semibold text-gray-900 mb-2">{release.title}</h3>
                <p className="text-gray-600 text-sm">{release.excerpt}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Brand Assets</h2>
          <p className="text-gray-600 mb-4">
            Download our logo, screenshots, and brand guidelines for media use.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium text-gray-700 transition-colors">
              Download Logo Pack
            </button>
            <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium text-gray-700 transition-colors">
              Brand Guidelines
            </button>
            <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium text-gray-700 transition-colors">
              Product Screenshots
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Need something specific? <Link href="/contact" className="text-orange-600 hover:text-orange-700">Contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
