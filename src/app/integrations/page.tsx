import Link from "next/link";

export default function IntegrationsPage() {
  const integrations = [
    {
      name: "Shopify",
      category: "E-commerce",
      description: "Automatically sync orders and provide tracking pages for your Shopify store.",
      popular: true,
    },
    {
      name: "WooCommerce",
      category: "E-commerce",
      description: "WordPress plugin for seamless order tracking integration.",
      popular: true,
    },
    {
      name: "Magento",
      category: "E-commerce",
      description: "Enterprise-grade tracking for Magento 2 stores.",
      popular: false,
    },
    {
      name: "BigCommerce",
      category: "E-commerce",
      description: "Native integration with BigCommerce storefronts.",
      popular: false,
    },
    {
      name: "Zapier",
      category: "Automation",
      description: "Connect Foxship with 5,000+ apps through Zapier workflows.",
      popular: true,
    },
    {
      name: "Make (Integromat)",
      category: "Automation",
      description: "Build complex automation scenarios with Make.",
      popular: false,
    },
    {
      name: "Slack",
      category: "Communication",
      description: "Get tracking updates directly in your Slack channels.",
      popular: true,
    },
    {
      name: "Microsoft Teams",
      category: "Communication",
      description: "Receive delivery notifications in Teams.",
      popular: false,
    },
    {
      name: "Salesforce",
      category: "CRM",
      description: "Track shipments within Salesforce records.",
      popular: false,
    },
    {
      name: "HubSpot",
      category: "CRM",
      description: "Add tracking info to HubSpot deals and contacts.",
      popular: false,
    },
    {
      name: "Zendesk",
      category: "Support",
      description: "View tracking status directly in support tickets.",
      popular: false,
    },
    {
      name: "Freshdesk",
      category: "Support",
      description: "Embed tracking widgets in customer support.",
      popular: false,
    },
  ];

  const categories = ["All", "E-commerce", "Automation", "Communication", "CRM", "Support"];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Integrations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect Foxship with your favorite tools and platforms.
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

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-400">
                      {integration.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                    <p className="text-xs text-gray-500">{integration.category}</p>
                  </div>
                </div>
                {integration.popular && (
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-4">{integration.description}</p>
              <Link
                href="/docs"
                className="text-orange-600 hover:text-orange-700 text-sm font-medium"
              >
                View Documentation
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Build Your Own Integration</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Use our REST API to build custom integrations with any platform. Full documentation and SDKs available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/api-docs"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium transition-colors"
            >
              API Documentation
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors"
            >
              Request Integration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
