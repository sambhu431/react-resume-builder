
export default function Section({ number, title, children }) {
  return (
    <div className="mb-8">

      {/* HEADER */}
      <div className="flex items-start gap-3 mb-3">

        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold">
          {number}
        </span>

        <h2 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
          {title}
        </h2>

      </div>

      {/* CONTENT */}
      <p className="text-sm text-slate-600 leading-relaxed pl-9">
        {children}
      </p>

    </div>
  );
}