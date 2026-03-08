"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { countries, getCitiesByCountry } from "@/data/locations";

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
}

const statusOptions = ["processing", "sent", "shipped", "delivered"];
const carrierOptions = ["DHL", "UPS", "FedEx", "GLS", "OzonExpress", "Aramex"];

const carrierColors: Record<string, string> = {
  DHL: "bg-yellow-100 text-yellow-800",
  UPS: "bg-amber-100 text-amber-800",
  FedEx: "bg-purple-100 text-purple-800",
  GLS: "bg-blue-100 text-blue-800",
  OzonExpress: "bg-indigo-100 text-indigo-800",
  Aramex: "bg-red-100 text-red-800",
};

const statusColors: Record<string, string> = {
  processing: "bg-yellow-100 text-yellow-700",
  sent: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
};

export default function AdminDashboard() {
  const router = useRouter();
  const [trackings, setTrackings] = useState<Tracking[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [createdTracking, setCreatedTracking] = useState<{
    tracking: Tracking;
    trackingUrl: string;
  } | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    trackingNumber: "",
    generateNumber: false,
    status: "processing",
    carrier: "DHL",
    fromCountry: "",
    fromCity: "",
    toCountry: "",
    toCity: "",
    fromDate: new Date().toISOString().split("T")[0],
    deliveredDate: "",
  });
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem("isAdminAuthenticated");
    if (isAuthenticated !== "true") {
      router.push("/signin");
      return;
    }
    const name = localStorage.getItem("adminName") || localStorage.getItem("adminEmail") || "Admin";
    setUserName(name);
    fetchTrackings();
  }, [router]);

  const fetchTrackings = async () => {
    try {
      const response = await fetch("/api/tracking");
      if (response.status === 401) {
        // Session expired, redirect to login
        localStorage.removeItem("isAdminAuthenticated");
        localStorage.removeItem("adminEmail");
        localStorage.removeItem("adminUserId");
        localStorage.removeItem("adminName");
        router.push("/signin");
        return;
      }
      if (response.ok) {
        const data = await response.json();
        setTrackings(data.trackings || []);
      } else {
        console.error("Failed to fetch trackings:", response.status);
        setTrackings([]);
      }
    } catch (error) {
      console.error("Failed to fetch trackings:", error);
      setTrackings([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch (error) {
      console.error("Logout error:", error);
    }
    localStorage.removeItem("isAdminAuthenticated");
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("adminUserId");
    localStorage.removeItem("adminName");
    router.push("/signin");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setSubmitting(true);

    try {
      const response = await fetch("/api/tracking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setFormError(data.error || "Failed to create tracking");
        return;
      }

      setCreatedTracking(data);
      setShowModal(false);
      setFormData({
        trackingNumber: "",
        generateNumber: false,
        status: "processing",
        carrier: "DHL",
        fromCountry: "",
        fromCity: "",
        toCountry: "",
        toCity: "",
        fromDate: new Date().toISOString().split("T")[0],
        deliveredDate: "",
      });
      fetchTrackings();
    } catch {
      setFormError("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <rect width="32" height="32" rx="8" fill="currentColor" />
                  <path
                    d="M16 8c-2 0-4 1-5 3-1 2-1 4 0 6 2 3 5 5 5 7 0-2 3-4 5-7 1-2 1-4 0-6-1-2-3-3-5-3z"
                    fill="white"
                  />
                </svg>
                <span className="text-xl font-bold text-gray-900">Foxship</span>
              </Link>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600 font-medium">Admin Dashboard</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">
                Welcome, <span className="font-medium text-gray-900">{userName}</span>
              </span>
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                View Site
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Success Modal */}
        {createdTracking && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Tracking Created!
                  </h2>
                  <p className="text-sm text-gray-500">
                    Your tracking has been created successfully
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Tracking Number
                  </label>
                  <div className="flex gap-2">
                    <code className="flex-1 p-3 bg-gray-100 border border-gray-200 rounded-xl text-sm font-mono text-gray-900">
                      {createdTracking.tracking.trackingNumber}
                    </code>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          createdTracking.tracking.trackingNumber,
                          "number"
                        )
                      }
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
                    >
                      {copiedText === "number" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Tracking URL
                  </label>
                  <div className="flex gap-2">
                    <code className="flex-1 p-3 bg-gray-100 border border-gray-200 rounded-xl text-sm font-mono break-all text-gray-900">
                      {createdTracking.trackingUrl}
                    </code>
                    <button
                      onClick={() =>
                        copyToClipboard(createdTracking.trackingUrl, "url")
                      }
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
                    >
                      {copiedText === "url" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCreatedTracking(null)}
                className="mt-6 w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Create Tracking Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Create New Tracking
                  </h2>
                  <p className="text-sm text-gray-500">
                    Fill in the details for your new shipment
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Tracking Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tracking Number
                  </label>
                  <div className="flex gap-4 items-center">
                    <input
                      type="text"
                      value={formData.trackingNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          trackingNumber: e.target.value,
                          generateNumber: false,
                        })
                      }
                      disabled={formData.generateNumber}
                      placeholder="Enter tracking number"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-400 text-gray-900 placeholder-gray-400"
                    />
                    <label className="flex items-center gap-2 cursor-pointer bg-gray-50 px-4 py-3 rounded-xl border border-gray-200">
                      <input
                        type="checkbox"
                        checked={formData.generateNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            generateNumber: e.target.checked,
                            trackingNumber: "",
                          })
                        }
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700 whitespace-nowrap">
                        Auto-generate
                      </span>
                    </label>
                  </div>
                </div>

                {/* Status & Carrier */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) =>
                        setFormData({ ...formData, status: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 bg-white"
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Carrier
                    </label>
                    <select
                      value={formData.carrier}
                      onChange={(e) =>
                        setFormData({ ...formData, carrier: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 bg-white"
                    >
                      {carrierOptions.map((carrier) => (
                        <option key={carrier} value={carrier}>
                          {carrier}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* From Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Origin
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      value={formData.fromCountry}
                      onChange={(e) =>
                        setFormData({ ...formData, fromCountry: e.target.value, fromCity: "" })
                      }
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 bg-white"
                    >
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <select
                      value={formData.fromCity}
                      onChange={(e) =>
                        setFormData({ ...formData, fromCity: e.target.value })
                      }
                      required
                      disabled={!formData.fromCountry}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 bg-white disabled:bg-gray-100 disabled:text-gray-400"
                    >
                      <option value="">Select City</option>
                      {getCitiesByCountry(formData.fromCountry).map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* To Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destination
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      value={formData.toCountry}
                      onChange={(e) =>
                        setFormData({ ...formData, toCountry: e.target.value, toCity: "" })
                      }
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 bg-white"
                    >
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <select
                      value={formData.toCity}
                      onChange={(e) =>
                        setFormData({ ...formData, toCity: e.target.value })
                      }
                      required
                      disabled={!formData.toCountry}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 bg-white disabled:bg-gray-100 disabled:text-gray-400"
                    >
                      <option value="">Select City</option>
                      {getCitiesByCountry(formData.toCountry).map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Dates */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dates
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        Ship Date
                      </label>
                      <input
                        type="date"
                        value={formData.fromDate}
                        onChange={(e) =>
                          setFormData({ ...formData, fromDate: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        Delivered Date (optional)
                      </label>
                      <input
                        type="date"
                        value={formData.deliveredDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            deliveredDate: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      />
                    </div>
                  </div>
                </div>

                {formError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-center gap-2">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {formError}
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl font-medium transition-colors"
                  >
                    {submitting ? "Creating..." : "Create Tracking"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {trackings.length}
                </p>
                <p className="text-sm text-gray-500">Total Trackings</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {trackings.filter((t) => t.status === "processing").length}
                </p>
                <p className="text-sm text-gray-500">Processing</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {trackings.filter((t) => t.status === "shipped").length}
                </p>
                <p className="text-sm text-gray-500">In Transit</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {trackings.filter((t) => t.status === "delivered").length}
                </p>
                <p className="text-sm text-gray-500">Delivered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Create Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-sm"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create New Tracking
          </button>
        </div>

        {/* Tracking List */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              All Trackings
            </h2>
          </div>

          {loading ? (
            <div className="p-12 text-center">
              <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" />
              <p className="text-gray-500">Loading trackings...</p>
            </div>
          ) : trackings.length === 0 ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <p className="text-gray-900 font-medium mb-1">No trackings yet</p>
              <p className="text-gray-500 text-sm">
                Create your first tracking to get started
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tracking Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Carrier
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Origin
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Destination
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ship Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {trackings.map((tracking) => (
                    <tr key={tracking.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <code className="text-sm font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">
                          {tracking.trackingNumber}
                        </code>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            carrierColors[tracking.carrier] ||
                            "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {tracking.carrier}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                            statusColors[tracking.status] ||
                            "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {tracking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {tracking.fromCity}, {tracking.fromCountry}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {tracking.toCity}, {tracking.toCountry}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {formatDate(tracking.fromDate)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() =>
                            copyToClipboard(
                              `${window.location.origin}/track?num=${tracking.trackingNumber}`,
                              tracking.id
                            )
                          }
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                        >
                          {copiedText === tracking.id ? "Copied!" : "Copy Link"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
