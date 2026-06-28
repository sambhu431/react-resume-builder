export function cleanResumeData(data) {
  if (Array.isArray(data)) {
    return data.map((m) => cleanResumeData(m));
  }

  if (data && typeof data === "object") {
    return Object.fromEntries(
      Object.entries(data).map(([key, values]) => [
        key,
        cleanResumeData(values),
      ]),
    );
  }

  if (typeof data === "string") {
    return data.trim();
  }

  return data;
}
