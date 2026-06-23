import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-slate-700">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">
        Privacy Policy
      </h1>

      <p className="mb-4 text-sm">
        ResumeMaker is a free resume builder designed for students, freshers,
        and professionals. We respect your privacy and keep your data safe.
      </p>

      <h2 className="font-semibold text-slate-900 mt-6 mb-2">
        1. Data We Collect
      </h2>
      <p className="text-sm mb-4">
        We only store information you enter while creating your resume such as
        name, education, experience, and skills. This data is used only to
        generate your resume.
      </p>

      <h2 className="font-semibold text-slate-900 mt-6 mb-2">
        2. Data Storage
      </h2>
      <p className="text-sm mb-4">
        Your data may be stored locally in your browser. 
      </p>

      <h2 className="font-semibold text-slate-900 mt-6 mb-2">
        3. Third Parties
      </h2>
      <p className="text-sm mb-4">
        We do not share your personal information with third parties.
      </p>

      <h2 className="font-semibold text-slate-900 mt-6 mb-2">
        4. Updates
      </h2>
      <p className="text-sm">
        This policy may be updated as the product evolves.
      </p>
    </div>
  );
}
