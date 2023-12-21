"use client";

import { useStyletron } from "baseui";
import { StatefulDatepicker } from "baseui/datepicker";
import CustomButton from "../../components/CustomButton/page";
import CustomInput from "../../components/CustomInput/page";

export default function WorkExp() {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "40px",
        width:'1000px',
        ...$theme.typography.LabelMedium,
        marginLeft:'20rem',
      })}
    >
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
        })}
      >
        <div>
          <h1>Tell us about your most recent job </h1>
          <p>We will Start there and work backwards </p>
        </div>
      </div>
      <div
        className={css({
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          marginRight: "10px",
          marginLeft: "60px",
        })}
      >
        <div
          className={css({
            display: "flex",
            gap: "30px",
          })}
        >
          <CustomInput
            placeholder={"eg- developer"}
            label={"Job Title"}
            value={""}
            name={""} 
            onChange={function (): void {
              throw new Error("Function not implemented.");
            } }          />
          <CustomInput
            placeholder={"eg -company"}
           onChange={function (): void {
              throw new Error("Function not implemented.");
            } }
            label={"employer"}
            value={""}
            name={""}
          />
        </div>
        <div
          className={css({
            display: "flex",
          })}
        >
          {" "}
          <CustomInput
            placeholder={"city state etc "}
           onChange={function (): void {
              throw new Error("Function not implemented.");
            } }
            label={"Location"}
            value={""}
            name={""}
          />
        </div>
        <div>
        <StatefulDatepicker
            aria-label="Select a date"
            clearable={true}
            initialState={{ value: [] }}
            highlightedDate={new Date("March 10, 2019")}
            range
            separateRangeInputs
          />
        </div>
      
      </div>
      <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
            marginRight: "20px",
            marginLeft: "20px",
            paddingTop:"100px"
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
