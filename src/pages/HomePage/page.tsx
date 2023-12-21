"use client";
import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [css, $theme] = useStyletron();
  
  const navigate = useNavigate();

  const handleNextClick = () =>{
  navigate("/personal")  
}


  return (
    <div
      className={css({
        margin: 0,
        padding: 0,
        backgroundImage: 'url("resume.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        width: "100%",
        height: "500px",
      })}
    >
      <div
        className={css({
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        })}
      >
        <div
          className={css({
            alignItems: "center",
            ...$theme.typography.DisplaySmall,
            textAlign: "center",
          })}
        >
          Resume Builder
          <br />
          Professional Resume & Cover Letter Tools For Any Job
        </div>
        <div
          className={css({
            marginTop: "30px",
          })}
        >
            <Button
            onClick={handleNextClick}
              overrides={{
                BaseButton: {
                  style: () => ({
                    borderRadius: "30px",
                    backgroundColor: "#d04141",
                    ':hover': {
                      backgroundColor: "#d04141",
                    },
                  }),
                },
              }}
            >
              Try Our Resume Builder
            </Button>
        </div>
      </div>
    </div>
  );
}
