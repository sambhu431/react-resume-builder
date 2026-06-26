import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  page: {
    paddingTop: 8,
    paddingHorizontal: 20,
    paddingBottom: 8,
    fontSize: 10,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#334155",
  },

  /* HEADER */
  header: {
    textAlign: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#141414",
    paddingBottom: 10,
    marginBottom: 8,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 6,
  },

  contact: {
    fontSize: 9,
    color: "#475569",
    marginBottom: 2,
  },

  linkRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginTop: 6,
  },

  link: {
    fontSize: 9,
    color: "#2563eb",
  },

  /* OBJECTIVE */
  section: {
    marginBottom: 10,
  },

  title: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#0f172a",
    borderBottomWidth: 0.5,
    borderBottomColor: "#141414",
    paddingBottom: 4,
    marginBottom: 6,
  },

  text: {
    fontSize: 10,
    color: "#475569",
    lineHeight: 1.4,
    marginTop: 2,
  },

  /* LAYOUT (3 COLUMN SAFE FOR PDF) */
  row: {
    flexDirection: "row",
  },

  sidebar: {
    width: "35%",
    paddingRight: 6,
  },

  main: {
    width: "65%",
    paddingLeft: 6,
  },

  /* ITEMS */
  item: {
    marginBottom: 8,
  },

  bold: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#0f172a",
  },

  small: {
    fontSize: 9,
    color: "#64748b",
  },

  separator: {
    fontSize: 9,
    color: "#cbd5e1",
  },

  /* SKILLS */
  skillCategory: {
    fontSize: 9.5,
    fontWeight: "bold",
    marginBottom: 2,
    color: "#0f172a",
  },

  skillText: {
    fontSize: 9,
    color: "#475569",
  },

  /* PROJECTS */

  projectItem: {
    marginBottom: 10,
  },

  projectHeader: {
    flexDirection: "row",

    // IMPORTANT: prevents overlap
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  projectName: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1f2937",
    flex: 1,
    paddingRight: 6,
    minWidth: 120,
  },

  projectLink: {
    fontSize: 9,
    color: "#2563eb",
    textDecoration: "underline",
    flexShrink: 0,
  },

  projectTech: {
    fontSize: 9,
    color: "#6b7280",
    marginTop: 2,
  },

  projectDesc: {
    fontSize: 9.5,
    color: "#374151",
    marginTop: 3,
    lineHeight: 1.4,
  },
});

/* ---------------- COMPONENT ---------------- */

const EntryLevelResumePDF = ({ values = {} }) => {
  const {
    personalInfo = {},
    careerObjective = "",
    education = [],
    skillGroups = [],
    experience = [],
    projects = [],
  } = values;

  // const clean = (v) => v?.trim(); 

  // const validSkillGroups = skillGroups.filter(
  //   (group) =>
  //     group.category?.trim() || group.skills?.some((skill) => skill?.trim()),
  // );

  
  // const validExperience = experience.filter(
  //   (exp) => clean(exp.role) || clean(exp.company) || clean(exp.description),
  // );

  // const validProjects = projects.filter(
  //   (p) => clean(p.name) || clean(p.description),
  // );

  // const validEducation = education.filter(
  //   (e) => clean(e.course) || clean(e.institute),
  // );


  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        {/* ================= HEADER ================= */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {personalInfo.firstName} {personalInfo.lastName}
          </Text>

          {personalInfo.email && (
            <Text style={styles.contact}>{personalInfo.email}</Text>
          )}
          {personalInfo.phone && (
            <Text style={styles.contact}>{personalInfo.phone}</Text>
          )}
          {personalInfo.address && (
            <Text style={styles.contact}>{personalInfo.address}</Text>
          )}

          <View style={styles.linkRow}>
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

        {/* ================= OBJECTIVE ================= */}
        {careerObjective && (
          <View style={styles.section}>
            <Text style={styles.title}>Career Objective</Text>
            <Text style={styles.text}>{careerObjective}</Text>
          </View>
        )}

        {/* ================= MAIN LAYOUT ================= */}
        <View style={styles.row}>
          {/* -------- SIDEBAR -------- */}
          <View style={styles.sidebar}>
            {/* SKILLS */}
            {skillGroups.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.title}>Skills</Text>

                {skillGroups.map((group, i) => (
                  <View key={i} style={styles.item}>
                    <Text style={styles.skillCategory}>{group.category}</Text>

                    <Text style={styles.skillText}>
                      {group.skills?.filter(Boolean).join(" • ")}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            {/* EDUCATION */}
            {education.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.title}>Education</Text>

                {education.map((edu, i) => (
                  <View key={i} style={styles.item}>
                    <Text style={styles.bold}>{edu.course}</Text>
                    <Text style={styles.small}>{edu.institute}</Text>
                    <Text style={styles.small}>
                      {edu.passingYear}
                      {edu.percentage && ` • ${edu.percentage}`}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            {/* PERSONAL INFO */}
            {(personalInfo.languages ||
              personalInfo.nationality ||
              personalInfo.maritalStatus || 
              personalInfo.dob ) && (
              <View style={styles.section}>
                <Text style={styles.title}>Personal Info</Text>

                {personalInfo.dob && (
                  <Text style={styles.small}>DOB: {personalInfo.dob}</Text>
                )}
                {personalInfo.languages && (
                  <Text style={styles.small}>
                    Languages: {personalInfo.languages}
                  </Text>
                )}
                {personalInfo.nationality && (
                  <Text style={styles.small}>
                    Nationality: {personalInfo.nationality}
                  </Text>
                )}
                {personalInfo.maritalStatus && (
                  <Text style={styles.small}>
                    Status: {personalInfo.maritalStatus}
                  </Text>
                )}
              </View>
            )}
          </View>

          {/* -------- MAIN -------- */}
          <View style={styles.main}>
            {/* PROJECTS */}
            {projects.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.title}>Projects</Text>

                {projects.map((project, i) => (
                  <View key={i} style={styles.projectItem}>
                    {/* Header row: Name + Link */}
                    <View style={styles.projectHeader}>
                      <Text style={styles.projectName}>{project.name}</Text>

                      {project.link && (
                        <Link src={project.link} style={styles.projectLink}>
                          Link
                        </Link>
                      )}
                    </View>

                    {/* Tech Stack */}
                    {project.techStack && (
                      <Text style={styles.projectTech}>
                        {project.techStack}
                      </Text>
                    )}

                    {/* Description */}
                    {project.description && (
                      <Text style={styles.projectDesc}>
                        {project.description}
                      </Text>
                    )}
                  </View>
                ))}
              </View>
            )}

            {/* EXPERIENCE */}
            {experience.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.title}>Experience</Text>

                {experience.map((exp, i) => (
                  <View key={i} style={styles.item}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={styles.bold}>
                        {exp.role}
                      </Text>

                      <Text style={styles.small}>
                        {exp.startDate} - {exp.endDate || "Present"}
                      </Text>
                    </View>

                    <Text>
                      {exp.company && `${exp.company}`} — {exp.location}
                    </Text>

                    {exp.description && (
                      <Text style={styles.text}>{exp.description}</Text>
                    )}
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default EntryLevelResumePDF;
