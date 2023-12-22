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
        marginTop: "40px",
        width: "1000px",
        ...$theme.typography.LabelMedium,
        marginLeft: "20rem",
      })}
    >
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
        })}
      >
        <div>
          <h2>Briefly tell us about your background</h2>
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
        <div>
          <Textarea
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your summary here..."
            overrides={{
              Input: {
                style: {
                  borderRadius: "4px",
                  minHeight: "300px",
                },
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
