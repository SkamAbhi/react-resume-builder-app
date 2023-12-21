"use client";
import * as React from "react";
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { useStyletron } from "baseui";
import CustomButton from "../../components/CustomButton/page";
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
          <h1>What skills would you like to highlight ?</h1>
          <p>Choose from our pre-written examples below or write your own.</p>
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
              gap:'20px'
            }}
          >
            <Input
              value={inputValue}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder={`Add your Skill ${index + 1}`}
              clearOnEscape
              overrides={{
                Input: {
                  style: ({ $theme }) => ({
                    backgroundColor: "white",
                  }),
                },
              }}
            />
            <Button onClick={() => handleRemove(index)} ><TrashCan /></Button>
          </div>
        ))}
        <Button onClick={handleAddOneMore}  overrides={{
            BaseButton: {
              style: ({ $theme }) => ({
                backgroundColor: $theme.colors.primaryB,
                color:'#0C1986',
                ":hover": {
                  backgroundColor: "rgba(232, 241, 247, 0.8)",
                },

              })
            }
          }}> <Add/> Add one another</Button>
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
  