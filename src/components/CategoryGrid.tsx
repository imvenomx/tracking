import Link from "next/link";

interface CategoryCard {
  title: string;
  description: string;
}

interface CategoryGridProps {
  title: string;
  subtitle: string;
  cards: CategoryCard[];
  viewAllLink?: string;
  viewAllText?: string;
  columns?: 3 | 4;
}

export default function CategoryGrid({
  title,
  subtitle,
  cards,
  viewAllLink,
  viewAllText = "View all",
  columns = 4,
}: CategoryGridProps) {
  const gridCols = columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";

  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className={`grid sm:grid-cols-2 md:grid-cols-3 ${gridCols} gap-4`}>
          {cards.map((card, index) => (
            <Link
              key={index}
              href={`/track/${encodeURIComponent(card.title.toLowerCase().replace(/\s+/g, "-"))}`}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{card.description}</p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5"
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
              </div>
            </Link>
          ))}
        </div>

        {viewAllLink && (
          <div className="text-center mt-8">
            <Link
              href={viewAllLink}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              {viewAllText}
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
        )}
      </div>
    </section>
  );
}
