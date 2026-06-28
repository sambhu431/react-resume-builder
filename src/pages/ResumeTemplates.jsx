import { Link } from "react-router-dom";
import { sampleResumePics } from "../data/sampleResumePics";
import Card from "../components/landingpage/Card";
import ImageWithLoader from "../components/others/ShimmerFolder/ImageWithLoader";
import { useNavigate } from "react-router-dom";
import { resumeStorage } from "../localstorage/resumeStorage";

const ResumeTemplates = () => {
  const navigate = useNavigate();

  const handleUseTemplate = (templateId) => {
    const existingResume = resumeStorage.get();

    if (!templateId) {
      navigate("/userdetails");
      return;
    }

    if (existingResume) {
      navigate(`/resume/${templateId}`);
      return;
    }
    navigate("/userdetails");
  };

  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-2xl font-bold mb-2">Choose Your Template</h1>

      <div className="mb-6">
        <Link
          className="text-sm bg-indigo-200 px-2 underline"
          to="/sample-resumes"
        >
          View Resume Samples
        </Link>
      </div>

      <div className="mb-6 rounded border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
        <p>
          Preview resume templates are for illustration purposes only. The final
          downloadable PDF may have slight differences in spacing, pagination,
          and formatting. Thanks.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 py-5">
        {sampleResumePics.map((t) => {
          return (
            <div
              key={t.id}
              className="group overflow-hidden
              rounded-xlbg-white shadow-lg border
              border-slate-200 transition-all duration-300
              hover:-translate-y-1 hover:shadow-2xl 
              hover:border-indigo-300"
            >
              {/* IMAGE */}
              <div
                className="w-full aspect-[1241/1754] 
                bg-slate-100 overflow-hidden relative"
              >
                <ImageWithLoader
                  src={t.url[0]}
                  alt={t.title}
                  variant="shimmer"
                  size="3xl"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-wrap items-center justify-between border-t p-3">
                <h3 className="truncate text-sm font-semibold">{t.title} </h3>
                <button
                  onClick={() => handleUseTemplate(t.id)}
                  className="text-sm text-white bg-black px-3 
          py-1 rounded cursor-pointer"
                >
                  Use This
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResumeTemplates;
