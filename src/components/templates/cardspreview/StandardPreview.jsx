export default function StandardPreview() {
  return (
    <div className="h-72 bg-white border rounded-lg p-4 overflow-hidden">
      {/* HEADER */}
      <div className="mb-4">
        <div className="h-4 bg-slate-800 rounded w-1/2" />
        <div className="mt-2 h-2 bg-slate-300 rounded w-1/3" />

        <div className="mt-2 space-y-2">
          <div className="h-2 bg-slate-200 rounded w-3/4" />
          <div className="h-2 bg-slate-200 rounded w-1/2" />
        </div>

        <div className="mt-2 flex gap-2">
          <div className="h-2 bg-slate-300 rounded w-16" />
          <div className="h-2 bg-slate-300 rounded w-16" />
        </div>
      </div>

      {/* SUMMARY */}
      <div className="mt-4">
        <div className="h-px bg-slate-300" />
        <div className="mt-2 h-2 bg-slate-500 rounded w-24" />
        <div className="mt-2 space-y-2">
          <div className="h-2 bg-slate-200 rounded" />
          <div className="h-2 bg-slate-200 rounded w-4/5" />
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="mt-4 space-y-3">
        <div>
          <div className="h-2 bg-slate-500 rounded w-20 mb-2" />
          <div className="h-2 bg-slate-200 rounded w-3/4" />
          <div className="h-2 bg-slate-200 rounded w-1/2 mt-1" />
        </div>

        <div>
          <div className="h-2 bg-slate-500 rounded w-16 mb-2" />
          <div className="h-2 bg-slate-200 rounded w-2/3" />
        </div>
      </div>

      {/* SKILLS */}
      <div className="mt-4">
        <div className="h-px bg-slate-300" />
        <div className="mt-2 h-2 bg-slate-500 rounded w-20" />

        <div className="mt-2 space-y-2">
          <div className="h-2 bg-slate-200 rounded w-3/4" />
          <div className="h-2 bg-slate-200 rounded w-2/3" />
        </div>
      </div>

      {/* PROJECTS */}
      <div className="mt-4 space-y-2">
        <div className="h-px bg-slate-300" />
        <div className="h-2 bg-slate-500 rounded w-20 mt-2" />

        <div className="h-2 bg-slate-200 rounded w-2/3" />
        <div className="h-2 bg-slate-200 rounded w-4/5" />
      </div>
    </div>
  );
}
