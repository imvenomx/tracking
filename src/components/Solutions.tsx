import Link from "next/link";
import { solutions } from "@/data/home";

const icons = {
  ShoppingCart: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  ),
  Code: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  ),
  Smartphone: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  ),
};

export default function Solutions() {
  return (
    <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Multiple package tracking solutions in one
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're a shopper, e-commerce business, or developer, we have the right
            solution for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
            >
              {solution.hasIllustration && (
                <div className="mb-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-blue-600"
                    fill="none"
                    viewBox="0 0 96 96"
                    aria-hidden="true"
                  >
                    <rect
                      x="12"
                      y="20"
                      width="72"
                      height="56"
                      rx="4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect x="20" y="32" width="20" height="20" rx="2" fill="currentColor" opacity="0.2" />
                    <rect x="20" y="56" width="32" height="4" rx="1" fill="currentColor" opacity="0.3" />
                    <rect x="20" y="64" width="24" height="4" rx="1" fill="currentColor" opacity="0.2" />
                    <path
                      d="M56 42l8 8-8 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="72" cy="50" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M72 46v4l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              )}

              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                {icons[solution.icon as keyof typeof icons]}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-6 flex-1">{solution.description}</p>

              <Link
                href={solution.linkHref}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                {solution.linkText}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
