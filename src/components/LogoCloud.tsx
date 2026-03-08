import { carrierPills } from "@/data/home";

export default function LogoCloud() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            3,100+ carriers in one place
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track packages from all major carriers worldwide. One search, all your shipments.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {carrierPills.map((carrier) => (
            <span
              key={carrier}
              className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-colors cursor-default"
            >
              {carrier}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
