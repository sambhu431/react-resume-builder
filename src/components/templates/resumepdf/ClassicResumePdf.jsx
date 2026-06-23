import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
       paddingTop: 8,
    paddingHorizontal: 20,
    paddingBottom: 8,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#000",
    lineHeight: 1.4,
  },

  header: {
    textAlign: "center",
    marginBottom: 18,
  },

  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    marginBottom: 10,
  },

  contact: {
    fontSize: 9,
    fontFamily: "Helvetica",
  },

  socialLink: {
    fontSize: 10,
    color: "#2563eb",
    textDecoration: "underline",
    fontFamily: "Helvetica",
  },

  contactRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 4,
    alignItems: "center",
    fontFamily: "Helvetica",
  },

  separator: {
    fontSize: 10,
    color: "#475569",
    marginHorizontal: 4,
    fontFamily: "Helvetica",
  },

  section: {
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    marginBottom: 4,
  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 8,
  },

  paragraph: {
    textAlign: "justify",
    fontFamily: "Helvetica",
  },

  educationRow: {
    marginBottom: 8,
  },

  rowTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },

  rowSubTitle: {
    marginTop: 1,
    fontFamily: "Helvetica",
  },

  projectLink: {
    fontSize: 9,
    color: "#2563eb",
    textDecoration: "none",
    fontFamily: "Helvetica",
  },

  meta: {
    fontSize: 9,
    color: "#333",
    fontFamily: "Helvetica",
  },

skillText: {
  fontFamily: "Helvetica",
  fontSize: 10,
  marginBottom: 4,
},

skillCategory: {
  fontFamily: "Helvetica-Bold",
},

  experienceBlock: {
    marginBottom: 12,
  },

  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  experienceTitle: {
    fontFamily: "Helvetica-Bold",
  },

  bullet: {
    marginLeft: 10,
    marginTop: 2,
    fontFamily: "Helvetica",
  },

  personalRow: {
    flexDirection: "row",
    marginBottom: 3,
  },

  personalLabel: {
    width: 110,
    fontFamily: "Helvetica-Bold",
  },

  personalValue: {
    flex: 1,
    fontFamily: "Helvetica",
  },
});

export default function ClassicResumePdf({ values }) {
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
    <Document>
      <Page size="A4" style={styles.page}>
        {/* HEADER */}

        <View style={styles.header}>
          <Text style={styles.name}>
            {personalInfo.firstName} {personalInfo.lastName}
          </Text>

          <Text style={styles.contact}>
            {[personalInfo.email, personalInfo.phone]
              .filter(Boolean)
              .join(" | ")}
          </Text>

          <Text style={styles.contact}>{personalInfo.address}</Text>

          {(personalInfo.linkedin || personalInfo.github) && (
            <View style={styles.contactRow}>
              {personalInfo.linkedin && (
                <Link src={personalInfo.linkedin} style={styles.socialLink}>
                  LinkedIn
                </Link>
              )}

              {personalInfo.linkedin && personalInfo.github && (
                <Text style={styles.separator}> | </Text>
              )}

              {personalInfo.github && (
                <Link src={personalInfo.github} style={styles.socialLink}>
                  GitHub
                </Link>
              )}
            </View>
          )}
        </View>

        {/* OBJECTIVE */}

        {careerObjective && (
          <Section title="Career Objective">
            <Text style={styles.paragraph}>{careerObjective}</Text>
          </Section>
        )}

        {/* EDUCATION */}

        {education?.length > 0 && (
          <Section title="Educational Qualifications">
            {education.map((edu, index) => (
              <View key={index} style={styles.educationRow}>
                <Text style={styles.rowTitle}>{edu.course}</Text>

                <Text style={styles.rowSubTitle}>{edu.institute}</Text>

                <Text style={styles.meta}>
                  {edu.passingYear}
                  {edu.passingYear && edu.percentage && " | "}
                  {edu.percentage}
                </Text>
              </View>
            ))}
          </Section>
        )}

        {/* SKILLS */}

       {/* SKILLS */}
{validSkillGroups?.length > 0 && (
  <Section title="Skills">
    {validSkillGroups.map((group, index) => {
      const skills = group.skills?.filter((s) => s?.trim()) || [];

      return (
        <Text key={index} style={styles.skillText}>
          {group.category?.trim() ? (
            <>
              <Text style={styles.skillCategory}>
                {group.category}
              </Text>

              {skills.length > 0 && (
                <Text>
                  : {skills.join(", ")}
                </Text>
              )}
            </>
          ) : (
            <Text>{skills.join(", ")}</Text>
          )}
        </Text>
      );
    })}
  </Section>
)}

        {/* EXPERIENCE */}

        {experience?.length > 0 && (
          <Section title="Work Experience">
            {experience.map((exp, index) => (
              <View key={index} style={styles.experienceBlock}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.experienceTitle}>{exp.role}</Text>

                  <Text>
                    {exp.startDate} - {exp.endDate}
                  </Text>
                </View>

                <Text>{exp.company}</Text>

                {exp.description?.trim() && <Text> {exp.description}</Text>}
              </View>
            ))}
          </Section>
        )}

        {/* PROJECTS */}

        {projects?.length > 0 && (
          <Section title="Projects">
            {projects.map((project, index) => (
              <View
                key={index}
                style={{
                  marginBottom: 10,
                }}
              >
                <Text style={styles.experienceTitle}>{project.name}</Text>

                {project.techStack && (
                  <Text>Technologies Used: {project.techStack}</Text>
                )}

                <Text>{project.description}</Text>

                {project.link && (
                  <Link src={project.link} style={styles.projectLink}>
                    View Project
                  </Link>
                )}
              </View>
            ))}
          </Section>
        )}

        {/* PERSONAL DETAILS */}

        <Section title="Personal Details">
          {personalInfo.dob && (
            <View style={styles.personalRow}>
              <Text style={styles.personalLabel}>Date of Birth</Text>

              <Text style={styles.personalValue}>: {personalInfo.dob}</Text>
            </View>
          )}

          {personalInfo.nationality && (
            <View style={styles.personalRow}>
              <Text style={styles.personalLabel}>Nationality</Text>

              <Text style={styles.personalValue}>
                : {personalInfo.nationality}
              </Text>
            </View>
          )}

          {personalInfo.languages && (
            <View style={styles.personalRow}>
              <Text style={styles.personalLabel}>Languages Known</Text>

              <Text style={styles.personalValue}>
                : {personalInfo.languages}
              </Text>
            </View>
          )}

          {personalInfo.maritalStatus && (
            <View style={styles.personalRow}>
              <Text style={styles.personalLabel}>Marital Status</Text>

              <Text style={styles.personalValue}>
                : {personalInfo.maritalStatus}
              </Text>
            </View>
          )}
        </Section>
      </Page>
    </Document>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>

      <View style={styles.divider} />

      {children}
    </View>
  );
}
