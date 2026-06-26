import React from "react";
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
    paddingTop: 10,
    paddingHorizontal: 24,
    paddingBottom: 10,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#000",
    lineHeight: 1.5,
  },

  /* HEADER */
  header: {
    marginBottom: 16,
  },

  name: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 16,
  },

  contact: {
    fontSize: 10,
  },

  linksRow: {
    flexDirection: "row",
    marginTop: 4,
  },

  link: {
    fontSize: 10,
    color: "#000",
    textDecoration: "underline",
    marginRight: 14,
  },

  projectLink: {
    fontSize: 10,
    color: "#4F46E5",
    textDecoration: "underline",
    marginRight: 14,
  },

  /* SECTION */
  section: {
    marginBottom: 8,
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: 600,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 8,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  bold: {
    fontWeight: 700,
  },

  company: {
    marginTop: 1,
  },

  description: {
    marginTop: 2,
    marginBottom: 4,
  },

  bulletRow: {
    flexDirection: "row",
    marginBottom: 2,
  },

  bullet: {
    width: 10,
  },

  bulletText: {
    flex: 1,
  },

  infoRow: {
    marginBottom: 4,
  },

  projectItem: {
    marginBottom: 10,
  },
});

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>

      {children}
    </View>
  );
}

export default function SimpleATSResumePdf({ values = {} }) {
  const {
    personalInfo = {},
    careerObjective,
    education = [],
    skillGroups = [],
    experience = [],
    projects = [],
  } = values;

  const hasAdditionalInfo =
    personalInfo.dob ||
    personalInfo.nationality ||
    personalInfo.maritalStatus ||
    personalInfo.languages;

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
            <Text style={styles.contact}>{personalInfo.address}</Text>
          )}

          {(personalInfo.linkedin || personalInfo.github) && (
            <View style={styles.linksRow}>
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
            <Text>{careerObjective}</Text>
          </Section>
        )}

        {/* SKILLS */}
        {skillGroups.length > 0 && (
          <Section title="Skills">
            {skillGroups.map((group, index) => (
              <Text key={index} style={{ marginBottom: 1 }}>
                <Text style={styles.bold}>{group.category}</Text>{" "}
                {group.skills?.filter(Boolean).join(", ")}
              </Text>
            ))}
          </Section>
        )}

        {/* EXPERIENCE */}
        {experience.length > 0 && (
          <Section title="Experience">
            {experience.map((exp, index) => (
              <View key={index}>
                <View style={styles.rowBetween}>
                  <Text style={styles.bold}>{exp.role}</Text>

                  <Text>
                    {exp.startDate}
                    {exp.endDate && ` - ${exp.endDate}`}
                  </Text>
                </View>

                <Text style={styles.company}>
                  {exp.company}
                  {exp.location && ` | ${exp.location}`}
                </Text>

                {exp.description && (
                  <View style={styles.description}>
                    {exp.description
                      .split("\n")
                      .filter(Boolean)
                      .map((line, i) => (
                        <View key={i} style={styles.bulletRow}>
                          <Text style={styles.bullet}>•</Text>

                          <Text style={styles.bulletText}>{line}</Text>
                        </View>
                      ))}
                  </View>
                )}
              </View>
            ))}
          </Section>
        )}

        {/* PROJECTS */}
        {projects.length > 0 && (
          <Section title="Projects">
            {projects.map((project, index) => (
              <View key={index} style={styles.projectItem}>
                <Text style={styles.bold}>{project.name}</Text>

                {project.techStack && (
                  <Text>
                    <Text style={styles.bold}>Tech Stack:</Text>{" "}
                    {project.techStack}
                  </Text>
                )}

                {project.description && <Text>{project.description}</Text>}

                {project.link && (
                  <Link src={project.link} style={styles.projectLink}>
                    Project Link
                  </Link>
                )}
              </View>
            ))}
          </Section>
        )}

        {/* EDUCATION */}
        {education.length > 0 && (
          <Section title="Education">
            {education.map((edu, index) => (
              <View key={index}>
                <Text style={styles.bold}>{edu.course}</Text>

                <Text>{edu.institute}</Text>

                <Text>
                  {edu.passingYear}
                  {edu.percentage && ` | ${edu.percentage}`}
                </Text>
              </View>
            ))}
          </Section>
        )}

        {/* ADDITIONAL INFORMATION */}
        {hasAdditionalInfo && (
          <Section title="Additional Information">
            {personalInfo.dob && (
              <View style={styles.infoRow}>
                <Text>
                  <Text style={styles.bold}>Date of Birth:</Text>{" "}
                  {personalInfo.dob}
                </Text>
              </View>
            )}

            {personalInfo.nationality && (
              <View style={styles.infoRow}>
                <Text>
                  <Text style={styles.bold}>Nationality:</Text>{" "}
                  {personalInfo.nationality}
                </Text>
              </View>
            )}

            {personalInfo.maritalStatus && (
              <View style={styles.infoRow}>
                <Text>
                  <Text style={styles.bold}>Marital Status:</Text>{" "}
                  {personalInfo.maritalStatus}
                </Text>
              </View>
            )}

            {personalInfo.languages && (
              <View style={styles.infoRow}>
                <Text>
                  <Text style={styles.bold}>Languages:</Text>{" "}
                  {personalInfo.languages}
                </Text>
              </View>
            )}
          </Section>
        )}
      </Page>
    </Document>
  );
}
