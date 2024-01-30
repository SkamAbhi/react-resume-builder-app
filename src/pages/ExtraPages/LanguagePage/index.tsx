import { useStyletron } from "baseui";
import CustomButton from "../../../components/CustomButton";
import { useCheckboxContext } from "../../../utlis/AdditonalSection/CheckboxProvider";
import { useNavigate } from "react-router-dom";
import { TrashCan, Add } from "@carbon/icons-react";
import { Button } from "baseui/button";
import { Input } from "baseui/input";
import React, { useState } from "react";

interface LanguagesProps {
  nextLink: string;
}

function Languages({ nextLink }: LanguagesProps) {
  const { selectedLinks, updateSelectedLinks, backLinks, updateBackLinks } = useCheckboxContext();
  const [css, $theme] = useStyletron();
  const navigate = useNavigate();

  const handleNextClick = () => {
    const updatedLinks = [...selectedLinks];
    if (updatedLinks.length >= 2) {
      const nextLink = updatedLinks[1];
      updateSelectedLinks([nextLink]);

      updateBackLinks([...backLinks, nextLink]);

      navigate(nextLink);
    } else {
      navigate("/download");
    }
  };

  const handleBackClick = () => {
    const previousPage = backLinks.pop();
    updateBackLinks([...backLinks]);

    if (previousPage) {
      navigate(previousPage);
    } else {
      navigate("/");
    }
  };

  const [selectedSkills, setSelectedSkills] = React.useState<string[]>([]);
  const [inputValues, setInputValues] = useState<string[]>([]);

  const handleAddOneMore = () => {
    setSelectedSkills((prevSkills) => [...prevSkills, ""]);
    setInputValues((prevInputValues) => [...prevInputValues, ""]);
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

    setInputValues((prevInputValues) =>
      prevInputValues.filter((_, i) => i !== index)
    );
  };

  return (
    <div className={css({ marginLeft: "17rem" })}>
      <div
        className={css({
          marginLeft: "30px",
          marginRight: "20px",
          [$theme.mediaQuery.medium]: {},
          [$theme.mediaQuery.large]: {
            width: "100%",
            maxWidth: "1100px",
            margin: 0,
          },
        })}
      >
        <h1
          className={css({
            ...$theme.typography.HeadingMedium,
            [$theme.mediaQuery.medium]: {
              ...$theme.typography.HeadingXXLarge,
            },
          })}
        >
          Do you speak any other languages?{" "}
        </h1>
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
                    placeholder={` Language ${index + 1}`}
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
            maxWidth: "760px",
          },
          [$theme.mediaQuery.large]: {
            width: "100%",
            maxWidth: "1050px",
            marginRight: "50px",
          },
        })}
      >
        <CustomButton name={"Back"} onClick={handleBackClick} isSpecial />
        <CustomButton name={"Next"} to={nextLink} onClick={handleNextClick} />
      </div>
    </div>
  );
}

export default Languages;