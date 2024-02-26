interface educationData {
  instituteName: string;
  instituteLocation: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
}

import { Add } from "@carbon/icons-react";
import { useStyletron } from "baseui";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomPopover from "../../components/CustomPopover";
import { Button } from "baseui/button";

function EducationList() {
  const [css, $theme] = useStyletron();
  const navigate = useNavigate();

  const handleAddEducation = () => {
    navigate("/education");
  };

  const GRAPHQL_ENDPOINT = "http://localhost:3001/graphql?";

  const [educationList, setEducationList] = useState<educationData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GRAPHQL_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
            query{
              getResume(id:"dd2c5381-f24b-43fc-b570-5c4202cfe9dc")
              {
                educationDetails{
                  instituteName
                  instituteLocation
                  degree
                  fieldOfStudy
                  startDate
                  endDate
                }
              }
            }
              `,
          }),
        });

        const { data } = await response.json();
        setEducationList(data.getResume.educationDetails);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {" "}
      <div
        className={css({
          marginTop: "50px",
          [$theme.mediaQuery.medium]: {
            marginRight: "2rem",
            marginTop: "50px",
            paddingLeft: "25px",
            paddingBottom: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
          [$theme.mediaQuery.large]: {
            display: "flex",
            flexDirection: "column",
            marginLeft: "17rem",
            marginTop: "30px",
          },
        })}
      >
        <div
          className={css({
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            [$theme.mediaQuery.large]: {
              maxWidth: "1100px",
            },
          })}
        >
          <div
            className={css({
              marginLeft: "30px",
              marginRight: "20px",

              [$theme.mediaQuery.medium]: {
                marginLeft: "0px",
                marginRight: "0px",
              },
            })}
          >
            <h1
              className={css({
                ...$theme.typography.HeadingMedium,
                [$theme.mediaQuery.medium]: {
                  ...$theme.typography.HeadingLarge,
                },
              })}
            >
              Educational Summary
            </h1>
          </div>
          <CustomPopover
            placement="bottom"
            content={
              <div
                className={css({
                  backgroundColor: $theme.colors.primaryB,
                  padding: "0px 25px",
                  [$theme.mediaQuery.medium]: {
                    padding: "0px 40px",
                  },
                  ...$theme.typography.LabelMedium,
                })}
              >
                <h3>Expert Insights</h3>
                <p
                  className={css({
                    ...$theme.typography.LabelSmall,
                  })}
                >
                  Ageism in the workforce still exists. If your degree is over
                  ten years old, consider removing the date.
                  <ul>
                    <li
                      className={css({
                        marginBottom: $theme.sizing.scale300,
                      })}
                    >
                      List the schools you have attended and any degrees you
                      have earned, starting with your most recent.
                    </li>
                    <li
                      className={css({
                        marginBottom: $theme.sizing.scale300,
                      })}
                    >
                      {" "}
                      List relevant courses if you do not have much work
                      experience.
                    </li>
                    <li
                      className={css({
                        marginBottom: $theme.sizing.scale300,
                      })}
                    >
                      {" "}
                      Certifications and training programs should be included in
                      a separate section.
                    </li>
                  </ul>
                </p>
              </div>
            }
            buttonText={"Tips"}
          />
        </div>
        {educationList.map((education, index) => (
          <div
            key={index}
            className={css({
              borderBottom: "1px solid black",
              maxWidth: "750px",
              padding: $theme.sizing.scale300,
              paddingBottom: $theme.sizing.scale600,
              marginTop: $theme.sizing.scale0,
              marginRight: $theme.sizing.scale400,
              marginLeft: $theme.sizing.scale400,
              marginBottom: "50px",
              [$theme.mediaQuery.medium]: {
                width: "100%",
              },
              [$theme.mediaQuery.large]: {
                maxWidth: "1000px",
              },
            })}
          >
            <div
              className={css({
                backgroundColor: "lightblue",
                width: $theme.sizing.scale400,
                padding: $theme.sizing.scale200,
                borderRadius: $theme.sizing.scale200,
                ...$theme.typography.LabelMedium,
              })}
            >
              {index + 1}
            </div>
            <div
              className={css({
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                })}
              >
                <div
                  className={css({
                    ...$theme.typography.LabelLarge,
                    fontWeight: "bolder",
                    display: "flex",
                    alignItems: "center",
                  })}
                >
                  {education.degree} - {education.fieldOfStudy}
                </div>
              </div>
              <div
                className={css({
                  display: "flex",
                  gap: "10px",
                })}
              >
                <Button
                  overrides={{
                    BaseButton: {
                      style: ({ $theme }) => ({
                        paddingLeft: $theme.sizing.scale500,
                        paddingRight: $theme.sizing.scale500,
                        paddingTop: $theme.sizing.scale0,
                        paddingBottom: $theme.sizing.scale0,
                        height: $theme.sizing.scale900,
                        ...$theme.typography.LabelXSmall,
                        backgroundColor: "rgb(236,236,236)",
                        color: $theme.colors.primaryA,
                        ":hover": {
                          backgroundColor: "rgb(228,228,228)",
                        },
                      }),
                    },
                  }}
                >
                  Edit{" "}
                </Button>
                <Button
                  overrides={{
                    BaseButton: {
                      style: ({ $theme }) => ({
                        paddingLeft: $theme.sizing.scale500,
                        paddingRight: $theme.sizing.scale500,
                        paddingTop: $theme.sizing.scale0,
                        paddingBottom: $theme.sizing.scale0,
                        height: $theme.sizing.scale900,
                        ...$theme.typography.LabelXSmall,
                        backgroundColor: "rgb(236,236,236)",
                        color: $theme.colors.primaryA,
                        ":hover": {
                          backgroundColor: "rgb(228,228,228)",
                        },
                      }),
                    },
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>

            <div
              className={css({
                flexDirection: "column",
                marginTop: $theme.sizing.scale800,
                ...$theme.typography.LabelSmall,

              })}
            >
              {education.instituteName}
            </div>
            <div
              className={css({
                marginTop: $theme.sizing.scale200,
                ...$theme.typography.LabelSmall,
                paddingRight: "30px",
              })}
            >
              {education.instituteLocation}
            </div>
            <div
              className={css({
                marginTop: $theme.sizing.scale200,
                ...$theme.typography.LabelSmall,
              })}
            >
              {education.description}
            </div>
            <div
              className={css({
                marginTop: $theme.sizing.scale200,
                ...$theme.typography.LabelSmall,
                fontWeight: "bold",
              })}
            >
              {education.startDate} / {education.endDate}
            </div>
          </div>
        ))}

        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px dashed #0C1986",
            borderRadius: "20px",
            borderColor: "#0C1986",
            color: "#0C1986",
            backgroundColor: "#fff",
            marginBottom: "20px",
            height: "45px",
            textAlign: "center",
            margin: " 0 10px",
            ...$theme.typography.LabelXSmall,
            [$theme.mediaQuery.medium]: {
              ...$theme.typography.LabelMedium,
              width: "100%",
              maxWidth: "990px",
            },
            ":hover": {
              backgroundColor: "rgba(232, 241, 247, 0.8)",
            },
          })}
          onClick={handleAddEducation}
        >
          <div
            className={css({
              ...$theme.typography.LabelMedium,
            })}
          >
            {" "}
            <Add />
            Add another Education
          </div>
        </div>
        <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
            marginRight: "20px",
            marginLeft: "20px",
            marginTop: "7vh",
            [$theme.mediaQuery.medium]: {
              width: "100%",
              maxWidth: "1100px",
            },
            [$theme.mediaQuery.large]: {
              width: "100%",
              maxWidth: "1100px",
            },
          })}
        >
          <CustomButton name={"Back"} to={"/education"} isSpecial />
          <CustomButton name={"Next"} to={"/work-exp"} />
        </div>
      </div>
    </div>
  );
}

export default EducationList;
