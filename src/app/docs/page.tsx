import Link from "next/link";

export default function DocsPage() {
  const sections = [
    {
      title: "Getting Started",
      items: [
        { title: "Introduction", description: "Learn what Foxship can do for you" },
        { title: "Quick Start Guide", description: "Track your first package in minutes" },
        { title: "Account Setup", description: "Configure your preferences and notifications" },
      ],
    },
    {
      title: "API Documentation",
      items: [
        { title: "Authentication", description: "API keys and OAuth 2.0 setup" },
        { title: "Track Endpoint", description: "Query tracking information for any shipment" },
        { title: "Webhooks", description: "Receive real-time updates via HTTP callbacks" },
        { title: "Rate Limits", description: "Understanding API usage limits" },
      ],
    },
    {
      title: "Integrations",
      items: [
        { title: "Shopify", description: "Add tracking to your Shopify store" },
        { title: "WooCommerce", description: "WordPress e-commerce integration" },
        { title: "Zapier", description: "Connect with 5,000+ apps" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to integrate and use Foxship effectively.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
              />
            </div>
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium transition-colors">
              Search
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{section.title}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {section.items.map((item) => (
                  <Link
                    key={item.title}
                    href="#"
                    className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-orange-50 rounded-2xl border border-orange-100 p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Need Help?</h2>
          <p className="text-gray-600 mb-4">
            Can&apos;t find what you&apos;re looking for? Our support team is ready to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
