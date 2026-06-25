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
    paddingTop: 8,
    paddingHorizontal: 20,
    paddingBottom: 8,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#0f172a",
    lineHeight: 1.5,
  },

  /* HEADER */
  middleLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    marginTop: 10,
    marginBottom: 10,
  },

  name: {
    fontSize: 26,
    fontWeight: 700,
    marginBottom: 14,
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
  },

  text: {
    color: "#475569",
    fontSize: 10,
  },

  link: {
    color: "#475569",
    textDecoration: "none",
    marginRight: 10,
  },

  /* SECTION */
  section: {
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 9,
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "#64748b",
  },

  /* EXPERIENCE / PROJECTS BLOCK */
  block: {
    marginBottom: 10,
  },

  title: {
    fontSize: 11,
    fontWeight: 600,
  },

  subtitle: {
    fontSize: 10,
    color: "#475569",
  },

  projectTechStack: {
    fontSize: 10,
    color: "#475569",
    marginBottom: 2,
  },

  rightText: {
    fontSize: 9,
    color: "#64748b",
    textAlign: "right",
  },

  flexBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },

  description: {
    fontSize: 10,
    color: "#334155",
    lineHeight: 1.5,
  },

  projectLink: {
    color: "#1D4ED8",
    textDecoration: "none",
  },

  /* GRID */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  gridItem: {
    width: "22%",
    borderRadius: 3,
  },

  label: {
    fontSize: 8,
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 1,
  },

  value: {
    fontSize: 10,
    color: "#334155",
  },
});

export default function ProfessionalResumePdf({ values }) {
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

          <View style={styles.row}>
            {personalInfo.email && (
              <Text style={styles.text}>{personalInfo.email}</Text>
            )}

            {personalInfo.phone && (
              <Text style={[styles.text, { marginLeft: 12 }]}>
                {personalInfo.phone}
              </Text>
            )}
          </View>

          {personalInfo.address && (
            <Text style={styles.text}>{personalInfo.address}</Text>
          )}

          <View style={styles.row}>
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
        </View>

        {/* Line */}
        <View style={styles.middleLine}> </View>

        {/* CAREER OBJECTIVE */}
        {careerObjective && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Career Objective</Text>

            <Text style={styles.description}>{careerObjective}</Text>
          </View>
        )}

        {/* SKILLS */}
        {validSkillGroups.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>

            {validSkillGroups.map((group, i) => (
              <View key={i} style={styles.block}>
                <Text style={styles.title}>{group.category}</Text>

                <Text style={styles.subtitle}>
                  {group.skills?.filter(Boolean).map((skill, id) => (
                    <Text key={id}> {skill} </Text>
                  ))}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* EXPERIENCE */}
        {experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>

            {experience.map((exp, i) => (
              <View key={i} style={styles.block}>
                <View style={styles.flexBetween}>
                  <View>
                    <Text style={styles.title}>{exp.role}</Text>

                    <Text style={styles.subtitle}>
                      {exp.company}
                      {exp.location && ` • ${exp.location}`}
                    </Text>
                  </View>

                  <Text style={styles.rightText}>
                    {exp.startDate} — {exp.endDate || "Present"}
                  </Text>
                </View>

                {exp.description && (
                  <Text style={styles.description}>{exp.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* PROJECTS */}
        {projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>

            {projects.map((p, i) => (
              <View key={i} style={styles.block}>
                <View style={styles.flexBetween}>
                  <Text style={styles.title}>{p.name}</Text>

                  {p.link && (
                    <Link src={p.link} style={styles.projectLink}>
                      Project Link
                    </Link>
                  )}
                </View>

                {p.techStack && (
                  <Text style={styles.projectTechStack}>{p.techStack}</Text>
                )}

                {p.description && (
                  <Text style={styles.description}>{p.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* EDUCATION */}
        {education?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>

            {education.map((edu, i) => (
              <View key={i} style={styles.flexBetween}>
                <View>
                  <Text style={styles.title}>{edu.course}</Text>

                  <Text style={styles.subtitle}>{edu.institute}</Text>
                </View>

                <View>
                  <Text style={styles.rightText}>{edu.passingYear}</Text>

                  {edu.percentage && (
                    <Text style={styles.rightText}>{edu.percentage}</Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        )}

        {/* ================= ADDITIONAL ================= */}
        {hasAdditionalInfo && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Information</Text>

            <View style={styles.grid}>
              {personalInfo.dob && (
                <View style={styles.gridItem}>
                  <Text style={styles.label}>DOB</Text>
                  <Text style={styles.value}>{personalInfo.dob}</Text>
                </View>
              )}

              {personalInfo.nationality && (
                <View style={styles.gridItem}>
                  <Text style={styles.label}>Nationality</Text>
                  <Text style={styles.value}>{personalInfo.nationality}</Text>
                </View>
              )}

              {personalInfo.maritalStatus && (
                <View style={styles.gridItem}>
                  <Text style={styles.label}>Status</Text>
                  <Text style={styles.value}>{personalInfo.maritalStatus}</Text>
                </View>
              )}

              {personalInfo.languages && (
                <View style={styles.gridItem}>
                  <Text style={styles.label}>Languages</Text>
                  <Text style={styles.value}>{personalInfo.languages}</Text>
                </View>
              )}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
}
