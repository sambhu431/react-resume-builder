export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">

      <div className="max-w-2xl mx-auto bg-white shadow-xl border border-slate-200 rounded-xl p-6 sm:p-10">

        {/* HEADER */}
        <div className="mb-8 border-b pb-6">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Contact Us
          </h1>

          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            If you have any questions, feedback, or issues, feel free to reach out.
            We're here to help you. Thanks.
          </p>
        </div>

        {/* CONTACT CARD */}
        <div className="space-y-6">

          {/* EMAIL */}
          <InfoBlock
            label="Email"
            value="sambhuy306@gmail.com"
            highlight
          />

          {/* RESPONSE TIME */}
          <InfoBlock
            label="Response Time"
            value="Usually within 24 - 48 hours"
          />

          {/* NOTE */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-slate-900 mb-1">
              Note
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              This is a free tool, so responses may take a little time.
              We try our best to help everyone as quickly as possible.
            </p>
          </div>

        </div>

        {/* FOOTER TRUST LINE */}
        <div className="mt-8 pt-6 border-t text-xs text-slate-400 text-center">
          ResumeMaker Support Team
        </div>

      </div>
    </div>
  );
}

/* INFO BLOCK COMPONENT */
function InfoBlock({ label, value, highlight }) {
  return (
    <div className="flex items-start justify-between gap-6">

      {/* LABEL */}
      <p className="text-sm font-semibold text-slate-900 min-w-30">
        {label}
      </p>

      {/* VALUE */}
      <p
        className={`text-sm text-slate-600 text-right wrap-break-word ${
          highlight ? "text-slate-900 font-medium" : ""
        }`}
      >
        {value}
      </p>

    </div>
  );
}