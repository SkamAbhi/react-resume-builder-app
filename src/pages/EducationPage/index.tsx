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

import React, { ChangeEvent, useEffect, useState } from "react";
import { Select, Value } from "baseui/select";
import { useStyletron } from "baseui";
import { StatefulDatepicker } from "baseui/datepicker";
import { StatefulPopover } from "baseui/popover";
import { Button } from "baseui/button";
import { useRecoilState } from "recoil";
import { Textarea } from "baseui/textarea";
import { educationData } from "../../utlis/resumeAtoms";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { Add, Idea, Subtract } from "@carbon/icons-react";

function Education() {
  const [value, setValue] = React.useState<Value>([]);
  const [css, $theme] = useStyletron();
  const [eduData, setEduData] = useRecoilState(educationData);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    setShowInput(!showInput);
  };

  const handleHiddenInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
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
  return (
    <div
      className={css({
        [$theme.mediaQuery.medium]: {
          marginTop: "40px",
          marginLeft: "20px",
          marginRight: "20px",
        },
        [$theme.mediaQuery.large]: {
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginLeft: "17rem",
          marginTop: "40px",
        },
      })}
    >
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1050px",
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
                padding: "0px 40px",

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
                  <li>
                    {" "}
                    List the schools you have attended and any degrees you have
                    earned, starting with your most recent.
                  </li>
                  <li>List high school only if you did not go to college.</li>
                  <li>
                    List relevant courses if you do not have much work
                    experience.
                  </li>
                  <li>
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
                width: "500px",
                backgroundColor: $theme.colors.primaryB,
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
          maxWidth: "1030px",
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
                ...$theme.typography.LabelMedium,
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
                { label: "No Degree", id: "#F4" },
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
                    marginTop: "12px",
                    border: "1.5px solid #838fa0",
                    ":focus-within": {
                      border: `2px solid #0070d6`,
                    },
                  }),
                },
                Root: {
                  style: ({ $theme }) => ({
                    backgroundColor: $theme.colors.primaryB,
                  }),
                },
              }}
            />
          </div>
          <div
            className={css({
              width: "100%",
              [$theme.mediaQuery.medium]: {
                width: "50%",
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
            maxWidth: "1000px",
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
              [$theme.mediaQuery.medium]: {
                width: "50%",
              },
              [$theme.mediaQuery.large]: {
                width: "50%",
              },
            })}
          >
            <label>Start Date</label>
            <StatefulDatepicker
              aria-label="Select a start date"
              clearable={true}
              initialState={{ value: [] }}
              highlightedDate={new Date("March 10, 2019")}
              overrides={{
                Input: {
                  props: {
                    overrides: {
                      Root: {
                        style: ({ $theme }) => ({
                          backgroundColor: $theme.colors.primaryB,
                        }),
                      },
                      InputContainer: {
                        style: ({ $theme }) => ({
                          backgroundColor: $theme.colors.primaryB,
                          width: "470px",
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
              [$theme.mediaQuery.medium]: {
                width: "50%",
              },
              [$theme.mediaQuery.large]: {
                width: "50%",
              },
            })}
          >
            <label>End Date</label>
            <StatefulDatepicker
              aria-label="Select an end date"
              clearable={true}
              initialState={{ value: [] }}
              highlightedDate={new Date("March 10, 2019")}
              overrides={{
                Input: {
                  props: {
                    overrides: {
                      Root: {
                        style: ({ $theme }) => ({
                          backgroundColor: $theme.colors.primaryB,
                        }),
                      },
                      InputContainer: {
                        style: ({ $theme }) => ({
                          backgroundColor: $theme.colors.primaryB,
                          width: "470px",
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
                value={inputValue}
                onChange={handleInputChange}
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
          marginTop: "50px",
        })}
      >
        <CustomButton
          name={"Back"}
          to={"/personal"}
          onClick={console.log}
          isSpecial
        />
        <CustomButton
          name={"Next: Work History"}
          onClick={console.log}
          to={"/work-exp"}
        />
      </div>
    </div>
  );
}
export default Education;
