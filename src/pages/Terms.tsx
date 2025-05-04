import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20 transition-colors duration-200">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Terms
          </h2>
          <p className="mb-6 text-gray-600">
            By accessing Droplet, you agree to be bound by these terms of
            service and agree that you are responsible for compliance with any
            applicable local laws.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Use License
          </h2>
          <p className="mb-6 text-gray-600">
            Permission is granted to temporarily download one copy of Droplet
            for personal, non-commercial transitory viewing only.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Disclaimer
          </h2>
          <p className="mb-6 text-gray-600">
            The materials on Droplet are provided on an 'as is' basis. Droplet
            makes no warranties, expressed or implied, and hereby disclaims and
            negates all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Limitations
          </h2>
          <p className="mb-6 text-gray-600">
            In no event shall Droplet or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit,
            or due to business interruption) arising out of the use or inability
            to use Droplet.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Revisions and Errata
          </h2>
          <p className="mb-6 text-gray-600">
            The materials appearing in Droplet could include technical,
            typographical, or photographic errors. Droplet does not warrant that
            any of the materials on its website are accurate, complete, or
            current.
          </p>

          <div className="mt-12 border-t border-gray-200 pt-6">
            <Link to="/" className="text-[#1A73E8] hover:underline">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
