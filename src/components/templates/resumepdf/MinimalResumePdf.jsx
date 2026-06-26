import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";

/* ================= DESIGN SYSTEM ================= */

const COLORS = {
  text: "#0f172a",
  muted: "#64748b",
  light: "#94a3b8",
  border: "#e2e8f0",
  accent: "#2563eb",
  bgLight: "#f8fafc",
};

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  page: {
    paddingTop: 8,
    paddingHorizontal: 20,
    paddingBottom: 8,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: COLORS.text,
    lineHeight: 1.4,
  },

  /* HEADER */
  header: {
    marginBottom: 8,
  },

  name: {
    fontSize: 28,
    color: COLORS.text,
  },

  lastName: {
    fontWeight: 700,
  },

  objective: {
    fontSize: 10.5,
    color: COLORS.muted,
    fontStyle: "italic",
    marginTop: 20,
    marginBottom: 4,
    maxWidth: "95%",
    lineHeight: 1.3,
  },

  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    fontSize: 9,
    color: "#000301",
    alignItems: "center",
  },

  divider: {
    marginTop: 6,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  /* SECTION */
  section: {
    marginBottom: 8,
  },

  sectionTitle: {
    fontSize: 8.5,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: COLORS.muted,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingBottom: 3,
    marginBottom: 6,
  },

  /* ENTRY */
  entryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  title: {
    fontSize: 12,
    fontWeight: 700,
    color: COLORS.text,
  },

  subtitle: {
    fontSize: 10,
    color: COLORS.muted,
    marginTop: 1,
  },

  rightText: {
    fontSize: 9,
    color: COLORS.muted,
    textAlign: "right",
  },

  /* BULLETS */
  bulletWrap: {
    marginTop: 4,
  },

  bulletRow: {
    flexDirection: "row",
    marginBottom: 1,
  },

  bullet: {
    marginRight: 5,
    color: COLORS.light,
  },

  text: {
    fontSize: 10,
    color: "#475569",
    flex: 1,
  },

  /* SKILLS */
  skillRow: {
    flexDirection: "row",
    marginBottom: 3,
  },

  skillCategory: {
    width: 110,
    fontSize: 10,
    fontWeight: 700,
    color: COLORS.text,
  },

  skillText: {
    fontSize: 10,
    color: "#475569",
    flex: 1,
  },

  /* GRID */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  gridItem: {
    width: "22%",
    padding: 5,
    backgroundColor: COLORS.bgLight,
    borderRadius: 3,
  },

  label: {
    fontSize: 8,
    color: COLORS.light,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 1,
  },

  value: {
    fontSize: 10,
    color: "#334155",
  },

  /* LINK */
  link: {
    fontSize: 9,
    color: "#000301",
  },

  projectLeft: {
    flex: 1,
    minWidth: 0, // IMPORTANT for text wrapping in react-pdf
  },

  projectRight: {
    marginLeft: 8,
    flexShrink: 0,
    alignItems: "flex-end",
  },

  // Personal Information

  gridRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 6,
  },

  fullWidthItem: {
    width: "100%",
  },
});

/* ================= SECTION WRAPPER ================= */

const Section = ({ title, children }) => {
  if (!children) return null;

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
};

/* ================= COMPONENT ================= */

export default function MinimalResumePdf({ values = {} }) {
  const {
    personalInfo = {},
    careerObjective,
    education = [],
    skillGroups = [],
    experience = [],
    projects = [],
  } = values;

  const hasAdditionalInfo =
   personalInfo.dob||
    personalInfo.nationality ||
    personalInfo.maritalStatus ||
    personalInfo.languages;


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
            {personalInfo.firstName}{" "}
            <Text style={styles.lastName}>{personalInfo.lastName}</Text>
          </Text>

          {careerObjective && (
            <Text style={styles.objective}>{careerObjective}</Text>
          )}

          <View style={styles.contactRow}>
            {personalInfo.email && (
              <Text>{personalInfo.email}</Text>
            )}

            {personalInfo.phone && (
              <>
                <Text>{personalInfo.phone}</Text>
              </>
            )}
          </View>

          <View style={styles.contactRow}>
            {personalInfo.address && (
              <>
                <Text>{personalInfo.address}</Text>
              </>
            )}
          </View>

          <View style={styles.contactRow}>
            {personalInfo.linkedin && (
              <>
                <Link style={styles.link} src={personalInfo.linkedin}>
                  LinkedIn
                </Link>
              </>
            )}

            {personalInfo.github && (
              <>
                <Link style={styles.link} src={personalInfo.github}>
                  GitHub
                </Link>
              </>
            )}
          </View>

          <View style={styles.divider} />
        </View>

        {/* ================= EXPERIENCE ================= */}
        {experience.length > 0 && (
          <Section title="Experience">
            {experience.map((exp, i) => (
              <View key={i} style={{ marginBottom: 10 }}>
                <View style={styles.entryRow}>
                  <View>
                    <Text style={styles.title}>{exp.role}</Text>
                    <Text style={styles.subtitle}>
                      {exp.company}
                      {exp.location ? ` · ${exp.location}` : ""}
                    </Text>
                  </View>

                  <Text style={styles.rightText}>
                    {exp.startDate} {exp.endDate ? `– ${exp.endDate}` : ""}
                  </Text>
                </View>

                {exp.description && (
                  <View style={styles.bulletWrap}>
                    {exp.description
                      .split("\n")
                      .filter(Boolean)
                      .map((line, j) => (
                        <View key={j} style={styles.bulletRow}>
                          <Text style={styles.bullet}>—</Text>
                          <Text style={styles.text}>{line}</Text>
                        </View>
                      ))}
                  </View>
                )}
              </View>
            ))}
          </Section>
        )}

        {/* ================= PROJECTS ================= */}
        {projects.length > 0 && (
          <Section title="Projects">
            {projects.map((project, i) => (
              <View key={i} style={{ marginBottom: 2 }}>
                <View style={styles.entryRow}>
                  {/* LEFT SIDE (must be constrained) */}
                  <View style={styles.projectLeft}>
                    <Text style={styles.title}>{project.name}</Text>

                    {project.techStack && (
                      <Text style={styles.subtitle}>{project.techStack}</Text>
                    )}
                  </View>

                  {/* RIGHT SIDE (fixed width) */}
                  {project.link && (
                    <View style={styles.projectRight}>
                      <Link style={styles.link} src={project.link}>
                        View Project
                      </Link>
                    </View>
                  )}
                </View>

                {project.description && (
                  <View style={styles.bulletWrap}>
                    {project.description
                      .split("\n")
                      .filter(Boolean)
                      .map((line, j) => (
                        <View key={j} style={styles.bulletRow}>
                          <Text style={styles.bullet}>—</Text>
                          <Text style={styles.text}>{line}</Text>
                        </View>
                      ))}
                  </View>
                )}
              </View>
            ))}
          </Section>
        )}
        {/* ================= EDUCATION ================= */}
        {education.length > 0 && (
          <Section title="Education">
            {education.map((edu, i) => (
              <View key={i} style={{ marginBottom: 8 }}>
                <View style={styles.entryRow}>
                  <View>
                    <Text style={styles.title}>{edu.course}</Text>
                    <Text style={styles.subtitle}>{edu.institute}</Text>
                  </View>

                  <Text style={styles.rightText}>
                    {edu.passingYear}
                    {edu.percentage ? `\n${edu.percentage}` : ""}
                  </Text>
                </View>
              </View>
            ))}
          </Section>
        )}

        {/* ================= SKILLS ================= */}
        {skillGroups.length > 0 && (
          <Section title="Skills">
            {skillGroups.map((group, i) => (
              <View key={i} style={styles.skillRow}>
                <Text style={styles.skillCategory}>{group.category}</Text>
                <Text style={styles.skillText}>
                  {group.skills?.filter(Boolean).join(", ")}
                </Text>
              </View>
            ))}
          </Section>
        )}

        {/* ================= ADDITIONAL ================= */}
        {hasAdditionalInfo && (
          <Section title="Additional">
            {/* ROW 1 */}
            <View style={styles.gridRow}>
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
            </View>

            {/* ROW 2 */}
            {personalInfo.languages && (
              <View style={styles.gridRow}>
                <View style={[styles.gridItem, styles.fullWidthItem]}>
                  <Text style={styles.label}>Languages</Text>
                  <Text style={styles.value}>{personalInfo.languages}</Text>
                </View>
              </View>
            )}
          </Section>
        )}
      </Page>
    </Document>
  );
}


