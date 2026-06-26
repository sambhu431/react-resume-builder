export default function SimpleATSResume({ values = {} }) {
  const {
    personalInfo = {},
    careerObjective,
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
    <div className="w-full max-w-4xl mx-auto mt-6 sm:mt-10 bg-white px-4 sm:px-6 md:px-8 py-6 text-black text-sm leading-relaxed overflow-hidden">
      {/* HEADER */}
      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold break-words w-full max-w-full">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>

        <div className="mt-2 text-sm text-gray-700 break-words">
          {[personalInfo.email, personalInfo.phone].filter(Boolean).join(" | ")}
        </div>

        <div className="break-words">{personalInfo.address}</div>

        {(personalInfo.linkedin || personalInfo.github) && (
          <div className="flex flex-col sm:flex-row sm:flex-wrap  mt-1">
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                className="underline mr-4"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            )}

            {personalInfo.github && (
              <a
                href={personalInfo.github}
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </header>

      {/* SUMMARY */}
      {careerObjective && (
        <Section title="Career Objective">
          <p className="text-sm break-words">{careerObjective}</p>
        </Section>
      )}

      {/* SKILLS */}
      {skillGroups.length > 0 && (
        <Section title="Skills">
          {skillGroups.map((group, index) => (
            <p key={index} className="break-words">
              <strong>{group.category} : </strong>{" "}
              {group.skills?.filter(Boolean).join(", ")}
            </p>
          ))}
        </Section>
      )}

      {/* EXPERIENCE */}
      {experience.length > 0 && (
        <Section title="Experience">
          {experience.map((exp, index) => (
            <div key={index} className="break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <strong className="text-base break-words">{exp.role}</strong>

                <span>
                  {exp.startDate}
                  {exp.endDate && ` - ${exp.endDate}`}
                </span>
              </div>

              <div className="text-sm text-gray-700 break-words">
                {exp.company}
                {exp.location && ` | ${exp.location}`}
              </div>

              {exp.description && (
                <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                  {exp.description
                    .split("\n")
                    .filter(Boolean)
                    .map((line, i) => (
                      <li key={i} className="break-words">
                        {line}
                      </li>
                    ))}
                </ul>
              )}
            </div>
          ))}
        </Section>
      )}

      {/* PROJECTS */}
      {projects.length > 0 && (
        <Section title="Projects">
          <div className="space-y-5">
            {projects.map((project, index) => (
              <div key={index} className="break-inside-avoid">
                <strong className="text-base break-words">
                  {project.name}
                </strong>

                {project.techStack && (
                  <div className="text-sm text-gray-700 break-words mt-1">
                    <strong>Tech Stack:</strong> {project.techStack}
                  </div>
                )}

                {project.description && (
                  <div className="text-sm mt-1 break-words">
                    {project.description}
                  </div>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 underline text-sm break-all inline-block mt-1"
                  >
                    Project Link
                  </a>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* EDUCATION */}
      {education.length > 0 && (
        <Section title="Education">
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="break-inside-avoid">
                <strong className="break-words">{edu.course}</strong>

                <div className="text-sm text-gray-700 break-words">
                  {edu.institute}
                </div>

                <div className="text-sm text-gray-600">
                  {edu.passingYear}
                  {edu.percentage && ` | ${edu.percentage}`}
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* PERSONAL INFORMATION */}
      {(personalInfo.dob ||
        personalInfo.nationality ||
        personalInfo.maritalStatus ||
        personalInfo.languages) && (
        <Section title="Additional Information">
          {personalInfo.dob && (
            <p className="break-words">
              <strong>Date of Birth:</strong> {personalInfo.dob}
            </p>
          )}

          {personalInfo.nationality && (
            <p className="break-words">
              <strong>Nationality:</strong> {personalInfo.nationality}
            </p>
          )}

          {personalInfo.maritalStatus && (
            <p className="break-words">
              <strong>Marital Status:</strong> {personalInfo.maritalStatus}
            </p>
          )}

          {personalInfo.languages && (
            <p className="break-words">
              <strong>Languages:</strong> {personalInfo.languages}
            </p>
          )}
        </Section>
      )}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-6">
      <h2 className="border-b border-black pb-1 mb-3 text-base font-bold">
        {title}
      </h2>

      {children}
    </section>
  );
}
