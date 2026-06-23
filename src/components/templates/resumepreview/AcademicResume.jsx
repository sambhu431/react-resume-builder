export default function AcademicResume({ values }) {
  const {
    personalInfo = {},
    careerObjective = "",
    education = [],
    skillGroups = [],
    experience = [],
    projects = [],
  } = values;

  const SectionTitle = ({ children }) => (
    <h2 className="text-sm sm:text-base uppercase tracking-wider font-bold text-indigo-700 border-b border-indigo-200 pb-2 mb-4">
      {children}
    </h2>
  );

  const validSkillGroups = skillGroups.filter(
    (group) =>
      group.category?.trim() || group.skills?.some((skill) => skill?.trim()),
  );

  return (
    <div className="w-full max-w-4xl mt-10 mx-auto bg-white rounded-xl shadow-lg px-4 py-5 sm:px-6 sm:py-7 md:px-10 md:py-8 text-slate-800 overflow-hidden">
      {/* HEADER */}
      <header className="border-b border-slate-200 pb-5 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 wrap-break-word">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>

        <div className="mt-3 flex flex-wrap justify-center gap-x-2 text-xs sm:text-sm text-slate-600">
          {personalInfo.email && (
            <span className="break-all">{personalInfo.email}</span>
          )}
          {personalInfo.phone && (
            <span className="break-all">{personalInfo.phone}</span>
          )}
        </div>

        <div className="flex flex-wrap justify-center text-xs sm:text-sm text-slate-600 mt-1">
          {personalInfo.address && (
            <span className="wrap-break-word text-center">
              {personalInfo.address}
            </span>
          )}
        </div>

        <div className="mt-2 flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              className="text-indigo-600 hover:underline break-all"
            >
              LinkedIn
            </a>
          )}
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              className="text-indigo-600 hover:underline break-all"
            >
              GitHub
            </a>
          )}
        </div>
      </header>

      {/* SUMMARY */}
      {careerObjective && (
        <section className="mt-5 break-inside-avoid">
          <SectionTitle>Professional Summary</SectionTitle>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed wrap-break-word">
            {careerObjective}
          </p>
        </section>
      )}

      {/* EDUCATION */}
      {education.length > 0 && (
        <section className="mt-6">
          <SectionTitle>Education</SectionTitle>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="border-l-2 border-indigo-300 pl-4 break-inside-avoid"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <h3 className="font-semibold text-slate-900 wrap-break-word">
                    {edu.course}
                  </h3>
                  <span className="text-sm text-slate-500">
                    {edu.passingYear}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between mt-1 gap-1">
                  <p className="text-sm text-slate-600 wrap-break-word">
                    {edu.institute}
                  </p>
                  {edu.percentage && (
                    <span className="text-sm text-slate-500">
                      {edu.percentage}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SKILLS */}
      {validSkillGroups.length > 0 && (
        <section className="mt-6">
          <SectionTitle>Skills</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillGroups.map((group, index) => (
              <div key={index} className="break-inside-avoid">
                <h3 className="font-semibold text-slate-900 mb-2">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills?.filter(Boolean).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-100 rounded-md text-xs text-slate-700 wrap-break-word"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EXPERIENCE */}
      {experience.length > 0 && (
        <section className="mt-6">
          <SectionTitle>Experience</SectionTitle>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-indigo-300 pl-4 break-inside-avoid"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <h3 className="font-bold text-slate-900 wrap-break-word">
                    {exp.role} {exp.company && `— ${exp.company}`}
                  </h3>

                  <span className="text-xs text-slate-500">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>

                {exp.location && (
                  <p className="text-sm text-slate-500 wrap-break-word">
                    {exp.location}
                  </p>
                )}

                {exp.description && (
                  <div className="mt-2 text-sm text-slate-600 whitespace-pre-wrap wrap-break-word leading-relaxed overflow-hidden">
                    {exp.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {projects.length > 0 && (
        <section className="mt-6">
          <SectionTitle>Projects</SectionTitle>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <h3 className="font-bold text-slate-900 wrap-break-word">
                    {project.name}
                  </h3>

                  {project.link && (
                    <a
                      href={project.link}
                      className="text-indigo-600 text-sm hover:underline break-all"
                    >
                      View Project
                    </a>
                  )}
                </div>

                {project.techStack && (
                  <p className="text-sm text-slate-500 mt-1 wrap-break-word">
                    {project.techStack}
                  </p>
                )}

                {project.description && (
                  <div className="mt-2 text-sm text-slate-600 whitespace-pre-wrap wrap-break-word leading-relaxed overflow-hidden">
                    {project.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PERSONAL INFO */}
      {(personalInfo.dob ||
        personalInfo.maritalStatus ||
        personalInfo.nationality ||
        personalInfo.languages) && (
        <section className="mt-6 break-inside-avoid">
          <SectionTitle>Personal Information</SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
            {personalInfo.dob && (
              <p className="wrap-break-word">
                <span className="font-semibold">DOB:</span> {personalInfo.dob}
              </p>
            )}

            {personalInfo.maritalStatus && (
              <p className="wrap-break-word">
                <span className="font-semibold">Status:</span>{" "}
                {personalInfo.maritalStatus}
              </p>
            )}

            {personalInfo.nationality && (
              <p className="wrap-break-word">
                <span className="font-semibold">Nationality:</span>{" "}
                {personalInfo.nationality}
              </p>
            )}

            {personalInfo.languages && (
              <p className="wrap-break-word">
                <span className="font-semibold">Languages:</span>{" "}
                {personalInfo.languages}
              </p>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
