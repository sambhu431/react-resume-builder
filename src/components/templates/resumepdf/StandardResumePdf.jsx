import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

/* =========================
   STYLES
========================= */
const styles = StyleSheet.create({
  page: {
    paddingTop: 10,
    paddingHorizontal: 24,
    paddingBottom: 10,
    fontSize: 10,
    backgroundColor: "#f4f6f8",
    fontFamily: "Helvetica",
    color: "#111827",
    backgroundColor: "#ffffff",
  },

  /* HEADER */
  name: {
    fontSize: 22,
    fontWeight: 800,
    textTransform: "uppercase",
  },

  lastName: {
    fontWeight: "light",
  },

  infoBlock: {
    marginTop: 8,
    fontSize: 9,
    color: "#374151",
    lineHeight: 1.4,
  },

  linksRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
    marginBottom: 8,
  },

  link: {
    fontSize: 9,
    color: "#000",
    textDecoration: "none",
    marginRight: 10,
  },

  projectLink: {
    fontSize: 9,
    textDecoration: "none",
    color: "#2563eb",
  },

  /* SECTION HEADER */
  sectionHeaderWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "flex-start",
    marginTop: 6,
    marginBottom: 4,
  },

  sectionHeaderText: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: "#e5e7eb",
    fontSize: 9,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: "#000",
  },

  /* GENERIC */
  block: {
    marginBottom: 10,
  },

  bold: {
    fontWeight: 700,
    marginBottom: 2,
  },

  subtle: {
    color: "#6b7280",
    fontSize: 9,
    marginBottom: 2,
  },

  text: {
    fontSize: 9,
    color: "#374151",
    lineHeight: 1.5,
  },

  /* EXPERIENCE / PROJECT INDENT */
  timelineItem: {
    borderLeftWidth: 1,
    borderLeftColor: "#000",
    paddingLeft: 8,
    marginBottom: 10,
  },

  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 2,
  },

  infoRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
    marginBottom: 6,
  },

  infoItem: {
    fontSize: 10,
    color: "#475569",
    marginRight: 10,
    marginBottom: 2,
  },

  bold: {
    fontWeight: 700,
  },
});

/* =========================
   SECTION COMPONENT
========================= */
const Section = ({ title, children }) => (
  <View>
    <View style={styles.sectionHeaderWrap}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
    {children}
  </View>
);

/* =========================
   MAIN COMPONENT
========================= */
export default function StandardResumePdf({ values }) {
  const {
    personalInfo,
    careerObjective,
    education,
    skillGroups,
    experience,
    projects,
  } = values;

  // const validSkillGroups = skillGroups.filter(
  //   (group) =>
  //     group.category?.trim() || group.skills?.some((skill) => skill?.trim()),
  // );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          {/* ================= HEADER ================= */}
          <Text style={styles.name}>
            {personalInfo.firstName}{" "}
            <Text style={styles.lastName}>{personalInfo.lastName}</Text>
          </Text>

          <View style={styles.infoBlock}>
            <Text>{personalInfo.email}</Text>

            <Text>{personalInfo.phone}</Text>

            <Text>{personalInfo.address}</Text>

            <View style={styles.linksRow}>
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

          {/* ================= CAREER OBJECTIVE ================= */}
          {careerObjective && (
            <Section title="Career Objective">
              <Text style={styles.text}>{careerObjective}</Text>
            </Section>
          )}

          {/* ================= EXPERIENCE ================= */}
          {experience?.length > 0 && (
            <Section title="Experience">
              {experience.map((exp, i) => (
                <View key={i} style={styles.timelineItem}>
                  <Text style={styles.bold}>{exp.role || exp.position}</Text>

                  <Text style={styles.subtle}>{exp.company}</Text>

                  <Text style={styles.subtle}>
                    {exp.startDate} - {exp.endDate}
                  </Text>

                  {exp.location && (
                    <Text style={styles.subtle}>{exp.location}</Text>
                  )}

                  {exp.description && <Text>{exp.description}</Text>}
                </View>
              ))}
            </Section>
          )}

          {/* ================= EDUCATION ================= */}
          {education?.length > 0 && (
            <Section title="Education">
              {education.map((edu, i) => (
                <View key={i} style={styles.timelineItem}>
                  <Text style={styles.bold}>{edu.course}</Text>
                  <Text style={styles.subtle}>{edu.institute}</Text>
                  <Text style={styles.subtle}>
                    {edu.passingYear}
                    {edu.percentage ? ` • ${edu.percentage}` : ""}
                  </Text>
                </View>
              ))}
            </Section>
          )}

          {/* ================= SKILLS ================= */}
          {skillGroups?.length > 0 && (
            <Section title="Skills">
              {skillGroups.map((group, i) => (
                <View key={i}>
                  <Text style={styles.bold}>{group.category}</Text>
                  <Text style={styles.text}>
                    {group.skills?.filter(Boolean).join(", ")}
                  </Text>
                </View>
              ))}
            </Section>
          )}

          {/* ================= PROJECTS ================= */}
          {projects?.length > 0 && (
            <Section title="Projects">
              {projects.map((project, i) => (
                <View key={i} style={styles.timelineItem}>
                  {/* HEADER ROW: NAME + LINK */}
                  <View style={styles.projectHeader}>
                    <Text style={styles.bold}>{project.name}</Text>

                    {project.link && (
                      <Link style={styles.projectLink} src={project.link}>
                        View Project
                      </Link>
                    )}
                  </View>

                  {/* TECH STACK */}
                  {project.techStack && (
                    <Text style={styles.subtle}>{project.techStack}</Text>
                  )}

                  {/* DESCRIPTION */}
                  <Text style={styles.text}>{project.description}</Text>
                </View>
              ))}
            </Section>
          )}

          {/* ================= PERSONAL INFORMATION ================= */}
          <Section title="Personal Information">
            <View style={styles.infoRow}>
              {personalInfo.dob && (
                <Text style={styles.infoItem}>
                  <Text style={styles.bold}>DOB:</Text> {personalInfo.dob}
                </Text>
              )}

              {personalInfo.maritalStatus && (
                <Text style={styles.infoItem}>
                  <Text style={styles.bold}>Status:</Text>{" "}
                  {personalInfo.maritalStatus}
                </Text>
              )}

              {personalInfo.nationality && (
                <Text style={styles.infoItem}>
                  <Text style={styles.bold}>Nationality:</Text>{" "}
                  {personalInfo.nationality}
                </Text>
              )}
            </View>

            {personalInfo.languages && (
              <Text style={styles.infoItem}>
                <Text style={styles.bold}>Languages:</Text>{" "}
                {personalInfo.languages}
              </Text>
            )}
          </Section>
        </View>
      </Page>
    </Document>
  );
}
