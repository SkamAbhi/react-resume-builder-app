"use client";
import React, { useState } from "react";
import { useStyletron } from "baseui";
import { StatefulTextarea, Textarea } from "baseui/textarea";
import CustomButton from "../../components/CustomButton";
import { StatefulInput } from "baseui/input";

const Summary: React.FC = () => {
  const [css, $theme] = useStyletron();
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  // const handleSubmit = () => {
  //   console.log("Submitted:", inputValue);
  //   setInputValue("");
  // };

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        MaxWidth: "1000px",
        ...$theme.typography.LabelMedium,

        [$theme.mediaQuery.large]: {
          marginLeft: "20rem",
          marginTop: "40px",
        },
      })}
    >
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
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
            Briefly tell us about your background
          </h1>
          <p>Choose from our pre-written examples below or write your own.</p>
        </div>
      </div>
      <div
        className={css({
          display: "flex",
        })}
      >
        <div
          className={css({
            marginRight: "20px",
            marginLeft: "20px",
            backgroundColor: $theme.colors.primaryB,
          })}
        >
          <StatefulTextarea
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
                    width: "460px",
                    maxWidth: "500px",
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
                width: "100%",
                maxWidth: "460px",
                overflowY: "auto",
                maxHeight: "300px",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              })}
            >
              {/* Render job roles here */}
            </ul>
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
              {/* Render pre-written examples here */}
            </div>
            <div
              className={css({
                position: "relative",
                marginTop: "60px",
              })}
            >
              <ul
                className={css({
                  overflowY: "auto",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "8px",
                  marginTop: "8px",
                  position: "absolute",
                  zIndex: 1,
                  top: "calc(100% + 8px)",
                  width: "100%",
                  maxWidth: "300px",
                })}
              >
                {/* Render selected job skills here */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          marginRight: "20px",
          marginLeft: "20px",
          marginTop: "60px",
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
          onClick={console.log}
          to={"/finalize"}
        />
      </div>
    </div>
  );
};

export default Summary;
