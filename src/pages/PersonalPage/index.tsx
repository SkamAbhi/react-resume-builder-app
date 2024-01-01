"use client";
import React, { useEffect, useState } from "react";
import { useStyletron } from "baseui";
import { FileUploader } from "baseui/file-uploader";
import { useRecoilValue, useSetRecoilState } from "recoil";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { userDataState } from "../../utlis/resumeAtoms";

const Personal = () => {
  const [css, $theme] = useStyletron();
  const userData = useRecoilValue(userDataState);
  const setUserData = useSetRecoilState(userDataState);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [current, setCurrent] = React.useState(0);
  const [emailError, setEmailError] = useState<string | null>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, [setUserData]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailRegex.test(value) ? null : "Invalid email address");
    }
    localStorage.setItem(
      "userData",
      JSON.stringify({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleNext = () => {
    if (current < 5) {
      setCurrent((prevCurrent) => prevCurrent + 1);
    }
  };

  function handleFileUpload(files: File[]) {
    const uploadedImages: string[] = [];

    files.forEach((file) => {
      const imageUrl = URL.createObjectURL(file);
      uploadedImages.push(imageUrl);
    });

    setUploadedFiles(files);
  }

  const handleDrop = (acceptedFiles: File[]) => {
    handleFileUpload(acceptedFiles);
  };
  const [fileUploaderModalOpen, setFileUploaderModalOpen] = useState(false);

  const openFileUploaderModal = () => {
    console.log("Opening modal");
    setFileUploaderModalOpen(true);
  };

  const closeFileUploaderModal = () => {
    console.log("Closing modal");
    setFileUploaderModalOpen(false);
  };

  return (
    <div
      className={css({
        [$theme.mediaQuery.small]: {},
        [$theme.mediaQuery.medium]: {
          marginRight: "2rem",
          paddingLeft: "25px",
          paddingTop: "30px",
          paddingBottom: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },

        [$theme.mediaQuery.large]: {
          marginLeft: "17rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
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
          [$theme.mediaQuery.large]: {
            width: "100%",
            maxWidth: "1100px",
          },
        })}
      >
        <h1
          className={css({
            ...$theme.typography.HeadingMedium,
            [$theme.mediaQuery.medium]: {
              ...$theme.typography.HeadingLarge,
              marginTop: "13px",
            },
          })}
        >
          What’s the best way for employers to contact you?
        </h1>
        <p
          className={css({
            ...$theme.typography.LabelSmall,
            [$theme.mediaQuery.medium]: {
              ...$theme.typography.LabelMedium,
            },
          })}
        >
          We suggest including an email and phone number.
        </p>
      </div>
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          [$theme.mediaQuery.medium]: {
            flexDirection: "row",
            justifyContent: "center",
            gap: "30px",
          },
          [$theme.mediaQuery.large]: { 
            gap: "40px",
          },
        })}
      >
        <div
          className={css({
            display: "flex",
            justifyContent:'flex-start',
            width:'100%',
            marginLeft:'20px',
            alignItems: "center",
            [$theme.mediaQuery.medium]: {
              top: "-60px",
              position: "relative",
              flexDirection: "column",
              width:'auto'
            },
          })}
        >
          <div className={css({ display: "flex", flexWrap: "wrap" })}>
            {uploadedFiles.length > 0 ? (
              uploadedFiles.map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  style={{ width: "120px", height: "120px", margin: "10px" }}
                />
              ))
            ) : (
              <img
                src="/NoImage.jpg"
                alt="Blank Photo"
                className={css({
                  width: "80px",
                  height: "80px",
                  margin: "10px",
                  [$theme.mediaQuery.medium]:{
                    width: "120px",
                    height: "120px",
                    margin: "10px",
                  }
                })}
              />
            )}
          </div>

          <div className={css({})}>
            <p className={css({
              ...$theme.typography.LabelSmall,
              [$theme.mediaQuery.medium]:{
                display:'none'
              }
            })}>
            Add a Photo to Your Resume (Optional)
            </p>
            <button
              onClick={openFileUploaderModal}
              className={css({
                backgroundColor: "#fff",
                borderColor: "#0C1986",
                color: "#0C1986",
                border: "2px solid #0C1986",
                PaddingRight: "0",
                PaddingLeft: "0",
                width: "100px",
                height: "50px",
                borderRadius: "20px",
                ...$theme.typography.LabelXSmall,
                [$theme.mediaQuery.medium]: {
                  width: "140px",
                  ...$theme.typography.LabelMedium,
                },
                ":hover": {
                  backgroundColor: "rgba(232, 241, 247, 0.8)",
                },
              })}
            >
              Upload photo
            </button>
            <div
              className={css({
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
                display: fileUploaderModalOpen ? "block" : "none",
              })}
              onClick={closeFileUploaderModal}
            ></div>
            <div
              className={css({
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                zIndex: 999,
                width: "500px",
                height: "300px",
                display: fileUploaderModalOpen ? "block" : "none",
                ...$theme.typography.LabelMedium,
              })}
            >
              <h3
                className={css({
                  marginBottom: "50px",
                  marginLeft: "30px",
                })}
              >
                {" "}
                Select Your Profile Photo
              </h3>
              <FileUploader
                onDrop={(acceptedFiles: File[]) => handleDrop(acceptedFiles)}
              />
            </div>
          </div>
        </div>

        <div
          className={css({
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            marginRight: "10px",
            marginLeft: "10px",
            width: "100%",

            [$theme.mediaQuery.medium]: {
              maxWidth: "530px",
              marginLeft:'0'
            },
          })}
        >
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
              marginRight: "20px",
              [$theme.mediaQuery.medium]: {
                flexDirection: "row",
                gap: "30px",
                marginLeft: "0px",
                marginRight: "0px",
              },
            })}
          >
            <CustomInput
              placeholder={""}
              onChange={handleInputChange}
              label={"First Name"}
              name="firstName"
              value={userData.firstName}
            />
            <CustomInput
              placeholder={""}
              onChange={handleInputChange}
              label={"Surname"}
              value={userData.surName}
              name="surName"
            />
          </div>
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
              marginRight: "20px",
              [$theme.mediaQuery.medium]: {
                flexDirection: "row",
                gap: "30px",
                marginLeft: "0px",
                marginRight: "0px",
              },
            })}
          >
            <CustomInput
              placeholder={""}
              onChange={handleInputChange}
              label={"Profession"}
              value={userData.profession}
              name={"profession"}
            />
          </div>
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
              marginRight: "20px",
              [$theme.mediaQuery.medium]: {
                flexDirection: "row",
                gap: "30px",
                marginLeft: "0px",
                marginRight: "0px",
              },
            })}
          >
            <CustomInput
              placeholder={""}
              onChange={handleInputChange}
              label={"City"}
              value={userData.city}
              name="city"
            />

            <CustomInput
              placeholder={""}
              onChange={handleInputChange}
              label={"Country"}
              value={userData.country}
              name={"country"}
            />
            <CustomInput
              placeholder={""}
              onChange={handleInputChange}
              label={"PinCode"}
              value={userData.pinCode}
              name={"Pincode"}
            />
          </div>
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
              marginRight: "20px",
              [$theme.mediaQuery.medium]: {
                flexDirection: "row",
                gap: "30px",
                marginLeft: "0px",
                marginRight: "0px",
              },
            })}
          >
            <CustomInput
              placeholder={""}
              onChange={handleInputChange}
              label={"Phone"}
              value={userData.phone}
              name={"phone"}
            />
            <CustomInput
              placeholder={""}
              onChange={handleInputChange}
              label={"Email"}
              value={userData.email}
              name="email"
              error={emailError}
            />
          </div>
        </div>
        <div
          className={css({
            display: "none",
            [$theme.mediaQuery.large]: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "230px",
              height: "250px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              margin: "20px",
              flexDirection: "column",
            },
          })}
        >
          Preview
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
            maxWidth: "760px",
          },
          [$theme.mediaQuery.large]: {
            width: "100%",
            maxWidth: "1100px",
          },
        })}
      >
        <CustomButton name={"Back"} to={"/"} onClick={console.log} isSpecial />
        <CustomButton
          name={"Next : Education"}
          onClick={handleNext}
          to={"/education"}
        />
      </div>
    </div>
  );
};
export default Personal;
