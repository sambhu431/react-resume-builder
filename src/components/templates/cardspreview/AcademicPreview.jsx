export default function AcademicPreview() {
  return (
    <div className="h-72 bg-white border rounded-lg p-4 overflow-hidden">
      {/* Header */}
      <div className="text-center border-b border-slate-200 pb-3">
        <div className="h-4 bg-slate-800 rounded w-1/2 mx-auto" />
        <div className="mt-2 h-2 bg-slate-300 rounded w-2/3 mx-auto" />
        <div className="mt-1 h-2 bg-slate-200 rounded w-1/2 mx-auto" />

        <div className="mt-2 flex justify-center gap-2">
          <div className="h-2 w-10 bg-indigo-300 rounded" />
          <div className="h-2 w-10 bg-indigo-300 rounded" />
        </div>
      </div>

      <div className="mt-4 space-y-4">
        {/* Summary */}
        <div>
          <div className="h-2 bg-indigo-600 rounded w-28 mb-2" />
          <div className="h-px bg-indigo-200 mb-2" />

          <div className="space-y-1">
            <div className="h-2 bg-slate-200 rounded" />
            <div className="h-2 bg-slate-200 rounded w-4/5" />
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="h-2 bg-indigo-600 rounded w-24 mb-2" />
          <div className="h-px bg-indigo-200 mb-2" />

          <div className="border-l-2 border-indigo-300 pl-3 space-y-2">
            <div className="flex justify-between">
              <div className="h-2 bg-slate-700 rounded w-1/2" />
              <div className="h-2 bg-slate-300 rounded w-10" />
            </div>

            <div className="flex justify-between">
              <div className="h-2 bg-slate-300 rounded w-2/3" />
              <div className="h-2 bg-slate-300 rounded w-8" />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="h-2 bg-indigo-600 rounded w-16 mb-2" />
          <div className="h-px bg-indigo-200 mb-2" />

          <div className="space-y-2">
            <div className="h-2 bg-slate-500 rounded w-20" />

            <div className="flex flex-wrap gap-1">
              <div className="h-4 w-12 rounded bg-slate-100" />
              <div className="h-4 w-14 rounded bg-slate-100" />
              <div className="h-4 w-10 rounded bg-slate-100" />
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="h-2 bg-indigo-600 rounded w-24 mb-2" />
          <div className="h-px bg-indigo-200 mb-2" />

          <div className="border-l-2 border-indigo-300 pl-3 space-y-2">
            <div className="h-2 bg-slate-700 rounded w-1/2" />
            <div className="h-2 bg-slate-300 rounded w-1/3" />

            <div className="space-y-1 pt-1">
              <div className="h-2 bg-slate-200 rounded" />
              <div className="h-2 bg-slate-200 rounded w-4/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
