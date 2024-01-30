import  { useEffect, useState } from "react";
import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { Drawer, ANCHOR } from "baseui/drawer";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const [css, $theme] = useStyletron();
  const navigate = useNavigate();

  const sections = [
    { label: "Personal", path: "/personal", icon: "/personal.svg" },
    { label: "Education", path: "/education", icon: "/education.svg" },
    { label: "Work Experience", path: "/work-exp", icon: "/work.svg" },
    { label: "Project", path: "/project", icon: "/project.svg" },
    { label: "Skills", path: "/skills", icon: "/skills.svg" },
    { label: "Summary", path: "/summary", icon: "/summary.svg" },
    { label: "Finalize", path: "/finalize", icon: "/finalize.svg" },
  ];

  const [activeSection, setActiveSection] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIndex = sections.findIndex(
      (section) => section.path === location.pathname
    );
    if (sectionIndex !== -1) {
      setActiveSection(sectionIndex);
    }
  }, [location.pathname, sections]);

  // Update local storage when active section changes
  useEffect(() => {
    localStorage.setItem("activeSection", activeSection.toString());
  }, [activeSection]);
  
  const isSignInPage = location.pathname === "/sign-in";

  if (isSignInPage) {
    return null;
  }
  const isSignUpPage = location.pathname === "/sign-up";

  if (isSignUpPage) {
    return null;
  }
  const isForgotpasswordPage = location.pathname === '/forgot-password';
  if(isForgotpasswordPage){
    return null;
  }
  const isDownloadPage = location.pathname === "/download";

  if (isDownloadPage) {
    return null;
  }
  return (
    <>
      {/* Mobile Header */}
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          paddingTop: "15px",
          paddingBottom: "15px",
          backgroundColor: "#07142b",
          color: "white",
          position:'fixed',
          [$theme.mediaQuery.large]: {
            display: "none",
          },
          zIndex:1,
          top:'0'
        })}
      >
        <div className={css({
          zIndex:10
        })}>
          <Drawer
            isOpen={isMobileMenuOpen}
            autoFocus
            onClose={() => setIsMobileMenuOpen(false)}
            anchor={ANCHOR.left}
            overrides={{
              Root: {
                style: () => ({
                  zIndex:999,
                  margin:'0'
                })
              },DrawerBody: {
                style: () => ({
                  margin: "0", 
                })
              },
              DrawerContainer: {
                style: ({ $theme }) => ({
                  width: "300px",
                  backgroundColor: "#07142b",
                  [$theme.mediaQuery.medium]: {
                    width: "350px",
                  },
                  [$theme.mediaQuery.large]: {
                    display: "none",
                  },
                }),
              },
              Close: {
                style: () => ({
                  display: "none",
                }),
              },
            }}
          >
            <div
              className={css({
                color:'white',
                ...$theme.typography.LabelMedium,
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                })}
              >
                <h2 className={css({
                  marginLeft:'20px'
                })}>Cratify</h2>
                <Button
                  onClick={() => setIsMobileMenuOpen(false)}
                  overrides={{
                    BaseButton: {
                      style: () => ({
                        backgroundColor: "transparent",
                        zIndex: "10",
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
                  gap: "10px",
                  marginTop: "45px",
                })}
              >
                {sections.map((section, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setActiveSection(index);
                      navigate(section.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className={css({
                      cursor: "pointer",
                      backgroundColor:
                    index === activeSection ? "#1f2937" : "#07142b",
                      color: "white",
                      padding: "10px",
                      borderRadius: "8px",
                      width: "auto",
                      display: "flex",
                      gap: "20px",
                      margin:'0 15px',
                      ":hover": {
                        backgroundColor: "#1f2937",
                      },
                    })}
                  >
                    <img
                      src={section.icon}
                      alt={section.label}
                      style={{
                        width: "24px",
                        height: "24px",
                        marginLeft: "24px",
                      }}
                    />
                    {section.label}
                  </div>
                ))}
              </div>
            </div>
          </Drawer>

          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            overrides={{
              BaseButton: {
                style: () => ({
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
              style={{ width: "24px", height: "24px", color: "black" }}
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

      {/* Sidebar */}
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
          <div
            className={css({
              marginTop: "40px",
            })}
          >
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
                  color: "white",
                  padding: " 8px 0",
                  borderRadius: "8px",
                  marginBottom: "5px",
                  display: "flex",
                  gap: "20px",
                  maxWidth: "230px",
                  ":hover": {
                    backgroundColor: "#1f2937",
                  },
                  ...$theme.typography.LabelMedium,
                })}
              >
                <img
                  src={section.icon}
                  alt={section.label}
                  style={{
                    width: "24px",
                    height: "24px",
                    marginLeft: "14px",
                    color: "white",
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
            position: "fixed",
            bottom: "20px",

            ...$theme.typography.LabelXSmall,
          })}
        >
          <p>Contact Us</p>
          <p>© 2023, Works Limited.</p>
          <p> All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Navigation;
