import { Idea, Subtract, Add } from '@carbon/icons-react';
import { Button } from 'baseui/button';
import { StatefulPopover } from 'baseui/popover';
import { Textarea } from 'baseui/textarea';
import React, { ChangeEvent, useState } from 'react'
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { useStyletron } from 'baseui';
import { useNavigate } from 'react-router-dom';
import { addNewProjectInfoMutation } from '../../mutations/projectPageMutation'
import { useMutation } from 'react-relay';

function Project() {
    const [css, $theme] = useStyletron();
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [summaryValue, setSummaryValue] = useState("");
    const navigate = useNavigate()
    const [addNewProject] = useMutation(addNewProjectInfoMutation)

    const handleButtonClick = () => {
      setShowInput(!showInput);
    };
  
    const handleHiddenInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      localStorage.setItem(
        "userData",
        JSON.stringify({
          [name]: value,
        })
      );
    };
  
    const handleNextButtonClick = async () => {
      try {
        const input = {
          projectName:"abc",
          role:"developer",
          technologies:["react","react-relay"],
          description:"",
          results:"",
          idResume: "256517e4-acf3-4608-ad64-16e8e50494d3",
          };
        const response = await addNewProject({ variables: { input } });
  
        if (inputValue.trim() !== "") {
          navigate("/work-exp-list");
        } else {
          navigate("/skills");
        }
        // Handle the response from the server
        console.log(`Data updated:`, response);

      } catch (error) {
        console.error('Error updating personal info:', error);
      }
  
    };
  // const handleNextButtonClick = () => {
  //   // Check if input data is provided
  //   if (inputValue.trim() !== "") {
  //     // Navigate to a different link when input data is provided
  //     navigate("/project-list");

  //   } else {
  //     // Navigate to the given link when no input data is provided
  //     navigate("/skills");

  //   }
  // }
    const handleTextareaChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setSummaryValue(event.target.value);}
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
        marginLeft: "17rem",
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
          {" "}
          Tell us about your Projects {" "}
        </h1>
        <p
          className={css({
            ...$theme.typography.LabelSmall,
            [$theme.mediaQuery.medium]: {
              ...$theme.typography.LabelMedium,
            },
          })}
        >
          Provide your projects you can add more than 1 project{" "}
        </p>
      </div>
      <StatefulPopover
        content={
          <div
            className={css({
              backgroundColor: $theme.colors.primaryB,
              padding: "0px 25px",
              [$theme.mediaQuery.medium]:{
                padding:"0px 40px"
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
                position:"initial",
                marginTop:'15px',
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
          placeholder={"project name"}
          label={"Project Name"}
          value={""}
          name={""}
          onChange={handleHiddenInputChange}
        />
        <CustomInput
          placeholder={"Your role in project"}
          onChange={function (): void {
            throw new Error("Function not implemented.");
          }}
          label={"Project Role"}
          value={""}
          name={""}
        />
      </div>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          Maxwidth: "1100px",
        })}
      >
        <div
          className={css({
            width: "100%",
            display:'flex',
            flexDirection:'column',
            [$theme.mediaQuery.large]:{
                flexDirection:'row',
                gap:'30px',

            }
          })}
        >
          <CustomInput
            placeholder={"Tech Stack Used in Project "}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
            label={"Technologies Used"}
            value={""}
            name={""}
          />
           <CustomInput
            placeholder={"Results or accomplishments about ptoject "}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
            label={"Result"}
            value={""}
            name={""}
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
        to={"/work-exp"}
        isSpecial
      />
      <CustomButton
        name={"Next"}
        onClick={handleNextButtonClick}
      />
    </div>
    </div>
  )
}

export default Project