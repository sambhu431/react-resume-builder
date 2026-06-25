export default function PrecisionATSResume({ values = {} }) {
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
    <div className="bg-white mt-6 sm:mt-10 text-black w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 text-sm leading-relaxed overflow-hidden">
      {/* HEADER */}
      <header className="text-center mb-5 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold break-words">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>

        <div className="mt-2 flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm text-slate-700">
          {[personalInfo.email, personalInfo.phone]
            .filter(Boolean)
            .map((item, i) => (
              <span key={i} className="break-all">
                {item}
              </span>
            ))}
        </div>

        <div className="text-sm text-slate-700 break-words">
          {personalInfo.address}
        </div>

        <div className="mt-2 flex flex-wrap justify-center gap-3 text-blue-600 text-sm">
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all underline"
            >
              LinkedIn
            </a>
          )}

          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all underline"
            >
              GitHub
            </a>
          )}
        </div>
      </header>

      {/* SUMMARY */}
      {careerObjective && (
        <ATSSection title="Professional Summary">
          <p className="break-words">{careerObjective}</p>
        </ATSSection>
      )}

      {/* SKILLS */}
      {validSkillGroups.length > 0 && (
        <ATSSection title="Skills">
          <div className="space-y-2">
            {validSkillGroups.map((group, index) => (
              <div key={index} className="break-words">
                <strong>{group.category}:</strong>{" "}
                {group.skills?.filter(Boolean).join(", ")}
              </div>
            ))}
          </div>
        </ATSSection>
      )}

      {/* EXPERIENCE */}
      {experience?.length > 0 && (
        <ATSSection title="Professional Experience">
          <div className="space-y-5">
            {experience.map((exp, index) => (
              <div key={index} className="break-inside-avoid">
                {/* TOP ROW */}
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <strong className="break-words text-base">
                    {exp.position || exp.role}
                  </strong>

                  <span className="text-sm text-slate-600 whitespace-nowrap">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>

                <div className="text-slate-700 break-words">{exp.company}</div>

                {exp.description && (
                  <ul className="mt-2 list-disc ml-5 space-y-1 text-sm">
                    <li className="break-words">{exp.description}</li>
                  </ul>
                )}
              </div>
            ))}
          </div>
        </ATSSection>
      )}

      {/* PROJECTS */}
      {projects?.length > 0 && (
        <ATSSection title="Projects">
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="break-inside-avoid">
                {/* NAME */}
                <strong className="block text-base break-words">
                  {project.name}
                </strong>

                {/* TECH + LINK */}
                {project.techStack && (
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-1 text-slate-700">
                    <div className="flex-1 break-words">
                      <span className="font-medium">Tech Stack:</span>{" "}
                      {project.techStack}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline break-all shrink-0"
                      >
                        Project Link
                      </a>
                    )}
                  </div>
                )}

                {/* DESCRIPTION */}
                {project.description && (
                  <div className="mt-1 text-sm break-words">
                    {project.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ATSSection>
      )}

      {/* EDUCATION */}
      {education?.length > 0 && (
        <ATSSection title="Education">
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="break-inside-avoid">
                <strong className="break-words">{edu.course}</strong>

                <div className="text-slate-700 break-words">
                  {edu.institute}
                </div>

                <div className="text-slate-600 text-sm">
                  {edu.passingYear}
                  {edu.percentage && ` | ${edu.percentage}`}
                </div>
              </div>
            ))}
          </div>
        </ATSSection>
      )}

      {/* PERSONAL INFO */}
      <ATSSection title="Personal Information">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm">
          {personalInfo.dob && (
            <Detail label="Date of Birth" value={personalInfo.dob} />
          )}

          {personalInfo.maritalStatus && (
            <Detail label="Marital Status" value={personalInfo.maritalStatus} />
          )}

          {personalInfo.nationality && (
            <Detail label="Nationality" value={personalInfo.nationality} />
          )}

          {personalInfo.languages && (
            <Detail label="Languages" value={personalInfo.languages} />
          )}
        </div>
      </ATSSection>
    </div>
  );
}

/* ATS SECTION */
function ATSSection({ title, children }) {
  return (
    <section className="border border-slate-300 rounded-md p-3 sm:p-4 mb-4">
      <h2 className="font-bold uppercase text-sm mb-3 break-words">{title}</h2>
      {children}
    </section>
  );
}

/* DETAIL */
function Detail({ label, value }) {
  return (
    <div className="break-words">
      <strong>{label}:</strong> {value}
    </div>
  );
}
