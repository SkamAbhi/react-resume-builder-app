import { useStyletron } from "baseui";
import {
  ArrowRight,
  Email,
  LocationFilled,
  PhoneFilled,
  Wikis,
} from "@carbon/icons-react";

interface ResumeProps {
  data: {
    summary?: {
      summaryDetails?: string;
    }
    personalInfo?: {
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      location?: {
        address?: string;
      };
      website?: string;
      summary?: string;
      profession?: string;
      photo?: string;
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

export default function Resume3({ data }: ResumeProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        maxWidth: "700px",
        height: "100%",
        boxShadow: $theme.lighting.shadow400,
        marginTop: $theme.sizing.scale500,
        marginBottom: $theme.sizing.scale500,
      })}
    >
      <div
        className={css({
          display: "flex",
          borderRadius: "10px",
        })}
      >
        <div
          className={css({
            flex: "1.5",
            height: "100%",
          })}
        >
          <div
            className={css({
              backgroundColor: $theme.colors.mono200,
              paddingTop: $theme.sizing.scale300,
              paddingLeft: $theme.sizing.scale900,
              paddingRight: $theme.sizing.scale900,
              height: "150px",
            })}
          >
            <div
              className={css({
                paddingTop: $theme.sizing.scale200,
                paddingBottom: $theme.sizing.scale200,
                display: "flex",
                flexDirection: "column",
                gap: "3px",
                flex: "1.5",
              })}
            >
              <div
                className={css({
                  ...$theme.typography.HeadingMedium,
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                })}
              >
                {data?.personalInfo?.firstName}
              </div>
              <div
                className={css({
                  ...$theme.typography.HeadingMedium,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                })}
              >
                {data?.personalInfo?.lastName}
              </div>
              <div
                className={css({
                  ...$theme.typography.LabelLarge,
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                })}
              >
                {data?.personalInfo?.profession}
              </div>
            </div>
          </div>
          <div
            className={css({
              paddingTop: $theme.sizing.scale800,
              paddingBottom: $theme.sizing.scale800,
              paddingLeft: $theme.sizing.scale900,
              paddingRight: $theme.sizing.scale900,
            })}
          >
            <Education education={data?.educationDetails} heading={data?.headings} />
            <WorkExperience experience={data?.workExperience} heading={data?.headings} />
            {Projects(data?.projects, data?.headings?.projects)}

          </div>
        </div>
        <div
          className={css({
            flex: "1",
            color: "#000",
            borderLeft: `3px solid ${$theme.colors.backgroundTertiary}`,
          })}
        >
          <div
            className={css({
              backgroundColor: $theme.colors.primary50,
              paddingLeft: $theme.sizing.scale900,
              paddingRight: $theme.sizing.scale900,
              paddingTop: $theme.sizing.scale300,
              height: "150px",
            })}
          >
            <div
              className={css({
                marginTop: $theme.sizing.scale200,
                marginBottom: $theme.sizing.scale200,
              })}
            >
              <div
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                })}
              >
                {data?.personalInfo?.phone && (
                  <div
                    className={css({
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    })}
                  >
                    <span>
                      <PhoneFilled size={16} />
                    </span>
                    <div
                      className={css({
                        ...$theme.typography.LabelSmall,
                      })}
                    >
                      {data?.personalInfo?.phone}
                    </div>
                  </div>
                )}
                {data?.personalInfo?.email && (
                  <div
                    className={css({
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    })}
                  >
                    <span>
                      <Email size={16} />
                    </span>
                    <div
                      className={css({
                        ...$theme.typography.LabelSmall,
                      })}
                    >
                      {data?.personalInfo?.email}
                    </div>
                  </div>
                )}
                {data?.personalInfo?.location && (
                  <div
                    className={css({
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    })}
                  >
                    <span>
                      <LocationFilled size={16} />
                    </span>
                    <div
                      className={css({
                        ...$theme.typography.LabelSmall,
                      })}
                    >
                      {data?.personalInfo?.location?.address}
                    </div>
                  </div>
                )}
                {data?.personalInfo?.website && (
                  <div
                    className={css({
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    })}
                  >
                    <span>
                      <Wikis size={16} />
                    </span>
                    <div
                      className={css({
                        ...$theme.typography.LabelSmall,
                      })}
                    >
                      {data?.personalInfo?.website}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className={css({
              paddingLeft: $theme.sizing.scale900,
              paddingRight: $theme.sizing.scale900,
              paddingTop: $theme.sizing.scale800,
              paddingBottom: $theme.sizing.scale800,
            })}
          >
            <Skills skills={data?.skills} heading={data?.headings} />
            <Awards award={data?.awards} heading={data?.headings} />
            <Summary summary={data?.summary?.summaryDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}

const Education = ({
  education,
  heading,
}: {
  education: ResumeProps["data"]["educationDetails"];
  heading: ResumeProps["data"]["headings"];
}) => {
  const [css, $theme] = useStyletron();

  if (!education) {
    return null;
  }
  return (
    <div
      className={css({
        paddingTop: $theme.sizing.scale800,
        paddingBottom: $theme.sizing.scale800,
      })}
    >
      {heading?.education && (
        <div
          className={css({
            ...$theme.typography.HeadingXSmall,
            textTransform: "uppercase",
            paddignTop: $theme.sizing.scale300,
            paddingBottom: $theme.sizing.scale300,
          })}
        >
          {heading?.education}
        </div>
      )}
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
        })}
      >
        {education?.map((edu) => (
          <div>
            <div
              className={css({
                ...$theme.typography.LabelSmall,
                fontWeight: 600,
                paddingBottom: $theme.sizing.scale300,
              })}
            >
              {`${edu.instituteName}`}
            </div>
            <div
              className={css({
                ...$theme.typography.LabelSmall,
                color: $theme.colors.backgroundOverlayDark,
                paddingBottom: "2px",
              })}
            >
              {`${edu.fieldOfStudy || ""}`}
            </div>
            <div
              className={css({
                ...$theme.typography.LabelSmall,
                color: $theme.colors.backgroundOverlayDark,
              })}
            >
              {`${edu.startDate || ""}`}-{`${edu.endDate || "Present"}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const WorkExperience = ({
  experience: workExperience,
  heading,
}: {
  experience: ResumeProps["data"]["workExperience"];
  heading: ResumeProps["data"]["headings"];
}) => {
  const [css, $theme] = useStyletron();

  if (!Array.isArray(workExperience) || workExperience.length === 0) {
    return null; 
  }
  return (
    <div
      className={css({
        paddingTop: $theme.sizing.scale800,
        paddingBottom: $theme.sizing.scale800,
      })}
    >
      {heading?.work && (
        <div
          className={css({
            ...$theme.typography.HeadingXSmall,
            textTransform: "uppercase",
            paddignTop: $theme.sizing.scale300,
            paddingBottom: $theme.sizing.scale300,
          })}
        >
          {heading?.work}
        </div>
      )}
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        })}
      >
        {workExperience?.map((ele) => (
          <div>
            <div
              className={css({
                ...$theme.typography.LabelMedium,
                fontWeight: 600,
                paddingBottom: $theme.sizing.scale100,
              })}
            >
              {`${ele.jobTitle}`}
            </div>
            <div>
              {ele.company?.companyName}
              {ele.companyAddress?.city},{ele.companyAddress?.country}
              </div>
            <div
              className={css({
                ...$theme.typography.LabelMedium,
                paddingBottom: $theme.sizing.scale400,
                fontWeight: 500,
                color: $theme.colors.primary700,
              })}
            >
              {`${ele.startDate || ""}`}/
              {`${ele.endDate || "Present"}`}
            </div>
            <div
              className={css({
                ...$theme.typography.LabelSmall,
                color: $theme.colors.backgroundOverlayDark,
              })}
            >
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = ({
  skills,
  heading,
}: {
  skills: ResumeProps["data"]["skills"];
  heading: ResumeProps["data"]["headings"];
}) => {
  const [css, $theme] = useStyletron();
  if (!skills) {
    return null;
  }
  return (
    <div
      className={css({
        paddingTop: $theme.sizing.scale800,
        paddingBottom: $theme.sizing.scale800,
      })}
    >
      {heading?.skills && (
        <div
          className={css({
            ...$theme.typography.HeadingXSmall,
            textTransform: "uppercase",
            paddignTop: $theme.sizing.scale300,
            paddingBottom: $theme.sizing.scale300,
          })}
        >
          {heading?.skills}
        </div>
      )}
      <div>
        {skills?.map((skill) => (
          <div
            className={css({
              display: "flex",
              gap: "10px",
              alignItems: "center",
              paddingTop: "6px",
            })}
          >
            <ArrowRight />
            <div
              className={css({
                ...$theme.typography.LabelMedium,
              })}
            >
              {skill.skillName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Awards = ({
  award,
  heading,
}: {
  award: ResumeProps["data"]["awards"];
  heading: ResumeProps["data"]["headings"];
}) => {
  const [css, $theme] = useStyletron();
  if (!award) {
    return null;
  }
  return (
    <div
      className={css({
        paddingTop: $theme.sizing.scale800,
        paddingBottom: $theme.sizing.scale800,
      })}
    >
      {heading?.awards && (
        <div
          className={css({
            ...$theme.typography.HeadingXSmall,
            textTransform: "uppercase",
            paddignTop: $theme.sizing.scale300,
            paddingBottom: $theme.sizing.scale300,
          })}
        >
          {heading?.awards}
        </div>
      )}
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        })}
      >
        {award?.map((item) => (
          <div>
            <div
              className={css({
                ...$theme.typography.LabelMedium,
                fontWeight: 600,
                paddingBottom: $theme.sizing.scale200,
              })}
            >
              {item.title || ""}
            </div>
            <div
              className={css({
                ...$theme.typography.LabelSmall,
                color: $theme.colors.backgroundOverlayDark,
              })}
            >
              {item.awarder || ""}
            </div>
            <div
              className={css({
                ...$theme.typography.LabelSmall,
                color: $theme.colors.backgroundOverlayDark,
              })}
            >
              {item.date || ""}
            </div>
          </div>
        ))}
      </div>
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
          ...$theme.typography.HeadingXSmall,
          textTransform: "uppercase",
          paddignTop: $theme.sizing.scale300,
          paddingBottom: $theme.sizing.scale300,
        })}
      >
        Summary
      </div>
      <div
        className={css({
          ...$theme.typography.LabelSmall,
          color: $theme.colors.backgroundOverlayDark,
        })}
      >
        {summary}
      </div>
    </div>
  );
};
const Projects = (
  projects?: ResumeProps["data"]["projects"],
  heading?: string
) => {
  const [css, $theme] = useStyletron();
  if (!projects) {
    return null;
  }

  return (
    <div>
      <h2 className={css({
        color: "#333",
        fontSize: "24px",
        marginBottom: "15px",
        paddingBottom: "15px",
        borderBottom: "1px solid blue",
      })}>{heading || "Projects"}</h2>
      <ul className={css({
            listStyleType: "none",
            margin: "0",
            padding: "0",
      })}>
        {projects.map((project) => (
          <li key={project.title}>
            <h3 >{project.title || ""}</h3>
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