export default function EntryLevelPreview() {
  return (
    <div className="h-72 bg-white border rounded-lg p-4 overflow-hidden">
      {/* Header */}
      <div className="text-center border-b pb-3">
        <div className="h-4 bg-slate-800 rounded w-1/2 mx-auto" />

        <div className="mt-2 space-y-1">
          <div className="h-2 bg-slate-300 rounded w-2/3 mx-auto" />
          <div className="h-2 bg-slate-300 rounded w-1/2 mx-auto" />
        </div>

        <div className="mt-2 flex justify-center gap-2">
          <div className="h-2 w-10 bg-blue-200 rounded" />
          <div className="h-2 w-10 bg-blue-200 rounded" />
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        {/* Sidebar */}
        <div className="space-y-4">
          {/* Skills */}
          <div>
            <div className="h-2 bg-slate-700 rounded w-12 mb-1" />
            <div className="border-b border-slate-300 mb-2" />

            <div className="space-y-2">
              <div>
                <div className="h-2 bg-slate-500 rounded w-10 mb-1" />
                <div className="h-2 bg-slate-200 rounded" />
              </div>

              <div>
                <div className="h-2 bg-slate-500 rounded w-12 mb-1" />
                <div className="h-2 bg-slate-200 rounded w-4/5" />
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="h-2 bg-slate-700 rounded w-16 mb-1" />
            <div className="border-b border-slate-300 mb-2" />

            <div className="space-y-1">
              <div className="h-2 bg-slate-600 rounded w-full" />
              <div className="h-2 bg-slate-200 rounded w-4/5" />
            </div>
          </div>

          {/* Personal Info */}
          <div>
            <div className="h-2 bg-slate-700 rounded w-20 mb-1" />
            <div className="border-b border-slate-300 mb-2" />

            <div className="space-y-1">
              <div className="h-2 bg-slate-200 rounded" />
              <div className="h-2 bg-slate-200 rounded w-3/4" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-2 space-y-4">
          {/* Projects */}
          <div>
            <div className="h-2 bg-slate-700 rounded w-16 mb-1" />
            <div className="border-b border-slate-300 mb-2" />

            <div>
              <div className="flex justify-between">
                <div className="h-2 bg-slate-700 rounded w-1/3" />
                <div className="h-2 bg-blue-200 rounded w-8" />
              </div>

              <div className="mt-1 h-2 bg-slate-300 rounded w-1/2" />

              <div className="mt-2 space-y-1">
                <div className="h-2 bg-slate-200 rounded" />
                <div className="h-2 bg-slate-200 rounded w-4/5" />
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="h-2 bg-slate-700 rounded w-20 mb-1" />
            <div className="border-b border-slate-300 mb-2" />

            <div>
              <div className="flex justify-between">
                <div className="h-2 bg-slate-700 rounded w-1/2" />
                <div className="h-2 bg-slate-300 rounded w-12" />
              </div>

              <div className="mt-2 space-y-1">
                <div className="h-2 bg-slate-200 rounded" />
                <div className="h-2 bg-slate-200 rounded w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
