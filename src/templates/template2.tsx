import { useStyletron } from "baseui";
import React from "react";

interface ResumeProps {
  data: {
    basics?: {
      name?: string;
      position?: string;
    };
    contact?: {
      name?: string;
      email?: string;
      phone?: string;
      location?: {
        address?: string;
      };
      website?: string;
      position?: string;
    };
    summary?: {
      summary?: string;
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
      name: string | null | undefined;
      description: string;
      url: string;
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
      summary?: string;
    };
  };
}

const Resume: React.FC<ResumeProps> = ({ data }) => {
  const [css, $theme] = useStyletron();

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "1000px",
      margin: "auto",
      padding: "20px",
      background: "#fff",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      borderRadius: "5px",
    },
    section: {
      marginBottom: "20px",
    },
    heading: {
      color: "#333",
      marginBottom: "10px",
    },
    subheading: {
      color: "#777",
    },
    list: {
      listStyleType: "none",
      margin: "0",
      padding: "0",
    },
    listItem: {
      marginBottom: "10px",
    },
  };

  const renderProfile = (basics?: ResumeProps["data"]["basics"]) => {
    if (!basics) {
      return null;
    }

    const { name, position } = basics;

    return (
      <div
        className={css({
          display: "flex",
          marginBottom: "20px",
          justifyContent: "space-around",
        })}
      >
        <div
          className={css({
            fontSize: "30px",
            textAlign: "left",
            position: "relative",
            left: "-6%",
            right: " 7%",
          })}
        >
          <h2 style={styles.heading}>{name}</h2>
          <p
            className={css({
              fontSize: "20px",
            })}
          >
            {position}
          </p>
        </div>
        <img
          src="/NoImage.jpg"
          alt="Blank Photo"
          className={css({
            width: "80px",
            height: "80px",
            margin: "10px",
            borderRadius: "50px",
            position: "relative",
            top: "35px",
            right: "0px",
            [$theme.mediaQuery.medium]: {
              width: "100px",
              height: "100px",
              margin: "10px",
              right: "-30px",
            },
          })}
        />
      </div>
    );
  };
  const renderSummary = (summary?: string) => {
    if (!summary) {
      return null;
    }

    return (
      <div
        className={css({
          marginBottom: "20px",
          maxWidth: "400px",
          paddingLeft: "20px",
          borderBottom: "1px solid black",
          height: "120px",
        })}
      >
        <h2 style={styles.heading}>Profile</h2>
        <p>{summary}</p>
      </div>
    );
  };

  const renderContact = (contact?: ResumeProps["data"]["contact"]) => {
    if (!contact) {
      return null;
    }

    const { email, phone, location = {}, website } = contact;

    return (
      <div
        className={css({
          minWidth: "250px",
          borderBottom: "1px solid black",
          height: "130px",
        })}
      >
        {" "}
        {email && (
          <p
            className={css({
              margin: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            })}
          >
            <img
              src="/icons/email.svg"
              width="15px"
              height="15px"
              alt="email"
            />
            {email}
          </p>
        )}
        {phone && (
          <p
            className={css({
              margin: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            })}
          >
            <img
              src="/icons/phone.svg"
              width="15px"
              height="15px"
              alt="email"
            />

            {phone}
          </p>
        )}
        {location.address && (
          <p
            className={css({
              margin: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            })}
          >
            {" "}
            <img
              src="/icons/address.svg"
              width="15px"
              height="15px"
              alt="email"
            />
            {location.address}
          </p>
        )}
        {website && (
          <p
            className={css({
              margin: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            })}
          >
            <img
              src="/icons/website.svg"
              width="15px"
              height="15px"
              alt="email"
            />
            {website}
          </p>
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
      <div
        className={css({
          marginBottom: "20px",
          minWidth: "150px",
          borderBottom: "1px solid black",
        })}
        style={styles.section}
      >
        <h2 style={styles.heading}>{heading || "Education"}</h2>
        <ul style={styles.list}>
          {education.map((school) => (
            <li key={school.institution} style={styles.listItem}>
              <p>{`${school.studyType || ""} in ${school.area || ""}`}</p>
              <p>{`${school.institution || ""}, ${school.location || ""}`}</p>
              <p>{`${school.startDate || ""} – ${
                school.endDate || "Present"
              }`}</p>
              {school.score && <p>{`GPA: ${school.score}`}</p>}
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
      <div
        style={styles.section}
        className={css({
          borderBottom: "1px solid black",
          paddingLeft: "20px",
        })}
      >
        <h2 style={styles.heading}>{heading || "Experience"}</h2>
        <ul style={styles.list}>
          {work.map((job) => (
            <li key={job.name} style={styles.listItem}>
              <div
                className={css({
                  display: "flex",
                  margin: 0,
                })}
              >
                <p
                  className={css({
                    margin: "5px 0",
                  })}
                  style={styles.subheading}
                >
                  {job.position}
                </p>
                <p
                  className={css({
                    position: "relative",
                    left: "20%",
                    top: "4%",
                    fontSize: "12px",
                    margin: "5px 0",
                  })}
                >{`${job.startDate || ""} – ${job.endDate || "Present"}`}</p>
              </div>
              <p>{`${job.name || ""}, ${job.location || ""}`}</p>
              {job.highlights && (
                <ul style={styles.list}>
                  {job.highlights.map((duty, index) => (
                    <li
                      className={css({
                        margin: "10px 0",
                      })}
                      key={index}
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
      <div
        className={css({
          marginBottom: "20px",
          borderBottom: "1px solid black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        })}
      >
        <h2
          className={css({
            marginBottom: 0,
          })}
        >
          {heading || "Skills"}
        </h2>
        <ul
          className={css({
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            maxWidth: "200px",
            marginBottom: "28px",
            listStyle: "none",
            padding: "0",
          })}
        >
          {skills.map((skill, index) => (
            <li key={index}>
              <p>{skill.name || ""}</p>
              {skill.keywords && (
                <ul
                  className={css({
                    marginBottom: "4px",
                  })}
                >
                  {skill.keywords.map((keyword, subIndex) => (
                    <li
                      className={css({
                        backgroundColor: "grey",
                        padding: "10px",
                        textAlign: "center",
                        listStyle: "none",
                        borderRadius: "10px",
                      })}
                      key={subIndex}
                    >
                      {keyword}
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
  const renderProjects = (
    projects?: ResumeProps["data"]["projects"],
    heading?: string
  ) => {
    if (!projects || projects.length === 0) {
      return null;
    }

    return (
      <div
        style={styles.section}
        className={css({
          borderBottom: "1px solid black",
          paddingLeft: "20px",
        })}
      >
        <h2 style={styles.heading}>{heading || "Projects"}</h2>
        <ul style={styles.list}>
          {projects.map((project, index) => (
            <li
              className={css({
                maxWidth: "360px",
                width: "100%",
              })}
              key={index}
              style={styles.listItem}
            >
              <p
                className={css({
                  color: "#777",
                })}
              >
                {project.title || ""}
              </p>
              <p
                className={css({
                  margin: "5px 0 ",
                })}
              >
                {project.responsibilities || ""}
              </p>
              <p
                className={css({
                  margin: "5px 0 ",
                })}
              >
                {project.results || ""}</p>
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
      <div
        style={styles.section}
        className={css({
          borderBottom: "1px solid black",
        })}
      >
        <h2 style={styles.heading}>{heading || "Awards"}</h2>
        <ul style={styles.list}>
          {awards.map((award) => (
            <li key={award.title} style={styles.listItem}>
              <p>{award.title || ""}</p>
              <p>{award.awarder || ""}</p>
              <p>{award.date || ""}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  const renderWorkOrProjects = (
    work?: ResumeProps["data"]["work"],
    projects?: ResumeProps["data"]["projects"],
    heading?: string
  ) => {
    if (work && work.length > 0) {
      return renderWork(work, heading);
    } else if (projects && projects.length > 0) {
      return renderProjects(projects, heading);
    } else {
      return null;
    }
  };

  return (
    <div style={styles.container}>
      <div
        className={css({
          backgroundColor: "#f4f4f4",
        })}
      >
        {renderProfile(data.basics)}
      </div>

      <div
        className={css({
          display: "flex",
          flexDirection: "row",
        })}
      >
        {/* Section 1 */}
        <div
          className={css({
            flex: "1",
            borderRight: "1px solid black",
          })}
        >
          <div>
            {renderContact(data.contact)}
            {renderSkills(data.skills, data.headings?.skills)}
            {renderEducation(data.education, data.headings?.education)}
            {renderAwards(data.awards, data.headings?.awards)}
          </div>
        </div>

        {/* Section 2 */}
        <div
          className={css({
            flex: "1",
          })}
        >
          <div>
            {renderSummary(data.summary?.summary)}
            {renderWorkOrProjects(
              data.work,
              data.projects,
              data.headings?.work
            )}
            {renderProjects(data.projects, data.headings?.projects)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
