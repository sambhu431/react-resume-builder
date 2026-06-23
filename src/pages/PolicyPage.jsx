
import Section from "../components/landingpage/Section";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">

      <div className="max-w-3xl mx-auto bg-white shadow-xl border border-slate-200 rounded-xl p-6 sm:p-10">

        {/* HEADER */}
        <div className="mb-8 border-b pb-6">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            ResumeMaker is a free resume builder designed for students, freshers,
            and professionals. We respect your privacy and keep your data secure.
          </p>
        </div>

        {/* SECTION 1 */}
        <Section number="1" title="Data We Collect">
          We only store information you enter while creating your resume such as
          name, education, experience, and skills. This data is used only to
          generate your resume.
        </Section>

        {/* SECTION 2 */}
        <Section number="2" title="Data Storage">
          Your data may be stored locally in your browser. We do not upload it to
          any external servers unless explicitly stated.
        </Section>

        {/* SECTION 3 */}
        <Section number="3" title="Third Parties">
          We do not share your personal information with third parties. Your data
          remains private and is only used for resume generation.
        </Section>

        {/* SECTION 4 */}
        <Section number="4" title="Updates">
          This policy may be updated as the product evolves. Users will be informed
          if major changes are made.
        </Section>

      </div>
    </div>
  );
}
