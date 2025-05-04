import React from 'react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E1F5FE] to-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#1A73E8] mb-8">
          Privacy Policy
        </h1>

        <div className="prose max-w-none bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-6 text-gray-600">
            We collect information that you provide directly to us, including
            when you create an account, use our services, or communicate with
            us.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-6 text-gray-600">
            We use the information we collect to provide, maintain, and improve
            our services, to develop new ones, and to protect Droplet and our
            users.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Information Sharing and Disclosure
          </h2>
          <p className="mb-6 text-gray-600">
            We do not share personal information with companies, organizations,
            or individuals outside of Droplet except in the following cases:
            with your consent, for legal reasons, or as part of a business
            transfer.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Data Security
          </h2>
          <p className="mb-6 text-gray-600">
            We work hard to protect Droplet and our users from unauthorized
            access to or unauthorized alteration, disclosure, or destruction of
            information we hold.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Changes
          </h2>
          <p className="mb-6 text-gray-600">
            Our Privacy Policy may change from time to time. We will post any
            privacy policy changes on this page and, if the changes are
            significant, we will provide a more prominent notice.
          </p>

          <div className="mt-12 border-t border-gray-200 pt-6">
            <Link
              to="/"
              className="text-[#1A73E8] hover:text-[#00ACC1] transition-colors hover:underline flex items-center group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 transition-transform group-hover:-translate-x-1"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
