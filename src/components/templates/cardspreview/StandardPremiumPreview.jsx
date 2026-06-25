export default function StandardPremiumPreview() {
  return (
    <div className="h-72 bg-white border rounded-lg p-4 overflow-hidden">
      {/* HEADER */}
      <div className="text-center">
        <div className="h-4 bg-slate-700 rounded w-1/2 mx-auto" />
        <div className="mt-2 h-2 bg-slate-300 rounded w-2/3 mx-auto" />
        <div className="mt-1 h-2 bg-slate-300 rounded w-1/3 mx-auto" />
      </div>

      {/* CONTACT */}
      <div className="mt-4 space-y-2">
        <div className="h-2 bg-slate-200 rounded w-3/4" />
        <div className="h-2 bg-slate-200 rounded w-1/2" />
      </div>

      {/* SUMMARY */}
      <div className="mt-5">
        <div className="h-px bg-slate-300" />
        <div className="mt-3 h-2 bg-slate-500 rounded w-24" />
        <div className="mt-2 space-y-2">
          <div className="h-2 bg-slate-200 rounded" />
          <div className="h-2 bg-slate-200 rounded w-4/5" />
        </div>
      </div>

      {/* PROJECTS */}
      <div className="mt-5">
        <div className="h-px bg-slate-300" />
        <div className="mt-3 h-2 bg-slate-500 rounded w-20" />

        <div className="mt-2 space-y-2">
          <div className="h-2 bg-slate-200 rounded w-2/3" />
          <div className="h-2 bg-slate-200 rounded w-4/5" />
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="mt-5">
        <div className="h-px bg-slate-300" />
        <div className="mt-3 h-2 bg-slate-500 rounded w-20" />

        <div className="mt-2 space-y-2">
          <div className="h-2 bg-slate-200 rounded w-3/4" />
          <div className="h-2 bg-slate-200 rounded w-2/3" />
        </div>
      </div>

      {/* EDUCATION */}
      <div className="mt-5">
        <div className="h-px bg-slate-300" />
        <div className="mt-3 h-2 bg-slate-500 rounded w-24" />

        <div className="mt-2 space-y-2">
          <div className="h-2 bg-slate-200 rounded w-3/5" />
          <div className="h-2 bg-slate-200 rounded w-2/5" />
        </div>
      </div>
    </div>
  );
}
