export default function PrecisionATSResume({ values }) {
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
    <div className="bg-white mt-10 text-black max-w-4xl mx-auto p-8 text-sm">
      {/* HEADER */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>

        <div className="mt-2 text-slate-700">
          {[personalInfo.email, personalInfo.phone].filter(Boolean).join(" | ")}
        </div>

        <div className="text-slate-700">{personalInfo.address}</div>

        <div className="text-blue-500">
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          )}

          {personalInfo.github && (
            <>
              {personalInfo.linkedin && " | "}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </>
          )}
        </div>
      </header>

      {/* SUMMARY */}
      {careerObjective && (
        <ATSSection title="Professional Summary">
          <p>{careerObjective}</p>
        </ATSSection>
      )}

      {/* SKILLS */}
      {validSkillGroups.length > 0 && (
        <ATSSection title="Skills ">
          <div className="space-y-2">
            {validSkillGroups.map((group, index) => (
              <div key={index}>
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
              <div key={index}>
                <div className="flex justify-between">
                  <strong>{exp.position}</strong>

                  <span>
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>

                <div className="text-slate-700">{exp.company}</div>

                {exp.description && (
                  <ul className="mt-2 list-disc ml-5">
                    <li>{exp.description}</li>
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
              <div key={index}>
                {/* Project Name */}
                <strong className="block text-base">{project.name}</strong>

                {/* Tech Stack + Link */}
                {project.techStack && (
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mt-1 text-slate-700">
                    {/* Tech Stack */}
                    <div className="flex-1 wrap-break-words">
                      <span className="font-medium">Tech Stack:</span>{" "}
                      {project.techStack}
                    </div>

                    {/* Project Link */}
                    {project.link && (
                      <div className="sm:shrink-0">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.link}
                          className="text-blue-600 underline break-all"
                        >
                          Project Link
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {/* Description */}
                <div className="mt-1 text-sm leading-relaxed">
                  {project.description}
                </div>
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
              <div key={index}>
                <strong>{edu.course}</strong>

                <div>{edu.institute}</div>

                <div className="text-slate-700">
                  {edu.passingYear}

                  {edu.percentage && ` | ${edu.percentage}`}
                </div>
              </div>
            ))}
          </div>
        </ATSSection>
      )}

      {/* PERSONAL DETAILS */}
      <ATSSection title="Personal Information">
        <div className="grid grid-cols-2 gap-y-2">
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

/* ATS Section */
function ATSSection({ title, children }) {
  return (
    <section className="border border-slate-300 rounded-md p-4 mb-4">
      <h2 className="font-bold uppercase text-sm mb-3">{title}</h2>

      {children}
    </section>
  );
}

/* Detail */
function Detail({ label, value }) {
  return (
    <div>
      <strong>{label}:</strong> {value}
    </div>
  );
}
