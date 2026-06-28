import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Hero() {
  const [resumes, setResumes] = useState(0);
  const [templates, setTemplates] = useState(0);
  const [signUps, setSignUps] = useState(0);

  useEffect(() => {
    let resumesInterval = setInterval(() => {
      setResumes((prev) => {
        if (prev >= 100) {
          clearInterval(resumesInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    let templatesInterval = setInterval(() => {
      setTemplates((prev) => {
        if (prev >= 50) {
          clearInterval(templatesInterval);
          return 50;
        }
        return prev + 2;
      });
    }, 50);

    let signUpsInterval = setInterval(() => {
      setSignUps((prev) => {
        if (prev >= 0) {
          clearInterval(signUpsInterval);
          return 0;
        }
        return prev;
      });
    }, 100);

    return () => {
      clearInterval(resumesInterval);
      clearInterval(templatesInterval);
      clearInterval(signUpsInterval);
    };
  }, []);

  return (
    <section className="bg-linear-to-b from-white to-gray-200">
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 text-center">
        <span
          className="
        inline-flex
        rounded-full
        border border-indigo-200
        bg-indigo-50
        px-4 py-1
        text-xs sm:text-sm
        font-medium
        text-indigo-700
      "
        >
          Free Resume Builder
        </span>

        <h1
          className="
        mt-6
        text-3xl
        sm:text-4xl
        lg:text-5xl
        font-bold
        tracking-tight
        text-slate-900
      "
        >
          Create a Professional Resume
        </h1>

        <p
          className="
        mx-auto
        mt-4
        max-w-2xl
        text-sm
        sm:text-base
        lg:text-lg
        text-slate-600
      "
        >
          Build ATS-friendly resumes in minutes. Choose a template, customize
          your details, and download as PDF — completely free.
        </p>

        <div className="mt-8">
          <Link
            to="/userdetails"
            className="
          inline-flex
          items-center
          justify-center
          rounded-xl
          bg-red-600
          px-6 md:px-8
          py-3
          font-medium
          text-white
          shadow-sm
          transition
          hover:bg-red-500
        "
          >
            Start Building Resume
          </Link>
        </div>

        <div className="mt-3">
          <Link
            className="text-sm text-slate-800 bg-white px-2 underline"
            to="/sample-resumes"
          >
            View Resume Samples
          </Link>
        </div>

        <div
          className="
        mt-6
        flex
        flex-wrap
        justify-center
        gap-3 sm:gap-6
        text-sm
        text-gray-600 font-semibold
      "
        >
          <span className="bg-pink-200 rounded">✓ ATS Friendly</span>
          <span className="bg-pink-200 rounded">✓ Free PDF Export</span>
          <span className="bg-pink-200 rounded">✓ No Sign Up Required</span>
        </div>

        {/* Stats */}
        <div
          className="
        mt-6
        grid
        grid-cols-3
        gap-4
        sm:gap-8
        max-w-xl
        mx-auto
      "
        >
          <div
            className="
          rounded-xl
          bg-white
          p-4
          shadow-sm
        "
          >
            <h3 className="text-xl md:text-2xl font-bold">
              {resumes.toLocaleString()}+
            </h3>
            <p className="text-xs md:text-sm text-slate-600">Resumes Built</p>
          </div>

          <div
            className="
          rounded-xl
          bg-white
          p-4
          shadow-sm
        "
          >
            <h3 className="text-xl md:text-2xl font-bold">{templates}+</h3>
            <p className="text-xs md:text-sm text-slate-600">Templates</p>
          </div>

          <div
            className="
          rounded-xl
          bg-white
          p-4
          shadow-sm
        "
          >
            <h3 className="text-xl md:text-2xl font-bold">{signUps}</h3>
            <p className="text-xs md:text-sm text-slate-600">
              Sign Ups Required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
