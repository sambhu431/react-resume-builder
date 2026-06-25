export default function PrecisionATSPreview() {
  return (
    <div className="h-72 bg-white border rounded-lg p-4 overflow-hidden">
      {/* Header */}
      <div className="text-center">
        <div className="h-4 bg-slate-800 rounded w-1/2 mx-auto" />
        <div className="mt-2 h-2 bg-slate-300 rounded w-2/3 mx-auto" />
        <div className="mt-1 h-2 bg-slate-300 rounded w-1/2 mx-auto" />
        <div className="mt-1 h-2 bg-blue-300 rounded w-24 mx-auto" />
      </div>

      <div className="mt-4 space-y-3">
        {/* Summary Box */}
        <div className="border border-slate-300 rounded p-2">
          <div className="h-2 bg-slate-700 rounded w-24 mb-2" />

          <div className="space-y-1">
            <div className="h-2 bg-slate-200 rounded" />
            <div className="h-2 bg-slate-200 rounded w-4/5" />
          </div>
        </div>

        {/* Skills Box */}
        <div className="border border-slate-300 rounded p-2">
          <div className="h-2 bg-slate-700 rounded w-16 mb-2" />

          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <div className="h-2 bg-slate-600 rounded w-16" />
              <div className="h-2 bg-slate-200 rounded flex-1" />
            </div>

            <div className="flex gap-2 items-center">
              <div className="h-2 bg-slate-600 rounded w-14" />
              <div className="h-2 bg-slate-200 rounded w-3/4" />
            </div>
          </div>
        </div>

        {/* Experience Box */}
        <div className="border border-slate-300 rounded p-2">
          <div className="h-2 bg-slate-700 rounded w-28 mb-2" />

          <div className="flex justify-between mb-2">
            <div className="h-2 bg-slate-600 rounded w-24" />
            <div className="h-2 bg-slate-300 rounded w-12" />
          </div>

          <div className="h-2 bg-slate-300 rounded w-20 mb-2" />

          <div className="space-y-1 pl-3">
            <div className="h-2 bg-slate-200 rounded" />
            <div className="h-2 bg-slate-200 rounded w-4/5" />
          </div>
        </div>

        {/* Education Box */}
        <div className="border border-slate-300 rounded p-2">
          <div className="h-2 bg-slate-700 rounded w-20 mb-2" />

          <div className="h-2 bg-slate-600 rounded w-24 mb-1" />
          <div className="h-2 bg-slate-200 rounded w-20 mb-1" />
          <div className="h-2 bg-slate-300 rounded w-16" />
        </div>
      </div>
    </div>
  );
}
