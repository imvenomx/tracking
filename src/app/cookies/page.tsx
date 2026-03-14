export default function CookiesPage() {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "Required for the website to function properly. Cannot be disabled.",
      examples: ["Session management", "Security tokens", "Load balancing"],
    },
    {
      name: "Functional Cookies",
      description: "Remember your preferences and settings for a better experience.",
      examples: ["Language preference", "Theme settings", "Recent searches"],
    },
    {
      name: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website.",
      examples: ["Page views", "Traffic sources", "User journey"],
    },
    {
      name: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and track campaign performance.",
      examples: ["Ad targeting", "Conversion tracking", "Retargeting"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-600">
            Last updated: March 1, 2024
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
          <p className="text-gray-600 mb-4">
            Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work efficiently and provide information to website owners.
          </p>
          <p className="text-gray-600">
            We use cookies and similar technologies (like local storage and pixels) to provide, protect, and improve our services.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Types of Cookies We Use</h2>
          <div className="space-y-6">
            {cookieTypes.map((type) => (
              <div key={type.name} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <h3 className="font-semibold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-gray-600 mb-3">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((example) => (
                    <span
                      key={example}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Managing Cookies</h2>
          <p className="text-gray-600 mb-4">
            You can control and manage cookies in various ways. Most browsers allow you to:
          </p>
          <ul className="text-gray-600 list-disc pl-6 space-y-2 mb-4">
            <li>View cookies stored on your device</li>
            <li>Delete all or specific cookies</li>
            <li>Block third-party cookies</li>
            <li>Block cookies from specific sites</li>
            <li>Block all cookies</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>
          <p className="text-gray-600">
            Please note that blocking some cookies may impact your experience on our website and limit the services we can offer.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
          <p className="text-gray-600 mb-4">
            We may use third-party services that set their own cookies, including:
          </p>
          <ul className="text-gray-600 list-disc pl-6 space-y-2">
            <li><strong>Google Analytics</strong> - for website analytics</li>
            <li><strong>Stripe</strong> - for payment processing</li>
            <li><strong>Intercom</strong> - for customer support chat</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we make changes, we will update the date at the top of this policy.
          </p>
          <p className="text-gray-600">
            If you have any questions about our use of cookies, please contact us at privacy@foxship.com.
          </p>
        </div>
      </div>
    </div>
  );
}
