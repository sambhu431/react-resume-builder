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
    color: "#0f172a",
    lineHeight: 1.6,
    fontFamily: "Helvetica",
  },

  header: {
    textAlign: "center",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#1e293b",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 20,
  },

  contact: {
    color: "#64748b",
  },

  address: {
    color: "#475569",
  },

  links: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },

  link: {
    color: "#334155",
    textDecoration: "none",
  },

  section: {
    marginTop: 4,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  sectionBar: {
    width: 3,
    height: 14,
    backgroundColor: "#0f172a",
    borderRadius: 2,
    marginRight: 10,
    marginBottom: 4,
  },

  sectionTitle: {
    fontSize: 9,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#334155",
  },

  sectionLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    marginLeft: 10,
    marginBottom: 6,
  },

  paragraph: {
    marginTop: 2,
    color: "#475569",
  },

  /* SKILLS */

  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  skillCol: {
    width: "49%",
    paddingRight: 10,
    marginBottom: 4,
    marginTop: 2,
  },

  skillCategory: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },

  skillList: {
    marginTop: 1,
  },

  skillItem: {
    fontSize: 9,
    color: "#374151",
    lineHeight: 1.5,
  },

  experienceItem: {
    borderLeftWidth: 1,
    borderLeftColor: "#cbd5e1",
    paddingLeft: 12,
    marginBottom: 4,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  role: {
    fontSize: 11,
    fontWeight: "bold",
  },

  company: {
    color: "#64748b",
    marginTop: 2,
  },

  date: {
    color: "#64748b",
  },

  bulletList: {
    marginTop: 2,
    paddingLeft: 10,
  },

  bulletItem: {
    marginBottom: 3,
    color: "#334155",
  },

  projectCard: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    padding: 6,
    marginBottom: 4,
  },

  projectTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },

  techStack: {
    marginTop: 3,
    color: "#64748b",
  },

  projectLink: {
    fontSize: 8,
    color: "#4F46E5",
  },

  projectDescription: {
    marginTop: 4,
    color: "#475569",
  },

  educationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 4,
  },

  course: {
    fontWeight: "bold",
  },

  institute: {
    color: "#64748b",
  },

  educationRight: {
    textAlign: "right",
  },

  percentage: {
    color: "#64748b",
  },

  infoGrid: {
    padding: 8,
  },

  infoLabel: {
    fontSize: 9,
    textTransform: "uppercase",
    color: "#64748b",
  },

  infoValue: {
    fontSize: 9,
    color: "#374151",
    marginBottom: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
    textTransform: "uppercase",
  },
});

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionBar} />

        <Text style={styles.sectionTitle}>{title}</Text>

        <View style={styles.sectionLine} />
      </View>

      {children}
    </View>
  );
}

export default function PrimeATSResumePDF({ values }) {
  const {
    personalInfo,
    careerObjective,
    education,
    skillGroups,
    experience,
    projects,
  } = values;


  //   const clean = (v) => v?.trim();

  // const validExperience = experience.filter(
  //   (exp) => clean(exp.role) || clean(exp.company) || clean(exp.description),
  // );

  // const validProjects = projects.filter(
  //   (p) => clean(p.name) || clean(p.description),
  // );

  // const validEducation = education.filter(
  //   (e) => clean(e.course) || clean(e.institute),
  // );

  // const validSkillGroups = skillGroups.filter(
  //   (group) =>
  //     group.category?.trim() || group.skills?.some((skill) => skill?.trim()),
  // );



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

          {personalInfo.address && (
            <Text style={styles.address}>{personalInfo.address}</Text>
          )}

          {(personalInfo.linkedin || personalInfo.github) && (
            <View style={styles.links}>
              {personalInfo.linkedin && (
                <Link src={personalInfo.linkedin} style={styles.link}>
                  LinkedIn
                </Link>
              )}

              {personalInfo.github && (
                <Link src={personalInfo.github} style={styles.link}>
                  GitHub
                </Link>
              )}
            </View>
          )}
        </View>

        {/* SUMMARY */}
        {careerObjective && (
          <Section title="Career Objective">
            <Text style={styles.paragraph}>{careerObjective}</Text>
          </Section>
        )}

        {/* SKILLS */}
        {skillGroups?.length > 0 && (
          <Section title="Skills">
            <View style={styles.skillsGrid}>
              {skillGroups.map((group, index) => (
                <View key={index} style={styles.skillCol}>
                  <Text style={styles.skillCategory}>{group.category}</Text>

                  <Text style={styles.skillList}>
                    {group.skills?.filter(Boolean).join(" • ")}
                  </Text>
                </View>
              ))}
            </View>
          </Section>
        )}

        {/* EXPERIENCE */}
        {experience?.length > 0 && (
          <Section title="Professional Experience">
            {experience.map((exp, index) => (
              <View key={index} style={styles.experienceItem}>
                <View style={styles.rowBetween}>
                  <View>
                    <Text style={styles.role}>{exp.role || exp.position}</Text>

                    <Text style={styles.company}>
                      {exp.company}
                      {exp.location ? ` • ${exp.location}` : ""}
                    </Text>
                  </View>

                  <Text style={styles.date}>
                    {exp.startDate}
                    {exp.endDate ? ` - ${exp.endDate}` : ""}
                  </Text>
                </View>

                {exp.description && (
                  <View style={styles.bulletList}>
                    {exp.description
                      .split("\n")
                      .filter(Boolean)
                      .map((line, i) => (
                        <Text key={i} style={styles.bulletItem}>
                          • {line}
                        </Text>
                      ))}
                  </View>
                )}
              </View>
            ))}
          </Section>
        )}

        {/* PROJECTS */}
        {projects?.length > 0 && (
          <Section title="Projects">
            {projects.map((project, index) => (
              <View key={index} style={styles.projectCard}>
                <View style={styles.rowBetween}>
                  <View>
                    <Text style={styles.projectTitle}>{project.name}</Text>

                    {project.techStack && (
                      <Text style={styles.techStack}>
                        Tech Stack: {project.techStack}
                      </Text>
                    )}
                  </View>

                  {project.link && (
                    <Text src={project.link} style={styles.projectLink}>
                      View Project
                    </Text>
                  )}
                </View>

                {project.description && (
                  <Text style={styles.projectDescription}>
                    {project.description}
                  </Text>
                )}
              </View>
            ))}
          </Section>
        )}

        {/* EDUCATION */}
        {education?.length > 0 && (
          <Section title="Education">
            {education.map((edu, index) => (
              <View key={index} style={styles.educationItem}>
                <View>
                  <Text style={styles.course}>{edu.course}</Text>

                  <Text style={styles.institute}>{edu.institute}</Text>
                </View>

                <View style={styles.educationRight}>
                  <Text>{edu.passingYear}</Text>

                  {edu.percentage && (
                    <Text style={styles.percentage}>{edu.percentage}</Text>
                  )}
                </View>
              </View>
            ))}
          </Section>
        )}

        {/* ADDITIONAL INFO */}
        <Section title="Additional Information">
          <View style={styles.infoGrid}>
            <View style={styles.infoValue}>
              <Text> {personalInfo.dob && `DOB: ${personalInfo.dob}`} </Text>
              <Text>
                {" "}
                {personalInfo.maritalStatus &&
                  `Status: ${personalInfo.maritalStatus}`}{" "}
              </Text>
              <Text>
                {" "}
                {personalInfo.nationality &&
                  `Nationality: ${personalInfo.nationality}`}{" "}
              </Text>
            </View>

            {personalInfo.languages && (
              <View style={styles.infoValue}>
                <Text> Languages: {personalInfo.languages} </Text>
              </View>
            )}
          </View>
        </Section>
      </Page>
    </Document>
  );
}
