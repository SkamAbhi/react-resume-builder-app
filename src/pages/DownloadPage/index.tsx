import { graphql } from 'babel-plugin-relay/macro';
import { useStyletron } from 'baseui';
import { useEffect, useState } from 'react';
import { useLazyLoadQuery } from "react-relay";
import { DownloadPageQuery } from '../../__generated__/DownloadPageQuery.graphql'
 import Resume2 from '../../templates/template2';
import Resume1 from '../../templates/template1';
 import Resume3 from '../../templates/template3';
import CustomButton from '../../components/CustomButton';


function Download() {
  const [css, $theme] = useStyletron();
  const resumeId = "dd2c5381-f24b-43fc-b570-5c4202cfe9dc";
  const data = useLazyLoadQuery<DownloadPageQuery>(
    graphql`
  query DownloadPageQuery($resumeId: ID!) {
    getResume(id: $resumeId) {
      personalInfo {
        firstName
        lastName
        profession
        phoneNumber
        photo
        email
      }
      workExperience{
      jobTitle
      company{
        companyName
      }
      companyAddress{
        city
        country
      }
      startDate
      endDate
      description
    }
      educationDetails {
        instituteName
        instituteLocation
        degree
        fieldOfStudy
        startDate
        endDate
      }
      summary {
        summaryDetails
      }
      skills {
        skillName
      }
      projects {
        projectName
        role
        technologies
        description
      }
    }
   }
 `,
    { resumeId },
  );
  const [resumeData, setResumeData] = useState<DownloadPageQuery['getResume'] | null>(null);
  
  const resumes = [<Resume1 data={resumeData} />,
   <Resume2 data={resumeData} />, <Resume3  data={resumeData}/>
  ];
  const [currentResumeIndex, setCurrentResumeIndex] = useState(0);
  useEffect(() => {
    if (data !== null && data !== undefined) { // Ensure data is not null or undefined
      setResumeData(data.getResume);
    }
  }, []);

  if (data === null || data === undefined) { // Handle null or undefined data
    return <div>Loading...</div>;
  }


  const nextSlide = () => {
    setCurrentResumeIndex((prevIndex) => {
      const nextIndex = prevIndex === resumes.length - 1 ? 0 : prevIndex + 1;
      return nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentResumeIndex((prevIndex) => {
      const nextIndex = prevIndex === 0 ? resumes.length - 1 : prevIndex - 1;
      return nextIndex;
    });
  };


  return (
    <div>
      <div
        className={css({
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          ...$theme.typography.LabelMedium,
          [$theme.mediaQuery.large]: {
            marginLeft: "10rem",
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
              marginLeft: "30px",
              marginRight: "20px",
              gap: "40px",
              backgroundColor: "#f3f8ff",
              padding: " 30px 20px ",
              paddingRight: '50px',
              borderRadius: "20px",
              height: "100vh",
              width: "90%",

              display: "flex",
              [$theme.mediaQuery.medium]: {
                maxWidth: "800px",
              },

              [$theme.mediaQuery.medium]: {
                marginLeft: "0px",
                marginRight: "0px",
                justifyContent:'center'
              },
            })}
          >
            <div className={css({
              paddingLeft: '60px'
            })}>
              <h1
                className={css({
                  ...$theme.typography.HeadingMedium,
                  [$theme.mediaQuery.medium]: {
                    ...$theme.typography.HeadingXXLarge,
                  },
                })}
              >
                Download Resume preview
              </h1>
              <div style={{ display: 'flex', gap: '10%' }}>
                {resumes.map((_resume, index) => (
                  <div key={index} style={{ display: index === currentResumeIndex ? 'block' : 'none' }}>
                    {index === 0 && <Resume1 data={resumeData} />}
                    {index === 1 && <Resume2 data={resumeData} />}
                    {index === 2 && <Resume3 data={resumeData} />}
                  </div>
                ))}
              </div>
              <div className={css({
                display:'flex',
                justifyContent:'space-around',
                marginTop:'30px'
              })}>
              <CustomButton onClick={prevSlide} name={'Back'} isSpecial/>
              <CustomButton onClick={nextSlide} name={'Next'} isSpecial/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download