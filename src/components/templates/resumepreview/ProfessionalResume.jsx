export default function ProfessionalResume({ values }) {
  const {
    personalInfo = {},
    careerObjective,
    education = [],
    skillGroups = [],
    experience = [],
    projects = [],
  } = values;

            const validSkillGroups = skillGroups.filter(
    (group) =>
      group.category?.trim() ||
      group.skills?.some((skill) => skill?.trim())
  );



  return (
    <div className="w-4xl mx-auto bg-white text-slate-900 px-12 py-10 m-10 font-sans">

      {/* HEADER */}
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-4xl font-semibold tracking-tight">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>

        <div className="mt-2 text-sm text-slate-600 flex flex-wrap gap-x-3 gap-y-1">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span> {personalInfo.phone}</span>}
        </div>

        <div className="text-sm text-slate-600">
          {personalInfo.address && (personalInfo.address) }
        </div>

        <div className="mt-1 text-sm text-slate-500 flex flex-wrap gap-x-3">
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin}> Linkedin </a>
          )}
          {personalInfo.github && (
            <a href={personalInfo.github} > Github </a>
          )}
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
      {validSkillGroups.length > 0  && (
        <section className="mt-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Skills
          </h2>

          <div className=" space-y-2 text-sm text-slate-700">
            {validSkillGroups.map((group, i) => (
              <p key={i}>
                <span className="font-semibold text-slate-900">
                  {group.category}
                </span>{" "}
                — {group.skills?.filter(Boolean).join(" • ")}
              </p>
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
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-base font-semibold">
                      {exp.role}
                    </h3>

                    <p className="text-sm text-slate-600">
                      {exp.company}
                      {exp.location && ` • ${exp.location}`}
                    </p>
                  </div>

                  <div className="text-xs text-slate-500 whitespace-nowrap">
                    {exp.startDate} — {exp.endDate || "Present"}
                  </div>
                </div>

                {exp.description && (
                  <div className="mt-2 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
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
                <div className="flex justify-between gap-4">
                  <h3 className="text-base font-semibold">
                    {p.name}
                  </h3>

                  {p.link && (
                    <a
                    href= {p.link}
                    className="text-xs text-blue-700">
                      Project Link
                    </a>
                  )}
                </div>

                {p.techStack && (
                  <p className="text-sm text-slate-600 mt-1">
                    {p.techStack}
                  </p>
                )}

                {p.description && (
                  <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                    {p.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EDUCATION */}
      {education?.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Education
          </h2>

          <div className=" space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="flex justify-between">
                <div>
                  <p className="font-semibold">{edu.course}</p>
                  <p className="text-sm text-slate-600">
                    {edu.institute}
                  </p>
                </div>

                <div className="text-right text-sm text-slate-500">
                  <p>{edu.passingYear}</p>
                  {edu.percentage && <p>{edu.percentage}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}