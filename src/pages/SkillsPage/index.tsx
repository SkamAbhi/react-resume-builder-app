"use client";
import * as React from "react";
import { StatefulInput } from "baseui/input";
import { Button } from "baseui/button";
import { useStyletron } from "baseui";
import CustomButton from "../../components/CustomButton";
import { TrashCan, Add } from "@carbon/icons-react";

function Skills() {
  const [values, setValues] = React.useState<string[]>([""]);
  const [css, $theme] = useStyletron();
  const handleAddOneMore = () => {
    setValues([...values, ""]);
  };
  const handleInputChange = (index: number, newValue: string) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };
  const handleRemove = (index: number) => {
    if (values.length === 1) {
      setValues([""]);
      return;
    }
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
  };
  return (
    <div
      className={css({
      
        [$theme.mediaQuery.medium]: {},
        [$theme.mediaQuery.large]: {
          marginLeft: "20rem",
          width: "1000px",
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
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
            marginLeft: "20px",
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
          alignItems: "flex-start",
          width: "50%",
        })}
      >
        {values.map((inputValue, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "20px",
              gap: "20px",
            }}
          >
            <StatefulInput
              value={inputValue}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder={` Skill ${index + 1}`}
              clearOnEscape
              overrides={{
                Input: {
                  style: ({ $theme }) => ({
                    backgroundColor: $theme.colors.primaryB,
                  }),
                },
              }}
            />
            <Button onClick={() => handleRemove(index)}>
              <TrashCan />
            </Button>
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
          {" "}
          <Add /> Add one another
        </Button>
        <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
            marginRight: "20px",
            marginTop: "20px",
            width: "75vw",
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
    </div>
  );
}
export default Skills;
