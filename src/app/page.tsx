import { redirect } from "next/navigation";
import HeroTrack from "@/components/HeroTrack";
import LogoCloud from "@/components/LogoCloud";
import Solutions from "@/components/Solutions";
import Benefits from "@/components/Benefits";
import StatsBand from "@/components/StatsBand";
import CategoryGrid from "@/components/CategoryGrid";
import FinalCta from "@/components/FinalCta";
import { carrierCards, orderCards, cargoCards } from "@/data/home";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ track?: string }>;
}) {
  const params = await searchParams;

  // Redirect to tracking page if track parameter is present
  if (params.track) {
    redirect(`/track?num=${encodeURIComponent(params.track)}`);
  }

  return (
    <>
      {/* Hero with Tracking Input */}
      <HeroTrack />

      {/* Logo Cloud - Carrier Pills */}
      <LogoCloud />

      {/* Solutions - 3 Feature Columns */}
      <Solutions />

      {/* Benefits Grid */}
      <Benefits />

      {/* Stats Band */}
      <StatsBand />

      {/* Carrier Tracking Category Grid */}
      <CategoryGrid
        title="Carrier tracking"
        subtitle="Track packages from all major carriers with real-time updates and notifications."
        cards={carrierCards}
        columns={4}
      />

      {/* Order Tracking Category Grid */}
      <CategoryGrid
        title="Order tracking"
        subtitle="Track your online orders from popular marketplaces and e-commerce platforms."
        cards={orderCards}
        columns={3}
      />

      {/* Cargo Tracking Mini Section */}
      <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Cargo tracking
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Track air cargo, ocean freight, and rail shipments across global networks.
              Enterprise-grade tracking for logistics professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cargoCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  {index === 0 && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </>
  );
}
