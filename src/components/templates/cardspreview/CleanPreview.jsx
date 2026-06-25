export default function CleanPreview() {
  return (
    <div className="h-72 bg-white border rounded-lg p-5 overflow-hidden">
      {/* Header */}
      <div className="border-b border-slate-100 pb-3">
        <div className="h-5 bg-slate-800 rounded w-2/5" />

        <div className="mt-3 flex gap-2">
          <div className="h-2 w-16 bg-slate-300 rounded" />
          <div className="h-2 w-12 bg-slate-300 rounded" />
          <div className="h-2 w-20 bg-slate-300 rounded" />
        </div>

        <div className="mt-2 flex gap-2">
          <div className="h-2 w-14 bg-blue-200 rounded" />
          <div className="h-2 w-14 bg-blue-200 rounded" />
        </div>
      </div>

      <div className="mt-4 space-y-5">
        {/* Professional Profile */}
        <div>
          <div className="h-2 bg-slate-400 rounded w-28 mb-2" />
          <div className="space-y-1">
            <div className="h-2 bg-slate-200 rounded" />
            <div className="h-2 bg-slate-200 rounded w-4/5" />
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="h-2 bg-slate-400 rounded w-24 mb-2" />

          <div>
            <div className="flex justify-between items-center">
              <div className="h-3 bg-slate-700 rounded w-1/3" />

              <div className="h-4 w-16 rounded bg-slate-100 border border-slate-200" />
            </div>

            <div className="mt-2 h-2 bg-slate-300 rounded w-1/2" />

            <div className="mt-2 space-y-1">
              <div className="h-2 bg-slate-200 rounded" />
              <div className="h-2 bg-slate-200 rounded w-3/4" />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="h-2 bg-slate-400 rounded w-14 mb-2" />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="h-2 bg-slate-600 rounded w-16 mb-2" />

              <div className="flex gap-1 flex-wrap">
                <div className="h-4 w-10 rounded bg-slate-100 border border-slate-200" />
                <div className="h-4 w-12 rounded bg-slate-100 border border-slate-200" />
              </div>
            </div>

            <div>
              <div className="h-2 bg-slate-600 rounded w-14 mb-2" />

              <div className="flex gap-1 flex-wrap">
                <div className="h-4 w-12 rounded bg-slate-100 border border-slate-200" />
                <div className="h-4 w-10 rounded bg-slate-100 border border-slate-200" />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div>
          <div className="h-2 bg-slate-400 rounded w-24 mb-2" />

          <div className="grid grid-cols-4 gap-2">
            <div className="space-y-1">
              <div className="h-1.5 bg-slate-300 rounded w-8" />
              <div className="h-2 bg-slate-200 rounded" />
            </div>

            <div className="space-y-1">
              <div className="h-1.5 bg-slate-300 rounded w-10" />
              <div className="h-2 bg-slate-200 rounded" />
            </div>

            <div className="space-y-1">
              <div className="h-1.5 bg-slate-300 rounded w-8" />
              <div className="h-2 bg-slate-200 rounded" />
            </div>

            <div className="space-y-1">
              <div className="h-1.5 bg-slate-300 rounded w-10" />
              <div className="h-2 bg-slate-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
