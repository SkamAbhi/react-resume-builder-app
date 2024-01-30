import { useStyletron } from "baseui";
import React from "react";

interface ResumeProps {
  data: {
    basics?: {
      name?: string;
      email?: string;
      phone?: string;
      location?: {
        address?: string;
      };
      website?: string;
      summary?: string;
      position?: string;
    };
    education?: Array<{
      institution?: string;
      studyType?: string;
      area?: string;
      location?: string;
      startDate?: string;
      endDate?: string;
      score?: string;
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
      name?: string;
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

const Resume: React.FC<ResumeProps> = ({ data }) => {
  const [css, $theme] = useStyletron();
  const styles = {
    section: {
      marginBottom: "30px",
      padding: "20px",
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

  const renderProfile = (basics?: ResumeProps["data"]["basics"]) => {
    if (!basics) {
      return null;
    }

    const {
      name,
      email,
      phone,
      location = {},
      website,
      summary,
      position,
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
          {name}
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
    education?: ResumeProps["data"]["education"],
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
            <li key={school.institution} style={styles.listItem}>
              <p style={styles.subheading}>{`${school.studyType || ""} in ${school.area || ""
                }`}</p>
              <p>{`${school.institution || ""}, ${school.location || ""}`}</p>
              <p>{`${school.startDate || ""} – ${school.endDate || "Present"
                }`}</p>
              {school.score && (
                <p style={styles.listItem}>{`GPA: ${school.score}`}</p>
              )}
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
          {skills.map((skillGroup, groupIndex) => (
            <li
              className={css({
                ...$theme.typography.LabelMedium,
                backgroundColor: " lightblue",
                padding: " 0 10px",
                borderRadius: "16px",
                listStyle: 'none'
              })}
              key={groupIndex}
            >
              {skillGroup.keywords &&
                skillGroup.keywords.map((skill, skillIndex) => (
                  <p key={skillIndex}>{`${skill}`}</p>
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
              <p>{project.role || ""}</p>
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
        padding: "20px",
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
        {renderProfile(data.basics)}
      </div>
      <div>
        {renderWork(data.work, data.headings?.work)}
        {renderEducation(data.education, data.headings?.education)}
        {renderSkills(data.skills, data.headings?.skills)}
        {renderProjects(data.projects, data.headings?.projects)}
        {renderAwards(data.awards, data.headings?.awards)}
      </div>
    </div>
  );
};

export default Resume;
