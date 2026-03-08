"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface TrackingEvent {
  id: string;
  status: string;
  description: string;
  location: string;
  city: string;
  country: string;
  timestamp: string;
  isCompleted: boolean;
}

interface Tracking {
  id: string;
  trackingNumber: string;
  status: string;
  carrier: string;
  fromCountry: string;
  fromCity: string;
  toCountry: string;
  toCity: string;
  fromDate: string;
  deliveredDate: string | null;
  createdAt: string;
  updatedAt: string;
  events: TrackingEvent[];
}

const statusLabels: Record<string, string> = {
  processing: "Processing",
  sent: "Sent",
  shipped: "In Transit",
  delivered: "Delivered",
};

const statusColors: Record<string, string> = {
  processing: "bg-yellow-100 text-yellow-700 border-yellow-200",
  sent: "bg-blue-100 text-blue-700 border-blue-200",
  shipped: "bg-purple-100 text-purple-700 border-purple-200",
  delivered: "bg-green-100 text-green-700 border-green-200",
};

const carrierLogos: Record<string, { bg: string; text: string }> = {
  DHL: { bg: "bg-yellow-500", text: "text-white" },
  UPS: { bg: "bg-amber-700", text: "text-white" },
  FedEx: { bg: "bg-purple-600", text: "text-white" },
  GLS: { bg: "bg-blue-600", text: "text-white" },
  OzonExpress: { bg: "bg-indigo-600", text: "text-white" },
  Aramex: { bg: "bg-red-600", text: "text-white" },
};

function TrackingContent() {
  const searchParams = useSearchParams();
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [tracking, setTracking] = useState<Tracking | null>(null);

  useEffect(() => {
    const num = searchParams.get("num");
    if (num) {
      setTrackingNumber(num);
      handleTrack(num);
    }
  }, [searchParams]);

  const handleTrack = async (number: string) => {
    setIsLoading(true);
    setError("");
    setTracking(null);

    try {
      const response = await fetch(`/api/tracking/${encodeURIComponent(number)}`);
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Tracking not found");
        return;
      }

      setTracking(data.tracking);
    } catch {
      setError("Failed to fetch tracking information");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      handleTrack(trackingNumber.trim());
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      time: date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  };

  const getStatusSteps = () => {
    const steps = ["processing", "sent", "shipped", "delivered"];
    const currentIndex = tracking ? steps.indexOf(tracking.status) : -1;
    return steps.map((step, index) => ({
      key: step,
      label: statusLabels[step],
      completed: index <= currentIndex,
      current: index === currentIndex,
    }));
  };

  const carrierStyle = tracking
    ? carrierLogos[tracking.carrier] || { bg: "bg-gray-600", text: "text-white" }
    : { bg: "bg-gray-600", text: "text-white" };

  return (
    <div className="py-8 md:py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Track Your Package</h1>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label htmlFor="tracking-number" className="sr-only">
                Tracking number
              </label>
              <input
                id="tracking-number"
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-400 bg-white"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              {isLoading ? "Tracking..." : "Track"}
            </button>
          </form>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
            <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-gray-600">Searching for your package...</p>
          </div>
        )}

        {/* Error */}
        {error && !isLoading && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Tracking Not Found</h2>
            <p className="text-gray-600">{error}</p>
          </div>
        )}

        {/* Results */}
        {tracking && !isLoading && (
          <div className="space-y-6">
            {/* Header Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Carrier Banner */}
              <div className={`${carrierStyle.bg} px-6 py-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${carrierStyle.text} bg-white/20 rounded-xl flex items-center justify-center font-bold text-lg`}>
                      {tracking.carrier.substring(0, 2).toUpperCase()}
                    </div>
                    <div className={carrierStyle.text}>
                      <p className="font-bold text-lg">{tracking.carrier}</p>
                      <p className="text-sm opacity-90">International Shipping</p>
                    </div>
                  </div>
                  <span className={`px-4 py-2 text-sm font-semibold rounded-full bg-white/20 ${carrierStyle.text}`}>
                    {statusLabels[tracking.status] || tracking.status}
                  </span>
                </div>
              </div>

              {/* Tracking Info */}
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <p className="text-sm text-gray-500">Tracking Number</p>
                    <p className="font-semibold text-gray-900 font-mono text-lg">{tracking.trackingNumber}</p>
                  </div>
                  <span className={`px-4 py-1.5 text-sm font-medium rounded-full border inline-block ${statusColors[tracking.status] || "bg-gray-100 text-gray-700 border-gray-200"}`}>
                    {statusLabels[tracking.status] || tracking.status}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="px-6 py-6 border-b border-gray-200">
                <div className="flex justify-between mb-3">
                  {getStatusSteps().map((step) => (
                    <div key={step.key} className="text-center flex-1">
                      <p className={`text-xs font-medium ${step.completed ? "text-blue-600" : "text-gray-400"}`}>
                        {step.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="relative h-2 bg-gray-200 rounded-full">
                  <div
                    className="absolute h-full bg-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${((getStatusSteps().findIndex(s => s.current) + 1) / 4) * 100}%` }}
                  />
                  <div className="absolute top-0 left-0 w-full flex justify-between">
                    {getStatusSteps().map((step, index) => (
                      <div
                        key={step.key}
                        className={`w-4 h-4 -mt-1 rounded-full border-2 ${
                          step.completed
                            ? "bg-blue-600 border-blue-600"
                            : "bg-white border-gray-300"
                        }`}
                        style={{
                          marginLeft: index === 0 ? "-0.5rem" : "",
                          marginRight: index === 3 ? "-0.5rem" : "",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Route Summary */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-blue-600 font-medium uppercase tracking-wide">Origin</p>
                        <p className="font-semibold text-gray-900">{tracking.fromCity}, {tracking.fromCountry}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 ml-13 pl-13">
                      Shipped: {formatDate(tracking.fromDate)}
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-green-600 font-medium uppercase tracking-wide">Destination</p>
                        <p className="font-semibold text-gray-900">{tracking.toCity}, {tracking.toCountry}</p>
                      </div>
                    </div>
                    {tracking.deliveredDate && (
                      <p className="text-sm text-gray-600 ml-13 pl-13">
                        Delivered: {formatDate(tracking.deliveredDate)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Card */}
            {tracking.events && tracking.events.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                  <h2 className="text-lg font-semibold text-gray-900">Shipment History</h2>
                  <p className="text-sm text-gray-500">{tracking.events.length} tracking updates</p>
                </div>

                <div className="p-6">
                  <div className="relative">
                    {tracking.events.map((event, index) => {
                      const { date, time } = formatDateTime(event.timestamp);
                      const isFirst = index === 0;
                      const isLast = index === tracking.events.length - 1;

                      return (
                        <div key={event.id} className="relative flex gap-4 pb-8 last:pb-0">
                          {/* Timeline line */}
                          {!isLast && (
                            <div className="absolute left-[11px] top-6 w-0.5 h-full bg-gray-200" />
                          )}

                          {/* Timeline dot */}
                          <div className="relative z-10 flex-shrink-0">
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                isFirst
                                  ? "bg-green-500 border-green-500"
                                  : event.isCompleted
                                  ? "bg-blue-500 border-blue-500"
                                  : "bg-white border-gray-300"
                              }`}
                            >
                              {isFirst ? (
                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : event.isCompleted ? (
                                <div className="w-2 h-2 bg-white rounded-full" />
                              ) : (
                                <div className="w-2 h-2 bg-gray-300 rounded-full" />
                              )}
                            </div>
                          </div>

                          {/* Event content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                              <div>
                                <p className={`font-semibold ${isFirst ? "text-green-700" : event.isCompleted ? "text-gray-900" : "text-gray-500"}`}>
                                  {event.status}
                                </p>
                                <p className={`text-sm ${event.isCompleted ? "text-gray-700" : "text-gray-400"}`}>
                                  {event.description}
                                </p>
                              </div>
                              <div className="text-left sm:text-right flex-shrink-0">
                                <p className="text-sm font-medium text-gray-900">{time}</p>
                                <p className="text-xs text-gray-500">{date}</p>
                              </div>
                            </div>
                            <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              </svg>
                              {event.location}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Last Updated */}
            <div className="text-center text-sm text-gray-500">
              Last updated: {formatDateTime(tracking.updatedAt).date} at {formatDateTime(tracking.updatedAt).time}
            </div>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function TrackPage() {
  return (
    <Suspense
      fallback={
        <div className="py-12 md:py-16 bg-gray-50 min-h-screen">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto" />
          </div>
        </div>
      }
    >
      <TrackingContent />
    </Suspense>
  );
}
