"use client";

import * as React from "react";
import { Input, StatefulInput } from "baseui/input";
import { Button } from "baseui/button";
import { useStyletron } from "baseui";
import CustomButton from "../../components/CustomButton";
import { TrashCan, Add, Checkmark } from "@carbon/icons-react";
import { ChangeEvent, useEffect, useState } from "react";
import jsonData from "../../data /data.json";
interface JobData {
  jobRole: string;
  skills: string[];
}

interface SkillData {
  id: number;
  jobRole: string;
  skillName: string;
  summary: string;
}

function Skills() {
  const [values, setValues] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [css, $theme] = useStyletron();

  const handleAddOneMore = () => {
    setValues((prevValues) => [...prevValues, ""]);
  };
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = event.target.value;
    setSelectedSkills((prevSelectedSkills) => {
      const newSelectedSkills = [...prevSelectedSkills];
      newSelectedSkills[index] = newValue;
      return newSelectedSkills;
    });
  };

  const handleRemove = (index: number) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);

    const removedSkill = values[index];
    setDisabledSkills((prevSkills) =>
      prevSkills.filter((disabledSkill) => disabledSkill !== removedSkill)
    );
  };

  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<SkillData[]>([]);
  const [selectedJob, setSelectedJob] = useState<JobData | null>(null);

  const handleSearch = (inputValue: string) => {
    setSearchTerm(inputValue);

    const filteredResults: SkillData[] = skillsData
      .filter((entry: SkillData) =>
        entry.jobRole.toLowerCase().includes(inputValue.toLowerCase())
      )
      .map((entry: SkillData) => ({
        id: entry.id,
        jobRole: entry.jobRole,
        skillName: entry.skillName,
        summary: entry.summary,
      }));

    setFilteredData(filteredResults);
  };

  const handleJobSelect = (selectedJob: JobData) => {
    setSelectedJob(selectedJob);

    setSearchTerm(selectedJob ? selectedJob.jobRole : "");

    setValues([selectedJob.jobRole]);
  };

  const skillsData: SkillData[] = jsonData.reduce(
    (accumulator: SkillData[], job) => {
      const skillsWithJobRole = job.skillName.map((skill, index) => ({
        id: `${job.jobRole}_${index + 1}`,
        jobRole: job.jobRole,
        skillName: skill,
        summary: job.summary,
      }));
      return accumulator.concat(skillsWithJobRole);
    },
    []
  );

  const [disabledSkills, setDisabledSkills] = useState<string[]>([]);

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleAddSkill = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills((prevSkills) => [...prevSkills, skill]);
  
      setInputValue((prevValue) => {
        // Check if the skill is already present in the input
        const hasSkill = prevValue.includes(skill);
  
        if (hasSkill) {
          // Remove the skill if it's already present
          return prevValue.replace(new RegExp(`${skill}\n`), "");
        } else {
          // Add the skill with a newline if it's not present
          return prevValue + skill + "\n";
        }
      });
    }
  };
  
  useEffect(() => {
    setValues(["", "", "", ""]);
  }, []);

  return (
    <div
      className={css({
        marginTop:'50px',
        [$theme.mediaQuery.medium]: {
          marginRight: "2rem",
          marginTop:'50px',
          paddingLeft: "25px",
          paddingBottom: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        [$theme.mediaQuery.large]: {
          display: "flex",
          flexDirection: "column",
          marginLeft: "14rem",
          marginTop:'30px',
        },
      })}
    >
      <div
        className={css({
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          [$theme.mediaQuery.large]: {
            maxWidth: "950px",
          },
        })}
      >
        <div
          className={css({
            marginLeft: "25px",
            marginRight: "25px",

            [$theme.mediaQuery.medium]: {
              marginLeft: "auto",
              marginRight: "auto",
            },
            [$theme.mediaQuery.large]:{
              marginRight:0,
              marginLeft:0
            }
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
            What skills would you like to highlight ?
          </h1>
          <p
            className={css({
              ...$theme.typography.LabelSmall,
              [$theme.mediaQuery.medium]: {
                ...$theme.typography.LabelMedium,
              },
            })}
          >
            Choose from our pre-written examples below or write your own.
          </p>
        </div>
      </div>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          marginRight: "25px",
          marginLeft: "25px",
          [$theme.mediaQuery.medium]: {
            maxWidth: "530px",
            width: "100%",
            margin: "auto",
          },
          [$theme.mediaQuery.large]: {
            margin: "0 20px",
            gap: "70px",
            backgroundColor: "#f3f8ff",
            padding: "30px ",
            borderRadius: "20px",
            flexDirection: "row",
            maxWidth: "900px",
            paddingRight:'20px',
          },
        })}
      >
        <div>
          {values.map((index) => (
            <div
              key={index}
              className={css({
                display: "flex",
                alignItems: "center",
                paddingBottom: "20px",
                width: "100%",
                [$theme.mediaQuery.medium]:{
                minWidth: "400px",  
              }
              })}
            >
              <div
                className={css({
                  padding: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "white",
                  width: "100%",
                  [$theme.mediaQuery.medium]: {
                    maxWidth: "600px",
                  },
                  [$theme.mediaQuery.large]: {
                    minWidth: "400px",
                  },
                })}
              >
                <div
                  className={css({
                    display: "flex",
                    flexWrap: "wrap",
                  })}
                ></div>
                <div
                  className={css({
                    display: "flex",
                    margin: "0 5px",
                  })}
                >
                  <Input
                    placeholder={` Skill ${index + 1}`}
                    onChange={(e) => handleInputChange(e, index)}
                    value={selectedSkills[index] || ""}
                    overrides={{
                      Input: {
                        style: {
                          backgroundColor: "#ffffff",
                        },
                      },
                      InputContainer: {
                        style: {
                          backgroundColor: "#ffffff",
                        },
                      },
                    }}
                  />

                  <Button
                    onClick={() => handleRemove(index)}
                    overrides={{
                      BaseButton: {
                        style: {
                          borderRadius: "4px",
                          marginLeft: "8px",
                          backgroundColor: "transparent",
                          ":hover": {
                            backgroundColor: "transparent",
                          },
                        },
                      },
                    }}
                  >
                    <TrashCan color="#000" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <Button
            onClick={handleAddOneMore}
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
            <Add /> Add one another
          </Button>
        </div>

        <div
          className={css({
            border: "1px solid #d3d9de",
            borderRadius: "10px",
            backgroundColor: "#f3f8ff",
            maxHeight: "400px",
            width: "100%",
            maxWidth: "520px",
            [$theme.mediaQuery.large]: {
              maxWidth: "400px",
            },
          })}
        >
          <div>
            <StatefulInput
              placeholder="Search job roles..."
              value={searchTerm}
              onFocus={() => setIsOpen(true)}
              onBlur={() => setIsOpen(false)}
              onChange={(e) => handleSearch(e.target.value)}
              overrides={{
                Root: {
                  style: ({ $theme }) => ({
                    width: "100%",
                    maxWidth: "530px",
                    border: "1.5px solid #838fa0",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",

                    ":focus-within": {
                      border: `2px solid #0070d6`,
                    },
                    backgroundColor: $theme.colors.primaryB,
                  }),
                },
                Input: {
                  style: ({ $theme }) => ({
                    width: "100%",
                    backgroundColor: $theme.colors.primaryB,
                  }),
                },
              }}
            />
              <ul
                className={css({
                  listStyle: "none",
                  margin: "4px 0px",
                  padding: "0",
                  border: "1px solid #ccc",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "white",
                  position: "absolute",
                  zIndex: 1,
                  width: "85%",
                  overflowY: "auto",
                  maxHeight: "300px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  maxWidth: "519px",
                  [$theme.mediaQuery.medium]:{
                    maxWidth: "519px",
                    width:'100%'
                  },
                  [$theme.mediaQuery.large]:{
                    maxWidth: "399px",

                  }
                })}
              >
                {filteredData.length > 0 ? (
                  <>
                    {filteredData.map((entry) => (
                      <li
                        key={entry.jobRole}
                        onClick={() => handleJobSelect(entry)}
                        className={css({
                          cursor: "pointer",
                          padding: "8px",
                          borderBottom: "1px solid #ccc",
                        })}
                      >
                        {entry.jobRole}
                      </li>
                    ))}
                  </>
                ) : (
                  <li
                    className={css({
                      cursor: "pointer",
                      padding: "8px",
                      borderBottom: "1px solid #ccc",
                    })}
                  >
                    No results found.
                  </li>
                )}
              </ul>
            
            <p
              className={css({
                ...$theme.typography.LabelMedium,
                marginLeft: "20px",
              })}
            >
              Pre-Written Examples{" "}
            </p>

            <div
              className={css({
                overflowY: "auto",
                height: "300px",
                margin: "0 15px",
              })}
            >
              {skillsData.map((skill, mapIndex) => (
                <div
                  key={skill.id}
                  className={css({
                    border: "1.2px solid #d3d9de",
                    padding: "10px",
                    borderRadius: "12px",
                    display: "flex",
                    overflowY: "auto",
                    height: "50px",
                    marginBottom: "10px",
                    ":hover": {
                      borderColor: "#2b2d2f",
                      boxShadow:
                        "0 4px 12px 0 rgba(0,0,0,.06),0 12px 28px -2px rgba(0,0,0,.1)",
                    },
                    backgroundColor: disabledSkills.includes(skill)
                      ? "#E4FDE1"
                      : "white",
                    opacity: disabledSkills.includes(skill.skillName) ? 0.5 : 1,
                    transition: "opacity 0.3s ease-in-out",
                  })}
                  onClick={() =>
                    handleAddSkill(skill.skillName, skill.skillName, mapIndex)
                  }
                >
                  <button
                    className={css({
                      borderRadius: "50%",
                      margin: "4px",
                      backgroundColor: disabledSkills.includes(skill.skillName)
                        ? "#2b2d2f"
                        : "#2b2d2f",
                      border: 0,
                      width: "40px",
                      cursor: "pointer",
                      opacity: disabledSkills.includes(skill.skillName)
                        ? 0.5
                        : 1,
                      transition: "opacity 0.3s ease-in-out",
                      padding:'8px'
                    })}
                    onClick={() =>
                      handleAddSkill(skill.skillName, skill.skillName, mapIndex)
                    }
                  >
                    {disabledSkills.includes(skill.skillName) ? (
                      <Checkmark color="#ffffff" size={24} />
                    ) : (
                      <Add color="#ffffff" size={24} />
                    )}{" "}
                  </button>
                  <p
                    className={css({
                      ...$theme.typography.LabelMedium,
                      marginLeft: "15px",
                    })}
                  >
                    {" "}
                    {skill.skillName}
                  </p>
                </div>
              ))}
            </div>
            <div
              className={css({
                position: "relative",
                marginTop: "60px",
              })}
            >
              {selectedJob && (
                <ul
                  className={css({
                    overflowY: "hidden",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "8px",
                    marginTop: "8px",
                    position: "absolute",
                    zIndex: 1,
                    top: "calc(100% + 8px)",
                    width: "100%",
                    maxWidth: "300px",
                    minWidth:"200px"
                  })}
                >
                  {selectedJob.skills.map((skill, index) => (
                    <li
                      className={css({
                        cursor: "pointer",
                        padding: "8px",
                        borderBottom: "1px solid #ccc",
                      })}
                      key={index}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          marginRight: "25px",
          marginLeft: "25px",
          marginTop: "7vh",
          [$theme.mediaQuery.medium]: {
            width: "100%",
            maxWidth: "550px",
          },
          [$theme.mediaQuery.large]: {
            width: "100%",
            maxWidth: "950px",
          },
        })}
      >
        <CustomButton
          name={"Back"}
          to={"/work-exp"}
          onClick={console.log}
          isSpecial
        />
        <CustomButton
          name={"Next : Summary"}
          onClick={console.log}
          to={"/summary"}
        />
      </div>
    </div>
  );
}
export default Skills;
