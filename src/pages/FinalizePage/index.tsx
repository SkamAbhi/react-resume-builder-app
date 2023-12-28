import { useStyletron } from "baseui";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";

function Finalize() {
  const [css, $theme] = useStyletron();
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<number[]>([]);
  const linkBase = "/";

  const checkboxOptions = [
    { id: 1, label: "Option 1", link: "languages" },
    { id: 2, label: "Option 2", link: "education" },
    { id: 3, label: "Option 3", link: "experience" },
  ];

  const [clickedOptions, setClickedOptions] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    setSelectedCheckboxes((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((item) => item !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const dynamicLinks = selectedCheckboxes.map(
    (id) => linkBase + checkboxOptions.find((option) => option.id === id)?.link
  );
  const handleButtonClick = () => {
    // If all three options are clicked, navigate to the second option
    if (clickedOptions.length === 3) {
      // Find the second option clicked (index 1) and navigate to its link
      const secondOptionLink =
        linkBase + checkboxOptions[clickedOptions[1]].link;
      // You can replace the console.log with your navigation logic
      console.log("Navigate to the next page with link:", secondOptionLink);
    } else {
      // If not all options are clicked, navigate to the last option clicked
      const lastOptionLink = dynamicLinks[dynamicLinks.length - 1] || linkBase;
      // You can replace the console.log with your navigation logic
      console.log("Navigate to the next page with link:", lastOptionLink);
    }
  };
  return (
    <div>
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          MaxWidth: "1000px",
          ...$theme.typography.LabelMedium,

          [$theme.mediaQuery.large]: {
            marginLeft: "17rem",
            marginTop: "35px",
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
              Want to add any additional sections?
            </h1>
            <p>These sections are optional.</p>
          </div>
        </div>

        <div>
          <h3>Select Options:</h3>
          {checkboxOptions.map((option) => (
            <div key={option.id}>
              <input
                type="checkbox"
                id={option.id}
                checked={selectedCheckboxes.includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
          <h3>Dynamic Links:</h3>
          {dynamicLinks.map((link, index) => (
            <p key={index}>{link}</p>
          ))}
          <CustomButton
            to={
              dynamicLinks.length > 0
                ? dynamicLinks[dynamicLinks.length - 0]
                : linkBase
            }
            name="Go to Dynamic Link"
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Finalize;
