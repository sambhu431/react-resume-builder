import { templates } from "../data/templates";
import Card from "../components/landingpage/Card";
import Footer from "../components/landingpage/Footer";
import {Link} from "react-router-dom";

const TemplatesPage = () => {
  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-linear-to-b from-white-500 to-gray-200 mx-auto max-w-full  pt-16 md:pt-24 pb-14">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 rounded-full border border-slate-200 bg-white px-4 py-1 text-sm font-medium text-slate-600 shadow-sm">
            ✨ Professional Resume Collection
          </span>

          <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Create a Resume That
            <span className="block bg-linear-to-r from-blue-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Gets You Noticed
            </span>
          </h1>

          <p className="mt-3 max-w-xl text-base text-slate-600 sm:text-md md:text-lg">
            Browse professionally crafted templates designed to help you stand
            out, impress recruiters, and land more interviews.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm text-slate-800 font-semibold">
            <span className="bg-pink-200 rounded px-2 py-1">
              📄 {templates.length}+ Templates
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-pink-200 rounded px-2 py-1">
              ⚡ ATS Friendly
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-pink-200 rounded px-2 py-1">
              🎨 Modern Designs
            </span>
          </div>

          
        </div>
      </div>

      {/* Templates Section */}
      <div className="bg-linear-to-b from-white-500 to-gray-200 mt-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-14 pb-20">
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Available Templates
            </h2>
            <p className="text-slate-600">
              Choose a design and start building your resume.
            </p>
          </div>

          <div
            className="rounded-lg w-40 text-center 
          bg-white px-4 py-2 text-sm font-medium 
          text-slate-600 shadow-sm shadow-amber-200 
          border border-purple-200"
          >
            {templates.length} Templates
          </div>
        </div>

        {/* Responsive Grid */}
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,280px))] 
        justify-center gap-8 "
        >
          {templates.map((template) => {
            const PreviewComponent = template.cardpreview;

            return (
              <Card
                key={template.id}
                PreviewComponent={PreviewComponent}
                name={template.name}
                templateId={template.id}
              />
            );
          })}
        </div>
        
        <div className="flex justify-center mt-12 w-full col-span-full">
            <Link to="/userdetails">
              <button 
              className="w-40 font-semibold bg-purple-300 
              cursor-pointer underline">
                Build Your Resume
              </button>
            </Link>
        </div>

      </div>
    </section>
  );
};

export default TemplatesPage;
