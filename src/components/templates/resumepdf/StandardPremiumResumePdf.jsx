import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

/* STYLES */
const styles = StyleSheet.create({
  page: {
    paddingTop: 8,
    paddingHorizontal: 20,
    paddingBottom: 8,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#0f172a",
    backgroundColor: "#ffffff",
  },


  /* HEADER */
  name: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 4,
  },

  headerBlock: {
    marginBottom: 6,
  },

  labelText: {
    fontSize: 9,
    color: "#334155",
    marginBottom: 2,
  },

  linkRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 2,
  },

  link: {
    color: "#2563eb",
    textDecoration: "none",
  },

  /* SECTION */
  section: {
    marginTop: 2,
    marginBottom:4,
  },

  sectionTitleWrap: {
    backgroundColor: "#e5e7eb",
    paddingVertical: 5,
    paddingHorizontal: 7,
    marginBottom: 4,
  },

  sectionTitle: {
    fontSize: 10,
    fontWeight: 800,
    textTransform: "uppercase",
  },

  /* TEXT */
  text: {
    fontSize: 10,
    lineHeight: 1.4,
    color: "#0f172b",
  },

  bold: {
    fontWeight: 700,
    color: "#0f172a",
  },

  /* EXPERIENCE */
  expItem: {
    marginBottom: 4,
    paddingLeft: 6,
  },

  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },

  expRoleText: {
    fontSize: 9,
    lineHeight: 1.4,
    color: "#334155",
    fontWeight: 600,
  },

  expLocationText : {
    fontSize: 9,
    color: "#64748B",
  },

  /* EDUCATION TABLE (PDF SAFE) */
tableRow: {
  flexDirection: "row",
  borderBottomWidth: 0.5,
  borderBottomColor: "#18191a",
},

tableHeader: {
  backgroundColor: "#e2e8f0",
  borderBottomWidth: 0.8,
  borderBottomColor: "#94a3b8",
},

cell: {
  fontSize: 9,
  paddingVertical: 5,
  paddingHorizontal: 4,
  color: "#0f172a",
},

cellBold: {
  fontWeight: 700,
},




  /* PERSONAL DETAILS */
personalRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 4,
},

personalCell: {
  width: "48%",
  fontSize: 9,
  color: "#334155",
},

});

/* SECTION */
const Section = ({ title, children }) => (
  <View style={styles.section}>
    <View style={styles.sectionTitleWrap}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
    {children}
  </View>
);

/* MAIN COMPONENT */
export default function StandardPremiumResumePdf({ values }) {
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
      group.category?.trim() ||
      group.skills?.some((skill) => skill?.trim())
  );


  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>

          {/* HEADER */}
          <View style={styles.headerBlock}>
            <Text style={styles.name}>
              {personalInfo.firstName} {personalInfo.lastName}
            </Text>

            <Text style={styles.labelText}>
              Email: {personalInfo.email}
            </Text>

            <Text style={styles.labelText}>
              Phone: {personalInfo.phone}
            </Text>

            <Text style={styles.labelText}>
              Address: {personalInfo.address}
            </Text>

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

          {/* SUMMARY */}
          {careerObjective && (
            <Section title="Career Objective">
              <Text style={styles.text}>{careerObjective}</Text>
            </Section>
          )}


          {/* PROJECTS */}
          {projects?.length > 0 && (
            <Section title="Projects">
              {projects.map((project, i) => (
                <View key={i} style={{ marginBottom: 8 }}>
                  <Text style={[styles.text, styles.bold]}>
                    {project.name}
                  </Text>

                  {project.techStack && (
                    <Text style={styles.text}>
                      {project.techStack}
                    </Text>
                  )}

                  <Text style={styles.text}>
                    {project.description}
                  </Text>

                  {project.link && (
                    <Link style={styles.link} src={project.link}>
                      View Project
                    </Link>
                  )}
                </View>
              ))}
            </Section>
          )}

          {/* EXPERIENCE */}
          {experience?.length > 0 && (
            <Section title="Experience">
              {experience.map((exp, i) => (
                <View key={i} style={styles.expItem}>

                  <View style={styles.expHeader}>
                    <Text style={[styles.text, styles.bold]}>
                      {exp.company}
                    </Text>

                    <Text style={styles.text}>
                      {exp.startDate} - {exp.endDate}
                    </Text>
                  </View>

                  <Text style={styles.expRoleText}>
                    {exp.role}
                  </Text>

                  {exp.location && (
                    <Text style={styles.expLocationText}>
                      {exp.location}
                    </Text>
                  )}

                  <Text style={styles.text}>
                    {exp.description}
                  </Text>

                </View>
              ))}
            </Section>
          )}

{/* SKILLS */}
{validSkillGroups?.length > 0 && (
  <Section title="Skills">
    {validSkillGroups.map((group, i) => (
      <View key={i} style={{ marginBottom: 6 }}>
        <Text style={styles.text}>
          <Text style={styles.bold}>
            {group.category}:
          </Text>{" "}
          {group.skills?.filter(Boolean).join(", ")}
        </Text>
      </View>
    ))}
  </Section>
)}

          {/* EDUCATION */}
{education?.length > 0 && (
  <Section title="Education">

    {/* TABLE HEADER */}
    <View style={[styles.tableRow, styles.tableHeader]}>

      <Text style={[styles.cell, styles.cellBold, { flex: 2 }]}>
        Course
      </Text>

      <Text style={[styles.cell, styles.cellBold, { flex: 3 }]}>
        Institute
      </Text>

      <Text style={[styles.cell, styles.cellBold, { flex: 2 }]}>
        Year
      </Text>

      <Text style={[styles.cell, styles.cellBold, { flex: 2 }]}>
        Percentage
      </Text>

    </View>

    {/* TABLE ROWS */}
    {education.map((edu, i) => (
      <View key={i} style={styles.tableRow} wrap={true}>

        <Text style={[styles.cell, { flex: 2 }]}>
          {edu.course}
        </Text>

        <Text style={[styles.cell, { flex: 3 }]}>
          {edu.institute}
        </Text>

        <Text style={[styles.cell, { flex: 2 }]}>
          {edu.passingYear}
        </Text>

        <Text style={[styles.cell, { flex: 2 }]}>
          {edu.percentage}
        </Text>

      </View>
    ))}

  </Section>
)}



 {/* PERSONAL DETAILS */}
<Section title="Personal Details">
  <View wrap={true}>

    <View style={styles.personalRow}>
      <Text style={styles.personalCell}>
        <Text style={styles.bold}>Date of Birth:</Text>{" "}
        {personalInfo?.dob}
      </Text>

      <Text style={styles.personalCell}>
        <Text style={styles.bold}>Languages:</Text>{" "}
        {personalInfo?.languages}
      </Text>
    </View>

    <View style={styles.personalRow}>
      <Text style={styles.personalCell}>
        <Text style={styles.bold}>Marital Status:</Text>{" "}
        {personalInfo?.maritalStatus}
      </Text>

      <Text style={styles.personalCell}>
        <Text style={styles.bold}>Nationality:</Text>{" "}
        {personalInfo?.nationality}
      </Text>
    </View>

  </View>
</Section>


        </View>
      </Page>
    </Document>
  );
}