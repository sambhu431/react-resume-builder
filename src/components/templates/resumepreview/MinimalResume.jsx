import React from "react";

/* ---------------- SECTION ---------------- */
const Section = ({ title, children }) => {
  if (!children) return null;
  return (
    <section className="mb-7 break-inside-avoid">
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 border-b border-slate-200 pb-1.5 mb-4">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};

/* ---------------- ENTRY ROW ---------------- */
const EntryHeader = ({ left, right }) => (
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1  min-w-0">
    <div className="text-slate-900">{left}</div>
    {right && (
      <div
        className="
text-xs
text-slate-500
font-medium
tracking-wide
break-words
sm:whitespace-nowrap
"
      >
        {right}
      </div>
    )}
  </div>
);

/* ---------------- COMPONENT ---------------- */
export default function MinimalResume({ values = {} }) {
  const {
    personalInfo = {},
    careerObjective,
    education = [],
    skillGroups = [],
    experience = [],
    projects = [],
  } = values;

  // Build contact line
  const contactItems = [
    personalInfo.email,
    personalInfo.phone,
    personalInfo.address,
    personalInfo.linkedin && "LinkedIn",
    personalInfo.github && "GitHub",
  ].filter(Boolean);

  const hasAdditionalInfo =
    personalInfo.dob ||
    personalInfo.maritalStatus ||
    personalInfo.nationality ||
    personalInfo.languages;

  const validSkillGroups = skillGroups.filter(
    (group) =>
      group.category?.trim() || group.skills?.some((skill) => skill?.trim()),
  );

  return (
    <div
      className="
w-full
max-w-4xl
mx-auto
mt-4 sm:mt-10
bg-white
px-4 py-6
sm:px-6 sm:py-8
md:px-10 md:py-12
font-sans
leading-relaxed
text-slate-800
overflow-x-hidden
print:p-8
print:max-w-none
print:mt-0
"
    >
      {/* ================= HEADER ================= */}
      <header className="mb-10 min-w-0 max-w-full">
        <h1
          className="
    text-3xl
    sm:text-4xl
    font-light
    tracking-tight
    text-slate-900
    mb-1
    break-words
    overflow-wrap:anywhere
  "
        >
          {personalInfo.firstName}{" "}
          <span className="font-semibold break-words">
            {personalInfo.lastName}
          </span>
        </h1>

        {careerObjective && (
          <p className="text-sm text-slate-500 italic mb-4 max-w-2xl">
            {careerObjective}
          </p>
        )}

        {/* Contact line */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs break-words">
          {personalInfo.email && (
            <span className="break-all">{personalInfo.email}</span>
          )}
          {personalInfo.phone && (
            <span className="break-all">{personalInfo.phone}</span>
          )}
        </div>

        <div className="mt-1 flex flex-wrap text-xs">
          {personalInfo.address && (
            <>
              <span className="text-slate-300">·</span>
              <span className="break-words">{personalInfo.address}</span>
            </>
          )}
        </div>

        <div className="mt-1 flex flex-wrap text-xs gap-1">
          {personalInfo.linkedin && (
            <>
              <span className="text-slate-300">·</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 underline underline-offset-2"
              >
                LinkedIn
              </a>
            </>
          )}
          {personalInfo.github && (
            <>
              <span className="text-slate-300">·</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 underline underline-offset-2"
              >
                GitHub
              </a>
            </>
          )}
        </div>

        {/* Subtle divider */}
        <div className="mt-6 h-px bg-slate-200" />
      </header>

      {/* ================= EXPERIENCE ================= */}
      {experience.length > 0 && (
        <Section title="Experience">
          <div className="space-y-5 wrap-break-word ">
            {experience.map((exp, index) => (
              <div key={index} className="break-inside-avoid">
                <EntryHeader
                  left={
                    <div>
                      <h3 className="font-semibold text-[15px] text-slate-900">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {exp.company}
                        {exp.location && (
                          <span className="text-slate-400">
                            {" "}
                            · {exp.location}
                          </span>
                        )}
                      </p>
                    </div>
                  }
                  right={`${exp.startDate}${exp.endDate ? ` – ${exp.endDate}` : ""}`}
                />

                {exp.description && (
                  <ul className="mt-2  space-y-1 text-sm  text-slate-600 list-none pl-0">
                    {exp.description
                      .split("\n")
                      .filter((line) => line.trim())
                      .map((line, i) => (
                        <li key={i} className="flex gap-2 min-w-0">
                          <span className="text-slate-400 select-none shrink-0">
                            —
                          </span>
                          <span className="whitespace-pre-line break-words flex-1 min-w-0">
                            {line}
                          </span>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ================= PROJECTS ================= */}
      {projects.length > 0 && (
        <Section title="Projects">
          <div className="space-y-5 w-full">
            {projects.map((project, index) => (
              <div key={index} className="break-inside-avoid min-w-0">
                <EntryHeader
                  left={
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-[15px] text-slate-900 break-words">
                        {project.name}
                      </h3>
                      {project.techStack && (
                        <p className="text-xs text-slate-500 mt-0.5 break-words">
                          {project.techStack}
                        </p>
                      )}
                    </div>
                  }
                  right={
                    project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-zinc-800 underline underline-offset-2 shrink-0 break-all"
                      >
                        View Project
                      </a>
                    ) : null
                  }
                />

                {project.description && (
                  <ul className="mt-2 space-y-1 text-sm text-slate-600 list-none">
                    {project.description
                      .split("\n")
                      .filter((line) => line.trim())
                      .map((line, i) => (
                        <li key={i} className="flex gap-2 min-w-0">
                          <span className="text-slate-400 select-none shrink-0">
                            —
                          </span>
                          <span className="whitespace-pre-line break-words flex-1 min-w-0">
                            {line}
                          </span>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ================= EDUCATION ================= */}
      {education.length > 0 && (
        <Section title="Education">
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="break-inside-avoid">
                <EntryHeader
                  left={
                    <div>
                      <h3 className="font-semibold text-[15px] text-slate-900">
                        {edu.course}
                      </h3>
                      <p className="text-sm text-slate-600">{edu.institute}</p>
                    </div>
                  }
                  right={
                    <span>
                      {edu.passingYear}
                      {edu.percentage && (
                        <span className="block text-[11px] text-slate-500 mt-0.5">
                          {edu.percentage}
                        </span>
                      )}
                    </span>
                  }
                />
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ================= SKILLS ================= */}
      {validSkillGroups.length > 0 && (
        <Section title="Skills">
          <div className="space-y-2 text-sm">
            {validSkillGroups.map((group, index) => (
              <div
                key={index}
                className="
                flex flex-col sm:flex-row gap-1 sm:gap-3 min-w-0 "
              >
                <span className="font-semibold text-slate-900 sm:w-48 break-words">
                  {group.category}
                </span>
                <span className="text-slate-600 flex-1 min-w-0 break-words">
                  {group.skills?.filter(Boolean).join(", ")}
                </span>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ================= ADDITIONAL INFO ================= */}
      {hasAdditionalInfo && (
        <Section title="Additional">
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-y-2 gap-x-4 text-sm">
            {personalInfo.dob && (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Date of Birth
                </p>
                <p className="text-slate-700">{personalInfo.dob}</p>
              </div>
            )}
            {personalInfo.nationality && (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Nationality
                </p>
                <p className="text-slate-700">{personalInfo.nationality}</p>
              </div>
            )}
            {personalInfo.maritalStatus && (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Marital Status
                </p>
                <p className="text-slate-700">{personalInfo.maritalStatus}</p>
              </div>
            )}
            {personalInfo.languages && (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Languages
                </p>
                <p className="text-slate-700">{personalInfo.languages}</p>
              </div>
            )}
          </div>
        </Section>
      )}
    </div>
  );
}
