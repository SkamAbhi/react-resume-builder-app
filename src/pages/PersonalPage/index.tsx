"use client";
import { useEffect, useRef, useState } from "react";
import { useStyletron } from "baseui";
import { FileUploader } from "baseui/file-uploader";
import { useRecoilValue, useSetRecoilState } from "recoil";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { userDataState } from "../../utlis/resumeAtoms";
import { useNavigationContext } from "../../utlis/NavigationContext";
import { useLazyLoadQuery, useMutation } from 'react-relay/hooks';
//import { graphql } from 'babel-plugin-relay/macro';
//import { PersonalPageQuery } from '../../__generated__/PersonalPageQuery.graphql'
import { addNewPersonalInfoMutation } from '../../mutations/personalPageMutation';

const Personal = () => {

 const [updatePersonalInfo] = useMutation(addNewPersonalInfoMutation);

//   const data = useLazyLoadQuery<PersonalPageQuery>(
//     graphql`
//       query PersonalPageQuery {
//   getPersonalInfo
//   {
//     id
//     firstName
//     lastName
//     profession
//     email
//     photo
//     created_at
//     updated_at
//   }
// }

//     `,
//     {},
//   );

  // Access your data here
 // console.log(data.getPersonalInfo);

  const [css, $theme] = useStyletron();
  const userData = useRecoilValue(userDataState);
  const setUserData = useSetRecoilState(userDataState);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

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

  const isMounted = useRef(true);

  // useEffect(() => {
  //   if (isMounted.current) {
  //     console.log(data.getAllPersonalInfo);
  //   }
  //   return () => {
  //     isMounted.current = false; // Set the mount status to false when the component unmounts
  //   };
  // }, [data]);

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
  const { activeSection, handleNextClick } = useNavigationContext();

  const handleNextButtonClick = async () => {
    try {
      const input = {       
        photo:'userData.photo',
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        profession: userData.profession,
        idResume: "256517e4-acf3-4608-ad64-16e8e50494d3",
      };
      const response = await updatePersonalInfo({ variables: { input } });

      // Handle the response from the server
      console.log(`Data updated:`, response);

      if (isMounted.current) {
        // Handle the response from the server
        console.log(`Data updated:`, response);

        // Continue with navigation or other actions
        handleNextClick();
      }
    } catch (error) {
      console.error('Error updating personal info:', error);
    }

  };

  return (
    <div
      className={css({
        marginTop: "70px",
        [$theme.mediaQuery.medium]: {
          marginRight: "2rem",
          marginTop: "70px",
          paddingLeft: "25px",
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
          marginTop: "30px",
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
            justifyContent: "flex-start",
            width: "100%",
            marginLeft: "20px",
            alignItems: "center",
            [$theme.mediaQuery.medium]: {
              top: "-60px",
              position: "relative",
              flexDirection: "column",
              width: "auto",
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
                  [$theme.mediaQuery.medium]: {
                    width: "100px",
                    height: "100px",
                    margin: "10px",
                  },
                })}
              />
            )}
          </div>

          <div className={css({})}>
            <p
              className={css({
                ...$theme.typography.LabelSmall,
                [$theme.mediaQuery.medium]: {
                  display: "none",
                },
              })}
            >
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
                height: "40px",
                borderRadius: "20px",
                ...$theme.typography.LabelXSmall,
                [$theme.mediaQuery.medium]: {
                  width: "120px",
                  ...$theme.typography.LabelSmall,
                },
                ":hover": {
                  backgroundColor: "rgba(232, 241, 247, 0.8)",
                },
              })}
            >
              {uploadedFiles.length > 0 ? (
                <div> Change photo </div>
              ) : (
                <div> Upload Photo </div>
              )}
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
                top: "60%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                zIndex: 999,
                maxWidth: "300px",
                height: "300px",
                display: fileUploaderModalOpen ? "block" : "none",
                width: "100%",
                ...$theme.typography.LabelMedium,
                [$theme.mediaQuery.medium]: {
                  maxWidth: "500px",
                },
              })}
            >
              <div
                className={css({
                  display: "flex",
                })}
              >
                <h3
                  className={css({
                    marginBottom: "50px",
                    marginLeft: "0px",
                  })}
                >
                  {" "}
                  Select Your Profile Photo
                </h3>
                <button
                  className={css({
                    backgroundColor: "transparent",
                    position: "fixed",
                    right: "15px",
                    top: "33px",
                    border: 0,
                    cursor: "pointer",
                    ":hover": {
                      backgroundColor: "transparent",
                    },
                  })}
                  onClick={closeFileUploaderModal}
                >
                  <img
                    src="/menuClose.svg"
                    alt="menu-close"
                    width="20px"
                    color="black"
                    className={css({
                      color: "black",
                      backgroundColor: "#fbaf3b",
                      padding: "4px",
                      borderRadius: "20px",
                    })}
                  />
                </button>
              </div>
              <FileUploader
                onDrop={(acceptedFiles: File[]) => handleDrop(acceptedFiles)}
              />
              <div
                className={css({
                  position: "fixed",
                  bottom: "15px",
                  right: "20px",
                })}
              >
                <button
                  className={css({
                    height: "40px",
                    backgroundColor: "#fbaf3b",
                    borderColor: "#fbaf3b",
                    color: "#07142b",
                    width: "fit-content",
                    ...$theme.typography.LabelXSmall,
                    padding: "8px 20px",
                    borderRadius: "20px",
                    [$theme.mediaQuery.medium]: {
                      width: "auto",
                      ...$theme.typography.LabelMedium,
                      height: "40px",
                    },
                    ":hover": {
                      backgroundColor: "#fbaf3b",
                    },
                    border: 0,
                    ...$theme.typography.LabelMedium,
                  })}
                  onClick={closeFileUploaderModal}
                >
                  {" "}
                  Save
                </button>
              </div>
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
              marginLeft: "0",
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
              label={"Pincode"}
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
            maxWidth: "1050px",
            marginRight: "50px",
          },
        })}
      >
        <CustomButton name={"Back"} to={"/"} isSpecial />
        <CustomButton
          name={"Next : Education"}
          onClick={handleNextButtonClick}
        />
      </div>
    </div>
  );
};
export default Personal;
