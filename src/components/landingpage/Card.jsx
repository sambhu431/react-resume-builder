import { templates } from "../../data/templates";
import { useNavigate } from "react-router-dom";
import { resumeStorage } from "../../localstorage/resumeStorage";

const Card = ({ PreviewComponent, name, templateId }) => {
  const navigate = useNavigate();

  const handleUseTemplate = () => {
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

  if (!PreviewComponent) {
    return (
      <div className="p-4 border text-red-500">Missing Preview Component</div>
    );
  }

  return (
    <div
      className="
      rounded-2xl border
      border-slate-200 bg-white p-4 shadow-sm
      transition-all duration-300
      hover:-translate-y-1 hover:border-indigo-300
      hover:shadow-xl
      "
    >
      <PreviewComponent />

      <div className="mt-4 flex items-center justify-between">
        <h3 className="font-semibold text-slate-800">{name}</h3>

        <button
          onClick={handleUseTemplate}
          className="text-sm text-white bg-black px-3 
          py-1 rounded cursor-pointer"
        >
          Use This
        </button>
      </div>
    </div>
  );
};

export default Card;
