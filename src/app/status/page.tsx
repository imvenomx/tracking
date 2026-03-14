export default function StatusPage() {
  const services = [
    { name: "Tracking API", status: "operational", uptime: "99.99%" },
    { name: "Web Application", status: "operational", uptime: "99.98%" },
    { name: "Mobile Apps", status: "operational", uptime: "99.97%" },
    { name: "Webhooks", status: "operational", uptime: "99.95%" },
    { name: "Carrier Connections", status: "operational", uptime: "99.90%" },
  ];

  const incidents = [
    {
      date: "March 12, 2024",
      title: "Resolved: Delayed updates from UPS",
      status: "resolved",
      description: "UPS tracking updates were delayed by approximately 30 minutes due to carrier API issues. This has been resolved.",
    },
    {
      date: "March 5, 2024",
      title: "Resolved: Intermittent API errors",
      status: "resolved",
      description: "Some API requests returned 500 errors between 14:00-14:15 UTC. Root cause identified and fixed.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            System Status
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time status of Foxship services.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-green-800">All Systems Operational</h2>
            <p className="text-green-700 text-sm">Last updated: {new Date().toLocaleString()}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Services</h2>
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">{service.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{service.uptime} uptime</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full capitalize">
                    {service.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Uptime (Last 90 Days)</h2>
          <div className="flex gap-1 h-8 mb-4">
            {Array.from({ length: 90 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${
                  i === 45 || i === 67 ? "bg-yellow-400" : "bg-green-400"
                }`}
                title={`Day ${90 - i}`}
              />
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>90 days ago</span>
            <span>Today</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Incidents</h2>
          {incidents.length === 0 ? (
            <p className="text-gray-600 text-center py-8">No incidents in the last 30 days.</p>
          ) : (
            <div className="space-y-6">
              {incidents.map((incident, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-500">{incident.date}</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full capitalize">
                      {incident.status}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{incident.title}</h3>
                  <p className="text-sm text-gray-600">{incident.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Subscribe to status updates via{" "}
            <button className="text-orange-600 hover:text-orange-700 font-medium">Email</button>
            {" "}or{" "}
            <button className="text-orange-600 hover:text-orange-700 font-medium">RSS</button>
          </p>
        </div>
      </div>
    </div>
  );
}
