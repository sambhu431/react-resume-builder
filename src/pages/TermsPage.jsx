import Section from "../components/landingpage/Section";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl border border-slate-200 rounded-xl p-6 sm:p-10">
        {/* HEADER */}
        <div className="mb-8 border-b pb-6">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Terms & Conditions
          </h1>

          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            By using ResumeMaker, you agree to the following terms and
            conditions outlined below.
          </p>
        </div>

        {/* SECTION 1 */}
        <Section number="1" title="Free Usage">
          This platform is free to use for personal resume creation only. Any
          commercial redistribution or resale of the service is not permitted.
        </Section>

        {/* SECTION 2 */}
        <Section number="2" title="User Responsibility">
          You are solely responsible for the accuracy, truthfulness, and
          completeness of the information you provide in your resume. We do not
          verify user-submitted data.
        </Section>

        {/* SECTION 3 */}
        <Section number="3" title="Changes to Terms">
          We may update or modify these terms at any time without prior notice.
          Continued use of the platform after changes implies acceptance of the
          updated terms.
        </Section>
      </div>
    </div>
  );
}
