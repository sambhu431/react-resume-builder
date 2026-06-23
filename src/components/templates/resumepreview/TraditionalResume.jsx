import React from "react";

export default function TraditionalResume({ values }) {
  const {
    personalInfo,
    careerObjective,
    education,
    skillGroups,
    experience,
    projects,
  } = values;

  const validSkillGroups = skillGroups.filter(
    (group) =>
      group.category?.trim() || group.skills?.some((skill) => skill?.trim()),
  );

  return (
    <div className="bg-[#f5f6fa] py-10">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-2xl font-sans">
        {/* ================= HEADER ================= */}
        <div className="bg-gray-900 text-white px-8 py-8">
          <h1 className="text-3xl font-bold tracking-wide uppercase leading-tight">
            {personalInfo.firstName}{" "}
            <span className="font-light text-gray-300">
              {personalInfo.lastName}
            </span>
          </h1>

          <div className="mt-3 text-xs text-gray-300 space-y-1 leading-relaxed">
            {personalInfo.email && <p>{personalInfo.email}</p>}

            {personalInfo.phone && <p>{personalInfo.phone}</p>}

            {personalInfo.address && <p>{personalInfo.address}</p>}

            <div className="flex flex-wrap gap-5 mt-2">
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin}>LinkedIn</a>
              )}

              {personalInfo.github && <a href={personalInfo.github}>GitHub</a>}
            </div>
          </div>
        </div>

        {/* ================= BODY ================= */}
        <div className="px-8 py-6 space-y-8">
          {/* SUMMARY */}
          {careerObjective && (
            <Section title="Profile Summary">
              <p className="text-gray-700 text-sm leading-6">
                {careerObjective}
              </p>
            </Section>
          )}

          {/* EXPERIENCE */}
          {experience?.length > 0 && (
            <Section title="Experience">
              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    className="relative border-l-2 border-gray-200 pl-4"
                  >
                    <span className="absolute w-3.5 h-3.5 -left-2 top-1 bg-gray-900 rounded-full " />
                    {/* ROLE */}
                    <p className="font-bold text-gray-900">
                      {exp.role || exp.position}
                    </p>

                    {/* COMPANY */}
                    <p className="font-semibold text-gray-700">{exp.company}</p>

                    {/* META */}
                    <p className="text-xs text-gray-500">
                      {exp.startDate} - {exp.endDate}
                      {exp.location && ` • ${exp.location}`}
                    </p>

                    {/* DESCRIPTION */}
                    {exp.description && (
                      <p className="text-sm text-gray-700 mt-2 leading-6">
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* EDUCATION */}
          {education?.length > 0 && (
            <Section title="Education">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm leading-snug">
                      {edu.course}
                    </p>

                    <p className="text-sm text-gray-600 leading-snug">
                      {edu.institute}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      {edu.passingYear}
                      {edu.percentage && ` • ${edu.percentage}`}
                    </p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* SKILLS */}
          {validSkillGroups.length > 0 && (
            <Section title="Skills">
              <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                {validSkillGroups.map((group, i) => (
                  <div key={i} className="border-l-2 border-gray-200 pl-2">
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      {group.category}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {group.skills?.filter(Boolean).map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-200 px-2 py-0.5 rounded-md text-gray-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* PROJECTS */}
          {projects?.length > 0 && (
            <Section title="Projects">
              <div className="space-y-5">
                {projects.map((project, i) => (
                  <div key={i} className="border-l-2 border-gray-200 pl-4">
                    <p className="font-bold text-gray-900">{project.name}</p>

                    {project.techStack && (
                      <p className="text-xs text-gray-500">
                        {project.techStack}
                      </p>
                    )}

                    <p className="text-sm text-gray-700 mt-1 leading-6">
                      {project.description}
                    </p>

                    {project.link && (
                      <a
                        href={project.link}
                        className="text-xs text-blue-600 mt-1 inline-block"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* ================= PERSONAL DETAILS (FOOTER STYLE) ================= */}
          {(personalInfo.dob ||
            personalInfo.maritalStatus ||
            personalInfo.nationality ||
            personalInfo.languages) && (
            <Section title="Personal Details">
              <div className="text-xs text-gray-600 space-y-1">
                <div className="flex flex-wrap gap-4">
                  {personalInfo.dob && <span>DOB: {personalInfo.dob}</span>}

                  {personalInfo.maritalStatus && (
                    <span>Status: {personalInfo.maritalStatus}</span>
                  )}

                  {personalInfo.nationality && (
                    <span>Nationality: {personalInfo.nationality}</span>
                  )}
                </div>

                {personalInfo.languages && (
                  <p>Languages: {personalInfo.languages}</p>
                )}
              </div>
            </Section>
          )}
        </div>
      </div>
    </div>
  );
}

/* ================= SECTION ================= */
function Section({ title, children }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-gray-900 rounded-full" />
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}
