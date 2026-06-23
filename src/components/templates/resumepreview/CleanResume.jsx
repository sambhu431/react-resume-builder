import React from 'react';

// Reusable Section Component
const Section = ({ title, children }) => {
  if (!children) return null;
  return (
    <section className="mb-8 break-inside-avoid">
      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-2 mb-4">
        {title}
      </h2>
      <div className="text-slate-700">
        {children}
      </div>
    </section>
  );
};

export default function CleanResume({ values = {} }) {
  const {
    personalInfo = {},
    careerObjective,
    education = [],
    skillGroups = [],
    experience = [],
    projects = [],
  } = values;

  // Filter out empty contact fields to avoid showing empty separators
  const contactFields = [
    personalInfo.email && { type: 'email', value: personalInfo.email },
    personalInfo.phone && { type: 'phone', value: personalInfo.phone },
    personalInfo.address && { type: 'address', value: personalInfo.address },
  ].filter(Boolean);

  const hasAdditionalInfo = 
    personalInfo.dob || 
    personalInfo.maritalStatus || 
    personalInfo.nationality || 
    personalInfo.languages;

    
  const validSkillGroups = skillGroups.filter(
    (group) =>
      group.category?.trim() ||
      group.skills?.some((skill) => skill?.trim())
  );


  return (
    <div className="bg-white mt-10 text-slate-800 max-w-4xl mx-auto p-8 sm:p-12 font-sans leading-relaxed print:p-0 print:max-w-none">
      
      {/* --- HEADER --- */}
      <header className="mb-4 text-center sm:text-left border-b border-slate-100 pb-6">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        
        {/* Contact Row */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 text-sm text-slate-600 mb-3">
          {contactFields.map((field, idx) => (
            <React.Fragment key={idx}>
              <span>{field.value}</span>
              {idx < contactFields.length - 1 && (
                <span className="hidden sm:inline text-slate-300">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm">
          {personalInfo.linkedin && (
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="text-blue-600 hover:underline font-medium"
            >
              LinkedIn Profile
            </a>
          )}
          {personalInfo.github && (
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-blue-600 hover:underline font-medium"
            >
              GitHub Profile
            </a>
          )}
        </div>
      </header>

      {/* --- SUMMARY --- */}
      {careerObjective && (
        <Section title="Professional Profile">
          <p className="text-slate-600 text-sm sm:text-base whitespace-pre-line">
            {careerObjective}
          </p>
        </Section>
      )}

      {/* --- EXPERIENCE --- */}
      {experience.length > 0 && (
        <Section title="Work Experience">
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                  <h3 className="font-bold text-slate-900 text-lg">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded w-fit mt-1 sm:mt-0">
                    {exp.startDate} – {exp.endDate || 'Present'}
                  </span>
                </div>
                
                <div className="text-slate-600 font-medium mb-2 flex items-center gap-2 text-sm">
                  <span>{exp.company}</span>
                  {exp.location && (
                    <>
                      <span className="text-slate-300">•</span>
                      <span>{exp.location}</span>
                    </>
                  )}
                </div>

                {exp.description && (
                  <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* --- PROJECTS --- */}
      {projects.length > 0 && (
        <Section title="Key Projects">
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-900 text-base">
                    {project.name}
                  </h3>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-xs text-blue-600 hover:underline ml-2"
                    >
                      View Project
                    </a>
                  )}
                </div>
                
                {project.techStack && (
                  <p className="text-xs text-slate-500 font-mono mt-1 mb-2">
                    Stack: {project.techStack}
                  </p>
                )}
                
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* --- EDUCATION --- */}
      {education.length > 0 && (
        <Section title="Education">
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-900">
                    {edu.course}
                  </h3>
                  <span className="text-sm text-slate-500 whitespace-nowrap">
                    {edu.passingYear}
                  </span>
                </div>
                <div className="text-slate-600 text-sm">
                  {edu.institute}
                </div>
                {edu.percentage && (
                  <div className="text-xs text-slate-500 mt-1">
                    Score: {edu.percentage}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* --- SKILLS --- */}
      {validSkillGroups.length > 0  && (
        <Section title="Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {validSkillGroups.map((group, index) => (
              <div key={index}>
                <h4 className="font-semibold text-slate-700 text-sm mb-2">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills?.filter(Boolean).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* --- ADDITIONAL DETAILS --- */}
      {hasAdditionalInfo && (
        <Section title="Additional Information">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            {personalInfo.dob && (
              <div>
                <span className="block text-xs text-slate-400 uppercase font-semibold">DOB</span>
                <span className="text-slate-700">{personalInfo.dob}</span>
              </div>
            )}
            {personalInfo.nationality && (
              <div>
                <span className="block text-xs text-slate-400 uppercase font-semibold">Nationality</span>
                <span className="text-slate-700">{personalInfo.nationality}</span>
              </div>
            )}
            {personalInfo.maritalStatus && (
              <div>
                <span className="block text-xs text-slate-400 uppercase font-semibold">Status</span>
                <span className="text-slate-700">{personalInfo.maritalStatus}</span>
              </div>
            )}
            {personalInfo.languages && (
              <div>
                <span className="block text-xs text-slate-400 uppercase font-semibold">Languages</span>
                <span className="text-slate-700">{personalInfo.languages}</span>
              </div>
            )}
          </div>
        </Section>
      )}
    </div>
  );
}