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
    color: "#1e293b",
    fontSize: 10,
  },

  // HEADER
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    paddingBottom: 14,
    marginBottom: 12,
    alignItems: "center",
  },

  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: "#0f172a",
    marginBottom: 8,
  },

  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 4,
  },

  contactText: {
    fontSize: 9,
    color: "#64748b",
    marginHorizontal: 8,
  },

  socialLink: {
    fontSize: 9,
    color: "#4f46e5",
    marginHorizontal: 8,
    textDecoration: "none",
  },

  // SECTION
  section: {
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#4338ca",
    textTransform: "uppercase",
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#c3dafe",
    marginBottom: 6,
  },

  paragraph: {
    fontSize: 10,
    color: "#334155",
    lineHeight: 1.5,
  },

  // TIMELINE ITEMS
  timelineItem: {
    borderLeftWidth: 1,
    borderLeftColor: "#a3bffa",
    paddingLeft: 12,
    marginBottom: 14,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  title: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: "#0f172a",
  },

  subtitle: {
    fontSize: 9,
    color: "#475569",
    marginTop: 2,
  },

  meta: {
    fontSize: 9,
    color: "#64748b",
  },

  // SKILLS
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  skillGroup: {
    width: "48%",
    marginBottom: 12,
  },

  skillCategory: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#0f172a",
    marginBottom: 6,
  },

  skillContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  skillBadge: {
    backgroundColor: "#f1f5f9",
    borderRadius: 4,
    paddingVertical: 3,
    paddingHorizontal: 7,
    marginRight: 5,
    marginBottom: 5,
  },

  skillText: {
    fontSize: 8,
    color: "#334155",
  },

  // BULLETS
  bulletRow: {
    flexDirection: "row",
    marginTop: 4,
  },

  bulletText: {
    flex: 1,
    color: "#475569",
    fontSize: 9,
    lineHeight: 1.4,
  },

  // PROJECTS
  projectItem: {
    marginBottom: 16,
  },

  projectTech: {
    fontSize: 9,
    color: "#64748b",
    marginTop: 3,
    marginBottom:3,
  },

  projectLink: {
    fontSize: 9,
    color: "#4f46e5",
    textDecoration: "none",
  },

  // PERSONAL INFO
  personalGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  personalItem: {
    width: "50%",
    marginBottom: 8,
  },

  personalLabel: {
    fontFamily: "Helvetica-Bold",
    color: "#0f172a",
    fontSize: 9,
  },

  personalText: {
    fontSize: 9,
    color: "#475569",
  },
});

export default function AcademicResumePDF({ values }) {
  const {
    personalInfo = {},
    careerObjective = "",
    education = [],
    skillGroups = [],
    experience = [],
    projects = [],
  } = values;


    const validSkillGroups = skillGroups.filter(
    (group) =>
      group.category?.trim() || group.skills?.some((skill) => skill?.trim()),
  );

  return (
    <Document
      title={`${personalInfo.firstName || "Resume"} Resume`}
    >
      <Page size="A4" style={styles.page}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {personalInfo.firstName} {personalInfo.lastName}
          </Text>

          <View style={styles.contactRow}>
            {personalInfo.email && (
              <Text style={styles.contactText}>
                {personalInfo.email}
              </Text>
            )}

            <Text> | </Text>

            {personalInfo.phone && (
              <Text style={styles.contactText}>
                {personalInfo.phone}
              </Text>
            )}
          </View>

          <View style={styles.contactRow}> 
            {personalInfo.address && (
              <Text style={styles.contactText}>
                {personalInfo.address}
              </Text>
            )}
          </View>

          <View style={styles.contactRow}>
            {personalInfo.linkedin && (
              <Link
                src={personalInfo.linkedin}
                style={styles.socialLink}
              >
                LinkedIn
              </Link>
            )}

            {personalInfo.github && (
              <Link
                src={personalInfo.github}
                style={styles.socialLink}
              >
                GitHub
              </Link>
            )}
          </View>
        </View>

        {/* SUMMARY */}
        {careerObjective && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Professional Summary
            </Text>

            <Text style={styles.paragraph}>
              {careerObjective}
            </Text>
          </View>
        )}

        {/* EDUCATION */}
        {education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Education
            </Text>

            {education.map((edu, index) => (
              <View
                key={index}
                style={styles.timelineItem}
              >
                <View style={styles.rowBetween}>
                  <Text style={styles.title}>
                    {edu.course}
                  </Text>

                  {edu.passingYear && (
                    <Text style={styles.meta}>
                      {edu.passingYear}
                    </Text>
                  )}
                </View>

                <View
                  style={[
                    styles.rowBetween,
                    { marginTop: 3 },
                  ]}
                >
                  <Text style={styles.subtitle}>
                    {edu.institute}
                  </Text>

                  {edu.percentage && (
                    <Text style={styles.meta}>
                      {edu.percentage}
                    </Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        )}

        {/* SKILLS */}
        {validSkillGroups?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Skills
            </Text>

            <View style={styles.skillsGrid}>
              {validSkillGroups.map((group, index) => (
                <View
                  key={index}
                  style={styles.skillGroup}
                >
                  <Text style={styles.skillCategory}>
                    {group.category}
                  </Text>

                  <View style={styles.skillContainer}>
                    {group.skills
                      ?.filter(Boolean)
                      .map((skill, i) => (
                        <View
                          key={i}
                          style={styles.skillBadge}
                        >
                          <Text style={styles.skillText}>
                            {skill}
                          </Text>
                        </View>
                      ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* EXPERIENCE */}
        {experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Experience
            </Text>

            {experience.map((exp, index) => (
              <View
                key={index}
                style={styles.timelineItem}
              >
                <Text style={styles.title}>
                  {exp.role}
                  {exp.company &&
                    ` — ${exp.company}`}
                </Text>

                <Text style={styles.meta}>
                  {exp.startDate}
                  {exp.endDate &&
                    ` - ${exp.endDate}`}
                </Text>

                {exp.location && (
                  <Text style={styles.meta}>
                    {exp.location}
                  </Text>
                )}

                {exp.description && (
                    <View
                        style={styles.bulletRow}
                      >
                        <Text
                          style={styles.bulletText}
                        >
                          {exp.description}
                        </Text>
                      </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* PROJECTS */}
        {projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Projects
            </Text>

            {projects.map((project, index) => (
              <View
                key={index}
                style={styles.projectItem}
              >
                <View style={styles.rowBetween}>
                  <Text style={styles.title}>
                    {project.name}
                  </Text>

                  {project.link && (
                    <Link
                      src={project.link}
                      style={styles.projectLink}
                    >
                      View Project
                    </Link>
                  )}
                </View>

                {project.techStack && (
                  <Text style={styles.projectTech}>
                    {project.techStack}
                  </Text>
                )}

                {project.description && (
                         <View
                        style={styles.bulletRow}
                      >
                        <Text
                          style={styles.bulletText}
                        >
                          {project.description}
                        </Text>
                      </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* PERSONAL INFORMATION */}
        {(personalInfo.dob ||
          personalInfo.maritalStatus ||
          personalInfo.nationality ||
          personalInfo.languages) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Personal Information
            </Text>

            <View style={styles.personalGrid}>
              {personalInfo.dob && (
                <View style={styles.personalItem}>
                  <Text style={styles.personalText}>
                    <Text style={styles.personalLabel}>
                      Date of Birth:
                    </Text>{" "}
                    {personalInfo.dob}
                  </Text>
                </View>
              )}

              {personalInfo.maritalStatus && (
                <View style={styles.personalItem}>
                  <Text style={styles.personalText}>
                    <Text style={styles.personalLabel}>
                      Marital Status:
                    </Text>{" "}
                    {personalInfo.maritalStatus}
                  </Text>
                </View>
              )}

              {personalInfo.nationality && (
                <View style={styles.personalItem}>
                  <Text style={styles.personalText}>
                    <Text style={styles.personalLabel}>
                      Nationality:
                    </Text>{" "}
                    {personalInfo.nationality}
                  </Text>
                </View>
              )}

              {personalInfo.languages && (
                <View style={styles.personalItem}>
                  <Text style={styles.personalText}>
                    <Text style={styles.personalLabel}>
                      Languages:
                    </Text>{" "}
                    {personalInfo.languages}
                  </Text>
                </View>
              )}
            </View>
          </View>
        )}

      </Page>
    </Document>
  );
}