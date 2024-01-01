
"use client";


import React, { ChangeEvent, useState } from "react";
import { useStyletron } from "baseui";
import { Datepicker } from "baseui/datepicker";
import { StatefulPopover } from "baseui/popover";
import { Button } from "baseui/button";
import { Textarea } from "baseui/textarea";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { Add, Idea, Subtract } from "@carbon/icons-react";

function Education() {
  const [css, $theme] = useStyletron();
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

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
  return (
    <div
      className={css({
        [$theme.mediaQuery.medium]: {
          marginRight: "2rem",
          paddingLeft: "25px",
          paddingTop: "30px",
          paddingBottom: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        [$theme.mediaQuery.large]: {
          display: "flex",
          flexDirection: "column",
          marginLeft: "17rem",
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
          >          Tell us about your most recent job{" "}
          </h1>
          <p
            className={css({
              ...$theme.typography.LabelSmall,
              [$theme.mediaQuery.medium]: {
                ...$theme.typography.LabelMedium,
              },
            })}
          >
                  We will Start there and work backwards{" "}

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
            >            </div>
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
            placeholder={"eg- developer"}
            label={"Job Title"}
            value={""}
            name={""}
            onChange={handleHiddenInputChange}
          />
          <CustomInput
            placeholder={"eg -company"}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
            label={"employer"}
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
              [$theme.mediaQuery.medium]:{
                width: "48.5%",

              }
            })}
          >
            <CustomInput
            placeholder={"city state etc "}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
            label={"Location"}
            value={""}
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
              ...$theme.typography.LabelMedium,

              [$theme.mediaQuery.medium]: {
                width: "calc(50% - 15px)",
              },
              [$theme.mediaQuery.large]: {
                width: "calc(50% - 15px)",
              },
            })}
          >
            <label>Start Date</label>
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
                          border: "1px solid black",
                          borderRadius: "6px",
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
              ...$theme.typography.LabelMedium,

              [$theme.mediaQuery.medium]: {
                width: "calc(50% - 15px)",
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
                          border: "1px solid black",
                          padding: "0px 0px",
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
                <Subtract /> Add description about Job{" "}
              </>
            ) : (
              <>
                {" "}
                <Add /> Add description about Job{" "}
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
          marginLeft: "20px",
          marginTop: "7vh",
          [$theme.mediaQuery.medium]: {
            width: "100%",
            maxWidth: "760px",
          },
          [$theme.mediaQuery.large]: {
            width: "100%",
            maxWidth: "1100px",
          },
        })}
      >
           <CustomButton
          name={"Back"}
          to={"/education"}
          onClick={console.log}
          isSpecial
        />
        <CustomButton
          name={"Next:Skills"}
          onClick={console.log}
          to={"/skills"}
        />
      </div>
    </div>
  );
}
export default Education;

