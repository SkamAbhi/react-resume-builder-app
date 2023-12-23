"use client";
import React, { useState } from "react";
import { useStyletron } from "baseui";
import { Textarea } from "baseui/textarea";
import CustomButton from "../../components/CustomButton";

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
          >Briefly tell us about your background</h1>
          <p>Choose from our pre-written examples below or write your own.</p>
        </div>
      </div>
      <form
        className={css({
          backgroundColor: "#F7F7F7",
          borderRadius: "2px",
          boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
        })}
      >
        <div
          className={css({
            marginRight:'20px',
            marginLeft:'20px',
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
                  minHeight: "300px",
                  backgroundColor: $theme.colors.primaryB,
                }),
              },
            }}
          />
        </div>
      </form>

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
