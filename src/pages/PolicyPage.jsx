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
            ResumeMaker is a free resume builder designed for students,
            freshers, and professionals. We respect your privacy and keep your
            data secure.
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
          Your resume information is stored locally in your browser to help you
          continue editing your resume during future visits. We do not upload
          your resume data to our servers unless explicitly stated. For privacy
          and security, locally stored resume data is automatically removed
          after 48 hours. So before 48 hour you can generate as many pdf you
          like with your saved info.
        </Section>

        {/* SECTION 3 */}
        <Section number="3" title="Third Parties">
          We do not share your personal information with third parties. Your
          data remains private and is only used for resume generation.
        </Section>

        {/* SECTION 4 */}
        <Section number="4" title="Resume Previews and PDF Output ">
          Template previews are provided to help you choose a resume design. The
          final downloadable PDF may differ slightly from the preview due to
          differences in rendering, spacing, fonts, page breaks, and
          device-specific behavior. This happens due to how react pdf renderer
          renders pdf while css utilies are quite different on browser compared
          to a pdf layouts. Thanks.
        </Section>

        {/* SECTION 5 */}
        <Section number="5" title="Updates">
          This policy may be updated as the product evolves. Users will be
          informed if major changes are made.
        </Section>
      </div>
    </div>
  );
}
