interface projectData {
  projectName: string;
  role: string;
  technologies: string;
  description: string;
  results: string;
}

import { Add, Idea, Subtract } from "@carbon/icons-react";
import { Button } from "baseui/button";
import { StatefulPopover } from "baseui/popover";
import { useStyletron } from "baseui";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import { ANCHOR, Drawer } from "baseui/drawer";
import CustomInput from "../../components/CustomInput";
import Textarea from "baseui/textarea/textarea";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { projectData } from "../../utlis/resumeAtoms";
import { DeleteProjectDetailsMutation } from "../../mutations/DeleteMutations/deleteProjectDetails";
import { useMutation } from "react-relay";

function ProjectList() {
  const [css, $theme] = useStyletron();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const proData = useRecoilValue(projectData);
  const setProData = useSetRecoilState(projectData);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [summaryValue, setSummaryValue] = useState("");

  const handleProjectInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue(e.target.value);

    setProData((prevProData) => {
      const updatedProData = {
        ...prevProData,
        [name]: value,
      };
      localStorage.setItem("projectData", JSON.stringify(updatedProData));
      return updatedProData;
    });
  };
  const handleTextareaChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSummaryValue(event.target.value);
  }
  const handleAddProject = () => {
    navigate("/project");
  };
  const GRAPHQL_ENDPOINT = 'http://localhost:3001/graphql?';

  const handleButtonClick = () => {
    setShowInput(!showInput);
  };

  const [projectList, setProjectList] = useState<projectData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GRAPHQL_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
            query{
              getResume(id:"a5718b49-d596-4078-86bd-075be01f67c2")
              {
                projects{
                  projectName
                  role
                  technologies
                  results
                  description
                }
              }
            }
              `
          }),
        });

        const { data } = await response.json();
        setProjectList(data.getResume.projects);
        
        if (data.getResume.projects.length > 0) {
          const { projectName, role, technologies, results, description } = data.getResume.projects[0];
          setInputValue(projectName);
          setProData((prevProData) => ({
            ...prevProData,
            projectName,
            role,
            technologies,
            results,
            description,
          }));
          setSummaryValue(description);
        }
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchData();
  }, []);

  const handleDrawerButtonClick = (index: number) => {
    setIsMobileMenuOpen(true); // Open the drawer
    const selectedProject = projectList[index];
    setProData(selectedProject); // Update the projectData state with the selected project data
  };
  const [deleteProject,] = useMutation(DeleteProjectDetailsMutation);

  const handleDeleteClick = async () => {
    try {
      const { data } = await deleteProject({
        variables: {
          input: {
            id: "cd0c5908-7879-40b3-87f9-d7ca5b25631e" // Make sure this id is correct
          }
        }
      });
  
      console.log("Mutation response data:", data); // Log the response data
      
      if (data && data.deleteProjectDetails && data.deleteProjectDetails.success) {
        console.log('Project deleted successfully');
      } else {
        console.error('Failed to delete project');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };
  

 
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
              Projects Summary
            </h1>
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
                  Ageism in the workforce still exists. If your degree is over
                  ten years old, consider removing the date.
                  <ul>
                    <li
                      className={css({
                        marginBottom: "8px",
                      })}
                    >
                      List the schools you have attended and any degrees you
                      have earned, starting with your most recent.
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
                      Certifications and training programs should be included in
                      a separate section.
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
                    marginTop: "15px",
                    maxHeight: "50px",
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

        <div className={css({
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        })}>
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px dashed #0C1986",
              borderRadius: "16px",
              borderColor: "#0C1986",
              color: "#0C1986",
              backgroundColor: "#fff",
              textAlign: "center",
              maxWidth: "345px",
              height: "266px",
              marginRight: $theme.sizing.scale400,
              marginLeft: $theme.sizing.scale400,
              marginBottom: $theme.sizing.scale700,
              ...$theme.typography.LabelXSmall,
              [$theme.mediaQuery.medium]: {
                ...$theme.typography.LabelMedium,
                width: "100%",
              },
              ":hover": {
                backgroundColor: "rgba(232, 241, 247, 0.8)",
              },
            })}
            onClick={handleAddProject}
          >

            <div
              className={css({
                ...$theme.typography.HeadingSmall,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              })}
            >
              <Add size={64} />

              Add another project
            </div>
          </div>
          {projectList.map((projects, index) => (
            <div
              key={index}
              className={css({
                border: "1px solid black",
                maxWidth: "300px",
                borderRadius: $theme.sizing.scale600,
                padding: $theme.sizing.scale800,
                marginTop: $theme.sizing.scale0,
                marginRight: $theme.sizing.scale400,
                marginLeft: $theme.sizing.scale400,
                marginBottom: $theme.sizing.scale800,
                width: "100%",
                height: "216px",

              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
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

              </div>
              <div
                className={css({
                  ...$theme.typography.LabelLarge,
                  fontWeight: "bolder",
                  display: "flex",
                  alignItems: "center",
                  paddingTop: $theme.sizing.scale400,
                })}
              >
                {projects.projectName}
              </div>
              <div
                className={css({
                  paddingTop: $theme.sizing.scale400,
                  ...$theme.typography.LabelSmall,
                })}
              >
                Role - {projects.role}
              </div>
              <div
                className={css({
                  ...$theme.typography.LabelSmall,
                  paddingTop: $theme.sizing.scale400,

                })}
              >
                Technologies Used - {projects.technologies}
              </div>
              <div
                className={css({
                  ...$theme.typography.LabelSmall,
                  paddingTop: $theme.sizing.scale400,

                })}
              >
                Description of Project - {projects.description}
              </div>
              <div
                className={css({
                  ...$theme.typography.LabelSmall,
                  paddingTop: $theme.sizing.scale400,

                })}
              >
                Result - {projects.results}
              </div>
              <div
                className={css({
                  display: "flex",
                  gap: "10px",
                  marginTop: $theme.sizing.scale600
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
                  onClick={()=>handleDrawerButtonClick(index)}
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
                  onClick={handleDeleteClick}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
          <Drawer
            isOpen={isMobileMenuOpen}
            autoFocus
            onClose={() => setIsMobileMenuOpen(false)}
            anchor={ANCHOR.left}
            overrides={{
              Root: {
                style: () => ({
                  zIndex: 999,
                  margin: '0',
               
                })
              }, DrawerBody: {
                style: () => ({
                  margin: "0",
                })
              },
              DrawerContainer: {
                style: ({ $theme }) => ({
                  width: "800px",
                  backgroundColor: "white",
                  [$theme.mediaQuery.medium]: {
                    width: "700px",
                  },

                }),
              },
              Close: {
                style: () => ({
                  display: "none",
                }),
              },
            }}
          >
            <div
              className={css({
                color: 'white',
                ...$theme.typography.LabelMedium,
              })}
            >
              <div
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "45px",
                })}
              >
                <div
                  className={css({
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: $theme.sizing.scale1200,
                    paddingLeft: $theme.sizing.scale1200,
                  })}
                >
                  <CustomInput
                    placeholder={"project name"}
                    label={"Project Name"}
                    value={proData.projectName}
                    name={"projectName"}
                    onChange={handleProjectInputChange}
                  />
                  <CustomInput
                    placeholder={"Your role in project"}
                    onChange={handleProjectInputChange}
                    label={"Project Role"}
                    value={proData.role}
                    name={"role"}
                  />
                </div>
                <div
                  className={css({
                    display: "flex",
                    flexDirection: "column",
                  })}
                >
                  <div
                    className={css({
                      display: 'flex',
                      flexDirection: 'column',
                      paddingRight: $theme.sizing.scale1200,
                      paddingLeft: $theme.sizing.scale1200,
                    })}
                  >
                    <CustomInput
                      placeholder={"Tech Stack Used in Project "}
                      onChange={handleProjectInputChange}
                      label={"Technologies Used"}
                      value={proData.technologies}
                      name={"technologies"}
                    />
                    <CustomInput
                      placeholder={"Results or accomplishments about ptoject "}
                      onChange={handleProjectInputChange}
                      label={"Result"}
                      value={proData.results}
                      name={"results"}
                    />
                  </div>
                </div>


                <div
                  className={css({
                    marginTop: "20px",
                    paddingRight: $theme.sizing.scale1200,
                    paddingLeft: $theme.sizing.scale1200,
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
                        <Subtract /> Add description about Project{" "}
                      </>
                    ) : (
                      <>
                        {" "}
                        <Add /> Add description about Project{" "}
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
                        value={summaryValue}
                        onChange={handleTextareaChange}
                        placeholder="Give a brief idea of project"
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
                  <div className={css({
                    display:'flex',
                    gap:'40px',
                    marginTop:$theme.sizing.scale400,
                    justifyContent:'end'
                  })}>
                  <CustomButton name="Cancel" isSpecial/>
                  <CustomButton name={"Save"}/>
              </div>
                </div>
              </div>
            </div>
          </Drawer>
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
          <CustomButton name={"Back"} to={"/work-exp"} isSpecial />
          <CustomButton name={"Next"} to={"/skills"} />
        </div>
      </div >
    </div >

  );
}

export default ProjectList;
