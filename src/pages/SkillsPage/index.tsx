"use client";

import * as React from "react";
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { useStyletron } from "baseui";
import CustomButton from "../../components/CustomButton";
import { TrashCan, Add, Checkmark } from "@carbon/icons-react";
import { useEffect, useState } from "react";
import jsonData from "../../data /data.json";
import { useMutation } from "react-relay";
import { addNewSkillMutation } from "../../mutations/skillPageMutation";
import { useNavigate } from "react-router-dom";

interface JobData {
  jobRole: string;
  skills: string[];
}

interface SkillData {
  id: string;
  jobRole: string;
  skillName: string;
  summary: string;
}

const Skills: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [css, $theme] = useStyletron();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<SkillData[]>([]);
  const [selectedJob, setSelectedJob] = useState<JobData | null>(null);
  const [disabledSkills, setDisabledSkills] = useState<string[]>([]);
  const [isSkillSelected] = useState();
  const [inputValues, setInputValues] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleAddOneMore = () => {
    setSelectedSkills((prevSkills) => [...prevSkills, ""]);
    setInputValues((prevInputValues) => [...prevInputValues, ""]);
  };
  const finalSkills = selectedSkills.join(',');

  const [commit] = useMutation(addNewSkillMutation);

  const handleNextButtonSkill = async () => {
    try {
      const variables = {
        input: {
          idResume: "a5718b49-d596-4078-86bd-075be01f67c2",
          skillName: finalSkills
        }
      };

      const response = await commit({
        variables: variables 
      }); 
      navigate('/summary')
      console.log('Mutation response:', response);
    } catch (error) {
      console.error('Error adding new skill:', error);
    }
  };

  const handleChange = (index: number, newValue: string) => {
    setSelectedSkills((prevSkills) => {
      const newSkills = [...prevSkills];
      newSkills[index] = newValue;
      return newSkills;
    });

    setInputValues((prevInputValues) => {
      const newInputValues = [...prevInputValues];
      newInputValues[index] = newValue;
      return newInputValues;
    });
  };

  const handleRemove = (index: number) => {
    setSelectedSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
    setDisabledSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
    setInputValues((prevInputValues) =>
      prevInputValues.filter((_, i) => i !== index)
    );
  };

  const handleAddSkill = (skillData: SkillData) => {
    const skillName = skillData.skillName;

    if (selectedSkills.includes(skillName)) {
      setSelectedSkills((prevSkills) =>
        prevSkills.filter((skill) => skill !== skillName)
      );
      setDisabledSkills((prevSkills) =>
        prevSkills.filter((skill) => skill !== skillName)
      );
      setInputValues((prevInputValues) =>
        prevInputValues.filter((value) => value !== skillName)
      );
      setInputValue((prevValue) => prevValue.replace(skillName + "\n", ""));
    } else {
      setSelectedSkills((prevSkills) => [...prevSkills, skillName]);
      setInputValue((prevValue) => prevValue + skillName + "\n");
      setDisabledSkills((prevSkills) => [...prevSkills, skillName]);
      setInputValues((prevInputValues) => [...prevInputValues, skillName]);
    }
  };
  const handleSearch = (inputValue: string) => {
    setSearchTerm(inputValue);

    if (inputValue.trim() === "") {
      // If the search term is empty, reset filteredData to display all skills
      setFilteredData([]);
    } else {
      const filteredResults: SkillData[] = skillsData
        .filter((entry: SkillData) =>
          entry.jobRole.toLowerCase().includes(inputValue.toLowerCase())
        )
        .reduce((uniqueResults: SkillData[], entry: SkillData) => {
          // Check if the job role is already in uniqueResults
          if (
            !uniqueResults.some((result) => result.jobRole === entry.jobRole)
          ) {
            uniqueResults.push({
              id: entry.id,
              jobRole: entry.jobRole,
              skillName: entry.skillName,
              summary: entry.summary,
            });
          }
          return uniqueResults;
        }, []);

      setFilteredData(
        filteredResults.length > 0 ? filteredResults : skillsData
      );
    }
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

  useEffect(() => {
    setSelectedSkills([]);
  }, []);

  const [currentSkillsData, setCurrentSkillsData] =
    useState<SkillData[]>(skillsData);

  const updateCurrentSkillsData = (selectedJobRole: string | null) => {
    if (selectedJobRole) {
      const skillsForSelectedJob = skillsData
        .filter((skill) => skill.jobRole === selectedJobRole)
        .map((skill) => ({
          id: skill.id,
          jobRole: skill.jobRole,
          skillName: skill.skillName,
          summary: skill.summary,
        }));
      setCurrentSkillsData(skillsForSelectedJob);
    } else {
      setCurrentSkillsData([]);
    }
  };

  const handleJobSelect = (selectedJob: JobData | SkillData) => {
    const isSkillSelected = "skills" in selectedJob;

    if (isSkillSelected) {
      setSelectedJob(selectedJob as JobData);
      setSelectedSkills([selectedJob.jobRole]);
      setSearchTerm(selectedJob ? selectedJob.jobRole : "");
      setFilteredData([]);
      updateCurrentSkillsData(selectedJob.jobRole);
    } else {
      setSelectedJob(selectedJob as JobData);
      setSearchTerm(selectedJob ? selectedJob.jobRole : "");
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
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
          marginLeft: "14rem",
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
            [$theme.mediaQuery.large]: {
              marginRight: 0,
              marginLeft: 0,
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
            paddingRight: "20px",
          },
        })}
      >
        <div>
          {selectedSkills.map((_, index) => (
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                paddingBottom: "20px",
                width: "100%",
                [$theme.mediaQuery.medium]: {
                  minWidth: "400px",
                },
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
                    key={index}
                    placeholder={` Skill ${index + 1}`}
                    onChange={(e) => handleChange(index, e.target.value)}
                    value={inputValues[index]}
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
            <Input
              placeholder="Search job roles..."
              value={searchTerm}
              onFocus={() => setIsOpen(true)}
              onBlur={handleBlur}
              onChange={(e) => {
                handleSearch(e.target.value);
                if (e.target.value.trim() === "") {
                  setIsOpen(false);
                } else {
                  setIsOpen(true);
                }
              }}
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
            {isOpen && (
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
                  display: isSkillSelected ? "none" : "block",
                  [$theme.mediaQuery.medium]: {
                    maxWidth: "519px",
                    width: "100%",
                  },
                  [$theme.mediaQuery.large]: {
                    maxWidth: "399px",
                  },
                })}
              >
                {searchTerm !== "" && filteredData.length === 0 && (
                  <li
                    className={css({
                      cursor: "pointer",
                      padding: "8px",
                    })}
                  >
                    No results found.
                  </li>
                )}
                {filteredData.length > 0 && (
                  <>
                    {filteredData.map((entry) => (
                      <li
                        key={entry.id}
                        onClick={() => {
                          handleJobSelect(entry);
                          setIsOpen(false);
                        }}
                        className={css({
                          cursor: "pointer",
                          padding: "10px",
                          paddingLeft: "20px",
                          ...$theme.typography.LabelMedium,
                          ":hover": {
                            backgroundColor: "#E7E7E7",
                            fontWeight: "bolder",
                          },
                        })}
                      >
                        {entry.jobRole}
                      </li>
                    ))}
                  </>
                )}
              </ul>
            )}
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
              {selectedJob
                ? currentSkillsData
                  .filter(
                    (skill) => skill.jobRole === (selectedJob?.jobRole || "")
                  )
                  .map((skill) => (
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
                        opacity: disabledSkills.includes(skill.skillName)
                          ? 0.5
                          : 1,
                        transition: "opacity 0.3s ease-in-out",
                      })}
                      onClick={() => handleAddSkill(skill)}
                    >
                      <button
                        className={css({
                          borderRadius: "50%",
                          margin: "4px",
                          backgroundColor: disabledSkills.includes(
                            skill.skillName
                          )
                            ? "#2b2d2f"
                            : "#2b2d2f",
                          border: 0,
                          width: "40px",
                          cursor: "pointer",
                          opacity: disabledSkills.includes(skill.skillName)
                            ? 0.5
                            : 1,
                          transition: "opacity 0.3s ease-in-out",
                          padding: "8px",
                        })}
                      >
                        {disabledSkills.includes(skill.skillName) ? (
                          <Checkmark color="#ffffff" size={24} />
                        ) : (
                          <Add color="#ffffff" size={24} />
                        )}
                      </button>
                      <p
                        className={css({
                          ...$theme.typography.LabelMedium,
                          marginLeft: "15px",
                        })}
                      >
                        {skill.skillName}
                      </p>
                    </div>
                  ))
                : skillsData.map((skill) => (
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
                      opacity: disabledSkills.includes(skill.skillName)
                        ? 0.5
                        : 1,
                      transition: "opacity 0.3s ease-in-out",
                    })}
                    onClick={() => handleAddSkill(skill)}
                  >
                    <button
                      className={css({
                        borderRadius: "50%",
                        margin: "4px",
                        backgroundColor: disabledSkills.includes(
                          skill.skillName
                        )
                          ? "#2b2d2f"
                          : "#2b2d2f",
                        border: 0,
                        width: "40px",
                        cursor: "pointer",
                        opacity: disabledSkills.includes(skill.skillName)
                          ? 0.5
                          : 1,
                        transition: "opacity 0.3s ease-in-out",
                        padding: "8px",
                      })}
                    >
                      {disabledSkills.includes(skill.skillName) ? (
                        <Checkmark color="#ffffff" size={24} />
                      ) : (
                        <Add color="#ffffff" size={24} />
                      )}
                    </button>
                    <p
                      className={css({
                        ...$theme.typography.LabelMedium,
                        marginLeft: "15px",
                      })}
                    >
                      {skill.skillName}
                    </p>
                  </div>
                ))}
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
          to={"/project"}
          onClick={console.log}
          isSpecial
        />
        <CustomButton
          name={"Next : Summary"}
          onClick={handleNextButtonSkill}
        />
      </div>
    </div>
  );
};
export default Skills;
