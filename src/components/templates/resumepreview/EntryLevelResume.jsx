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
    <div className="w-full mt-10 max-w-4xl mx-auto bg-white text-slate-800 p-10 font-sans">

      {/* HEADER */}
      <header className="text-center border-b pb-6 mb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>

        <div className="text-sm text-slate-600 mt-2 space-y-1">
          {personalInfo.email && <p>{personalInfo.email}</p>}
          {personalInfo.phone && <p>{personalInfo.phone}</p>}
          {personalInfo.address && <p>{personalInfo.address}</p>}
        </div>

        <div className="flex justify-center gap-4 text-sm mt-3">
          {personalInfo.linkedin && (
            <a className="text-blue-600 underline" href={personalInfo.linkedin}>
              LinkedIn
            </a>
          )}
          {personalInfo.github && (
            <a className="text-blue-600 underline" href={personalInfo.github}>
              GitHub
            </a>
          )}
        </div>
      </header>

      {/* CAREER OBJECTIVE */}
      {careerObjective && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1 mb-2">
            Career Objective
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            {careerObjective}
          </p>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LEFT SIDEBAR */}
        <aside className="space-y-6">

          {/* SKILLS */}
          {validSkillGroups.length > 0  && (
            <section>
              <h2 className="font-semibold border-b pb-1 mb-2">
                Skills
              </h2>

              {validSkillGroups.map((group, i) => (
                <div key={i} className="mb-3">
                  <p className="font-medium text-sm text-slate-700">
                    {group.category}
                  </p>
                  <p className="text-xs text-slate-600">
                    {group.skills?.filter(Boolean).join(" • ")}
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
                <div key={i} className="mb-3">
                  <p className="font-medium text-sm">
                    {edu.course}
                  </p>
                  <p className="text-xs text-slate-600">
                    {edu.institute}
                  </p>
                  <p className="text-xs text-slate-500">
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
                Personal Info
              </h2>

              <div className="text-xs text-slate-600 space-y-1">
                {personalInfo.dob && (
                  <p>DOB: {personalInfo.dob}</p>
                )}
                {personalInfo.languages && (
                  <p>Languages: {personalInfo.languages}</p>
                )}
                {personalInfo.nationality && (
                  <p>Nationality: {personalInfo.nationality}</p>
                )}
                {personalInfo.maritalStatus && (
                  <p>Status: {personalInfo.maritalStatus}</p>
                )}
              </div>
            </section>
          )}
        </aside>

        {/* MAIN CONTENT */}
        <main className="md:col-span-2 space-y-6">

          {/* PROJECTS (MOST IMPORTANT FOR FRESHERS) */}
          {projects?.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold border-b pb-1 mb-3">
                Projects
              </h2>

              {projects.map((project, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-slate-800">
                      {project.name}
                    </h3>

                    {project.link && (
                      <a
                        href={project.link}
                        className="text-blue-600 text-xs underline"
                      >
                        Link
                      </a>
                    )}
                  </div>

                  {project.techStack && (
                    <p className="text-xs text-slate-500">
                      {project.techStack}
                    </p>
                  )}

                  {project.description && (
                    <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* EXPERIENCE (OPTIONAL FOR ENTRY LEVEL) */}
          {experience?.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold border-b pb-1 mb-3">
                Experience
              </h2>

              {experience.map((exp, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between">
                    <p className="font-semibold">
                      {exp.role} {exp.company && `— ${exp.company}`}
                    </p>
                    <p className="text-xs text-slate-500">
                      {exp.startDate} - {exp.endDate || "Present"}
                    </p>
                  </div>

                  {exp.description && (
                    <p className="text-sm text-slate-600 mt-1">
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
  );
}