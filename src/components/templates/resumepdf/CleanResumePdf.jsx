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
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#334155",
    lineHeight: 1.4,
  },

  /* HEADER */
  header: {
    marginBottom: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },

  name: {
    fontSize: 24,
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: 16,
  },

  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 2,
  },

  contactText: {
    fontSize: 9.5,
    color: "#475569",
  },

  separator: {
    fontSize: 9,
    color: "#cbd5e1",
    marginHorizontal: 4,
  },

  socialRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 4,
    fontWeight: 500,
  },

  link: {
    fontSize: 9,
    color: "#0048b5",
    textDecoration: "none",
  },

  /* SECTION */
  section: {
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    paddingBottom: 3,
    marginBottom: 8,
  },

  /* EXPERIENCE / PROJECT */
  item: {
    marginBottom: 6,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },

  title: {
    fontSize: 11,
    fontWeight: 700,
    color: "#0f172a",
  },

  text: {
    fontSize: 10,
    color: "#475569",
    marginTop: 2,
  },

  small: {
    fontSize: 9.5,
    color: "#64748b",
  },

  /* ⭐ DATE BADGE (FIXED AS REQUESTED) */
  badge: {
    fontSize: 8.5,
    color: "#475569",
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },

  /* TECH STACK (MONOSPACE FIX) */
  mono: {
    fontSize: 9,
    color: "#64748b",
    fontFamily: "Courier",
    marginTop: 2,
  },

  /* SKILLS GRID (matches sm:grid-cols-2 gap-6) */

  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  skillCard: {
    width: "48%", // 👈 matches 2-column grid
    marginBottom: 10,
  },

  skillCategory: {
    fontSize: 9.5,
    fontWeight: 700,
    color: "#334155",
    marginBottom: 4,
  },

  skillsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  skillTag: {
    fontSize: 8.5,
    backgroundColor: "#f1f5f9",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 4,
    color: "#334155",
    borderRadius: 3,
  },
  /* ⭐ ADDITIONAL INFO 4-COLUMN GRID */
  grid4: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  gridItem: {
    width: "23%",
    marginBottom: 6,
  },

  gridLabel: {
    fontSize: 8,
    color: "#94a3b8",
    textTransform: "uppercase",
    marginBottom: 2,
  },

  gridValue: {
    fontSize: 9.5,
    color: "#334155",
  },
});

/* ---------------- COMPONENT ---------------- */

const CleanResumePdf = ({ values = {} }) => {
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
    personalInfo.maritalStatus ||
    personalInfo.nationality ||
    personalInfo.languages;

  const validSkillGroups = skillGroups.filter(
    (group) =>
      group.category?.trim() || group.skills?.some((skill) => skill?.trim()),
  );

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        {/* ---------------- HEADER ---------------- */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {personalInfo.firstName} {personalInfo.lastName}
          </Text>

          <View style={styles.contactRow}>
            {personalInfo.email && (
              <Text style={styles.contactText}>{personalInfo.email}</Text>
            )}
            {personalInfo.phone && (
              <Text style={styles.contactText}>| {personalInfo.phone}</Text>
            )}
          </View>

          <View style={styles.contactRow}>
            {personalInfo.address && (
              <Text style={styles.contactText}>{personalInfo.address}</Text>
            )}
          </View>

          <View style={styles.socialRow}>
            {personalInfo.linkedin && (
              <Text src={personalInfo.linkedin} style={styles.link}>
                LinkedIn Profile
              </Text>
            )}
            {personalInfo.github && (
              <Text src={personalInfo.github} style={styles.link}>
                GitHub Profile
              </Text>
            )}
          </View>
        </View>

        {/* ---------------- SUMMARY ---------------- */}
        {careerObjective && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Profile</Text>
            <Text style={styles.text}>{careerObjective}</Text>
          </View>
        )}

        {/* ---------------- EXPERIENCE ---------------- */}
        {experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>

            {experience.map((exp, i) => (
              <View key={i} style={styles.item}>
                <View style={styles.rowBetween}>
                  <Text style={styles.title}>{exp.role}</Text>
                  <Text style={styles.badge}>
                    {exp.startDate} – {exp.endDate || "Present"}
                  </Text>
                </View>

                <Text style={styles.small}>{exp.company}</Text>

                {exp.description && (
                  <Text style={styles.text}>{exp.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* ---------------- PROJECTS ---------------- */}
        {projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Projects</Text>

            {projects.map((p, i) => (
              <View key={i} style={styles.item}>
                <View style={styles.rowBetween}>
                  <Text style={styles.title}>{p.name}</Text>

                  {p.link && (
                    <Link src={p.link} style={styles.link}>
                      View Project
                    </Link>
                  )}
                </View>

                {p.techStack && (
                  <Text style={styles.mono}>Stack: {p.techStack}</Text>
                )}

                {p.description && (
                  <Text style={styles.text}>{p.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* ---------------- EDUCATION ---------------- */}
        {education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>

            {education.map((edu, i) => (
              <View key={i} style={styles.item}>
                <View style={styles.rowBetween}>
                  <Text style={styles.title}>{edu.course}</Text>
                  <Text style={styles.small}>{edu.passingYear}</Text>
                </View>

                <Text style={styles.small}>{edu.institute}</Text>

                {edu.percentage && (
                  <Text style={styles.small}>Score: {edu.percentage}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* ---------------- SKILLS ---------------- */}
        {validSkillGroups?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>

            <View style={styles.skillsGrid}>
              {validSkillGroups.map((group, i) => (
                <View key={i} style={styles.skillCard}>
                  {/* Category */}
                  <Text style={styles.skillCategory}>{group.category}</Text>

                  {/* Skills */}
                  <View style={styles.skillsWrap}>
                    {group.skills?.filter(Boolean).map((s, j) => (
                      <Text key={j} style={styles.skillTag}>
                        {s}
                      </Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* ---------------- ADDITIONAL INFO ---------------- */}
        {hasAdditionalInfo && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Additional Information</Text>

            <View style={styles.grid4}>
              {personalInfo.dob && (
                <View style={styles.gridItem}>
                  <Text style={styles.gridLabel}>DOB</Text>
                  <Text style={styles.gridValue}>{personalInfo.dob}</Text>
                </View>
              )}

              {personalInfo.nationality && (
                <View style={styles.gridItem}>
                  <Text style={styles.gridLabel}>Nationality</Text>
                  <Text style={styles.gridValue}>
                    {personalInfo.nationality}
                  </Text>
                </View>
              )}

              {personalInfo.maritalStatus && (
                <View style={styles.gridItem}>
                  <Text style={styles.gridLabel}>Status</Text>
                  <Text style={styles.gridValue}>
                    {personalInfo.maritalStatus}
                  </Text>
                </View>
              )}

              {personalInfo.languages && (
                <View style={styles.gridItem}>
                  <Text style={styles.gridLabel}>Languages</Text>
                  <Text style={styles.gridValue}>{personalInfo.languages}</Text>
                </View>
              )}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default CleanResumePdf;
