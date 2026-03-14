import Link from "next/link";

export default function TrackingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Package Tracking
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track any package from over 3,100 carriers worldwide. Get real-time updates and delivery notifications.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Enter Tracking Number</h3>
              <p className="text-gray-600 text-sm">Paste your tracking number from any carrier into our search box.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Auto-Detect Carrier</h3>
              <p className="text-gray-600 text-sm">We automatically identify the carrier and fetch the latest status.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Get Updates</h3>
              <p className="text-gray-600 text-sm">Receive real-time notifications until your package is delivered.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Supported Carriers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["DHL", "UPS", "FedEx", "USPS", "TNT", "Royal Mail", "China Post", "Japan Post", "Australia Post", "Canada Post", "La Poste", "Deutsche Post"].map((carrier) => (
              <div key={carrier} className="bg-gray-50 rounded-lg p-3 text-center text-gray-700 font-medium">
                {carrier}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-4">And 3,000+ more carriers worldwide</p>
        </div>

        <div className="text-center">
          <Link
            href="/track"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-colors"
          >
            Track a Package Now
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
