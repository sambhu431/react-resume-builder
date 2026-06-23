export default function ProfessionalPreview() {
  return (
    <div className="h-72 bg-white border rounded-lg p-5 overflow-hidden">
      {/* Header */}
      <div className="pb-3 border-b border-slate-200">
        <div className="h-5 bg-slate-800 rounded w-40" />

        <div className="mt-2 flex gap-2">
          <div className="h-2 bg-slate-300 rounded w-20" />
          <div className="h-2 bg-slate-300 rounded w-16" />
        </div>

        <div className="mt-1 h-2 bg-slate-300 rounded w-32" />

        <div className="mt-2 flex gap-2">
          <div className="h-2 bg-slate-400 rounded w-12" />
          <div className="h-2 bg-slate-400 rounded w-10" />
        </div>
      </div>

      <div className="mt-4 space-y-4">
        {/* Summary */}
        <div>
          <div className="h-1.5 bg-slate-400 rounded w-20 mb-2" />

          <div className="space-y-1">
            <div className="h-2 bg-slate-200 rounded" />
            <div className="h-2 bg-slate-200 rounded w-4/5" />
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="h-1.5 bg-slate-400 rounded w-12 mb-2" />

          <div className="space-y-1">
            <div className="h-2 bg-slate-200 rounded w-full" />
            <div className="h-2 bg-slate-200 rounded w-4/5" />
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="h-1.5 bg-slate-400 rounded w-20 mb-2" />

          <div className="flex justify-between items-start">
            <div>
              <div className="h-2 bg-slate-700 rounded w-24" />
              <div className="mt-1 h-2 bg-slate-300 rounded w-20" />
            </div>

            <div className="h-2 bg-slate-300 rounded w-14" />
          </div>

          <div className="mt-2 space-y-1">
            <div className="h-2 bg-slate-200 rounded" />
            <div className="h-2 bg-slate-200 rounded w-3/4" />
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="h-1.5 bg-slate-400 rounded w-16 mb-2" />

          <div className="flex justify-between">
            <div>
              <div className="h-2 bg-slate-700 rounded w-24" />
              <div className="mt-1 h-2 bg-slate-300 rounded w-20" />
            </div>

            <div className="space-y-1">
              <div className="h-2 bg-slate-300 rounded w-10" />
              <div className="h-2 bg-slate-200 rounded w-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}