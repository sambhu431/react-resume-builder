import React from "react";

export default function StandardPremiumResume({ values = {} }) {
  const {
    personalInfo = {},
    careerObjective = "",
    education = [],
    skillGroups = [],
    experience = [],
    projects = [],
  } = values;

  const validSkillGroups = (skillGroups || []).filter(
    (group) =>
      group?.category?.trim() || group?.skills?.some((skill) => skill?.trim()),
  );

  return (
    <div className="bg-slate-100 min-h-screen py-6 sm:py-10 px-3 sm:px-6 lg:px-10 flex justify-center">
      {/* PAGE CONTAINER */}
      <div
        className="
    w-full
    min-w-0
    max-w-225
    bg-white
    shadow-xl
    p-5
    sm:p-8
    lg:p-10
  "
      >
        {/* HEADER */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 [overflow-wrap:anywhere]">
            {personalInfo?.firstName} {personalInfo?.lastName}
          </h1>

          <div
            className="
    mt-3
    text-xs
    sm:text-sm
    lg:text-base
    text-slate-700
    space-y-1
    min-w-0
  "
          >
            <p className="break-all">
              <span className="font-semibold">Email:</span>{" "}
              {personalInfo?.email}
            </p>

            <p className="[overflow-wrap:anywhere]">
              <span className="font-semibold">Phone:</span>{" "}
              {personalInfo?.phone}
            </p>

            <p className="[overflow-wrap:anywhere]">
              <span className="font-semibold">Address:</span>{" "}
              {personalInfo?.address}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
              {personalInfo?.linkedin && (
                <a
                  className="font-semibold text-blue-600 break-all hover:underline"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              )}

              {personalInfo?.github && (
                <a
                  className="font-semibold text-blue-600 break-all hover:underline"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* CAREER OBJECTIVE */}
        {careerObjective && (
          <Section title="Career Objective">
            <p
              className="
    text-slate-700
    text-sm
    sm:text-base
    leading-6
    sm:leading-7
    [overflow-wrap:anywhere]
  "
            >
              {careerObjective}
            </p>
          </Section>
        )}

        {/* PROJECTS */}
        {projects?.length > 0 && (
          <Section title="Projects">
            {projects.map((project, i) => (
              <div key={i} className="mb-4 sm:mb-6">
                <p className="font-bold text-slate-900 text-sm sm:text-base [overflow-wrap:anywhere]">
                  {project.name}
                </p>

                <p className="text-xs sm:text-sm text-slate-500 [overflow-wrap:anywhere] mt-1">
                  {project.techStack}
                </p>

                <p className="text-slate-700 text-sm mt-2 leading-6 [overflow-wrap:anywhere]">
                  {project.description}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    className="text-xs sm:text-sm text-blue-600 mt-2 inline-block break-all hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </Section>
        )}

        {/* EXPERIENCE */}
        {experience?.length > 0 && (
          <Section title="Experience">
            {experience.map((exp, i) => (
              <div key={i} className="mb-5 sm:mb-7">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <p className="font-bold text-slate-900 text-sm sm:text-base [overflow-wrap:anywhere]">
                    {exp.company}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>

                <p className="font-semibold text-slate-700 mt-1 text-sm [overflow-wrap:anywhere]">
                  {exp.role}
                </p>

                {exp.location && (
                  <p className="text-xs sm:text-sm text-slate-500 [overflow-wrap:anywhere]">
                    {exp.location}
                  </p>
                )}

                <p className="text-slate-700 mt-2 text-sm leading-6 [overflow-wrap:anywhere] whitespace-pre-line">
                  {exp.description}
                </p>
              </div>
            ))}
          </Section>
        )}

        {/* SKILLS */}
        {validSkillGroups?.length > 0 && (
          <Section title="Skills">
            {validSkillGroups.map((group, i) => (
              <div
                key={i}
                className="mb-3 text-sm sm:text-base [overflow-wrap:anywhere]"
              >
                <span className="font-bold text-slate-900">
                  {group.category}:
                </span>{" "}
                <span className="text-slate-700">
                  {group.skills?.filter(Boolean).join(", ")}
                </span>
              </div>
            ))}
          </Section>
        )}

        {/* EDUCATION (RESPONSIVE TABLE + MOBILE STACK) */}
        {education?.length > 0 && (
          <Section title="Education">
            {/* Desktop / Tablet Table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full border border-slate-100 text-sm">
                <thead className="bg-slate-200">
                  <tr>
                    <th className="px-3 py-2 text-left">Course</th>
                    <th className="px-3 py-2 text-left">Institute</th>
                    <th className="px-3 py-2 text-left">Year</th>
                    <th className="px-3 py-2 text-left">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {education.map((edu, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-3 py-2 font-semibold [overflow-wrap:anywhere]">
                        {edu.course}
                      </td>
                      <td className="px-3 py-2 [overflow-wrap:anywhere]">
                        {edu.institute}
                      </td>
                      <td className="px-3 py-2">{edu.passingYear}</td>
                      <td className="px-3 py-2">{edu.percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="sm:hidden space-y-3">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="border border-slate-300 rounded-lg p-3 bg-slate-50 text-sm"
                >
                  <p>
                    <span className="font-semibold">Course:</span> {edu.course}
                  </p>
                  <p>
                    <span className="font-semibold">Institute:</span>{" "}
                    {edu.institute}
                  </p>
                  <p>
                    <span className="font-semibold">Year:</span>{" "}
                    {edu.passingYear}
                  </p>
                  <p>
                    <span className="font-semibold">Percentage:</span>{" "}
                    {edu.percentage}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* PERSONAL DETAILS */}
        <Section title="Personal Details">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm text-slate-700">
            <p>
              <span className="font-semibold">Date of Birth:</span>{" "}
              {personalInfo?.dob}
            </p>
            <p>
              <span className="font-semibold">Languages:</span>{" "}
              {personalInfo?.languages}
            </p>
            <p>
              <span className="font-semibold">Marital Status:</span>{" "}
              {personalInfo?.maritalStatus}
            </p>
            <p>
              <span className="font-semibold">Nationality:</span>{" "}
              {personalInfo?.nationality}
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}

/* SECTION */
function Section({ title, children }) {
  return (
    <div className="mb-6 sm:mb-10">
      <div className="bg-gray-200 px-2 sm:px-3 py-2 mb-4 rounded max-w-full">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-800">
          {title}
        </h2>
      </div>

      {children}
    </div>
  );
}
