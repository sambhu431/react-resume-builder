export default function ClassicResume({ values = {} }) {
  const {
    personalInfo = {},
    careerObjective = "",
    education = [],
    skillGroups = [],
    experience = [],
    projects = [],
  } = values;

  // const validSkillGroups = skillGroups.filter(
  //   (group) =>
  //     group.category?.trim() || group.skills?.some((skill) => skill?.trim()),
  // );

  return (
    <div className="w-full bg-slate-100 py-3 sm:py-6 md:py-10">
      {/* PAPER */}
      <div className="w-full max-w-[210mm] mx-auto bg-white shadow-lg print:shadow-none">
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-10 text-slate-900 wrap-break-word">
          {/* HEADER */}
          <header className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide wrap-break-word">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>

            <div className="mt-3 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-1 sm:gap-3 text-xs sm:text-sm text-slate-600 break-all">
              {personalInfo.email && <span>{personalInfo.email}</span>} |
              {personalInfo.phone && <span>{personalInfo.phone}</span>}
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-1 sm:gap-3 text-xs sm:text-sm text-slate-600 break-all">
              {personalInfo.address && <span>{personalInfo.address}</span>}
            </div>

            {(personalInfo.linkedin || personalInfo.github) && (
              <div className="mt-2 flex flex-wrap justify-center gap-3 text-sm">
                {personalInfo.linkedin && (
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline break-all"
                  >
                    LinkedIn
                  </a>
                )}
                |
                {personalInfo.github && (
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline break-all"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </header>

          {/* CAREER OBJECTIVE */}
          {careerObjective?.trim() && (
            <section>
              <SectionHeading title="Career Objective" />

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-wrap wrap-break-word">
                {careerObjective}
              </p>
            </section>
          )}

          {/* EDUCATION */}
          {education.length > 0 && (
            <section>
              <SectionHeading title="Education" />

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    {edu.course && (
                      <h3 className="font-semibold text-sm sm:text-base wrap-break-word">
                        {edu.course}
                      </h3>
                    )}

                    {edu.institute && (
                      <p className="text-sm text-slate-700 wrap-break-word">
                        {edu.institute}
                      </p>
                    )}

                    {(edu.passingYear || edu.percentage) && (
                      <p className="text-xs sm:text-sm text-slate-500">
                        {edu.passingYear}
                        {edu.passingYear && edu.percentage && " | "}
                        {edu.percentage}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SKILLS */}
          {skillGroups.length > 0 && (
            <section>
              <SectionHeading title="Skills" />

              <div className="space-y-3">
                {skillGroups.map((group, index) => {
                  const skills = group.skills?.filter((s) => s?.trim()) || [];

                  return (
                    <div
                      key={index}
                      className="text-sm sm:text-base wrap-break-word"
                    >
                      {group.category?.trim() ? (
                        <>
                          <span className="font-semibold">
                            {group.category}
                          </span>

                          {skills.length > 0 && (
                            <>
                              <span>: </span>
                              <span>{skills.join(", ")}</span>
                            </>
                          )}
                        </>
                      ) : (
                        <span>{skills.join(", ")}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* EXPERIENCE */}
          {experience.length > 0 && (
            <section>
              <SectionHeading title="Work Experience" />

              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div className="min-w-0">
                        {exp.role && (
                          <h3 className="font-semibold text-sm sm:text-base wrap-break-word">
                            {exp.role}
                          </h3>
                        )}

                        {exp.company && (
                          <p className="text-sm text-slate-700 wrap-break-word">
                            {exp.company}
                          </p>
                        )}

                        {exp.location && (
                          <p className="text-xs sm:text-sm text-slate-500 wrap-break-word">
                            {exp.location}
                          </p>
                        )}
                      </div>

                      {(exp.startDate || exp.endDate) && (
                        <span className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">
                          {exp.startDate}
                          {exp.startDate && exp.endDate && " - "}
                          {exp.endDate}
                        </span>
                      )}
                    </div>

                    {exp.description?.trim() && (
                      <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-wrap wrap-break-word overflow-hidden">
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PROJECTS */}
          {projects.length > 0 && (
            <section>
              <SectionHeading title="Projects" />

              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index}>
                    {project.name && (
                      <h3 className="font-semibold text-sm sm:text-base wrap-break-word">
                        {project.name}
                      </h3>
                    )}

                    {project.techStack && (
                      <p className="mt-1 text-xs sm:text-sm text-slate-500 wrap-break-word">
                        {project.techStack}
                      </p>
                    )}

                    {project.description && (
                      <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-wrap wrap-break-word overflow-hidden">
                        {project.description}
                      </p>
                    )}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm text-blue-600 hover:underline break-all"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PERSONAL DETAILS */}
          <section>
            <SectionHeading title="Personal Details" />

            <div className="space-y-2">
              {personalInfo.dob && (
                <Info label="Date of Birth" value={personalInfo.dob} />
              )}

              {personalInfo.nationality && (
                <Info label="Nationality" value={personalInfo.nationality} />
              )}

              {personalInfo.languages && (
                <Info label="Languages" value={personalInfo.languages} />
              )}

              {personalInfo.maritalStatus && (
                <Info
                  label="Marital Status"
                  value={personalInfo.maritalStatus}
                />
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

/* SECTION HEADING */
function SectionHeading({ title }) {
  return (
    <div className="mt-6 mb-4">
      <h2 className="text-sm sm:text-base font-bold uppercase tracking-wide">
        {title}
      </h2>

      <div className="border-b border-black mt-1" />
    </div>
  );
}

/* INFO ROW */
function Info({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-2 text-sm sm:text-base">
      <span className="font-semiboldsm:min-w-37.5">{label}:</span>

      <span className="text-slate-700 wrap-break-word">{value}</span>
    </div>
  );
}
