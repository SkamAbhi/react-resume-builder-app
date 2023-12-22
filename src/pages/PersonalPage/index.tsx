"use client";
import React, { useEffect, useState } from "react";
import { useStyletron } from "baseui";
import { FileUploader } from "baseui/file-uploader";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Modal, ModalBody, ModalFooter } from "baseui/modal";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { userDataState } from "../../utlis/resumeAtoms";

const Personal = () => {
  const [css, $theme] = useStyletron();
  const userData = useRecoilValue(userDataState);
  const setUserData = useSetRecoilState(userDataState);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [current, setCurrent] = React.useState(0);

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

  const handleDrop = (acceptedFiles: File[], ) => {
    handleFileUpload(acceptedFiles);
  };
  const [picOpen, setPicOpen] = useState(false);

  function close() {
    setPicOpen(false);
  }

  return (
    <div
      className={css({
        [$theme.mediaQuery.small]: {},
        [$theme.mediaQuery.medium]: {
          marginRight: "2rem",
          paddingLeft: "10px",
          paddingTop: "30px",
          paddingBottom: "30px",
        },
        [$theme.mediaQuery.large]: {
          marginLeft: "17rem",
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
            gap: "60px",
          },
          [$theme.mediaQuery.large]: {
            gap: "40px",
          },
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          })}
        >
          <div className={css({ display: "flex", flexWrap: "wrap" })}>
            {uploadedFiles.map((file, index) => (
              <img
                key={index}
                src={file ? URL.createObjectURL(file) : `/NoImage.jpg`}
                alt={file.name}
                style={{ width: "120px", height: "120px", margin: "10px" }}
              />
            ))}
          </div>

          <div className={css({})}>
            <CustomButton
              onClick={() => setPicOpen(true)}
              name="Upload Photo"
              to={""}
              isSpecial
            />
            <Modal onClose={close} isOpen={picOpen}>
              <ModalBody>
                <div
                  className={css({
                    padding: "20px",
                    ...$theme.typography.LabelMedium,
                  })}
                >
                  <h3> Select Your Profile Photo</h3>
                  <FileUploader
                    onDrop={(acceptedFiles: File[] ) =>
                      handleDrop(acceptedFiles, )
                    }
                  />
                </div>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </Modal>
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
              label={"SurName"}
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
              name={"PinCode"}
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
              width: "300px",
              height: "300px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              margin: "20px",
              flexDirection: "column",
              overflow: "hidden",
            },
          })}
        >
          Preview
          <div
            className={css({
              display: "flex",
              gap: "10px",
            })}
          >
            <p>{userData.firstName}</p>
            <p>{userData.surName}</p>
          </div>
          <p>{userData.profession}</p>
          <div
            className={css({
              display: "flex",
              gap: "10px",
            })}
          >
            <p>{userData.city}</p>
            <p>{userData.country}</p>
          </div>
          <p>{userData.pinCode}</p>
          <p>{userData.email}</p>
          <p>{userData.phone}</p>
        </div>
      </div>
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          marginRight: "20px",
          marginLeft: "20px",
          marginTop: "7vh",
        })}
      >
        <CustomButton name={"Back"} to={"/"} onClick={console.log} isSpecial>
          {" "}
        </CustomButton>
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
