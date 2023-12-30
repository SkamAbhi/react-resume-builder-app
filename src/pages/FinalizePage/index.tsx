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
        </div>
      </div>
    </div>
  );
}

export default Finalize;
