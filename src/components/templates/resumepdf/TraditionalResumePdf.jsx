import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

/* CLEAN + PROFESSIONAL SPACING SYSTEM */
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#f5f6fa",
    padding: 5,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#11192b",
  },

  container: {
    margin: 4,
    overflow: "hidden",
  },

  /* HEADER */
  header: {
    backgroundColor: "#081021",
    padding: 20, // reduced
    color: "#fff",
  },

  name: {
    fontSize: 20,
    fontWeight: 900,
    textTransform: "uppercase",
  },

  lastNameLight: {
    color: "#fff",
    fontWeight: "light",
  },

  headerText: {
    fontSize: 9,
    color: "#fff",
    marginTop: 4,
  },

  linkRow: {
    flexDirection: "row",
    marginTop: 6,
    gap: 10,
  },

  link: {
    fontSize: 9,
    color: "#fff",
    textDecoration: "none",
  },

  /* BODY */
  body: {
    padding: 10, // reduced (was 28)
  },

  section: {
    marginBottom: 12, // tighter vertical rhythm
  },

  sectionTitleWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6, // reduced
  },

  dot: {
    width: 6,
    height: 6,
    backgroundColor: "#081021",
    borderRadius: 50,
    marginRight: 6,
  },

  sectionTitle: {
    fontSize: 9,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#374151",
  },

  /* EXPERIENCE */
  expItem: {
    borderLeftWidth: 2,
    borderLeftColor: "#e5e7eb",
    paddingLeft: 8,
    marginBottom: 8,
    position: "relative",
  },

  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  expRole: {
    fontSize: 12,
    fontWeight: "bold",
  },

  expDate: {
    fontSize: 8,
    color: "#6b7280",
  },

  expCompany: {
    color: "#4b5563",
    fontSize: 9,
    marginTop: 1,
    fontWeight: "bold",
  },

  expLocation: {
    fontSize: 8,
    color: "#8f95a1",
  },

  expDesc: {
    fontSize: 9,
    marginTop: 3,
    color: "#374151",
    lineHeight: 1.5,
  },

  /* EDUCATION */

  eduGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  eduItem: {
    width: "28%",
    paddingLeft: 10,
    paddingRight: 5,
    marginBottom: 8,
  },

  eduTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#111827",
  },

  eduText: {
    fontSize: 9,
    color: "#4b5563",
    marginTop: 2,
  },

  eduMeta: {
    fontSize: 8,
    color: "#6b7280",
    marginTop: 2,
  },

  expRoleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  expDot: {
    width: 8,
    height: 8,
    backgroundColor: "#081021",
    borderRadius: 50,
    position: "absolute",
    left: -13,
    top: 3,
  },

  /* SKILLS */
  skillGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  skillCard: {
    width: "49%",
    borderLeftWidth: 2,
    borderLeftColor: "#e5e7eb",
    paddingLeft: 8,
    marginBottom: 6,
    marginRight: "1%",
  },

  skillTitle: {
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 4,
  },

  skillTagWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  skillTag: {
    fontSize: 8,
    marginRight: 4,
    marginBottom: 4,
  },

  /* PROJECTS */
  projectCard: {
    borderLeftWidth: 2,
    borderLeftColor: "#e5e7eb",
    paddingLeft: 8,
    marginBottom: 5,
    marginTop: 5,
  },

  projectName: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 2,
  },

  projectTech: {
    fontSize: 8,
    color: "#6b7280",
  },

  projectDesc: {
    fontSize: 9,
    marginTop: 2,
    lineHeight: 1.5,
  },

  projectLink: {
    fontSize: 8,
    color: "#2563eb",
    marginTop: 1,
  },

  /* PERSONAL DETAILS */
  personalCard: {
    padding: 8,
  },

  personalText: {
    fontSize: 9,
    color: "#374151",
    marginBottom: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
});

/* SECTION */
function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionTitleWrap}>
        <View style={styles.dot} />
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

/* MAIN */
export default function TraditionalResumePdf({ values }) {
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
        <View style={styles.container}>
          {/* HEADER */}
          <View style={styles.header}>
            <Text style={styles.name}>
              {personalInfo.firstName}{" "}
              <Text style={styles.lastNameLight}>{personalInfo.lastName}</Text>
            </Text>

            <Text style={styles.headerText}>{personalInfo.email}</Text>

            <Text style={styles.headerText}>{personalInfo.phone}</Text>

            <Text style={styles.headerText}>{personalInfo.address}</Text>

            <View style={styles.linkRow}>
              {personalInfo.linkedin && (
                <Link style={styles.link} src={personalInfo.linkedin}>
                  LinkedIn
                </Link>
              )}

              {personalInfo.github && (
                <Link style={styles.link} src={personalInfo.github}>
                  GitHub
                </Link>
              )}
            </View>
          </View>

          {/* BODY */}
          <View style={styles.body}>
            {/* SUMMARY */}
            {careerObjective && (
              <Section title="Profile Summary">
                <Text style={styles.eduText}>{careerObjective}</Text>
              </Section>
            )}

            {/* EXPERIENCE */}
            {experience?.length > 0 && (
              <Section title="Experience">
                {experience.map((exp, i) => (
                  <View key={i} style={styles.expItem}>
                    <View style={styles.expHeader}>
                      <View style={styles.expRoleRow}>
                        <View style={styles.expDot} />

                        <Text style={styles.expRole}>
                          {exp.role || exp.position}
                        </Text>
                      </View>
                      <Text style={styles.expDate}>
                        {exp.startDate} - {exp.endDate}
                      </Text>
                    </View>

                    <Text style={styles.expCompany}>{exp.company}</Text>

                    {exp.location && (
                      <Text style={styles.expLocation}>{exp.location}</Text>
                    )}

                    {exp.description && (
                      <Text style={styles.expDesc}> {exp.description}</Text>
                    )}
                  </View>
                ))}
              </Section>
            )}

            {/* EDUCATION */}
            {/* EDUCATION */}
            {education?.length > 0 && (
              <Section title="Education">
                <View style={styles.eduGrid}>
                  {education.map((edu, i) => (
                    <View key={i} style={styles.eduItem}>
                      <Text style={styles.eduTitle}>{edu.course}</Text>

                      <Text style={styles.eduText}>{edu.institute}</Text>

                      <Text style={styles.eduMeta}>
                        {edu.passingYear}
                        {edu.percentage ? ` • ${edu.percentage}` : ""}
                      </Text>
                    </View>
                  ))}
                </View>
              </Section>
            )}

            {/* SKILLS */}
            {validSkillGroups.length > 0 && (
              <Section title="Skills">
                <View style={styles.skillGrid}>
                  {validSkillGroups.map((group, i) => (
                    <View key={i} style={styles.skillCard}>
                      <Text style={styles.skillTitle}>{group.category}</Text>

                      <View style={styles.skillTagWrap}>
                        {group.skills?.filter(Boolean).map((skill, idx) => (
                          <Text key={idx} style={styles.skillTag}>
                            {skill}
                          </Text>
                        ))}
                      </View>
                    </View>
                  ))}
                </View>
              </Section>
            )}

            {/* PROJECTS */}
            {projects?.length > 0 && (
              <Section title="Projects">
                {projects.map((project, i) => (
                  <View key={i} style={styles.projectCard}>
                    <Text style={styles.projectName}>{project.name}</Text>

                    {project.techStack && (
                      <Text style={styles.projectTech}>
                        {project.techStack}
                      </Text>
                    )}

                    <Text style={styles.projectDesc}>
                      {project.description}
                    </Text>

                    {project.link && (
                      <Link style={styles.projectLink} src={project.link}>
                        View Project
                      </Link>
                    )}
                  </View>
                ))}
              </Section>
            )}

            {/* PERSONAL DETAILS (NEW) */}
            {(personalInfo.dob ||
              personalInfo.maritalStatus ||
              personalInfo.nationality ||
              personalInfo.languages) && (
              <Section title="Personal Details">
                <View style={styles.personalCard}>
                  {(personalInfo.dob ||
                    personalInfo.maritalStatus ||
                    personalInfo.nationality) && (
                    <View style={styles.personalText}>
                      <Text>
                        {" "}
                        {personalInfo.dob && `DOB: ${personalInfo.dob}`}{" "}
                      </Text>
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
                  )}

                  {personalInfo.languages && (
                    <View style={styles.personalText}>
                      <Text> Languages: {personalInfo.languages} </Text>
                    </View>
                  )}
                </View>
              </Section>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
}
