export default function ProfessionalResume({ values = {} }) {
  const {
    personalInfo = {},
    careerObjective,
    education = [],
    skillGroups = [],
    experience = [],
    projects = [],
  } = values;

  const hasAdditionalInfo =
    personalInfo.dob ||
    personalInfo.maritalStatus ||
    personalInfo.nationality ||
    personalInfo.languages;

  // const validSkillGroups = skillGroups.filter(
  //   (group) =>
  //     group.category?.trim() || group.skills?.some((skill) => skill?.trim()),
  // );

  return (
    <div className="w-full max-w-4xl mx-auto bg-white text-slate-900 px-4 sm:px-8 md:px-12 py-6 sm:py-10 my-6 sm:my-10 font-sans overflow-x-hidden">
      {/* HEADER */}
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight [overflow-wrap:anywhere] w-full">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>

        <div className="mt-2 text-sm text-slate-600 flex flex-wrap gap-x-3 gap-y-1 break-words">
          {personalInfo.email && (
            <span className="break-all">{personalInfo.email}</span>
          )}
          {personalInfo.phone && (
            <span className="break-all">{personalInfo.phone}</span>
          )}
        </div>

        <div className="text-sm text-slate-600 break-words">
          {personalInfo.address && personalInfo.address}
        </div>

        <div className="mt-1 text-sm text-slate-500 flex flex-wrap gap-x-3">
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin}> Linkedin </a>
          )}
          {personalInfo.github && <a href={personalInfo.github}> Github </a>}
        </div>
      </header>

      {/* SUMMARY */}
      {careerObjective && (
        <section className="mt-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Career Objective
          </h2>

          <p className=" text-sm text-slate-700 leading-relaxed">
            {careerObjective}
          </p>
        </section>
      )}

      {/* SKILLS */}
      {skillGroups.length > 0 && (
        <section className="mt-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Skills
          </h2>

          <div className=" space-y-2 text-sm text-slate-700">
            {skillGroups.map((group, i) => (
              <div key={i} className="break-words leading-relaxed">
                <p className="font-semibold text-slate-900">{group.category}</p>
                <p> {group.skills?.filter(Boolean).join(", ")} </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EXPERIENCE */}
      {experience?.length > 0 && (
        <section className="mt-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Experience
          </h2>

          <div className=" space-y-6">
            {experience.map((exp, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-4 min-w-0">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold break-words">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-slate-600 break-words">
                      {exp.company}
                      {exp.location && ` • ${exp.location}`}
                    </p>
                  </div>
                  <div className="text-xs text-slate-500 sm:whitespace-nowrap break-words shrink-0">
                    {exp.startDate} — {exp.endDate || "Present"}
                  </div>
                </div>

                {exp.description && (
                  <div className="mt-2 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap break-words flex-1 min-w-0">
                    {exp.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {projects?.length > 0 && (
        <section className="mt-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Projects
          </h2>

          <div className=" space-y-5">
            {projects.map((p, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4 min-w-0">
                  <h3 className="text-base font-semibold break-words flex-1">
                    {p.name}
                  </h3>
                  {p.link && (
                    <a
                      href={p.link}
                      className="text-xs text-blue-700 break-all sm:whitespace-nowrap"
                    >
                      Project Link
                    </a>
                  )}
                </div>

                {p.techStack && (
                  <p className="text-sm text-slate-600 mt-1 break-words">
                    {p.techStack}
                  </p>
                )}

                {p.description && (
                  <p className="text-sm text-slate-700 mt-2 leading-relaxed break-words whitespace-pre-wrap flex-1 min-w-0">
                    {p.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {education?.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Education
          </h2>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 min-w-0"
              >
                {/* LEFT */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold break-words">{edu.course}</p>
                  <p className="text-sm text-slate-600 break-words">
                    {edu.institute}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="text-sm text-slate-500 sm:text-right sm:shrink-0">
                  <p>{edu.passingYear}</p>
                  {edu.percentage && (
                    <p className="sm:block inline text-slate-400">
                      {edu.percentage}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= ADDITIONAL INFO ================= */}
      {hasAdditionalInfo && (
        <section className="mt-8">
          <h2 className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Personal Information
          </h2>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-y-2 gap-x-4 text-sm">
            {personalInfo.dob && (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Date of Birth
                </p>
                <p className="text-slate-700">{personalInfo.dob}</p>
              </div>
            )}
            {personalInfo.nationality && (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Nationality
                </p>
                <p className="text-slate-700">{personalInfo.nationality}</p>
              </div>
            )}
            {personalInfo.maritalStatus && (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Marital Status
                </p>
                <p className="text-slate-700">{personalInfo.maritalStatus}</p>
              </div>
            )}
            {personalInfo.languages && (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Languages
                </p>
                <p className="text-slate-700">{personalInfo.languages}</p>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
