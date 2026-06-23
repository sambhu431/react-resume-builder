export default function ClassicPreview() {
  return (
    <div className="h-72 bg-white border rounded-lg p-4 overflow-hidden">
      {/* Header */}
      <div className="text-center">
        <div className="h-4 bg-slate-800 rounded w-1/2 mx-auto" />

        <div className="mt-2 space-y-1">
          <div className="h-2 bg-slate-300 rounded w-2/3 mx-auto" />
          <div className="h-2 bg-slate-300 rounded w-1/2 mx-auto" />
        </div>

        <div className="mt-2 flex justify-center gap-2">
          <div className="h-2 w-10 bg-slate-400 rounded" />
          <div className="h-2 w-10 bg-slate-400 rounded" />
        </div>
      </div>

      {/* Career Objective */}
      <div className="mt-4">
        <div className="h-2 bg-slate-700 rounded w-28 mb-1" />
        <div className="border-b border-slate-400" />

        <div className="mt-2 space-y-1">
          <div className="h-2 bg-slate-200 rounded" />
          <div className="h-2 bg-slate-200 rounded" />
          <div className="h-2 bg-slate-200 rounded w-4/5" />
        </div>
      </div>

      {/* Education */}
      <div className="mt-4">
        <div className="h-2 bg-slate-700 rounded w-20 mb-1" />
        <div className="border-b border-slate-400" />

        <div className="mt-2 space-y-2">
          <div>
            <div className="h-2 bg-slate-700 rounded w-1/2" />
            <div className="mt-1 h-2 bg-slate-300 rounded w-2/3" />
            <div className="mt-1 h-2 bg-slate-200 rounded w-1/3" />
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-4">
        <div className="h-2 bg-slate-700 rounded w-14 mb-1" />
        <div className="border-b border-slate-400" />

        <div className="mt-2 space-y-1">
          <div className="h-2 bg-slate-300 rounded w-full" />
          <div className="h-2 bg-slate-300 rounded w-4/5" />
        </div>
      </div>

      {/* Experience */}
      <div className="mt-4">
        <div className="h-2 bg-slate-700 rounded w-24 mb-1" />
        <div className="border-b border-slate-400" />

        <div className="mt-2">
          <div className="flex justify-between">
            <div className="h-2 bg-slate-700 rounded w-1/3" />
            <div className="h-2 bg-slate-300 rounded w-16" />
          </div>

          <div className="mt-1 h-2 bg-slate-300 rounded w-1/2" />

          <div className="mt-2 space-y-1">
            <div className="h-2 bg-slate-200 rounded" />
            <div className="h-2 bg-slate-200 rounded w-4/5" />
          </div>
        </div>
      </div>
    </div>
  );
}