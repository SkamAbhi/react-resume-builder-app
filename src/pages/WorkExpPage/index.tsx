interface CompanyAddress {
  city: string;
  country: string;
}

"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { useStyletron } from "baseui";
import { Datepicker } from "baseui/datepicker";
import { StatefulPopover } from "baseui/popover";
import { Button } from "baseui/button";
import { Textarea } from "baseui/textarea";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { Add, Idea, Subtract } from "@carbon/icons-react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Input } from "baseui/input";
import DropdownInput from "../../components/DropDownInput";
import { useRecoilState } from "recoil";
import { workExperienceData } from "../../utlis/resumeAtoms";
import { useMutation } from "react-relay";
import { addNewWorkExperienceAndCompanyAndCompanyAddress } from "../../mutations/workExpPageMutation";

function WorkExp() {

  const [updateWorkExpInfo] = useMutation(addNewWorkExperienceAndCompanyAndCompanyAddress);
  const [css, $theme] = useStyletron();
  const [showInput, setShowInput] = useState(false);
  const [summaryValue, setSummaryValue] = useState("");
  const [workExpData, setWorkExpData] = useRecoilState(workExperienceData)
  const navigate = useNavigate();

  const [companies, setCompanies] = useState([]);
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [showCompanyOptions, setShowCompanyOptions] = useState(false);

  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [selectedCompanyAddress, setSelectedCompanyAddress] = useState<CompanyAddress | null>(null);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const GRAPHQL_ENDPOINT = 'http://localhost:3001/graphql?';


  const handleNextButtonClick = async () => {
    try {
      const input = {
        jobTitle: workExpData.jobTitle,
        companyId: selectedCompanyId,
        companyName: workExpData.companyName,
        city: selectedCompanyAddress?.city,
        country: selectedCompanyAddress?.country,
        startDate: workExpData.startDate,
        endDate: workExpData.endDate,
        idResume: "a5718b49-d596-4078-86bd-075be01f67c2",
      };
      const response = await updateWorkExpInfo({ variables: { input } });

      if (workExpData.jobTitle.trim() !== "") {
        // Navigate to a different link when input data is provided
        navigate("/work-exp-list");
      } else {
        // Navigate to the given link when no input data is provided
        navigate("/project");
      }
      // Handle the response from the server
      console.log(`Educational data updated:`, response);

    } catch (error) {
      console.error('Error updating educational info:', error);
    }
  };

  const handleButtonClick = () => {
    setShowInput(!showInput);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWorkExpData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));

    localStorage.setItem(
      "userData",
      JSON.stringify({
        ...workExpData,
        [name]: value,
      })
    );
  };

  const handleTextareaChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSummaryValue(event.target.value);
  };


  const handleInputFocus = async () => {
    try {
      const response = await fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
              query {
                getAllCompanies {
                  edges {
                    node {
                      id
                      companyName
                      companyAddresses {
                        city
                        country
                      }
                    }
                  }
                }
              }
            `
        }),
      });

      const responseData = await response.json();
      const fetchedCompanies = responseData.data.getAllCompanies.edges.map(edge => edge.node);
      setCompanies(fetchedCompanies);
      setShowCompanyOptions(true);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  const handleCompanySelect = (selectedCompany) => {
    if (selectedCompany && selectedCompany.companyName) {
      setSelectedCompanyId(selectedCompany.id);
      setSelectedCompanyAddress({
        city: selectedCompany.companyAddresses[0].city,
        country: selectedCompany.companyAddresses[0].country,
      });
      setWorkExpData((prevWorkExpData) => ({
        ...prevWorkExpData,
        companyId: selectedCompany.id,
        companyName: selectedCompany.companyName,
        city: selectedCompany.companyAddresses[0].city,
        country: selectedCompany.companyAddresses[0].country,
      }));
      // Set the cities associated with the selected company
      setCities(selectedCompany.companyAddresses.map((address) => address.city));
      setCountries(selectedCompany.companyAddresses.map((address) => address.country));
      setShowCompanyOptions(false);
    } else {
      console.error('Invalid selected company:', selectedCompany);
    }
  };


  const handleCityChange = (newCity: string) => {
    // Update address details in state
    setSelectedCompanyAddress((prevAddress: CompanyAddress | null) => ({
      ...prevAddress,
      city: newCity,
      country: prevAddress ? prevAddress.country : ''
    }));
    // Update work experience data with the new city
    setWorkExpData((prevWorkExpData) => ({
      ...prevWorkExpData,
      city: newCity,
    }));
  };
  const handleCountryChange = (newCountry: string) => {
    // Update address details in state
    setSelectedCompanyAddress((prevAddress: CompanyAddress | null) => ({
      ...prevAddress,
      country: newCountry,
      city: prevAddress ? prevAddress.city : ''
    }));
    // Update work experience data with the new country
    setWorkExpData((prevWorkExpData) => ({
      ...prevWorkExpData,
      country: newCountry,
    }));
  };

  const handleStartDateChange = ({ date }: { date: Date | null }) => {
    // Update the state with the selected start date
    setStartDate(date);

    // Update eduData.startDate with the selected date if it's not null
    if (date) {
      const formattedDate = date.toISOString().split('T')[0];
      setWorkExpData((prevUserData) => ({
        ...prevUserData,
        startDate: formattedDate,
      }));
    }
  };
  const handleEndDateChange = ({ date }: { date: Date | null }) => {
    // Update the state with the selected end date
    setEndDate(date);

    if (date) {
      const NewEndDate = date.toISOString().split('T')[0];
      setWorkExpData((prevUserData) => ({
        ...prevUserData,
        endDate: NewEndDate,
      }))
    }
  };
  useEffect(() => {
    if (workExpData.startDate && workExpData.endDate) {
      const startDateAsDate = new Date(workExpData.startDate);
      const endDateAsDate = new Date(workExpData.endDate);
      setStartDate(startDateAsDate);
      setEndDate(endDateAsDate);
    }
  }, []);
  return (
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
            Tell us about your most recent job
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
                Ageism in the workforce still exists. If your degree is over ten
                years old, consider removing the date.
                <ul>
                  <li
                    className={css({
                      marginBottom: "8px",
                    })}
                  >
                    List the schools you have attended and any degrees you have
                    earned, starting with your most recent.
                  </li>
                  <li
                    className={css({
                      marginBottom: "8px",
                    })}
                  >
                    List relevant courses if you do not have much work
                    experience.
                  </li>
                  <li
                    className={css({
                      marginBottom: "8px",
                    })}
                  >
                    Certifications and training programs should be included in a
                    separate section.
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
          [$theme.mediaQuery.medium]: {
            width: "100%",
            maxWidth: "1100px",
          },
          margin: "0 30px",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            [$theme.mediaQuery.medium]: {
              flexDirection: "row",
              gap: "30px",
            },
          })}
        >
          <CustomInput
            placeholder={"eg- developer"}
            label={"Job Title"}
            value={workExpData.jobTitle}
            name={"jobTitle"}
            onChange={handleInputChange}
          />
          <div className={css({
            width: '100%',
            position: 'relative',
            marginBottom: $theme.sizing.scale400,
          })}>
            <div
              className={css({
                ...$theme.typography.LabelSmall,
                marginTop: $theme.sizing.scale200,
                marginBottom: $theme.sizing.scale500
              })}>
              Company Name
            </div>
            <Input
              onBlur={() => {setTimeout(() => {setShowCompanyOptions(false); }, 300); }}
              placeholder="Company Name"
              value={workExpData.companyName}
              onFocus={handleInputFocus}
              onChange={(event) => setWorkExpData((prevWorkExpData) => ({ ...prevWorkExpData, companyName: event.target.value }))}
              overrides={{
                Root: {
                  style: ({ $theme }) => ({
                    width: "100%",
                    border
                      : "1.5px solid #838fa0",
                    ":focus-within": {
                      border: "2px solid #0070d6",
                    },
                    backgroundColor: $theme.colors.primaryB,
                    borderRadius: '6px',

                  }),
                },
                Input: {
                  style: ({ $theme }) => ({
                    backgroundColor: $theme.colors.primaryB,
                    width: '100%',
                    borderWidth: '0',
                    padding: '8px ',
                    color: '#1a202c',
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                    borderColor: 'transparent',
                    outline: 'none',
                    ring: '1px solid #cbd5e0',
                    placeholder: { color: '#a0aec0' },
                    focusRing: '2px solid #3b82f6',
                    fontSize: '1rem',
                    lineHeight: '1.25rem',
                  }),
                },
              }}
            />
            {showCompanyOptions && (
              <ul
                className={css({
                  marginTop: $theme.sizing.scale200,
                  listStyle: "none",
                  padding: "0",
                  border: "1px solid #ccc",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "white",
                  position: "absolute",
                  left: 0,
                  zIndex: 1,
                  width: "calc(100% - 4px)",
                  overflowY: "auto",
                  maxHeight: "300px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  maxWidth: "519px",
                  [$theme.mediaQuery.medium]: {
                    maxWidth: "519px",
                    width: "100%",
                  },
                  [$theme.mediaQuery.large]: {
                    maxWidth: "399px",
                  },
                })}
              >
                <>
                  {companies.map((company, index) => (
                    <li
                      className={css({
                        cursor: "pointer",
                        padding: "10px",
                        paddingLeft: "20px",
                        ...$theme.typography.LabelMedium,
                        ":hover": {
                          backgroundColor: "#E7E7E7",
                          fontWeight: "bolder",
                        },
                      })}
                      key={index}
                      onClick={() => handleCompanySelect(company)}        >
                      {company.companyName}
                    </li>
                  ))}

                </>
              </ul>
            )}
          </div>
        </div>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            Maxwidth: "1000px",
            [$theme.mediaQuery.medium]: {
              flexDirection: "row",
              gap: "30px",
            },
            marginBottom: $theme.sizing.scale500,

          })}
        >
          <div
            className={css({
              [$theme.mediaQuery.medium]: {
                width: "100%",
                marginBottom: $theme.sizing.scale500,
              },
            })}
          >
            <label
              className={css({
                ...$theme.typography.LabelSmall,
                [$theme.mediaQuery.medium]: {
                  ...$theme.typography.LabelMedium,
                },
              })}
            >
              Location
            </label>

            <div
              className={css({
                display: 'flex',
                gap: '30px',
                marginTop: '13px'
              })}>

              <DropdownInput
                placeholder="City"
                value={workExpData.city}
                onChange={handleCityChange}
                options={cities}
              />
              <DropdownInput
                placeholder="Country"
                value={workExpData.country}
                onChange={handleCountryChange}
                options={countries}
              />
            </div>
          </div>
        </div>

        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            [$theme.mediaQuery.medium]: {
              flexDirection: "row",
              gap: "30px",
            },
          })}
        >
          <div
            className={css({
              width: "100%",
              ...$theme.typography.LabelSmall,
              paddingBottom: "15px",
              [$theme.mediaQuery.medium]: {
                width: "calc(50% - 15px)",
                ...$theme.typography.LabelMedium,
              },
              [$theme.mediaQuery.large]: {
                width: "calc(50% - 15px)",
              },
            })}
          >
            <label>Start Date</label>
            <Datepicker
              aria-label="Select a start date"
              clearable={true}
              value={startDate}
              onChange={handleStartDateChange}
              initialState={{ value: [] }}
              highlightedDate={new Date("March 10, 2019")}
              overrides={{
                Input: {
                  props: {
                    overrides: {
                      Root: {
                        style: () => ({
                          backgroundColor: $theme.colors.primaryB,
                          padding: "0",
                          border: "1px solid black",
                          borderRadius: "6px",
                          marginTop: "8px",
                        }),
                      },
                      InputContainer: {
                        style: () => ({
                          backgroundColor: $theme.colors.primaryB,
                          width: "500px",
                          padding: "0px 0px",
                        }),
                      },
                      Input: {
                        style: () => ({
                          padding: "6px 10px",
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
              ...$theme.typography.LabelSmall,
              paddingBottom: "15px",
              [$theme.mediaQuery.medium]: {
                width: "calc(50% - 15px)",
                ...$theme.typography.LabelMedium,
              },
              [$theme.mediaQuery.large]: {
                width: "calc(50% - 15px)",
              },
            })}
          >
            <label>End Date</label>
            <Datepicker
              aria-label="Select a start date"
              clearable={true}
              value={endDate}
              onChange={handleEndDateChange}
              initialState={{ value: [] }}
              highlightedDate={new Date("March 10, 2019")}
              overrides={{
                Input: {
                  props: {
                    overrides: {
                      Root: {
                        style: () => ({
                          backgroundColor: $theme.colors.primaryB,
                          padding: "0",
                          border: "1px solid black",
                          borderRadius: "6px",
                          marginTop: "8px",
                        }),
                      },
                      InputContainer: {
                        style: () => ({
                          backgroundColor: $theme.colors.primaryB,
                          width: "500px",
                          borderRadius: "6px",
                        }),
                      },
                      Input: {
                        style: () => ({
                          padding: "6px 10px",
                        }),
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>
        <div
          className={css({
            marginTop: "20px",
          })}
        >
          <Button
            onClick={handleButtonClick}
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
            {showInput ? (
              <>
                {" "}
                <Subtract /> Add description about Job{" "}
              </>
            ) : (
              <>
                {" "}
                <Add /> Add description about Job{" "}
              </>
            )}
          </Button>

          {showInput && (
            <div
              className={css({
                marginTop: "10px",
              })}
            >
              <Textarea
                value={summaryValue}
                onChange={handleTextareaChange}
                placeholder="Enter your summary here..."
                overrides={{
                  Input: {
                    style: ({ $theme }) => ({
                      borderRadius: "4px",
                      minHeight: "300px",
                      backgroundColor: $theme.colors.primaryB,
                    }),
                  },
                }}
              />
            </div>
          )}
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
        <CustomButton name={"Next"} onClick={handleNextButtonClick} />
      </div>
    </div>
  );
}
export default WorkExp;
