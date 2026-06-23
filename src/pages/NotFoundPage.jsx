import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 text-center">
      <h1 className="text-6xl sm:text-8xl font-bold text-gray-600">
        404
      </h1>

      <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-sm sm:max-w-md text-gray-600 text-base sm:text-lg">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-6 sm:mt-8 font-medium underline 
        text-zinc-800 hover:text-zinc-600  
        transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
