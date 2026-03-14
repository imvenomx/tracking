export default function AboutPage() {
  const team = [
    { name: "Sarah Chen", role: "CEO & Co-Founder", initial: "SC" },
    { name: "Marcus Johnson", role: "CTO & Co-Founder", initial: "MJ" },
    { name: "Elena Rodriguez", role: "VP of Engineering", initial: "ER" },
    { name: "David Kim", role: "VP of Product", initial: "DK" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Foxship
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Making package tracking simple, reliable, and universal.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At Foxship, we believe everyone deserves to know where their packages are at any moment. Founded in 2019, we set out to create the most comprehensive and user-friendly package tracking platform in the world.
          </p>
          <p className="text-gray-600 mb-4">
            Today, we track over 12 billion shipments annually across 3,100+ carriers in 220 countries. From individual shoppers to enterprise e-commerce platforms, millions of users rely on Foxship to stay informed about their deliveries.
          </p>
          <p className="text-gray-600">
            Our team of engineers, data scientists, and logistics experts work tirelessly to ensure you get accurate, real-time tracking information no matter where in the world your package is traveling.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-500">3,100+</p>
              <p className="text-gray-600">Carriers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-500">15M+</p>
              <p className="text-gray-600">Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-500">12B+</p>
              <p className="text-gray-600">Shipments Tracked</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-500">220+</p>
              <p className="text-gray-600">Countries</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((member) => (
              <div key={member.name} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-lg font-semibold text-orange-600">{member.initial}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900">Reliability First</h3>
                <p className="text-gray-600">We maintain 99.9% uptime because you depend on us.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900">User Privacy</h3>
                <p className="text-gray-600">Your data belongs to you. We never sell it.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900">Continuous Innovation</h3>
                <p className="text-gray-600">We ship improvements every week to serve you better.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
