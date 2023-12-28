import CustomButton from "../../components/CustomButton";
import { useStyletron } from "baseui";

interface LanguagesProps {
  nextLink: string;
}

function Languages({ nextLink }: LanguagesProps) {
  const [css, $theme] = useStyletron();

  return (
    <div className={css({ marginLeft: "17rem" })}>
      Languages
      <CustomButton
        name={"Next"}
        to={nextLink}
        onClick={() => {
          // Implement your onClick logic here
        }}
      />
    </div>
  );
}

export default Languages;
