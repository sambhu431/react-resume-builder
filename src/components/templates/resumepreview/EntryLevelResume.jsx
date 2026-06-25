import React from "react";

export default function EntryLevelResume({ values = {} }) {
  const {
    personalInfo = {},
    careerObjective = "",
    education = [],
    skillGroups = [],
    experience = [],
    projects = [],
  } = values || {};

  const validSkillGroups = skillGroups.filter(
    (group) =>
      group.category?.trim() ||
      group.skills?.some((skill) => skill?.trim())
  );

  return (
    <div className="w-full overflow-x-auto">
  <div className="w-full max-w-4xl mx-auto bg-white text-slate-800 px-3 sm:px-6 md:px-10 py-5 sm:py-8 font-sans text-xs sm:text-sm min-w-[720px]">

      {/* HEADER */}
      <header className="text-center border-b pb-6 space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 break-words">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>

        <div className="text-sm text-slate-600 mt-2 space-y-1 break-words">
          {personalInfo.email && <p className="break-all">{personalInfo.email}</p>}
          {personalInfo.phone && <p className="break-all">{personalInfo.phone}</p>}
          {personalInfo.address && <p className="[overflow-wrap:anywhere]">  {personalInfo.address}</p>}
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm mt-3">
          {personalInfo.linkedin && (
            <a
              className="text-blue-600 underline break-all"
              href={personalInfo.linkedin}
            >
              LinkedIn
            </a>
          )}
          {personalInfo.github && (
            <a
              className="text-blue-600 underline break-all"
              href={personalInfo.github}
            >
              GitHub
            </a>
          )}
        </div>
      </header>

      {/* CAREER OBJECTIVE */}
      {careerObjective && (
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-semibold border-b pb-1 mb-2">
            Career Objective
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed break-words">
            {careerObjective}
          </p>
        </section>
      )}

      {/* 🔥 MAIN 2-COLUMN GRID (MOBILE + DESKTOP SAFE) */}
      <div className="flex w-full gap-3 sm:gap-4 md:gap-6 min-w-[720px]">

        {/* LEFT SIDEBAR */}
        <aside className="w-[32%] space-y-4 text-[11px] sm:text-xs leading-snug shrink-0">

          {/* SKILLS */}
          {validSkillGroups.length > 0 && (
            <section>
              <h2 className="text-sm sm:text-base font-semibold border-b pb-1 mb-2">
                Skills
              </h2>

              {validSkillGroups.map((group, i) => (
                <div key={i} className="mb-3 min-w-0">
                  <p className="font-medium text-slate-700 break-words">
                    {group.category}
                  </p>
                  <p className="text-slate-600 break-words">
                    {group.skills?.filter(Boolean).join(", ")}
                  </p>
                </div>
              ))}
            </section>
          )}

          {/* EDUCATION */}
          {education?.length > 0 && (
            <section>
              <h2 className="font-semibold border-b pb-1 mb-2">
                Education
              </h2>

              {education.map((edu, i) => (
                <div key={i} className="mb-3 min-w-0">
                  <p className="font-medium break-words">
                    {edu.course}
                  </p>
                  <p className="text-slate-600 break-words">
                    {edu.institute}
                  </p>
                  <p className="text-slate-500 text-xs">
                    {edu.passingYear} {edu.percentage && `• ${edu.percentage}`}
                  </p>
                </div>
              ))}
            </section>
          )}

          {/* PERSONAL INFO */}
          {(personalInfo.languages ||
            personalInfo.nationality ||
            personalInfo.maritalStatus) && (
            <section>
              <h2 className="font-semibold border-b pb-1 mb-2">
                Personal
              </h2>

              <div className="text-xs text-slate-600 space-y-1 break-words">
                {personalInfo.dob && <p>DOB: {personalInfo.dob}</p>}
                {personalInfo.languages && <p>Languages: {personalInfo.languages}</p>}
                {personalInfo.nationality && <p>Nationality: {personalInfo.nationality}</p>}
                {personalInfo.maritalStatus && <p>Status: {personalInfo.maritalStatus}</p>}
              </div>
            </section>
          )}
        </aside>

        {/* MAIN CONTENT */}
        <main className="w-[68%] space-y-4 sm:space-y-5 min-w-0 text-xs sm:text-sm">

          {/* PROJECTS */}
          {projects?.length > 0 && (
            <section>
              <h2 className="text-base sm:text-lg font-semibold border-b pb-1 mb-3">
                Projects
              </h2>

              {projects.map((project, i) => (
                <div key={i} className="mb-2 sm:mb-3 min-w-0">

                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between min-w-0">
                    <h3 className="font-semibold text-slate-800 break-words">
                      {project.name}
                    </h3>

                    {project.link && (
                      <a
                        href={project.link}
                        className="text-blue-600 text-xs underline break-all"
                      >
                        Link
                      </a>
                    )}
                  </div>

                  {project.techStack && (
                    <p className="text-xs text-slate-500 break-words">
                      {project.techStack}
                    </p>
                  )}

                  {project.description && (
                    <p className="text-sm text-slate-700 mt-1 leading-relaxed break-words">
                      {project.description}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* EXPERIENCE */}
          {experience?.length > 0 && (
            <section>
              <h2 className="text-base sm:text-lg font-semibold border-b pb-1 mb-3">
                Experience
              </h2>

              {experience.map((exp, i) => (
                <div key={i} className="mb-2 sm:mb-3 min-w-0">

                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between min-w-0">
                    <p className="font-semibold break-words">
                      {exp.role} {exp.company && `— ${exp.company}`}
                    </p>

                    <p className="text-xs text-slate-500 whitespace-nowrap">
                      {exp.startDate} - {exp.endDate || "Present"}
                    </p>
                  </div>

                  {exp.description && (
                    <p className="text-sm text-slate-600 mt-1 break-words">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}

        </main>
      </div>
      </div>
    </div>
  );
}