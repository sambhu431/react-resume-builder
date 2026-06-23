import { templates } from "../../data/templates";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function TemplateShowcase() {
  const featuredTemplates = templates.filter((template) => template.featured);
  return (
    <section className="bg-linear-to-b from-white-500 to-gray-200 py-10 ">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-xl md:text-2xl xl:text-3xl font-bold text-slate-900">
          Choose a Template
        </h2>

        <p className="mt-3 text-center text-slate-500">
          Start with a professionally designed layout.
        </p>

        <div
          className="mt-12 grid grid-cols-1
        md:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-24 justify-items-center"
        >
          {featuredTemplates.map((template) => {
            const PreviewComponent = template.cardpreview;
            return (
              <div
                key={template.id}
                className="w-64 sm:w-80 md:max-w-64 lg:max-w-96"
              >
                <Card
                  PreviewComponent={PreviewComponent}
                  name={template.name}
                  templateId={template.id}
                />
              </div>
            );
          })}

          <div className="flex justify-center mt-4 w-full col-span-full">
            <Link to="/preview">
              <button 
              className="w-40 font-semibold bg-green-300 
              cursor-pointer underline">
                View All Templates
              </button>
            </Link>
          </div>


        </div>

        
      </div>
    </section>
  );
}
