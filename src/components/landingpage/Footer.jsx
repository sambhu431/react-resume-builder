import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-linear-to-b from-white-500 to-gray-200">
      <div className="container mx-auto px-6 py-4 ">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-slate-900">ResumeMaker</h3>

            <p className="mt-3 text-sm text-slate-500">
              Free resume builder designed to help students, freshers, and
              professionals create ATS-friendly resumes quickly.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Product</h4>

            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li>
                <Link to="/">Home</Link>
              </li>
                <li>
                <Link to="/sample-resumes">View Resume Samples</Link>
              </li>
              <li>
                <Link to="/templates">Templates</Link>
              </li>
              <li>
                <Link to="/userdetails">Create Resume</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Resources</h4>

            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li>
                <Link to="/policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © 2026 ResumeMaker. Built for job seekers.
        </div>
      </div>
    </footer>
  );
}
