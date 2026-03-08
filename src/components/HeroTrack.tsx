"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroTrack() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [showDemo, setShowDemo] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      router.push(`/track?num=${encodeURIComponent(trackingNumber.trim())}`);
    } else {
      setShowDemo(true);
      setTimeout(() => setShowDemo(false), 3000);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              All-in-one global{" "}
              <span className="text-orange-500">package tracking</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Track shipments from 3,100+ carriers worldwide in one place. Get real-time
              updates and instant notifications for all your packages.
            </p>

            {/* Tracking Form */}
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto lg:mx-0">
                <div className="flex-1 relative">
                  <label htmlFor="tracking-input" className="sr-only">
                    Tracking number
                  </label>
                  <input
                    id="tracking-input"
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter tracking number"
                    className="w-full px-5 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow shadow-sm bg-white text-gray-900 placeholder-gray-400"
                  />
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-sm hover:shadow-md"
                >
                  Track
                </button>
              </div>
            </form>

            <p className="text-sm text-gray-500 mb-6">
              Supports 3,100+ carriers including FedEx, UPS, DHL, USPS, and more
            </p>

            {/* Demo Toast */}
            {showDemo && (
              <div
                className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-lg text-sm font-medium animate-pulse"
                role="alert"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Tracking demo - Enter a tracking number to search
              </div>
            )}
          </div>

          {/* Right: Sample Tracking Preview */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Card Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">1Z999AA10123456784</p>
                      <p className="text-sm text-gray-500">UPS Ground</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                    Delivered
                  </span>
                </div>
              </div>

              {/* Tracking Timeline */}
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      status: "Delivered",
                      location: "New York, NY",
                      time: "Today, 2:45 PM",
                      active: true,
                    },
                    {
                      status: "Out for delivery",
                      location: "New York, NY",
                      time: "Today, 8:30 AM",
                      active: false,
                    },
                    {
                      status: "Arrived at facility",
                      location: "Newark, NJ",
                      time: "Yesterday, 11:20 PM",
                      active: false,
                    },
                    {
                      status: "In transit",
                      location: "Chicago, IL",
                      time: "Mar 1, 4:15 PM",
                      active: false,
                    },
                  ].map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            event.active ? "bg-green-500" : "bg-gray-300"
                          }`}
                        />
                        {index < 3 && <div className="w-0.5 h-8 bg-gray-200 mt-1" />}
                      </div>
                      <div className="flex-1 pb-2">
                        <p
                          className={`font-medium ${
                            event.active ? "text-gray-900" : "text-gray-600"
                          }`}
                        >
                          {event.status}
                        </p>
                        <p className="text-sm text-gray-500">
                          {event.location} &middot; {event.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
