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
    color: "#000",
    lineHeight: 1.5,
  },

  /* HEADER */
  header: {
    textAlign: "center",
    marginBottom: 10,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 18,
  },

  contact: {
    color: "#475569",
    fontSize: 10,
  },

  /* SECTION */
  section: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 8,
  },

  /* COMMON */
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  muted: {
    color: "#475569",
  },

  strong: {
    fontWeight: "bold",
  },

  spacingSmall: {
    marginTop: 4,
  },

  itemSpacing: {
    marginBottom: 6,
  },

  bulletRow: {
    flexDirection: "row",
    marginTop: 4,
  },

  bullet: {
    width: 10,
  },

  bulletText: {
    flex: 1,
  },

  link: {
    color: "#2563eb",
    textDecoration: "none",
  },

  detailsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  detailItem: {
    width: "50%",
    marginBottom: 6,
  },

  detailRow: {
    flexDirection: "row",
  },

  strong: {
    fontWeight: "bold",
  },

  /* PROJECTS */

  projectContainer: {
    width: "100%",
  },

  projectBlock: {
    marginBottom: 10,
  },

  projectName: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#111827",
  },

  projectMetaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 3,
    flexWrap: "wrap", // KEY: prevents overlap on small widths
  },

  projectTech: {
    fontSize: 9,
    color: "#374151",
    flex: 1,
    minWidth: 120,
    lineHeight: 1.4,
  },

  projectLink: {
    fontSize: 9,
    color: "#2563eb",
    textDecoration: "underline",
    flexShrink: 0,
  },

  projectDesc: {
    fontSize: 9,
    color: "#4b5563",
    marginTop: 4,
    lineHeight: 1.5,
  },
});

function ATSSection({ title, children }) {
  return (
    <View style={styles.section}>
      {" "}
      <Text style={styles.sectionTitle}>{title} </Text>
      {children}{" "}
    </View>
  );
}

function Detail({ label, value }) {
  return (
    <View style={styles.detailItem}>
      <Text>
        <Text style={styles.strong}>{label}: </Text>
        {value}
      </Text>
    </View>
  );
}

export default function PrecisionATSResumePdf({ values }) {
  const {
    personalInfo = {},
    careerObjective,
    education = [],
    skillGroups = [],
    experience = [],
    projects = [],
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
      {" "}
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
            <View
              style={[
                styles.rowBetween,
                {
                  justifyContent: "center",
                  gap: 2,
                },
              ]}
            >
              {personalInfo.linkedin && (
                <Link src={personalInfo.linkedin} style={styles.link}>
                  LinkedIn
                </Link>
              )}
              <Text>|</Text>
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
          <ATSSection title="Professional Summary">
            <Text>{careerObjective}</Text>
          </ATSSection>
        )}

        {/* SKILLS */}
        {skillGroups.length > 0 && (
          <ATSSection title="Core Competencies">
            {skillGroups.map((group, index) => (
              <Text key={index} style={styles.itemSpacing}>
                <Text style={styles.strong}>{group.category}:</Text>{" "}
                {group.skills?.filter(Boolean).join(", ")}
              </Text>
            ))}
          </ATSSection>
        )}

        {/* EXPERIENCE */}
        {experience?.length > 0 && (
          <ATSSection title="Professional Experience">
            {experience.map((exp, index) => (
              <View key={index} style={styles.itemSpacing}>
                <View style={styles.rowBetween}>
                  <Text style={styles.strong}>{exp.position || exp.role}</Text>

                  <Text>
                    {exp.startDate} - {exp.endDate}
                  </Text>
                </View>

                <Text style={styles.muted}>{exp.company}</Text>

                {exp.description && (
                  <View style={styles.bulletRow}>
                    <Text style={styles.bullet}>•</Text>

                    <Text style={styles.bulletText}>{exp.description}</Text>
                  </View>
                )}
              </View>
            ))}
          </ATSSection>
        )}

        {/* PROJECTS */}
        {projects?.length > 0 && (
          <ATSSection title="Projects">
            <View style={styles.projectContainer}>
              {projects.map((project, index) => (
                <View key={index} style={styles.projectBlock}>
                  {/* Project Name */}
                  <Text style={styles.projectName}>{project.name}</Text>

                  {/* Tech Stack + Link Row */}
                  {(project.techStack || project.link) && (
                    <View style={styles.projectMetaRow}>
                      {/* Tech Stack */}
                      {project.techStack && (
                        <Text style={styles.projectTech}>
                          Tech Stack: {project.techStack}
                        </Text>
                      )}

                      {/* Project Link */}
                      {project.link && (
                        <Link src={project.link} style={styles.projectLink}>
                          Project Link
                        </Link>
                      )}
                    </View>
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
          </ATSSection>
        )}

        {/* EDUCATION */}
        {education?.length > 0 && (
          <ATSSection title="Education">
            {education.map((edu, index) => (
              <View key={index} style={styles.itemSpacing}>
                <Text style={styles.strong}>{edu.course}</Text>

                <Text>{edu.institute}</Text>

                <Text style={styles.muted}>
                  {edu.passingYear}
                  {edu.percentage && ` | ${edu.percentage}`}
                </Text>
              </View>
            ))}
          </ATSSection>
        )}

        {/* PERSONAL INFO */}
        <ATSSection title="Personal Information">
          <View style={styles.detailsGrid}>
            {personalInfo.dob && (
              <Detail label="Date of Birth" value={personalInfo.dob} />
            )}

            {personalInfo.nationality && (
              <Detail label="Nationality" value={personalInfo.nationality} />
            )}

            {personalInfo.maritalStatus && (
              <Detail
                label="Marital Status"
                value={personalInfo.maritalStatus}
              />
            )}

            {personalInfo.languages && (
              <Detail label="Languages" value={personalInfo.languages} />
            )}
          </View>
        </ATSSection>
      </Page>
    </Document>
  );
}
