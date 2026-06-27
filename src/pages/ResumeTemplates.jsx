import {Link} from "react-router-dom";
import { templates } from "../data/templates";
import Card from "../components/landingpage/Card";

const ResumeTemplates = () => {
  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-2xl font-bold mb-2">
        Choose Your Template
      </h1>
          
          <div
        className="mb-6"
        >
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

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {templates.map((t) => {
          const PreviewComponent = t.cardpreview;

          return (
            <Card
              key={t.id}
              templateId={t.id}
              PreviewComponent={PreviewComponent}
              name={t.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResumeTemplates;
