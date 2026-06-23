
import { templates } from "../data/templates";
import Card from "../components/landingpage/Card";

const ResumeTemplates = () => {
  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">
        Choose Your Template
    </h1>

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

