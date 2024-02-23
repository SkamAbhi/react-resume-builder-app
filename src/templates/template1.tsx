import { Email } from "@carbon/icons-react";
import { useStyletron } from "baseui";
import React from "react";

interface ResumeProps {
  data: {
    summary?: {
      summaryDetails?: string;
    }
    personalInfo?: {
      firstName?: string;
      lastName?: string;
      email?: string;
      phoneNumber?: string;
      location?: {
        address?: string;
      };
      website?: string;
      profession?: string;
    };
    educationDetails?: Array<{
      instituteName?: string;
      fieldOfStudy?: string;
      instituteLocation?: string;
      startDate?: string;
      endDate?: string;
      degree?: string;
    }>;
    workExperience?:Array<{
      description?: string;
      jobTitle?: string;
      position?: string;
      startDate?: string;
      endDate?: string;
      company?: {
        companyName?: string;
      }
        companyAddress?: {
          city?: string;
          country?: string;
        
      };
    }>;
    skills?: Array<{
      skillName?: string;
      keywords?: string[];
    }>;
    projects?: Array<{
      title?: string;
      role?: string;
      technologies?: string[];
      responsibilities?: string;
      results?: string;
    }>;
    awards?: Array<{
      title?: string;
      summary?: string;
      awarder?: string;
      date?: string;
    }>;
    headings?: {
      education?: string;
      work?: string;
      skills?: string;
      projects?: string;
      awards?: string;
    };
  };
}

const Resume1: React.FC<ResumeProps> = ({ data }) => {
  const [css, $theme] = useStyletron();
  const styles = {
    section: {
      padding: "20px",
      paddingBottom: '10px',
      background: "#fff",
      paddingLeft: "25px",
    },
    heading: {
      color: "#333",
      fontSize: "24px",
      marginBottom: "15px",
      paddingBottom: "15px",
      borderBottom: "1px solid blue",
    },
    subheading: {
      color: "#555",
      fontSize: "18px",
      marginBottom: "10px",
    },
    list: {
      listStyleType: "none",
      margin: "0",
      padding: "0",
    },
    listItem: {
      marginBottom: "10px",
      color: "#777",
    },
    link: {
      color: "#3498db",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };

  const renderProfile = (basics?: ResumeProps["data"]["personalInfo"]) => {
    if (!basics) {
      return null;
    }

    const {
      email,
      phoneNumber: phone,
      location = {},
      website,
    } = basics;

    return (
      <div className={css({})}>
        <div
          className={css({
            paddingTop: $theme.sizing.scale800,
            paddingLeft: $theme.sizing.scale800,
            display: "flex",
            flexDirection: "column",
            gap: "3px",
            flex: "1.5",
          })}
        >
          <div
            className={css({
              color: $theme.colors.primaryB,
              textTransform: "uppercase",
              letterSpacing: "0.8px",
              ...$theme.typography.HeadingMedium,
            })}
          >
            {data?.personalInfo?.firstName}
          </div>
          <div
            className={css({
              ...$theme.typography.HeadingMedium,
              color: $theme.colors.primaryB,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.8px",
            })}
          >
            {data?.personalInfo?.lastName}
          </div>
        </div>
        <div
          className={css({
            ...$theme.typography.HeadingSmall,
            color: $theme.colors.primaryB,
            paddingLeft: $theme.sizing.scale800,
            paddingTop: $theme.sizing.scale400

          })}
        >
          {data?.personalInfo?.profession}
        </div>

        <div
          className={css({
            ...$theme.typography.HeadingMedium,
            borderBottom: "1px solid white",
            padding: "10px",
            marginRight: "10px",
            marginLeft: "10px",

            color: "white",
          })}
        >
          Contact
        </div>
        {email && (
          <p
            className={css({
              color: "white",
              padding: "10px",
              ...$theme.typography.LabelMedium,
              paddingLeft: "20px",

            })}
          >
            <span>
              <Email size={16} />
            </span> {email}
          </p>
        )}
        {phone && (
          <p
            className={css({
              color: "white",
              paddingLeft: "20px",

            })}
          >
            Phone: {phone}
          </p>
        )}
        {location.address && (
          <p
            className={css({
              color: "white",
              paddingLeft: "20px",

            })}
          >
            Location:{location.address}
          </p>
        )}
        {website && (
          <p
            className={css({
              color: "white",
              paddingLeft: "20px",
            })}
          >
            Website:{" "}
            <a href={website} style={styles.link}>
              {website}
            </a>
          </p>
        )}
      </div>
    );
  };
  const Summary = ({ summary }: { summary: string | undefined }) => {
    const [css, $theme] = useStyletron();
    if (!summary) {
      return null;
    }
    return (
      <div
        className={css({
          paddingTop: $theme.sizing.scale800,
          paddingBottom: $theme.sizing.scale800,
        })}
      >
        <div
          className={css({
            ...$theme.typography.HeadingSmall,
            textTransform: "uppercase",
            paddignTop: $theme.sizing.scale300,
            paddingBottom: $theme.sizing.scale300,
            paddingLeft: $theme.sizing.scale800,
            color: $theme.colors.primaryB,
          })}
        >
          Summary
        </div>
        <div
          className={css({
            ...$theme.typography.LabelSmall,
            color: $theme.colors.primaryB,
            padding: $theme.sizing.scale800,
            paddingTop: $theme.sizing.scale0
          })}
        >
          {summary}
        </div>
      </div>
    );
  };

  const renderEducation = (
    education?: ResumeProps["data"]["educationDetails"],
    heading?: string
  ) => {
    if (!education) {
      return null;
    }

    return (
      <div style={styles.section}>
        <h2 style={styles.heading}>{heading || "Education"}</h2>
        <ul style={styles.list}>
          {education.map((school) => (
            <li style={styles.listItem}>
              <p style={styles.subheading}>{`${school.fieldOfStudy || ""} in ${school.instituteLocation || ""
                }`}</p>
              {school.degree && (
                <p style={styles.listItem}>{`Degree: ${school.degree}`}</p>
              )}
              <p>{`${school.instituteName || ""}, ${school.instituteLocation || ""}`}</p>
              <p>{`${school.startDate || ""} – ${school.endDate || "Present"
                }`}</p>

            </li>
          ))}
        </ul>
      </div>
    );
  };
  const renderWork = (
    workExperience?: ResumeProps["data"]["workExperience"],
    heading?: string
  ) => {
    if (!workExperience) {
      return null;
    }
      return (
        <div style={styles.section}>
          <h2 style={styles.heading}>{heading || "Work Experience"}</h2>
          {/* Map over each work experience item and render its details */}
          {workExperience.map((experience, index) => (
            <div key={index}>
              <p>Job Title: {experience.jobTitle}</p>
              {experience.company && (
                <div>
                  <p>{experience.company.companyName}</p>
                  <p>{experience.companyAddress?.city}, {experience.companyAddress?.country}</p>
                </div>
              )}
              <p> {experience.startDate} - {experience.endDate}</p>
              <p>Description: {experience.description}</p>

            </div>
          ))}
        </div>
      );
   }
  

  const renderProjects = (
    projects?: ResumeProps["data"]["projects"],
    heading?: string
  ) => {
    if (!projects) {
      return null;
    }

    return (
      <div style={styles.section}>
        <h2 style={styles.heading}>{heading || "Projects"}</h2>
        <ul style={styles.list}>
          {projects.map((project) => (
            <li key={project.title} style={styles.listItem}>
              <h3 style={styles.subheading}>{project.title || ""}</h3>
              <p>{`Project Role: ${project.role || ""}`}</p>
              <p>{`Technologies: ${project.technologies?.join(", ") || ""}`}</p>
              <p>{`Responsibilities: ${project.responsibilities || ""}`}</p>
              <p>{`Results: ${project.results || ""}`}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  const renderSkills = (
    skills?: ResumeProps["data"]["skills"],
    heading?: string
  ) => {
    if (!skills) {
      return null;
    }

    return (
      <div style={styles.section}>
        <h2 style={styles.heading}>{heading || "Skills"}</h2>
        <ul
          className={css({
            display: "flex",
            flexWrap: "wrap",
            columnGap: "30px",
            rowGap: '20px'
          })}
        >
          {skills.map((skill, groupIndex) => (
            <li
              className={css({
                ...$theme.typography.LabelMedium,
                backgroundColor: "lightblue",
                borderRadius: "16px",
                listStyle: 'none',
                display: "flex",
                flexWrap: "wrap",
                columnGap: "15px",
                rowGap: '20px',
                padding: '10px'
              })}
              key={groupIndex}
            >
              {skill.skillName?.split(',').map((individualSkill, index) => (
                <p className={css({
                  padding: '5px',
                  borderRadius: '10px',
                  backgroundColor: 'white',
                  textAlign: 'center',
                })} key={index}>{individualSkill.trim()}</p>
              ))}

            </li>
          ))}
        </ul>
      </div>
    );
  };



  const renderAwards = (
    awards?: ResumeProps["data"]["awards"],
    heading?: string
  ) => {
    if (!awards) {
      return null;
    }
    return (
      <div style={styles.section}>
        <h2 style={styles.heading}>{heading || "Awards"}</h2>
        <ul style={styles.list}>
          {awards.map((award) => (
            <li key={award.title} style={styles.listItem}>
              <p>{award.title || ""}</p>
              <p>{award.summary || ""}</p>
              <p>{award.awarder || ""}</p>
              <p>{award.date || ""}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div
      className={css({
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "auto",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        display: "flex",
      })}
    >
      <div
        className={css({
          backgroundColor: "blue",
          maxWidth: "300px",
        })}
      >
        {renderProfile(data?.personalInfo)}
        <Summary summary={data?.summary?.summaryDetails} />
      </div>
      <div>
        {renderWork(data?.workExperience, data?.headings?.work)}
        {renderEducation(data?.educationDetails, data?.headings?.education)}
        {renderSkills(data?.skills, data?.headings?.skills)}
        {renderProjects(data?.projects, data?.headings?.projects)}
        {renderAwards(data?.awards, data?.headings?.awards)}
      </div>
    </div>
  );
};

export default Resume1;
