"use client";

interface educationData {
  schoolName: string;
  schoolLocation: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
}

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Select, Value } from "baseui/select";
import { useStyletron } from "baseui";
import { Datepicker } from "baseui/datepicker";
import { StatefulPopover } from "baseui/popover";
import { Button } from "baseui/button";
import { useRecoilState } from "recoil";
import { Textarea } from "baseui/textarea";
import { educationData } from "../../utlis/resumeAtoms";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { Add, Idea, Subtract } from "@carbon/icons-react";
import { useLazyLoadQuery, useMutation } from "react-relay/hooks";
import { graphql } from 'babel-plugin-relay/macro';
import { updateEducationalInfoMutation } from '../../mutations/educationalPageMutation';
import { useNavigationContext } from "../../utlis/NavigationContext";
import { EducationPageQuery } from '../../__generated__/EducationPageQuery.graphql'

function Education() {

  const [updateEducationalInfo] = useMutation(updateEducationalInfoMutation);

  const Educationaldata = useLazyLoadQuery<EducationPageQuery>(
    graphql`
     query EducationPageQuery{
    getEducationDetails(
      id:"aa08cbcc-f8eb-4f14-9fb2-a1b1848adb4f")
    {
      
      instituteName
      instituteLocation
      fieldOfStudy
      startDate
      endDate
      board_name
      gpa
      resume{
        id
        name
        
      }
      createdAt
      updatedAt
    }
  }
  `,
  {},
);

console.log(Educationaldata.getEducationDetails)

  const [value, setValue] = React.useState<Value>([]);
  const [css, $theme] = useStyletron();
  const [eduData, setEduData] = useRecoilState(educationData);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    setShowInput(!showInput);
  };

  useEffect(() => {
    const storedEducationData = localStorage.getItem("educationData");
    if (storedEducationData) {
      setEduData(JSON.parse(storedEducationData));
    }
  }, [setEduData]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEduData((prevUserData: educationData) => ({
      ...prevUserData,
      [name]: value,
    }));

    localStorage.setItem(
      "userData",
      JSON.stringify({
        ...eduData,
        [name]: value,
      })
    );
  };
  const handleTextareaChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = () => {
    setValue(value);
  };

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      console.log(Educationaldata.getEducationDetails);
    }
    return () => {
      isMounted.current = false; // Set the mount status to false when the component unmounts
    };
  }, [Educationaldata]);
  
  const { activeSection, handleNextClick } = useNavigationContext();

  const handleNextButtonClick = async () => {
    try {
      const input = {
        schoolName: eduData.schoolName,
        schoolLocation: eduData.schoolLocation,
        degree: eduData.degree,
        fieldOfStudy: eduData.fieldOfStudy,
        startDate: eduData.startDate,
        endDate: eduData.endDate,
        description: inputValue, // Assuming inputValue is the description for education
        resumeId: "your_resume_id_here", // Replace with the actual resume ID
      };
  
      const response = await updateEducationalInfo({ variables: { input } });
  
      // Handle the response from the server
      console.log(`Educational data updated:`, response);
  
      if (isMounted.current) {
        handleNextClick();
      }
    } catch (error) {
      console.error('Error updating educational info:', error);
    }
  };
  
  return (
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
            Tell us about your education
          </h1>
          <p
            className={css({
              ...$theme.typography.LabelSmall,
              [$theme.mediaQuery.medium]: {
                ...$theme.typography.LabelMedium,
              },
            })}
          >
            Include every school, even if you are still there or did not
            graduate.
          </p>
        </div>
        <StatefulPopover
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
                Ageism in the workforce still exists. If your degree is over ten
                years old, consider removing the date.
                <ul>
                  <li
                    className={css({
                      marginBottom: "8px",
                    })}
                  >
                    List the schools you have attended and any degrees you have
                    earned, starting with your most recent.
                  </li>
                  <li
                    className={css({
                      marginBottom: "8px",
                    })}
                  >
                    {" "}
                    List relevant courses if you do not have much work
                    experience.
                  </li>
                  <li
                    className={css({
                      marginBottom: "8px",
                    })}
                  >
                    {" "}
                    Certifications and training programs should be included in a
                    separate section.
                  </li>
                </ul>
              </p>
            </div>
          }
          accessibilityType={"tooltip"}
          placement={"bottomRight"}
          overrides={{
            Body: {
              style: ({ $theme }) => ({
                maxWidth: "500px",
                backgroundColor: $theme.colors.primaryB,
                margin: "0 20px",
              }),
            },
          }}
        >
          <Button
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  backgroundColor: "white",
                  color: "#0C1986",
                  position: "initial",
                  maxHeight: "50px",
                  marginTop: "15px",
                  ":hover": {
                    backgroundColor: $theme.colors.white,
                    color: "blue",
                  },
                }),
              },
            }}
          >
            <Idea /> Tips
          </Button>
        </StatefulPopover>
      </div>
      <div
        className={css({
          [$theme.mediaQuery.medium]: {
            width: "100%",
            maxWidth: "1100px",
          },
          margin: "0 30px",
        })}
      >
        <div
          className={css({
            display: "flex",
            Maxwidth: "1000px",
            flexDirection: "column",
            [$theme.mediaQuery.medium]: {
              flexDirection: "row",
              gap: "30px",
            },
          })}
        >
          <CustomInput
            placeholder={""}
            onChange={handleInputChange}
            label={"School Name"}
            value={eduData.schoolName}
            name={""}
          />
          <CustomInput
            placeholder={""}
            onChange={handleInputChange}
            label={"School Location"}
            value={eduData.schoolLocation}
            name={""}
          />
        </div>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            Maxwidth: "1000px",

            [$theme.mediaQuery.medium]: {
              flexDirection: "row",
              gap: "30px",
            },
          })}
        >
          <div
            className={css({
              [$theme.mediaQuery.medium]: {
                width: "50%",
              },
            })}
          >
            <label
              className={css({
                ...$theme.typography.LabelSmall,
                [$theme.mediaQuery.medium]: {
                  ...$theme.typography.LabelMedium,
                },
              })}
            >
              Degree
            </label>
            <Select
              options={[
                { label: "High School Diploma", id: "#F0F8FF" },
                { label: "Associate of Arts", id: "#FAEBD7" },
                { label: "Bachelor of Science", id: "#00FFFF" },
                { label: "Bachelor of Arts", id: "#7FFFD4" },
                { label: "Master of Science", id: "#F0FFFF" },
                { label: "Master of Arts", id: "#F5F5DC" },
                { label: "BCA", id: "#F" },
                { label: "MCA", id: "#F5" },
                { label: "BBA", id: "#F1" },
                { label: "MCA", id: "#F2" },
                { label: "MD", id: "#F3" },
                { label: "Other", id: "custom_degree" },
              ]}
              value={value}
              placeholder="Select Degree"
              onChange={({ value }) => setValue(value)}
              clearable={false}
              overrides={{
                ControlContainer: {
                  style: ({ $theme }) => ({
                    backgroundColor: $theme.colors.primaryB,
                    width: "100%",
                    borderWidth: "0",
                    padding: "6px ",
                    color: "#1a202c",
                    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                    borderColor: "black",
                    outline: "none",
                    ring: "1px solid #cbd5e0",
                    placeholder: { color: "#a0aec0" },
                    focusRing: "2px solid #3b82f6",
                    ...$theme.typography.LabelMedium,
                  }),
                },
                Root: {
                  style: ({ $theme }) => ({
                    backgroundColor: $theme.colors.primaryB,
                    padding: "0",
                    border: "1px solid black",
                    borderRadius: "6px",
                    marginTop: "8px",
                    zIndex: "0",
                  }),
                },
                ValueContainer: {
                  style: () => ({
                    padding: "0",
                  }),
                },
              }}
            /> 
            <div className={css({

              marginTop:'10px',
            })}>
            {value.some((v) => v.id === "custom_degree") && (
              <CustomInput
                value={eduData.degree}
                onChange={handleSelectChange}
                placeholder="Eg:- BHMS, MBBS "
                label={"Enter a  Degree"}
                name={""}
              />
            )}
            </div>
          </div>
          <div
            className={css({
              width: "100%",
              marginTop: "10px",
              [$theme.mediaQuery.medium]: {
                width: "50%",
                marginTop: 0,
              },
              [$theme.mediaQuery.large]: {
                width: "50%",
              },
            })}
          >
            <CustomInput
              placeholder={"e.g Financial Accounting"}
              onChange={(e) => handleInputChange(e)}
              label={"Field of Study"}
              value={eduData.fieldOfStudy}
              name={""}
            />
          </div>
        </div>

        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            [$theme.mediaQuery.medium]: {
              flexDirection: "row",
              gap: "30px",
            },
          })}
        >
          <div
            className={css({
              width: "100%",
              ...$theme.typography.LabelSmall,
              paddingBottom: "15px",
              [$theme.mediaQuery.medium]: {
                width: "calc(50% - 15px)",
                ...$theme.typography.LabelMedium,
              },
              [$theme.mediaQuery.large]: {
                width: "calc(50% - 15px)",
              },
            })}
          >
            <label
              className={css({
                marginBottom: "10px",
              })}
            >
              Start Date
            </label>
            <Datepicker
              aria-label="Select a start date"
              clearable={true}
              initialState={{ value: [] }}
              highlightedDate={new Date("March 10, 2019")}
              overrides={{
                Input: {
                  props: {
                    overrides: {
                      Root: {
                        style: () => ({
                          backgroundColor: $theme.colors.primaryB,
                          padding: "0",
                          border: "1px solid black",
                          borderRadius: "6px",
                          marginTop: "8px",
                        }),
                      },
                      InputContainer: {
                        style: () => ({
                          backgroundColor: $theme.colors.primaryB,
                          width: "500px",
                          padding: "0px 0px",
                        }),
                      },
                      Input: {
                        style: () => ({
                          padding: "6px 10px",
                        }),
                      },
                    },
                  },
                },
              }}
            />
          </div>
          <div
            className={css({
              width: "100%",
              ...$theme.typography.LabelSmall,
              paddingBottom: "15px",
              [$theme.mediaQuery.medium]: {
                width: "calc(50% - 15px)",
                ...$theme.typography.LabelMedium,
              },
              [$theme.mediaQuery.large]: {
                width: "calc(50% - 15px)",
              },
            })}
          >
            <label>End Date</label>
            <Datepicker
              aria-label="Select a start date"
              clearable={true}
              initialState={{ value: [] }}
              highlightedDate={new Date("March 10, 2019")}
              overrides={{
                Input: {
                  props: {
                    overrides: {
                      Root: {
                        style: () => ({
                          backgroundColor: $theme.colors.primaryB,
                          padding: "0",
                          border: "1px solid black",
                          borderRadius: "6px",
                          marginTop: "8px",
                        }),
                      },
                      InputContainer: {
                        style: () => ({
                          backgroundColor: $theme.colors.primaryB,
                          width: "500px",
                          borderRadius: "6px",
                        }),
                      },
                      Input: {
                        style: () => ({
                          padding: "6px 10px",
                        }),
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>
        <div
          className={css({
            marginTop: "20px",
          })}
        >
          <Button
            onClick={handleButtonClick}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  backgroundColor: $theme.colors.primaryB,
                  color: "#0C1986",
                  ":hover": {
                    backgroundColor: "rgba(232, 241, 247, 0.8)",
                  },
                }),
              },
            }}
          >
            {showInput ? (
              <>
                {" "}
                <Subtract /> Add description about education{" "}
              </>
            ) : (
              <>
                {" "}
                <Add /> Add description about education{" "}
              </>
            )}
          </Button>

          {showInput && (
            <div
              className={css({
                marginTop: "10px",
              })}
            >
              <Textarea
                onChange={handleTextareaChange}
                value={inputValue}
                placeholder="Enter your summary here..."
                overrides={{
                  Input: {
                    style: ({ $theme }) => ({
                      borderRadius: "4px",
                      minHeight: "300px",
                      backgroundColor: $theme.colors.primaryB,
                    }),
                  },
                }}
              />
            </div>
          )}
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
        <CustomButton
          name={"Back"}
          to={"/personal"}
          onClick={console.log}
          isSpecial
        />
        <CustomButton
          name={"Next: Work Experience"}
          onClick={handleNextButtonClick}
          // to={"/work-exp"}
        />
      </div>
    </div>
  );
}
export default Education;
