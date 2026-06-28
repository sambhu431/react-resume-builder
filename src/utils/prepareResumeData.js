export function prepareResumeData(data) {
  return {
    ...data,
    education: (data.education ?? []).filter(
      (e) => e.course || e.institute || e.passingYear || e.percentage,
    ),
    skillGroups: (data.skillGroups ?? [])
      .map((group) => ({
        ...group,
        skills: (group.skills ?? []).filter(Boolean),
      }))
      .filter((group) => group.category || group.skills.length > 0),
    experience: (data.experience ?? []).filter(
      (e) =>
        e.role ||
        e.description ||
        e.company ||
        e.location ||
        e.startDate ||
        e.endDate,
    ),
    projects: (data.projects ?? []).filter(
      (p) => p.name || p.techStack || p.description || p.link,
    ),
  };
}
