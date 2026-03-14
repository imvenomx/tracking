export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600">
            Last updated: March 1, 2024
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <h2 className="text-xl font-semibold text-gray-900 mt-0">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing or using Foxship&apos;s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">2. Description of Service</h2>
          <p className="text-gray-600">
            Foxship provides package tracking services that aggregate tracking information from various shipping carriers. We act as an intermediary and display information provided by third-party carriers.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">3. User Accounts</h2>
          <p className="text-gray-600">
            To access certain features, you may need to create an account. You are responsible for:
          </p>
          <ul className="text-gray-600 list-disc pl-6 space-y-2">
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Providing accurate and complete information</li>
            <li>Notifying us immediately of any unauthorized use</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">4. Acceptable Use</h2>
          <p className="text-gray-600">You agree not to:</p>
          <ul className="text-gray-600 list-disc pl-6 space-y-2">
            <li>Use the service for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt the service</li>
            <li>Scrape or collect data without permission</li>
            <li>Transmit viruses or malicious code</li>
            <li>Impersonate any person or entity</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">5. Intellectual Property</h2>
          <p className="text-gray-600">
            All content, features, and functionality of Foxship are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">6. Disclaimer of Warranties</h2>
          <p className="text-gray-600">
            The service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. We do not guarantee that tracking information will be accurate, complete, or timely, as we rely on data from third-party carriers.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">7. Limitation of Liability</h2>
          <p className="text-gray-600">
            To the maximum extent permitted by law, Foxship shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">8. API Usage</h2>
          <p className="text-gray-600">
            Use of our API is subject to additional terms, including rate limits and usage restrictions. Commercial use of the API requires a paid subscription.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">9. Termination</h2>
          <p className="text-gray-600">
            We reserve the right to terminate or suspend your account at any time for violations of these terms or for any other reason at our sole discretion.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">10. Changes to Terms</h2>
          <p className="text-gray-600">
            We may modify these terms at any time. Continued use of the service after changes constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">11. Governing Law</h2>
          <p className="text-gray-600">
            These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">12. Contact</h2>
          <p className="text-gray-600">
            For questions about these Terms of Service, please contact us at legal@foxship.com.
          </p>
        </div>
      </div>
    </div>
  );
}
