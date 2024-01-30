"use client";
import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [css, $theme] = useStyletron();

  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/personal");
  };
  const handleSignIn = () =>{
    navigate("/sign-in")
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
          backgroundColor: "#fff",
          padding: "10px",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0px 0px 18px rgba(0,0,0,.15)",

        })}
      >
        <div
          className={css({
            fontSize: "1.5em",
            color:'blue'
          })}
        >
          Crafity
        </div>
        <button
          className={css({
            padding: "10px 20px",
            backgroundColor: "#61dafb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1em",
          })}
          onClick={handleSignIn}
        >
          Login
        </button>
      </div>
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
                  ":hover": {
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
