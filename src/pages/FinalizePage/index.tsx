import { useStyletron } from "baseui";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { useCheckboxContext } from "../../utlis/AdditonalSection/CheckboxProvider";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "baseui/checkbox";
import CustomInput from "../../components/CustomInput";
// import Resume from "../../templates/template2";

function Finalize() {
  const [css, $theme] = useStyletron();
  const { selectedLinks, updateSelectedLinks } = useCheckboxContext();

  const checkboxOptions = [
    { id: 1, label: "Languages", link: "/languages", hasInput: false },
    {
      id: 2,
      label: "Accomplishments",
      link: "/accomplishments",
      hasInput: false,
    },
    { id: 3, label: "Projects", link: "/experience", hasInput: false },
    { id: 4, label: "Awards", link: "/languages", hasInput: false },
    { id: 5, label: "Interests", link: "/interests", hasInput: false },
    { id: 5, label: "", link: "/Custom", hasInput: true },
  ];
  const [checkedStates, setCheckedStates] = useState<number[]>(
    Array(checkboxOptions.length).fill(0)
  );

  const handleCheckboxChange = (id: string, index: number) => {
    const updatedLinks = selectedLinks.includes(id)
      ? selectedLinks.filter((item) => item !== id)
      : [...selectedLinks, id];

    // Update the context with the updated links
    updateSelectedLinks(updatedLinks);

    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = 1 - newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };

  const navigate = useNavigate();


  function handleNextClick(): void {
    updateSelectedLinks(selectedLinks);

    let nextPage: string;

    if (selectedLinks.includes("/languages")) {
      nextPage = "/languages";
    } else if (selectedLinks.includes("/accomplishments")) {
      nextPage = "/accomplishments";
    } else if (selectedLinks.includes("/experience")) {
      nextPage = "/experience";
    } else {
      nextPage = "/download";
    }
    navigate(nextPage);
  }


  return (
    <div className={css({})}>
      <div
        className={css({
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          ...$theme.typography.LabelMedium,
          [$theme.mediaQuery.large]: {
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
              marginLeft: "30px",
              marginRight: "20px",
              gap: "40px",
              backgroundColor: "#f3f8ff",
              padding: " 30px 20px ",
              paddingRight:'50px',
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
              },
            })}
          >
            <div className={css({
              paddingLeft:'60px'
            })}>
              <h1
                className={css({
                  ...$theme.typography.HeadingMedium,
                  [$theme.mediaQuery.medium]: {
                    ...$theme.typography.HeadingXXLarge,
                  },
                })}
              >
                Want to add any additional sections?
              </h1>
              <div
                className={css({
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "10px",
                  maxWidth: "500px",
                })}
              >
                {checkboxOptions.map((option, index) => (
                  <div
                    key={option.id}
                    style={{
                      display: "flex",
                      padding: "5px 0",
                    }}
                  >
                    <Checkbox
                      checked={checkedStates[index]}
                      onChange={() => handleCheckboxChange(option.link, index)}
                      overrides={{}}
                    >
                      {option.label}
                    </Checkbox>
                    {option.hasInput && (
                      <div
                        className={css({
                          maxWidth: "200px",
                        })}
                      >
                        <CustomInput
                          placeholder={"Custom"}
                          onChange={console.log}
                          label={""}
                          value={""}
                          name={""}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  marginRight: "20px",
                  marginTop: "7vh",
                  [$theme.mediaQuery.medium]: {
                    width: "100%",
                    maxWidth: "500px",
                  },
                  [$theme.mediaQuery.large]: {
                    width: "100%",
                    maxWidth: "500px",
                    marginRight: "50px",
                  },
                })}
              >
                <CustomButton
                  name={"Back"}
                  isSpecial
                  to={'/summary'}
                />
                <CustomButton name={"Next"} onClick={handleNextClick} />
              </div>
            </div>
            <div
              className={css({
                border: "1px solid black",
                width: "230px",
                maxHeight: "300px",
                borderRadius: "15px",
                padding:' 0 10px'

              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                })}
              >
                <p
                  className={css({
                    ...$theme.typography.LabelSmall,
                    backgroundColor: "orange",
                    padding: "8px",
                    borderRadius: "10px",
                    color: "white",
                  })}
                >
                  Tips & Advice
                </p>
              </div>
              <ul>
                <li
                  className={css({
                    ...$theme.typography.LabelSmall,
                    marginBottom:'15px',
                  })}
                >
                  Additional sections are usually optional.
                </li>
                <li
                  className={css({
                    ...$theme.typography.LabelSmall,
                    marginBottom:'15px'
                  })}
                >
                  {" "}
                  Check the job requirements to see what you should include.
                </li>
              </ul>
              <div
                className={css({
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                })}
              >
                <img
                  src="./tip.svg"
                  alt="tips"
                  className={css({
                    width: "120px",
                    height: "120px",
                  })}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    
        // <div>
        //   <Resume data={resumeData}/>
        // </div> 
  );
}

export default Finalize;


// const resumeData = {
//   basics: {
//     name: 'Lauren Chen',
//     position: 'Software Developer',
//   },
//   contact:{
//     email: 'john.doe@example.com',
//     phone: '123-456-7890',
//     location: {
//       address: '123 Main St, City, Country',
//     },
//     website: 'www.johndoe.com',
//   },
//   summary :{
//     summary: "Hardworking, highly motivated professional eager to lend combined knowledge and skills to enhance business performance. ",

//   },
//   education: [
//     {
//       institution: 'University of Example',
//       location: 'City, Country',
//       area: 'Computer Science',
//       studyType: 'Bachelor',
//       startDate: '2018-09-01',
//       endDate: '2022-05-01',
//       score: '3.8',
//     },
//   ],
//   work: [
//     {
//       name: 'Example Company',
//       position: 'Software Developer',
//       location: 'City, Country',
//       startDate: '2022-06-01',
//       endDate: 'Present',
//       highlights: ['Developed web applications', 'Collaborated with cross-functional teams','Collaborated with cross-functional teams','Collaborated with cross-functional teams d with cross-functional  ', ],
//     },

//   ],
//   skills: [
//     {
//       keywords: ['JavaScript'],
//     },
//     {
//       keywords: ['React'],
//     },
//     {
//       keywords: [ 'Java'],
//     },
//     {
//       keywords: [ 'Node.js'],
//     },  {
//       keywords: ['Python'],
//     },
//     {
//       keywords: [ 'HTML/CSS'],
//     },

//   ],
//   projects: [
//     {
//       "title": "TaskManager",
//       "role": "Full-Stack Developer",
//       "technologies": ["React.js", "Node.js", "MongoDB"],
//       "responsibilities": "Designed and implemented key features, ensured seamless integration, and optimized performance.",
//       "results": "Received positive feedback for intuitive design and collaboration features."
//     },
//     {
//       "title": "E-commerce Platform",
//       "role": "Front-End Developer",
//       "technologies": ["Angular", "Node.js", "MongoDB"],
//       "responsibilities": "Developed responsive user interfaces, integrated payment gateways, collaborated with UX/UI designers.",
//       "results": "Increased user engagement and sales by 25% within the first quarter."
//     },

//   ],
//   awards: [
//     {
//       title: 'Outstanding Performer Award',
//       awarder: 'Example Company',
//       date: '2023-02-15',
//     },
//   ],
//   headings: {
//     education: 'Education',
//     work: 'Work Experience',
//     skills: 'Skills',
//     projects: 'Projects',
//     awards: 'Awards',
//   },
// };
