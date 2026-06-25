const RESUME_KEY = "resumeData";
const RESUME_EXPIRY_MS = 48 * 60 * 60 * 1000;

export const resumeStorage = {
  save(data) {
    if (!data) return;

    const payload = {
      data,
      expiresAt: Date.now() + RESUME_EXPIRY_MS,
    };

    localStorage.setItem(RESUME_KEY, JSON.stringify(payload));
  },

  get() {
    const raw = localStorage.getItem(RESUME_KEY);
    if (!raw || raw === "undefined" || raw === "null") return null;
    try {
      const parsed = JSON.parse(raw);
      if (!parsed.expiresAt) {
        localStorage.removeItem(RESUME_KEY);
        return null;
      }
      if (Date.now() > parsed.expiresAt) {
        localStorage.removeItem(RESUME_EXPIRY_MS);
        return null;
      }
      return parsed.data;
    } catch (err) {
      console.error("Invalid resumeData in LocalStorage", raw);
      localStorage.removeItem(RESUME_KEY);
      return null;
    }
  },

  clear() {
    localStorage.removeItem(RESUME_KEY);
  },
};
