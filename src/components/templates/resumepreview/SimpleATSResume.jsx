export default function SimpleATSResume({ values }) {
  const {
    personalInfo = {},
    careerObjective,
    education = [],
    skillGroups = [],
    experience = [],
    projects = [],
  } = values;

            const validSkillGroups = skillGroups.filter(
    (group) =>
      group.category?.trim() ||
      group.skills?.some((skill) => skill?.trim())
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 text-black text-sm leading-relaxed">

      {/* HEADER */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>

        <div className="mt-2">
          {[
            personalInfo.email,
            personalInfo.phone,
          ]
            .filter(Boolean)
            .join(" | ")}
        </div>

        <div>
           {personalInfo.address}
        </div>

        {(personalInfo.linkedin || personalInfo.github) && (
          <div className="mt-1">
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
          <p>{careerObjective}</p> 
        </Section> 
      )}

      {/* SKILLS */}
      {validSkillGroups.length > 0  && (
        <Section title="Skills">
          {validSkillGroups.map((group, index) => (
            <p key={index}>
              <strong>{group.category} </strong>{" "}
              {group.skills?.filter(Boolean).join(", ")}
            </p>
          ))}
        </Section>
      )}

      {/* EXPERIENCE */}
      {experience.length > 0 && (
        <Section title="Experience">
          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <strong>{exp.role}</strong>

                <span>
                  {exp.startDate}
                  {exp.endDate && ` - ${exp.endDate}`}
                </span>
              </div>

              <div>
                {exp.company}
                {exp.location && ` | ${exp.location}`}
              </div>

              {exp.description && (
                <ul className="list-disc ml-5 mt-2">
                  {exp.description
                    .split("\n")
                    .filter(Boolean)
                    .map((line, i) => (
                      <li key={i}>{line}</li>
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
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <strong>{project.name}</strong>

              {project.techStack && (
                <div>
                  <strong>Tech Stack:</strong>{" "}
                  {project.techStack}
                </div>
              )}

              {project.description && (
                <div>{project.description}</div>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 underline"
                >
                  Project Link
                </a>
              )}
            </div>
          ))}
        </Section>
      )}

      {/* EDUCATION */}
      {education.length > 0 && (
        <Section title="Education">
          {education.map((edu, index) => (
            <div key={index} className="mb-3">
              <strong>{edu.course}</strong>

              <div>{edu.institute}</div>

              <div>
                {edu.passingYear}
                {edu.percentage &&
                  ` | ${edu.percentage}`}
              </div>
            </div>
          ))}
        </Section>
      )}

      {/* PERSONAL INFORMATION */}
      {(personalInfo.dob ||
        personalInfo.nationality ||
        personalInfo.maritalStatus ||
        personalInfo.languages) && (
        <Section title="Additional Information">

          {personalInfo.dob && (
            <p>
              <strong>Date of Birth:</strong>{" "}
              {personalInfo.dob}
            </p>
          )}

          {personalInfo.nationality && (
            <p>
              <strong>Nationality:</strong>{" "}
              {personalInfo.nationality}
            </p>
          )}

          {personalInfo.maritalStatus && (
            <p>
              <strong>Marital Status:</strong>{" "}
              {personalInfo.maritalStatus}
            </p>
          )}

          {personalInfo.languages && (
            <p>
              <strong>Languages:</strong>{" "}
              {personalInfo.languages}
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