import React from "react";

export default function StandardResume({ values }) {
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

  return (
    <div className="bg-[#f4f6f8] py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">

        {/* HEADER (ALL PERSONAL INFO LEFT STACKED) */}
        <div className="px-10 py-4">

          <div className="text-4xl uppercase tracking-tight">
            <span className="font-medium"> 
               {personalInfo.firstName}{" "}
            </span>
            <span >
              {personalInfo.lastName}
            </span>
          </div>

          <div className="mt-4 text- space-y-1">

            <p>
              {personalInfo.email}
            </p>

            <p >
              {personalInfo.phone}
            </p>

            <p>
              {personalInfo.address}
            </p>

            <p className="text-xs mt-2 space-x-4">
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin}>LinkedIn</a>
              )}
              {personalInfo.github && (
                <a href={personalInfo.github}>GitHub</a>
              )}
            </p>

          </div>
        </div>

        {/* BODY */}
        <div className="px-10 py-2 space-y-6">

          {/* PROFILE */}
          {careerObjective && (
            <section>
              <SectionTitle title="Career Objective" />

              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                {careerObjective}
              </p>
            </section>
          )}

          {/* EXPERIENCE */}
          {experience?.length > 0 && (
            <section>
              <SectionTitle title="Experience" />

              <div className="mt-4 space-y-6">
                {experience.map((exp, i) => (
                  <div key={i} className="border-l-2 border-slate-900 pl-4">

                    {/* ROLE (BOLD) */}
                    <p className="font-bold text-slate-900">
                      {exp.role || exp.position}
                    </p>

                    {/* COMPANY (BOLD) */}
                    <p className="font-semibold text-slate-800">
                      {exp.company}
                    </p>

                    <p className="text-xs text-slate-500">
                      {exp.startDate} - {exp.endDate}
                    </p>

                    {exp.location && (
                      <p className="text-xs text-slate-400">
                        {exp.location}
                      </p>
                    )}

                    {exp.description && (
                      <p className="text-sm text-slate-600 mt-2">
                        • {exp.description}
                      </p>
                    )}

                  </div>
                ))}
              </div>
            </section>
          )}

          {/* EDUCATION */}
          {education?.length > 0 && (
            <section>
              <SectionTitle title="Education" />

              <div className="mt-4 space-y-4">

                {education.map((edu, i) => (
                  <div key={i} className="border-l-2 border-slate-900 pl-4">

                    <p className="font-bold text-slate-900">
                      {edu.course}
                    </p>

                    <p className="font-semibold text-slate-700">
                      {edu.institute}
                    </p>

                    <p className="text-xs text-slate-500 font-semibold">
                      {edu.passingYear}
                      {edu.percentage ? ` • ${edu.percentage}` : ""}
                    </p>

                  </div>
                ))}

              </div>
            </section>
          )}

          {/* SKILLS */}
          {validSkillGroups?.length > 0 && (
            <section>
              <SectionTitle title="Skills" />

              <div className="mt-3 space-y-2">

                {validSkillGroups.map((group, i) => (
                  <div key={i}>

                    <p className="font-bold text-slate-800">
                      {group.category}
                    </p>

                    <p className="text-sm text-slate-600">
                      {group.skills?.filter(Boolean).join(", ")}
                    </p>

                  </div>
                ))}

              </div>
            </section>
          )}

          {/* PROJECTS */}
          {projects?.length > 0 && (
            <section>
              <SectionTitle title="Projects" />

              <div className="mt-4 space-y-5">

                {projects.map((project, i) => (
                  <div key={i} className="border-l-2 border-slate-900 pl-4">

                    {/* PROJECT NAME (BOLD) */}
                    <p className="font-bold text-slate-900">
                      {project.name}
                    </p>

                    {project.techStack && (
                      <p className="text-xs text-slate-500">
                        {project.techStack}
                      </p>
                    )}

                    <p className="text-sm text-slate-600 mt-1">
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
            </section>
          )}


          <section>
            <SectionTitle title="Personal Informartion" />
            {(personalInfo.dob ||
              personalInfo.maritalStatus ||
              personalInfo.nationality) && (
              <p className="text-slate-600 mt-1 flex flex-wrap gap-6">
                <span> {personalInfo.dob && `DOB: ${personalInfo.dob}`} </span>
                <span> {personalInfo.maritalStatus &&
                    `Status: ${personalInfo.maritalStatus}`} </span>
                <span> {personalInfo.nationality &&
                    `Nationality: ${personalInfo.nationality}`} </span>
              </p>
            )}

            {personalInfo.languages && (
              <p>
                <span className="font-bold">Languages:</span>{" "}
                {personalInfo.languages}
              </p>
            )}
          </section>
          

        </div>
      </div>
    </div>
  );
}

/* SECTION HEADER (GRAY BAR + UPPERCASE) */
function SectionTitle({ title }) {
  return (
    <div className="bg-gray-200 px-3 py-1 inline-block">
      <h2 className="text-xs font-bold uppercase tracking-widest text-gray-800">
        {title}
      </h2>
    </div>
  );
}