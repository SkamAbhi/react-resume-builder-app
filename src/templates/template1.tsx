import { useStyletron } from "baseui";
import React from "react";

interface ResumeProps {
  data: {
    personalInfo?: {
      firstName: string;
      lastName: string;
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
    work?: Array<{
      name?: string;
      position?: string;
      location?: string;
      startDate?: string;
      endDate?: string;
      highlights?: string[];
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
      paddingBottom:'10px',
      background: "#fff",
      paddingLeft: "50px",
      width: "100%",
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
      firstName,
      lastName,
      email,
      phoneNumber: phone,
      location = {},
      website,
      summaryDetails: summary,
      profession: position,
    } = basics;

    return (
      <div className={css({})}>
        <h1
          className={css({
            color: "white",
            paddingLeft: "20px",
            ...$theme.typography.HeadingLarge,
            fontSizeAdjust: '40px',
            lineHeight: '50px',
            paddingRight: '100px',
            marginBottom: '-15px',
          })}
        >
          {firstName}{lastName}
        </h1>
        <p
          className={css({
            ...$theme.typography.HeadingSmall,
            padding: "10px",
            color: "white",
            paddingLeft: "20px",

          })}
        >
          {position}
        </p>

        <h3
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
        </h3>
        {email && (
          <p
            className={css({
              color: "white",
              padding: "10px",
              ...$theme.typography.LabelMedium,
              paddingLeft: "20px",

            })}
          >
            Email: {email}
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
            Location: {location.address}
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
        {summary && (
          <div
            className={css({
              color: "white",
              paddingLeft: "20px",
            })}
          >
            <h1
              className={css({
                ...$theme.typography.HeadingMedium,
                borderBottom: "1px solid white",
                padding: "10px",
                marginRight: "10px",
              })}
            >
              Summary
            </h1>
            <p
              className={css({
                padding: "10px",
              })}
            >
              {summary}
            </p>
          </div>
        )}
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
            <li key={education.instituteName} style={styles.listItem}>
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
  const renderWork = (work?: ResumeProps["data"]["work"], heading?: string) => {
    if (!work) {
      return null;
    }

    return (
      <div style={styles.section}>
        <h2 style={styles.heading}>{heading || " Work Experience"}</h2>
        <ul style={styles.list}>
          {work.map((job) => (
            <li key={job.name} style={styles.listItem}>
              <p>{`${job.startDate || ""} – ${job.endDate || "Present"}`}</p>

              <p style={styles.subheading}>{job.position}</p>
              <p>{`${job.name || ""}, ${job.location || ""}`}</p>
              {job.highlights && (
                <ul style={styles.list}>
                  {job.highlights.map((duty, index) => (
                    <li
                      key={index}
                      className={css({
                        ...$theme.typography.LabelMedium,
                      })}
                    >
                      {duty}
                    </li>
                  ))}
                </ul>
              )}
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
                padding:'10px'
              })}
              key={groupIndex}
            >
              {skill.skillName?.split(',').map((individualSkill, index) => (
                <p className={css({
                  padding: '5px',
                  borderRadius: '10px',
                  backgroundColor: 'white',
                  textAlign:'center',
                })} key={index}>{individualSkill.trim()}</p>
              ))}

            </li>
          ))}
        </ul>
      </div>
    );
  };

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
        {renderProfile(data.personalInfo)}
      </div>
      <div>
        {renderWork(data.work, data.headings?.work)}
        {renderEducation(data.educationDetails, data.headings?.education)}
        {renderSkills(data.skills, data.headings?.skills)}
        {renderProjects(data.projects, data.headings?.projects)}
        {renderAwards(data.awards, data.headings?.awards)}
      </div>
    </div>
  );
};

export default Resume1;
