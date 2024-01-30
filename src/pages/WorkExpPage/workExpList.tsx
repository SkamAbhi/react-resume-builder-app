import { Add, Idea } from "@carbon/icons-react";
import { Button } from "baseui/button";
import { StatefulPopover } from "baseui/popover";
import { useStyletron } from "baseui";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";

function ExperienceList() {
  const [css, $theme] = useStyletron();
  const navigate = useNavigate();

  const handleAddWorkExp = () => {
    navigate("/work-exp");
  };
  return (
    <div>
      <div
        className={css({
          marginTop: "50px",
          [$theme.mediaQuery.medium]: {
            marginRight: "2rem",
            marginTop: "50px",
            paddingLeft: "25px",
            paddingBottom: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
          [$theme.mediaQuery.large]: {
            display: "flex",
            flexDirection: "column",
            marginLeft: "17rem",
            marginTop: "30px",
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
            >
              Work Experience Summary
            </h1>
          </div>
          <StatefulPopover
            content={
              <div
                className={css({
                  backgroundColor: $theme.colors.primaryB,
                  padding: "0px 25px",
                  [$theme.mediaQuery.medium]: {
                    padding: "0px 40px",
                  },
                  ...$theme.typography.LabelMedium,
                })}
              >
                <h3>Expert Insights</h3>
                <p
                  className={css({
                    ...$theme.typography.LabelSmall,
                  })}
                >
                  Ageism in the workforce still exists. If your degree is over
                  ten years old, consider removing the date.
                  <ul>
                    <li
                      className={css({
                        marginBottom: "8px",
                      })}
                    >
                      List the schools you have attended and any degrees you
                      have earned, starting with your most recent.
                    </li>
                    <li
                      className={css({
                        marginBottom: "8px",
                      })}
                    >
                      {" "}
                      List relevant courses if you do not have much work
                      experience.
                    </li>
                    <li
                      className={css({
                        marginBottom: "8px",
                      })}
                    >
                      Certifications and training programs should be included in
                      a separate section.
                    </li>
                  </ul>
                </p>
              </div>
            }
            accessibilityType={"tooltip"}
            placement={"bottomRight"}
            overrides={{
              Body: {
                style: ({ $theme }) => ({
                  maxWidth: "500px",
                  backgroundColor: $theme.colors.primaryB,
                  margin: "0 20px",
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
                    position: "initial",
                    marginTop: "15px",
                    maxHeight: "50px",
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
            border: "1px solid black",
            height: "200px",
            maxWidth: "1100px",
            width: "100%",
            borderRadius: "10px",
            marginBottom: "50px",
          })}
        >
          <div
            className={css({
              display: "flex",
            })}
          >
            <h4
              className={css({
                marginLeft: "90px",
                ...$theme.typography.LabelMedium,
              })}
            >
              E-commerce Platform
            </h4>
            <p
              className={css({
                marginTop: "21px",
                marginLeft: "10px",
                ...$theme.typography.LabelMedium,
              })}
            >
              Role: Front-End Developer
            </p>
          </div>
          <p
            className={css({
              marginLeft: "90px",
              marginTop: "0px",
              ...$theme.typography.LabelMedium,
            })}
          >
            Technologies Used = Angular, Node.js, MongoDB
          </p>
          <p
            className={css({
              marginLeft: "90px",
              marginTop: "0px",
              ...$theme.typography.LabelMedium,
              paddingRight: "30px",
            })}
          >
            Description of Project : Developed responsive user interfaces,
            integrated payment gateways, collaborated with UX/UI designers.
          </p>
          <p
            className={css({
              marginLeft: "90px",
              marginTop: "0px",
              ...$theme.typography.LabelMedium,
            })}
          >
            Result : Increased user engagement and sales by 25% within the first
            quarter.
          </p>
        </div>

        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px dashed #0C1986",
            borderRadius: "20px",
            borderColor: "#0C1986",
            color: "#0C1986",
            backgroundColor: "#fff",
            marginBottom: "20px",
            height: "45px",
            textAlign: "center",
            margin: " 0 10px",
            ...$theme.typography.LabelXSmall,
            [$theme.mediaQuery.medium]: {
              ...$theme.typography.LabelMedium,
              width: "100%",
              maxWidth: "990px",
            },
            ":hover": {
              backgroundColor: "rgba(232, 241, 247, 0.8)",
            },
          })}
          onClick={handleAddWorkExp}
        >
          <div
            className={css({
              ...$theme.typography.LabelMedium,
            })}
          >
            {" "}
            <Add />
            Add another Work Experience
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
              maxWidth: "1100px",
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
          <CustomButton name={"Next"} onClick={console.log} to={"/project"} />
        </div>
      </div>
    </div>
  );
}

export default ExperienceList;

// import * as React from "react";
// import { List, arrayMove, arrayRemove } from "baseui/dnd-list";
// import { useStyletron } from "baseui";

// const CustomListItem = ({ title, role, technologies, description, result }) => {
//   const [css, $theme] = useStyletron();

//   return (
//     <div className={css({ display: "flex" })}>
//       <h4 className={css({ marginLeft: "90px", ...$theme.typography.LabelMedium })}>
//         {title}
//       </h4>
//       <p className={css({ marginTop: "21px", marginLeft: "10px", ...$theme.typography.LabelMedium })}>
//         Role: {role}
//       </p>
//       <p className={css({ marginLeft: "90px", marginTop: "0px", ...$theme.typography.LabelMedium })}>
//         Technologies Used = {technologies.join(", ")}
//       </p>
//       <p className={css({ marginLeft: "90px", marginTop: "0px", ...$theme.typography.LabelMedium, paddingRight: "30px" })}>
//         Description of Project: {description}
//       </p>
//       <p className={css({ marginLeft: "90px", marginTop: "0px", ...$theme.typography.LabelMedium })}>
//         Result: {result}
//       </p>
//     </div>
//   );
// };

//  function ProjectList(){
//   const [items, setItems] = React.useState([
//     { title: "E-commerce Platform", role: "Front-End Developer", technologies: ["Angular", "Node.js", "MongoDB"], description: "Developed responsive user interfaces, integrated payment gateways, collaborated with UX/UI designers.", result: "Increased user engagement and sales by 25% within the first quarter." },
//     // Add more items as needed
//   ]);

//   return (
//     <List
//       items={items}
//       onChange={({ oldIndex, newIndex }) =>
//         setItems(
//           newIndex === -1
//             ? arrayRemove(items, oldIndex)
//             : arrayMove(items, oldIndex, newIndex)
//         )
//       }
//       renderItem={({ item, index }) => <CustomListItem {...item} />}
//     />
//   );
// };

// export default ProjectList