"use client";
import React, { useState } from "react";
import { useStyletron } from "baseui";
import { Textarea } from "baseui/textarea";
import CustomButton from "../../components/CustomButton";
import { StatefulInput } from "baseui/input";
import { Checkmark, Add } from "@carbon/icons-react";
import jsonData from "../../data /data.json";
import { addNewSummaryMutation } from "../../mutations/summaryPageMutation"
import { useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";

const Summary: React.FC = () => {
  const [css, $theme] = useStyletron();
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedSummary, setSelectedSummary] = useState<string | null>(null);
  const [addSummaryMutation] = useMutation(addNewSummaryMutation);
  const navigate = useNavigate();

  const handleInputChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    setInputValue((e.target as HTMLTextAreaElement).value);
    setSelectedSummary(null);
  };

  const handleAddSummary = (summary: string) => {
    setInputValue((prevValue) => {
      const hasSummary = prevValue.includes(summary);
      if (hasSummary) {
        // Remove the summary if it's already present
        return prevValue.replace(new RegExp(`${summary}\n`), "");
      } else {
        // Add the summary with a newline if it's not present
        return prevValue + summary + "\n";
      }
    });

    setSelectedSummary((prevSelectedSummary) =>
      prevSelectedSummary === summary ? null : summary
    );
  };

  const handleNextClick = async () => {
    try {
      // Execute the mutation
      const response = await addSummaryMutation({
        variables: {
          input: {
            idResume: "a5718b49-d596-4078-86bd-075be01f67c2",
            summaryDetails: selectedSummary 
            },
        },
      });
     navigate('/finalize')
      console.log("Mutation response:", response);
    } catch (error) {
      console.error("Error in mutation:", error);
    }
  };
  const skillsData = jsonData;

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop:'50px',
        ...$theme.typography.LabelMedium,
        [$theme.mediaQuery.medium]:{
           alignItems:'center',
           marginTop:'50px'
        },
        [$theme.mediaQuery.large]: {
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          marginRight:'30px',
          marginLeft: "17.5rem",
          marginTop:'30px',
        },
      })}
    >
     
        <div
          className={css({
            marginLeft: "30px",
            marginRight: "20px",
            [$theme.mediaQuery.medium]: {
             
            },
            [$theme.mediaQuery.large]: {
              width:'100%',
              maxWidth:'1100px',
              margin:0,
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
            Briefly tell us about your background
          </h1>
          <p>Choose from our pre-written examples below or write your own.</p>
        </div>
      <div
        className={css({
          display: "flex",
          gap: "40px",
          backgroundColor: "#f3f8ff",
          padding: " 30px 20px ",
          borderRadius: "20px",
          flexDirection:'column',
          [$theme.mediaQuery.medium]:{
            maxWidth:'800px'
          },
          [$theme.mediaQuery.large]:{
            maxWidth:'1100px',
            flexDirection:'row'

          }
        })}
      >
        <div
          className={css({
            marginRight: "20px",
            marginLeft: "20px",
            backgroundColor: $theme.colors.primaryB,
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
                  minHeight:'300px',
                  backgroundColor: $theme.colors.primaryB,
                  [$theme.mediaQuery.large]:{
                    width: "400px",
                    minHeight: "400px",

                  }
                }),
              },
            }}
          />
        </div>
        <div
          className={css({
            border: "1px solid #d3d9de",
            borderRadius: "10px",
            backgroundColor: "#f3f8ff",
            maxHeight: "400px",
          })}
        >
          <div>
            <StatefulInput
              placeholder="Search job roles..."
              overrides={{
                Root: {
                  style: ({ $theme }) => ({
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
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
                position: "absolute",
                zIndex: 1,
                width: "100%",
                maxWidth: "500px",
                overflowY: "auto",
                maxHeight: "300px",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              })}
            ></ul>
            <p
              className={css({
                ...$theme.typography.LabelMedium,
                marginLeft: "20px",
              })}
            >
              Pre-Written Examples
            </p>
            <div
              className={css({
                overflowY: "auto",
                height: "300px",
                margin: "0 15px",
              })}
            >
              <ul
                className={css({
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                })}
              >
                {skillsData.map((skill) => (
                  
                  <div
                    className={css({
                      border: "1.2px solid #d3d9de",
                      padding: "10px",
                      borderRadius: "12px",
                      display: "flex",
                      overflowY: "auto",
                      marginBottom: "10px",
                      cursor:'pointer',
                      ":hover": {
                        borderColor: "#2b2d2f",
                        boxShadow:
                          "0 4px 12px 0 rgba(0,0,0,.06),0 12px 28px -2px rgba(0,0,0,.1)",
                      },
                      backgroundColor:
                        selectedSummary == skill.summary ? "#E4FDE1" : "white",
                      transition: "opacity 0.3s ease-in-out",
                      alignItems: "center",
                      opacity: selectedSummary === skill.summary ? 0.5 : 1,
                    })}
                    onClick={() => handleAddSummary(skill.summary)}

                  >
                    <button
                      className={css({
                        borderRadius: "50%",
                        margin: "4px",
                        backgroundColor: "#2b2d2f",
                        border: 0,
                        width: "50px",
                        cursor: "pointer",
                        opacity: 1,
                        transition: "opacity 0.3s ease-in-out",
                        height: "50px",
                        padding: "12px",
                      })}
                      onClick={() => handleAddSummary(skill.summary)}
                    >
                      {selectedSummary === skill.summary ? (
                        <Checkmark color="#ffffff" size={24} />
                      ) : (
                        <Add color="#ffffff" size={24} />
                      )}
                    </button>
                    <p
                      className={css({
                        ...$theme.typography.LabelMedium,
                        marginLeft: "15px",
                        color: "black",
                      })}
                    >
                      {skill.summary}
                    </p>
                  </div>
                ))}
              </ul>
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
            maxWidth: "750px",
          },
          [$theme.mediaQuery.large]: {
            width: "100%",
            maxWidth: "1100px",
          },
        })}
      >
        <CustomButton
          name={"Back"}
          to={"/skills"}
          onClick={console.log}
          isSpecial
        />
        <CustomButton
          name={"Next: Final View"}
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Summary;
