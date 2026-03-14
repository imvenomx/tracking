import Link from "next/link";

export default function GDPRPage() {
  const rights = [
    {
      title: "Right to Access",
      description: "You can request a copy of all personal data we hold about you.",
    },
    {
      title: "Right to Rectification",
      description: "You can request correction of any inaccurate or incomplete data.",
    },
    {
      title: "Right to Erasure",
      description: "You can request deletion of your personal data (\"right to be forgotten\").",
    },
    {
      title: "Right to Restrict Processing",
      description: "You can request that we limit how we use your data.",
    },
    {
      title: "Right to Data Portability",
      description: "You can request your data in a machine-readable format.",
    },
    {
      title: "Right to Object",
      description: "You can object to processing of your data for certain purposes.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            GDPR Compliance
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your data protection rights under the General Data Protection Regulation.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
          <p className="text-gray-600 mb-4">
            Foxship is committed to protecting the privacy and security of your personal data. We comply with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
          </p>
          <p className="text-gray-600">
            We process personal data lawfully, fairly, and transparently. We collect only the data necessary for the purposes stated, and we keep it accurate and up to date.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Rights Under GDPR</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {rights.map((right) => (
              <div key={right.title} className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">{right.title}</h3>
                <p className="text-sm text-gray-600">{right.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Legal Basis for Processing</h2>
          <p className="text-gray-600 mb-4">We process your personal data based on:</p>
          <ul className="text-gray-600 list-disc pl-6 space-y-2">
            <li><strong>Contract:</strong> Processing necessary to provide our tracking services to you</li>
            <li><strong>Consent:</strong> Processing based on your explicit consent (e.g., marketing emails)</li>
            <li><strong>Legitimate Interest:</strong> Processing necessary for our legitimate business interests</li>
            <li><strong>Legal Obligation:</strong> Processing required to comply with legal requirements</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Transfers</h2>
          <p className="text-gray-600 mb-4">
            We may transfer your data to countries outside the European Economic Area (EEA). When we do, we ensure appropriate safeguards are in place, including:
          </p>
          <ul className="text-gray-600 list-disc pl-6 space-y-2">
            <li>Standard Contractual Clauses approved by the European Commission</li>
            <li>Transfers to countries with adequacy decisions</li>
            <li>Binding Corporate Rules for intra-group transfers</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Protection Officer</h2>
          <p className="text-gray-600 mb-4">
            We have appointed a Data Protection Officer (DPO) to oversee compliance with data protection requirements. You can contact our DPO at:
          </p>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="font-medium text-gray-900">dpo@foxship.com</p>
            <p className="text-sm text-gray-600">Response within 48 hours</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Exercise Your Rights</h2>
          <p className="text-gray-600 mb-4">
            To exercise any of your GDPR rights, you can:
          </p>
          <ul className="text-gray-600 list-disc pl-6 space-y-2 mb-6">
            <li>Use the privacy settings in your account dashboard</li>
            <li>Email us at privacy@foxship.com</li>
            <li>Submit a request through our contact form</li>
          </ul>
          <p className="text-gray-600">
            We will respond to your request within 30 days. If we need more time, we will inform you of the reason and extension period.
          </p>
        </div>

        <div className="bg-orange-50 rounded-2xl border border-orange-100 p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Questions About Your Data?</h2>
          <p className="text-gray-600 mb-4">
            Our privacy team is here to help you understand and exercise your rights.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium transition-colors"
          >
            Contact Privacy Team
          </Link>
        </div>
      </div>
    </div>
  );
}
