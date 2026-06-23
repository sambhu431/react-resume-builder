



function Section({ title, children }) {
return ( <section className="mt-8">

  <div className="flex items-center gap-3 mb-4">

    <div className="w-1 h-5 bg-slate-900 rounded-full" />

    <h2 className="uppercase tracking-widest text-xs font-bold text-slate-700">
      {title}
    </h2>

    <div className="flex-1 border-b border-slate-200" />

  </div>

  {children}
</section>


);
}

function Info({ label, value }) {
return ( <div> <div className="text-xs uppercase tracking-wide text-slate-500">
{label} </div>
  <div className="font-medium">
    {value}
  </div>
</div>


);
}

export default function PrimeATSResume({ values }) {
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
      group.category?.trim() ||
      group.skills?.some((skill) => skill?.trim())
  );


return ( <div className="bg-white mt-10 text-slate-900 max-w-4xl mx-auto px-10 py-8 text-sm leading-relaxed">

  {/* HEADER */}
  <header className="text-center pb-6 border-b-2 border-slate-800">

    <h1 className="text-4xl font-bold tracking-wide">
      {personalInfo.firstName} {personalInfo.lastName}
    </h1>

    <div className="mt-3 text-slate-600">
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

    <div>
       {(personalInfo.linkedin ||
      personalInfo.github) && (
      <div className="flex flex-wrap justify-center gap-2">
        <a href={personalInfo.linkedin}>
          Linkedin
        </a>
        <a href={personalInfo.github}>
          Github
        </a>
      </div>
    )}
    </div>

   
  </header>

  {/* SUMMARY */}
  {careerObjective && (
    <Section title="Career Objective">
      <p className="text-slate-700">
        {careerObjective}
      </p>
    </Section>
  )}

{/* SKILLS */}
{validSkillGroups.length > 0 && (
  <Section title="Skills">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">

      {validSkillGroups.map((group, index) => (
        <div key={index} className="min-w-0">

          <span className="font-semibold text-slate-900 text-sm">
            {group.category}
          </span>

          <div className="mt-1 text-slate-700 text-sm leading-6">
            {group.skills
              ?.filter(Boolean)
              .map((skill, idx) => (
                <p key={idx} className="truncate">
                  • {skill}
                </p>
              ))}
          </div>

        </div>
      ))}

    </div>
  </Section>
)}

  {/* EXPERIENCE */}
  {experience?.length > 0 && (
    <Section title="Professional Experience">

      <div className="space-y-5">

        {experience.map((exp, index) => (
          <div
            key={index}
            className="border-l-2 border-slate-300 pl-4"
          >
            <div className="flex justify-between items-start">

              <div>
                <h3 className="font-bold text-base">
                  {exp.role || exp.position}
                </h3>

                <div className="text-slate-600">
                  {exp.company}
                  {exp.location &&
                    ` • ${exp.location}`}
                </div>
              </div>

              <div className="text-slate-500 text-right whitespace-nowrap">
                {exp.startDate}
                {exp.endDate &&
                  ` - ${exp.endDate}`}
              </div>
            </div>

            {exp.description && (
              <ul className="list-disc ml-5 mt-2 text-slate-700">
                {exp.description
                  .split("\n")
                  .filter(Boolean)
                  .map((line, i) => (
                    <li key={i}>
                      {line}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  )}

  {/* PROJECTS */}
  {projects?.length > 0 && (
    <Section title="Projects">

      <div className="space-y-5">

        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-md p-4"
          >
            <div className="flex justify-between items-start">

              <div>
                <h3 className="font-semibold text-base">
                  {project.name}
                </h3>

                {project.techStack && (
                  <div className="text-slate-600 mt-1">
                    <span className="font-medium">
                      Tech Stack:
                    </span>{" "}
                    {project.techStack}
                  </div>
                )}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 text-xs"
                >
                  View Project
                </a>
              )}
            </div>

            {project.description && (
              <div className="mt-3 text-slate-700">
                {project.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )}

  {/* EDUCATION */}
  {education?.length > 0 && (
    <Section title="Education">

      <div className="space-y-4">

        {education.map((edu, index) => (
          <div
            key={index}
            className="flex justify-between"
          >
            <div>
              <div className="font-semibold">
                {edu.course}
              </div>

              <div className="text-slate-600">
                {edu.institute}
              </div>
            </div>

            <div className="text-right">
              <div>
                {edu.passingYear}
              </div>

              {edu.percentage && (
                <div className="text-slate-600">
                  {edu.percentage}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )}

  {/* PERSONAL INFO */}
  <Section title="Additional Information">

    <div className="grid grid-cols-2 gap-y-3 gap-x-8">

      {personalInfo.dob && (
        <Info
          label="Date of Birth"
          value={personalInfo.dob}
        />
      )}

      {personalInfo.nationality && (
        <Info
          label="Nationality"
          value={personalInfo.nationality}
        />
      )}

      {personalInfo.maritalStatus && (
        <Info
          label="Marital Status"
          value={personalInfo.maritalStatus}
        />
      )}

      {personalInfo.languages && (
        <Info
          label="Languages"
          value={personalInfo.languages}
        />
      )}
    </div>
  </Section>

</div>


);
}
