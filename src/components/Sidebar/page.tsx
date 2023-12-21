import React from "react";
import { ProgressSteps, NumberedStep } from "baseui/progress-steps";
import { useStyletron } from "baseui";

function Sidebar() {
  const [current, setCurrent] = React.useState(0);
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        height: "100%",
        zIndex:9999,
        display:'none',
        [$theme.mediaQuery.large]: {
          display:'flex '

        },
      })}
    >
      <div
        className={css({
          backgroundColor: "#07142b",
          position: "fixed",
          padding: "20px",
          paddingBottom: "40px",
          display:'none',
          [$theme.mediaQuery.small]: {
            
          },
          [$theme.mediaQuery.medium]: {
            width: "10rem",
            paddingLeft:'0',
            display:'none'
          },
          [$theme.mediaQuery.large]: {
            width: "13rem",
            paddingLeft:'20px',
            display:'block'

          },
        })}
      >
        <div
          className={css({
            ...$theme.typography.LabelLarge,
            color: $theme.colors.primaryB,
            marginTop: "30px",
            paddingLeft: "15px",
          })}
        >
          Craftify
        </div>
        <ProgressSteps
          current={current}
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                display: "flex",
                flexDirection: "column",
                maxWidth: "200px",
                paddingTop: "45px",
                paddingBottom: "115px",
              }),
            },
            Icon: {
              style: ({ $theme }) => ({
                backgroundColor: $theme.colors.primaryB,
                color: $theme.colors.primary,
                width: "20px",
                height: "20px",
                border: "4px solid #66778f",
                marginTop: "0",
              }),
            },
            Title: {
              style: ({ $theme }) => ({
                color: "white",
                margin: 0,
                ...$theme.typography.LabelSmall,
                paddingTop: "5px",
                paddingBottom: "5px",
              }),
            },
            Tail: {
              style: ({ $theme }) => ({
                left: "27px",
                top: "-25px",
              }),
            },
            Content: {
              style: ({ $theme }) => ({
                width: "150px",
              }),
            },
          }}
        >
          <NumberedStep title="Personal Details"></NumberedStep>
          <NumberedStep title="Education"></NumberedStep>
          <NumberedStep title="Work History"></NumberedStep>
          <NumberedStep title="Skills"></NumberedStep>
          <NumberedStep title="Summary"></NumberedStep>
          <NumberedStep title="Finalize"></NumberedStep>
        </ProgressSteps>

        <div
          className={css({
            margin: "15px",
            marginLeft: "10px",
            color: "white",
            marginTop: "20px",

            ...$theme.typography.LabelXSmall,
          })}
        >
          <p>Contact Us</p>
          <p>© 2023, Works Limited.</p>
          <p> All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
