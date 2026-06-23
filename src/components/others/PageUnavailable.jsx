
import {Link} from "react-router-dom";

export default function PageUnavailable({ header, message }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-white to-slate-100 px-6">
      
      {/* Background Decoration */}
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative w-full max-w-xl">
        <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-10 text-center shadow-xl backdrop-blur-sm">

          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-600">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Page Unavailable
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {header}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-600">
            {message}
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center 
              rounded-xl border border-slate-300 cursor-pointer 
              bg-white px-6 py-3 text-sm font-semibold 
              text-slate-700 transition hover:bg-slate-50"
            >
              Go Back
            </button>
          </div>

          {/* Footer Text */}
          <p className="mt-8 text-xs text-slate-400">
            Error • Resource unavailable or no longer exists
          </p>
        </div>
      </div>
    </div>
  );
}

