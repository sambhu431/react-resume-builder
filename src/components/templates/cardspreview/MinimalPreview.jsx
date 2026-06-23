export default function MinimalPreview() {
  return (
    <div className="h-72 bg-white border rounded-lg p-5 overflow-hidden">
      {/* Header */}
      <div>
        <div className="flex items-center gap-1">
          <div className="h-4 bg-slate-400 rounded w-20" />
          <div className="h-4 bg-slate-800 rounded w-24" />
        </div>

        <div className="mt-2 h-2 bg-slate-200 rounded w-2/3" />

        <div className="mt-3 flex gap-2 items-center">
          <div className="h-2 w-14 bg-slate-300 rounded" />
          <div className="w-1 h-1 bg-slate-300 rounded-full" />
          <div className="h-2 w-12 bg-slate-300 rounded" />
        </div>

        <div className="mt-1 h-2 bg-slate-300 rounded w-1/2" />

        <div className="mt-4 h-px bg-slate-200" />
      </div>

      <div className="mt-4 space-y-4">
        {/* Experience */}
        <div>
          <div className="h-2 bg-slate-400 rounded w-20 mb-1" />
          <div className="border-b border-slate-200 mb-2" />

          <div>
            <div className="flex justify-between">
              <div>
                <div className="h-2 bg-slate-700 rounded w-24" />
                <div className="mt-1 h-2 bg-slate-300 rounded w-20" />
              </div>

              <div className="h-2 bg-slate-300 rounded w-12" />
            </div>

            <div className="mt-2 space-y-1">
              <div className="flex gap-2 items-center">
                <div className="w-2 h-px bg-slate-400" />
                <div className="h-2 bg-slate-200 rounded w-full" />
              </div>

              <div className="flex gap-2 items-center">
                <div className="w-2 h-px bg-slate-400" />
                <div className="h-2 bg-slate-200 rounded w-4/5" />
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div>
          <div className="h-2 bg-slate-400 rounded w-16 mb-1" />
          <div className="border-b border-slate-200 mb-2" />

          <div>
            <div className="flex justify-between">
              <div>
                <div className="h-2 bg-slate-700 rounded w-20" />
                <div className="mt-1 h-2 bg-slate-300 rounded w-24" />
              </div>

              <div className="h-2 bg-slate-400 rounded w-10" />
            </div>

            <div className="mt-2 flex gap-2 items-center">
              <div className="w-2 h-px bg-slate-400" />
              <div className="h-2 bg-slate-200 rounded w-full" />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="h-2 bg-slate-400 rounded w-12 mb-1" />
          <div className="border-b border-slate-200 mb-2" />

          <div className="space-y-1">
            <div className="flex gap-3">
              <div className="h-2 bg-slate-700 rounded w-16" />
              <div className="h-2 bg-slate-200 rounded flex-1" />
            </div>

            <div className="flex gap-3">
              <div className="h-2 bg-slate-700 rounded w-14" />
              <div className="h-2 bg-slate-200 rounded w-3/4" />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((item) => (
            <div key={item}>
              <div className="h-1.5 bg-slate-300 rounded w-8 mb-1" />
              <div className="h-2 bg-slate-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}