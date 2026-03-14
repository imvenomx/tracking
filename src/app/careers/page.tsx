import Link from "next/link";

export default function CareersPage() {
  const openings = [
    { title: "Senior Backend Engineer", location: "Remote", department: "Engineering", type: "Full-time" },
    { title: "Product Designer", location: "San Francisco, CA", department: "Design", type: "Full-time" },
    { title: "Data Scientist", location: "Remote", department: "Data", type: "Full-time" },
    { title: "Customer Success Manager", location: "New York, NY", department: "Support", type: "Full-time" },
    { title: "DevOps Engineer", location: "Remote", department: "Engineering", type: "Full-time" },
    { title: "Marketing Manager", location: "San Francisco, CA", department: "Marketing", type: "Full-time" },
  ];

  const benefits = [
    { icon: "health", title: "Health & Wellness", description: "Comprehensive medical, dental, and vision coverage" },
    { icon: "remote", title: "Remote Friendly", description: "Work from anywhere in the world" },
    { icon: "equity", title: "Equity", description: "Stock options for all full-time employees" },
    { icon: "pto", title: "Unlimited PTO", description: "Take the time you need to recharge" },
    { icon: "learning", title: "Learning Budget", description: "$2,000 annual budget for courses and conferences" },
    { icon: "parental", title: "Parental Leave", description: "16 weeks paid leave for all parents" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us build the future of package tracking. We&apos;re looking for talented people who want to make a difference.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Foxship?</h2>
          <p className="text-gray-600 mb-4">
            We&apos;re a fast-growing team solving real problems for millions of people every day. Our technology powers tracking for some of the world&apos;s largest e-commerce platforms, and we&apos;re just getting started.
          </p>
          <p className="text-gray-600">
            At Foxship, you&apos;ll work with talented engineers, designers, and product thinkers who are passionate about building great products. We value autonomy, transparency, and continuous learning.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div>
                  <h3 className="font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.department} &bull; {job.location} &bull; {job.type}</p>
                </div>
                <Link href="/contact" className="px-4 py-2 text-orange-600 hover:text-orange-700 font-medium">
                  Apply
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">
            Don&apos;t see a role that fits? <Link href="/contact" className="text-orange-600 hover:text-orange-700">Send us your resume</Link> anyway.
          </p>
        </div>
      </div>
    </div>
  );
}
