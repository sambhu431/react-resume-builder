
const RESUME_KEY = "resumeData";
const SELECTED_KEY = "selectedTemplate";


export const resumeStorage = {
  save(data) {
    if(!data) return;
    localStorage.setItem(RESUME_KEY, JSON.stringify(data));
  },

  get() {
    const data = localStorage.getItem(RESUME_KEY);
    if(!data || data === "undefined" || data === "null") return null;
    try{
      return JSON.parse(data);
    } catch (err) {
      console.error("Invalid resumeData in LocalStorage",data);
      return null;
    }
  },

  clear() {
    localStorage.removeItem(RESUME_KEY);
  },
};



export const selectedStorage = {
  save(data) {
    if (!data) return;
    localStorage.setItem("selectedTemplate", JSON.stringify(data));
  },

  get() {
    const data = localStorage.getItem("selectedTemplate");

    if (!data || data === "undefined" || data === "null") return null;

    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  },

  clear() {
    localStorage.removeItem("selectedTemplate");
  },
};
