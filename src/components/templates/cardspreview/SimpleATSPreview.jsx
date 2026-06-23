export default function SimpleATSPreview() {
  return (
    <div className="h-72 bg-white border rounded-lg p-5 overflow-hidden text-slate-400">
      
      {/* HEADER */}
      <div className="mb-4">
        <div className="h-5 bg-slate-800 rounded w-40" />

        <div className="mt-2 flex gap-2">
          <div className="h-2 bg-slate-300 rounded w-24" />
          <div className="h-2 bg-slate-300 rounded w-16" />
        </div>

        <div className="mt-1 h-2 bg-slate-300 rounded w-32" />

        <div className="mt-2 flex gap-2">
          <div className="h-2 bg-slate-400 rounded w-20" />
          <div className="h-2 bg-slate-400 rounded w-16" />
        </div>
      </div>

      {/* SUMMARY */}
      <div className="mb-4">
        <div className="h-1.5 bg-slate-400 rounded w-28 mb-2" />

        <div className="space-y-1">
          <div className="h-2 bg-slate-200 rounded" />
          <div className="h-2 bg-slate-200 rounded w-5/6" />
        </div>
      </div>

      {/* SKILLS */}
      <div className="mb-4">
        <div className="h-1.5 bg-slate-400 rounded w-16 mb-2" />

        <div className="space-y-1">
          <div className="h-2 bg-slate-200 rounded w-full" />
          <div className="h-2 bg-slate-200 rounded w-4/5" />
          <div className="h-2 bg-slate-200 rounded w-3/5" />
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="mb-4">
        <div className="h-1.5 bg-slate-400 rounded w-24 mb-2" />

        <div className="flex justify-between">
          <div>
            <div className="h-2 bg-slate-700 rounded w-28" />
            <div className="mt-1 h-2 bg-slate-300 rounded w-20" />
          </div>

          <div className="h-2 bg-slate-300 rounded w-16" />
        </div>

        <div className="mt-2 space-y-1">
          <div className="h-2 bg-slate-200 rounded" />
          <div className="h-2 bg-slate-200 rounded w-3/4" />
        </div>
      </div>

      {/* PROJECTS */}
      <div className="mb-4">
        <div className="h-1.5 bg-slate-400 rounded w-20 mb-2" />

        <div className="space-y-2">
          <div className="h-2 bg-slate-700 rounded w-24" />
          <div className="h-2 bg-slate-200 rounded w-4/5" />
          <div className="h-2 bg-slate-200 rounded w-3/4" />
        </div>
      </div>

      {/* EDUCATION */}
      <div>
        <div className="h-1.5 bg-slate-400 rounded w-20 mb-2" />

        <div className="flex justify-between">
          <div>
            <div className="h-2 bg-slate-700 rounded w-28" />
            <div className="mt-1 h-2 bg-slate-300 rounded w-20" />
          </div>

          <div className="space-y-1">
            <div className="h-2 bg-slate-300 rounded w-10" />
            <div className="h-2 bg-slate-200 rounded w-12" />
          </div>
        </div>
      </div>
    </div>
  );
}