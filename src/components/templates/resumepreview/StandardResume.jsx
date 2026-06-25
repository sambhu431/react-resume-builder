import React from "react";

export default function StandardResume({ values = {} }) {
  const {
    personalInfo = {},
    careerObjective = "",
    education = [],
    skillGroups = [],
    experience = [],
    projects = [],
  } = values;

  const validSkillGroups = skillGroups.filter(
    (group) =>
      group.category?.trim() || group.skills?.some((skill) => skill?.trim()),
  );

  return (
    <div className="bg-[#f4f6f8] py-6 sm:py-10 px-4">
      <div
        className="
    w-full
    min-w-0
    max-w-4xl
    mx-auto
    bg-white
    shadow-xl
    rounded-lg
    overflow-hidden
    text-xs
    sm:text-sm
    leading-relaxed
  "
      >
        {/* HEADER (ALL PERSONAL INFO LEFT STACKED) */}
        <div className="px-4 sm:px-8 md:px-10 py-4">
          <div
            className="
    text-xl
    sm:text-2xl
    md:text-3xl
    uppercase
    tracking-tight
    w-full
    min-w-0
    [overflow-wrap:anywhere]
  "
          >
            <span className="font-medium">{personalInfo.firstName} </span>
            <span>{personalInfo.lastName}</span>
          </div>

          <div className="mt-4 space-y-1 text-sm text-slate-700 break-words">
            {personalInfo.email && (
              <p className="break-all">{personalInfo.email}</p>
            )}
            {personalInfo.phone && (
              <p className="break-all">{personalInfo.phone}</p>
            )}
            {personalInfo.address && (
              <p className="[overflow-wrap:anywhere]">
                {" "}
                {personalInfo.address}
              </p>
            )}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-2 text-xs">
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all "
                >
                  LinkedIn
                </a>
              )}
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all "
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="px-4 sm:px-6 md:px-10 py-2 space-y-6">
          {/* PROFILE */}
          {careerObjective && (
            <section>
              <SectionTitle title="Career Objective" />

              <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed [overflow-wrap:anywhere] whitespace-pre-line">
                {careerObjective}
              </p>
            </section>
          )}

          {/* EXPERIENCE */}
          {experience?.length > 0 && (
            <section>
              <SectionTitle title="Experience" />

              <div className="mt-4 space-y-6">
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-slate-900 pl-4 min-w-0 sm:justify-between gap-2"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900  [overflow-wrap:anywhere]">
                        {exp.role || exp.position}
                      </p>
                      <p className="font-semibold text-slate-800 break-words">
                        {exp.company}
                      </p>
                      <p className="text-xs text-slate-500 whitespace-nowrap">
                        {exp.startDate} - {exp.endDate}
                      </p>
                      {exp.location && (
                        <p className="text-xs text-slate-400 break-words">
                          {exp.location}
                        </p>
                      )}
                    </div>
                    {exp.description && (
                      <p
                        className="
    text-sm
    text-slate-600
    mt-2
    whitespace-pre-wrap
    flex-1
    min-w-0
    [overflow-wrap:anywhere]
  "
                      >
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* EDUCATION */}
          {education?.length > 0 && (
            <section>
              <SectionTitle title="Education" />

              <div className="mt-4 space-y-4">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-slate-900 pl-4 min-w-0 flex flex-col sm:flex-row sm:justify-between gap-2"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 break-words">
                        {edu.course}
                      </p>
                      <p className="font-semibold text-slate-700 break-words">
                        {edu.institute}
                      </p>
                    </div>
                    <div
                      className="
    text-xs
    text-slate-500
    font-semibold
    shrink-0
    sm:whitespace-nowrap
  "
                    >
                      {edu.passingYear}
                      {edu.percentage ? ` • ${edu.percentage}` : ""}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SKILLS */}
          {validSkillGroups?.length > 0 && (
            <section>
              <SectionTitle title="Skills" />

              <div className="mt-3 space-y-2 min-w-0">
                {validSkillGroups.map((group, i) => (
                  <div key={i}>
                    <p className="font-bold text-slate-800 [overflow-wrap:anywhere]">
                      {group.category}
                    </p>

                    <p
                      className="
    text-sm
    text-slate-600
    [overflow-wrap:anywhere]
  "
                    >
                      {group.skills?.filter(Boolean).join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PROJECTS */}
          {projects?.length > 0 && (
            <section>
              <SectionTitle title="Projects" />

              <div className="mt-4 space-y-5">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-slate-900 pl-4 min-w-0 flex flex-col sm:flex-row sm:justify-between gap-2"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 break-words">
                        {project.name}
                      </p>
                      {project.techStack && (
                        <p className="text-xs text-slate-500 break-words">
                          {project.techStack}
                        </p>
                      )}
                      <p
                        className="
    text-sm
    text-slate-600
    mt-1
    whitespace-pre-wrap
    flex-1
    min-w-0
    [overflow-wrap:anywhere]
  "
                      >
                        {project.description}
                      </p>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
    text-xs
    text-blue-600
    mt-1
    inline-block
    break-all
    shrink-0
  "
                      >
                        View Project
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <SectionTitle title="Personal Information" />

            <div className="mt-2 mb-10 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
              {personalInfo.dob && (
                <span className="whitespace-nowrap">
                  <strong>DOB:</strong> {personalInfo.dob}
                </span>
              )}

              {personalInfo.maritalStatus && (
                <span className="whitespace-nowrap">
                  <strong>Status:</strong> {personalInfo.maritalStatus}
                </span>
              )}

              {personalInfo.nationality && (
                <span className="whitespace-nowrap">
                  <strong>Nationality:</strong> {personalInfo.nationality}
                </span>
              )}

              {personalInfo.languages && (
                <span className="whitespace-nowrap">
                  <strong>Languages:</strong> {personalInfo.languages}
                </span>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

/* SECTION HEADER (GRAY BAR + UPPERCASE) */
function SectionTitle({ title }) {
  return (
    <div className="bg-gray-200 px-2 sm:px-3 py-1 inline-block max-w-full">
      <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-800">
        {title}
      </h2>
    </div>
  );
}
