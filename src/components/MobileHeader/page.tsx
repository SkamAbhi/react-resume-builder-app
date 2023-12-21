import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import React, { useState } from "react";
import { Drawer,  ANCHOR } from "baseui/drawer";
import { useNavigate } from "react-router-dom";

function MobileHeader() {
  const [css, $theme] = useStyletron();
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate(); 
  
  const sections = [
    { label: "Personal", path: "/personal", icon: "/personal.svg" },
    { label: "Work Experience", path: "/work-exp", icon: "" },
    { label: "Education", path: "/education", icon: "/education.svg" },
    { label: "Skills", path: "/skills", icon: "/skills.svg" },
    { label: "Summary", path: "/summary", icon: " " },
    { label: "Finalize", path: "/finalize", icon: " " },
  ];

  const [activeSection, setActiveSection] = useState(0);

  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingTop: "10px",
        paddingBottom: "10px",
        backgroundColor: "#07142b",
        color: "white",
        [$theme.mediaQuery.large]: {
          display: "none",
        },
      })}
    >
      <div>
        <Drawer
          isOpen={isOpen}
          autoFocus
          onClose={() => setIsOpen(false)}
          anchor={ANCHOR.left}
          overrides={{
            DrawerContainer: {
              style: ({ $theme }) => ({
                width: "300px",
                backgroundColor: "#011936",
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px",

                [$theme.mediaQuery.medium]: {
                  width: "350px",
                },
                [$theme.mediaQuery.large]: {
                  display: "none",
                },
              }),
            },
            Close: {
              style: ({ $theme }) => ({
                display: "none",
              }),
            },
          }}
        >
          <div
            className={css({
              width: "400px",
              color: "white",
              ...$theme.typography.LabelMedium,
            })}
          >
            <div
              className={css({
                display: "flex",
                justifyContent: "space-between",
                width: "250px",
              })}
            >
              <h2>Cratify</h2>
              <Button
                onClick={() => setIsOpen(false)}
                overrides={{
                  BaseButton: {
                    style: ({ $theme }) => ({
                      backgroundColor: "transparent",
                      ":hover": {
                        backgroundColor: "transparent",
                      },
                    }),
                  },
                }}
              >
                <img src="/menuClose.svg" alt="menu-close" width="20px" />
              </Button>
            </div>
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginTop: "45px",
              })}
            >
              {sections.map((section, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActiveSection(index);
                    navigate(section.path);
                  }}
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      index === activeSection ? "white" : "transparent",
                    color: index === activeSection ? "#07142b" : "white",
                    padding: "10px",
                    borderTopRightRadius: "30px",
                    borderBottomRightRadius: "30px",
                    marginBottom: "5px",
                    width: "210px",
                  }}
                >
                  <img
                    src={section.icon}
                    alt={section.label}
                    style={{ width: "24px", height: "24px" }}
                  />
                  {section.label}
                </div>
              ))}
            </div>
          </div>
        </Drawer>

        <Button
          onClick={() => setIsOpen(!isOpen)}
          overrides={{
            BaseButton: {
              style: ({ $theme }) => ({
                position: "fixed",
                left: 0,
                top: 0,
                backgroundColor: "transparent",
                ":hover": {
                  backgroundColor: "transparent",
                },
              }),
            },
          }}
        >
          <img
            src="/menu.svg"
            alt="Logo"
            style={{ width: "24px", height: "24px", color: "white" }}
          />
        </Button>
      </div>
      <div
        className={css({
          ...$theme.typography.LabelLarge,
        })}
      >
        Cratify
      </div>
    </div>
  );
}

export default MobileHeader;
