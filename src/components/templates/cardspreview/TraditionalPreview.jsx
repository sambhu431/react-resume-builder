export default function TraditionalPreview() {
  return (
    <div className="h-72 bg-white border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-900 px-4 py-4">
        <div className="h-4 bg-white/90 rounded w-1/2" />
        <div className="mt-2 h-2 bg-gray-500 rounded w-2/3" />

        <div className="mt-3 space-y-1">
          <div className="h-2 bg-gray-600 rounded w-1/2" />
          <div className="h-2 bg-gray-600 rounded w-2/5" />
          <div className="h-2 bg-gray-700 rounded w-3/4" />
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-4">
        {/* Profile Summary */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-gray-800" />
            <div className="h-2 bg-gray-700 rounded w-24" />
          </div>

          <div className="space-y-1">
            <div className="h-2 bg-slate-200 rounded" />
            <div className="h-2 bg-slate-200 rounded" />
            <div className="h-2 bg-slate-200 rounded w-4/5" />
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-gray-800" />
            <div className="h-2 bg-gray-700 rounded w-20" />
          </div>

          <div className="border-l-2 border-gray-200 pl-3 space-y-2">
            <div className="h-2 bg-slate-700 rounded w-1/3" />
            <div className="h-2 bg-slate-400 rounded w-1/2" />
            <div className="h-2 bg-slate-200 rounded w-2/3" />
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-gray-800" />
            <div className="h-2 bg-gray-700 rounded w-20" />
          </div>

          <div className="border-l-2 border-gray-200 pl-3 space-y-2">
            <div className="h-2 bg-slate-700 rounded w-1/2" />
            <div className="h-2 bg-slate-300 rounded w-2/3" />
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-gray-800" />
            <div className="h-2 bg-gray-700 rounded w-14" />
          </div>

          <div className="space-y-2">
            <div className="h-2 bg-slate-500 rounded w-24" />
            <div className="h-2 bg-slate-200 rounded w-full" />
          </div>
        </div>

        {/* Footer Personal Details */}
        <div className="flex gap-2 pt-1">
          <div className="h-2 w-12 bg-slate-300 rounded" />
          <div className="h-2 w-16 bg-slate-300 rounded" />
          <div className="h-2 w-14 bg-slate-300 rounded" />
        </div>
      </div>
    </div>
  );
}
