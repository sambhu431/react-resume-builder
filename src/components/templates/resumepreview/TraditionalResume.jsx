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
    <div className="bg-[#f5f6fa] py-6 sm:py-10">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-2xl font-sans px-4 sm:px-8 md:px-10 py-6 sm:py-8 overflow-x-hidden">
        {/* ================= HEADER ================= */}
        <div className="bg-gray-900 text-white px-4 sm:px-8 py-6 sm:py-8">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide uppercase leading-tight break-words w-full max-w-full">
  {personalInfo.firstName}{" "}
  <span className="font-light text-gray-300">{personalInfo.lastName}</span>
</h1>

          <div className="mt-3 text-xs text-gray-300 space-y-1 leading-relaxed break-words">
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
                    className="relative border-l-2 border-gray-200 pl-4 min-w-0"
                  >
                  <span className="absolute w-3.5 h-3.5 -left-2 top-1 bg-gray-900 rounded-full" />
  <p className="font-bold text-gray-900 break-words">{exp.role || exp.position}</p>
  <p className="font-semibold text-gray-700 break-words">{exp.company}</p>
  <p className="text-xs text-gray-500 break-words">
    {exp.startDate} - {exp.endDate} {exp.location && ` • ${exp.location}`}
  </p>
  {exp.description && (
    <p className="text-sm text-gray-700 mt-2 leading-6 break-words whitespace-pre-wrap flex-1 min-w-0">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {education.map((edu, i) => (
    <div key={i} className="min-w-0">
      <p className="font-semibold text-gray-900 text-sm break-words">{edu.course}</p>
      <p className="text-sm text-gray-600 leading-snug break-words">{edu.institute}</p>
      <p className="text-xs text-gray-500 mt-1 break-words">
        {edu.passingYear}{edu.percentage && ` • ${edu.percentage}`}
      </p>
    </div>
  ))}
              </div>
            </Section>
          )}

          {/* SKILLS */}
          {validSkillGroups.length > 0 && (
            <Section title="Skills">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {validSkillGroups.map((group, i) => (
       <div key={i} className="border-l-2 border-gray-200 pl-2 min-w-0 flex flex-col">
      <p className="text-sm font-semibold text-gray-900 mb-1 break-words">{group.category}</p>
      <div className="flex flex-wrap gap-1 min-w-0">
        {group.skills?.filter(Boolean).map((skill, idx) => (
          <span key={idx} className="text-xs bg-gray-200 px-2 py-0.5 rounded-md text-gray-800 break-words max-w-full">
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
                  <div key={i} className="border-l-2 border-gray-200 pl-4 min-w-0">
               <p className="font-bold text-gray-900 break-words">{project.name}</p>
  {project.techStack && (
    <p className="text-xs text-gray-500 break-words">{project.techStack}</p>
  )}
  <p className="text-sm text-gray-700 mt-1 leading-6 break-words whitespace-pre-wrap flex-1 min-w-0">
    {project.description}
  </p>
  {project.link && (
    <a href={project.link} className="text-xs text-blue-600 mt-1 inline-block break-all">
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
              <div className="text-xs text-gray-600 space-y-1 break-words">
               <div className="flex flex-wrap gap-4">
  {personalInfo.dob && <span>DOB: {personalInfo.dob}</span>}

  {personalInfo.maritalStatus && (
    <span>Status: {personalInfo.maritalStatus}</span>
  )}

  {personalInfo.nationality && (
    <span>Nationality: {personalInfo.nationality}</span>
  )}

  {personalInfo.languages && (
    <span>Languages: {personalInfo.languages}</span>
  )}
</div>
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
    <section className="space-y-5">
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
