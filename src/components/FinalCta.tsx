import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Try it free now
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Start tracking your packages today. No credit card required. Free forever for
            personal use.
          </p>
          <div className="flex justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-sm hover:shadow-md"
            >
              Get started for free
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
