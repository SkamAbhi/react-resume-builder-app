import React, { useState } from "react";
import { useStyletron } from "baseui";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [css, $theme] = useStyletron();
  const navigate = useNavigate();

  const sections = [
    { label: "Personal", path: "/personal", icon: "/personal.svg" },
    { label: "Education", path: "/education", icon: "/education.svg" },
    { label: "Work Experience", path: "/work-exp", icon: "/work.svg" },
    { label: "Skills", path: "/skills", icon: "/skills.svg" },
    { label: "Summary", path: "/summary", icon: "/summary.svg" },
    { label: "Finalize", path: "/finalize", icon: "/finalize.svg" },
  ];

  const [activeSection, setActiveSection] = useState(0);

  return (
    <div
      className={css({
        zIndex: 9999,
        display: "none",
        [$theme.mediaQuery.large]: {
          display: "flex ",
        },
      })}
    >
      <div
        className={css({
          backgroundColor: "#07142b",
          position: "fixed",
          padding: "20px",
          paddingBottom: "40px",
          display: "none",
          [$theme.mediaQuery.small]: {},
          [$theme.mediaQuery.medium]: {
            width: "10rem",
            paddingLeft: "0",
            display: "none",
          },
          [$theme.mediaQuery.large]: {
            width: "14rem",
            paddingLeft: "15px",
            display: "block",
            height: "100%",
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
        <div className={css({
          marginTop:'40px'
        })}>
        {sections.map((section, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActiveSection(index);
                    navigate(section.path);
                  }}
                 className={css({
                    cursor: "pointer",
                    backgroundColor:
                      index === activeSection ? "#1f2937" : "transparent",
                    color:  "white",
                    padding: " 8px 0",
                    borderRadius: "8px",
                    marginBottom: "5px",
                    display: "flex",
                    gap: "20px",
                    maxWidth:'230px',
                    ":hover":{
                      backgroundColor:'#1f2937'
                    },
                 ...$theme.typography.LabelMedium
                  })}
                >
                  <img
                    src={section.icon}
                    alt={section.label}
                    style={{
                      width: "24px",
                      height: "24px",
                      marginLeft: "14px",
                      color:'white'
                    }}
                  />
                  {section.label}
                </div>
              ))}
              </div>
            </div>

        <div
          className={css({
            marginLeft: "25px",
            color: "white",
            position: "absolute",
            bottom: "50px",

            ...$theme.typography.LabelXSmall,
          })}
        >
          <p>Contact Us</p>
          <p>© 2023, Works Limited.</p>
          <p> All rights reserved.</p>
        </div>
      </div>
  );
}

export default Sidebar;
