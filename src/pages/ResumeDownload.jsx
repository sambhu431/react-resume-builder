import { useParams, useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { templates } from "../data/templates";
import { resumeStorage } from "../localstorage/resumeStorage";
import { cleanResumeData } from "../utils/cleanResumeData";
import { prepareResumeData } from "../utils/prepareResumeData";
import PageUnavailable from "../components/others/PageUnavailable";

const ResumeDownload = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();

  const template = templates.find((t) => t.id === templateId);

  const rawData = resumeStorage.get();

  if (!template || !rawData) {
    navigate("/");
    return null;
  }

  const data = prepareResumeData(cleanResumeData(structuredClone(rawData)));

  const Preview = template.resumepreview;
  const PDFDoc = template.pdf;

  if (!PDFDoc || !Preview) {
    return (
      <PageUnavailable
        header="Template not available"
        message="We couldn't load this template right now. Please try again later."
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      {/* HEADER */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          {/* MOBILE: stacked layout */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Title */}
            <div className="text-center sm:text-left">
              <h1
                className="text-base sm:text-lg 
        font-semibold text-gray-900 "
              >
                Resume Preview
              </h1>

              <p className="text-xs sm:text-sm text-gray-500">
                Review your resume before downloading
              </p>
            </div>

            <div className="text-center">
              <h2
                className="text-lg font-sans 
          uppercase font-medium bg-red-100"
              >
                {template.name}
              </h2>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3">
              <button
                onClick={() => navigate(-1)}
                className="text-xs sm:text-sm cursor-pointer text-gray-600 hover:text-black transition px-3 py-1.5"
              >
                Back
              </button>

              <PDFDownloadLink
                document={<PDFDoc values={data} />}
                fileName={`${data.personalInfo.firstName}-resume.pdf`}
              >
                {({ loading }) => (
                  <button className="bg-black text-white cursor-pointer text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-md hover:bg-gray-800 transition w-full sm:w-auto">
                    {loading ? "Generating..." : "Download PDF"}
                  </button>
                )}
              </PDFDownloadLink>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className=" rounded border border-amber-200 bg-amber-50 p-2 text-sm text-amber-800">
          <p>
            Preview resume templates are for illustration purposes only. The
            final downloadable PDF may have slight differences in spacing,
            pagination, and formatting. Thanks.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Preview values={data} />
        </div>
      </div>
    </div>
  );
};

export default ResumeDownload;
