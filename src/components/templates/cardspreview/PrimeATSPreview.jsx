export default function PrimeATSPreview() {
  return (
    <div className="h-72 bg-white border rounded-lg p-4 overflow-hidden">
      {/* Header */}
      <div className="text-center pb-3 border-b-2 border-slate-700">
        <div className="h-4 bg-slate-800 rounded w-1/2 mx-auto" />

        <div className="mt-2 h-2 bg-slate-300 rounded w-2/3 mx-auto" />
        <div className="mt-1 h-2 bg-slate-300 rounded w-1/2 mx-auto" />

        <div className="mt-2 flex justify-center gap-2">
          <div className="h-2 bg-slate-400 rounded w-12" />
          <div className="h-2 bg-slate-400 rounded w-10" />
        </div>
      </div>

      <div className="mt-4 space-y-4">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 rounded-full bg-slate-800" />
            <div className="h-2 bg-slate-600 rounded w-20" />
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <div className="space-y-1">
            <div className="h-2 bg-slate-200 rounded" />
            <div className="h-2 bg-slate-200 rounded w-4/5" />
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 rounded-full bg-slate-800" />
            <div className="h-2 bg-slate-600 rounded w-28" />
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <div className="border-l-2 border-slate-300 pl-3">
            <div className="flex justify-between">
              <div>
                <div className="h-2 bg-slate-700 rounded w-24" />
                <div className="mt-1 h-2 bg-slate-300 rounded w-20" />
              </div>

              <div className="h-2 bg-slate-300 rounded w-14" />
            </div>

            <div className="mt-2 space-y-1">
              <div className="h-2 bg-slate-200 rounded" />
              <div className="h-2 bg-slate-200 rounded w-4/5" />
            </div>
          </div>
        </div>

        {/* Projects Card */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 rounded-full bg-slate-800" />
            <div className="h-2 bg-slate-600 rounded w-16" />
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <div className="border border-slate-200 rounded p-2">
            <div className="flex justify-between">
              <div>
                <div className="h-2 bg-slate-700 rounded w-20" />
                <div className="mt-1 h-2 bg-slate-300 rounded w-24" />
              </div>

              <div className="h-2 bg-slate-400 rounded w-10" />
            </div>

            <div className="mt-2 space-y-1">
              <div className="h-2 bg-slate-200 rounded" />
              <div className="h-2 bg-slate-200 rounded w-3/4" />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((item) => (
            <div key={item}>
              <div className="h-1.5 bg-slate-300 rounded w-12 mb-1" />
              <div className="h-2 bg-slate-200 rounded w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
