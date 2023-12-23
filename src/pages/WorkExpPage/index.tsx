"use client";

import { useStyletron } from "baseui";
import { StatefulDatepicker } from "baseui/datepicker";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

export default function WorkExp() {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        [$theme.mediaQuery.large]: {
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "40px",
          width: "1000px",
          marginLeft: "17rem",
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
            Tell us about your most recent job{" "}
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
      </div>
      <div
        className={css({
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          marginRight: "10px",
          marginLeft:'15px',
          [$theme.mediaQuery.large]: {
            marginLeft: "60px",
          },
        })}
      >
        <div
          className={css({
            [$theme.mediaQuery.medium]: {
              display: "flex",
              gap: "30px",
            },
          })}
        >
          <CustomInput
            placeholder={"eg- developer"}
            label={"Job Title"}
            value={""}
            name={""}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
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
            [$theme.mediaQuery.medium]: {
              display: "flex",
            },
          })}
        >
          {" "}
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
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            [$theme.mediaQuery.medium]: {
              flexDirection: "row",
              gap: "30px",
            },
            [$theme.mediaQuery.large]:{
              maxWidth: "1030px",

            }
          })}
        >
          <div
            className={css({
              width: "100%",
              ...$theme.typography.LabelMedium,

              [$theme.mediaQuery.medium]: {
                width: "calc(50% - 15px)"
              
              },
              [$theme.mediaQuery.large]: {
                width: "calc(50% - 15px)"
              },
            })}
          >
            <label>Start Date</label>
            <StatefulDatepicker
              aria-label="Select a start date"
              clearable={true}
              initialState={{ value: [] }}
              highlightedDate={new Date("March 10, 2019")}
              overrides={{
                Input: {
                  props: {
                    overrides: {
                      Root: {
                        style: ({ $theme }) => ({
                          backgroundColor: $theme.colors.primaryB,
                        }),
                      },
                      InputContainer: {
                        style: ({ $theme }) => ({
                          backgroundColor: $theme.colors.primaryB,
                          width:'470px',
                          paddingRight:'25px'
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
                width: "calc(50% - 15 px)"
              
              },
              [$theme.mediaQuery.large]: {
                width: "calc(50% - 15 px)"
              },
            })}
          >
            <label>End Date</label>
            <StatefulDatepicker
              aria-label="Select an end date"
              clearable={true}
              initialState={{ value: [] }}
              highlightedDate={new Date("March 10, 2019")}
              overrides={{
                Input: {
                  props: {
                    overrides: {
                      Root: {
                        style: ({ $theme }) => ({
                          backgroundColor: $theme.colors.primaryB,
                        }),
                      },
                      InputContainer: {
                        style: ({ $theme }) => ({
                          backgroundColor: $theme.colors.primaryB,
                        }),
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
           marginTop:'7vh',
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
