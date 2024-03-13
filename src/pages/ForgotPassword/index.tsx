import { useNavigate } from "react-router-dom";
// import { getAuth } from "firebase/auth";
import { useStyletron } from "baseui";
import { useState } from "react";
import CustomInput from "../../components/CustomInput";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [css, $theme] = useStyletron();

  //   const auth = getAuth();

  const handleSignIn = () => {
    navigate("/sign-in");
  };
  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      })}
    >
      <div
        className={css({
          display: "flex",
        })}
      >
        <div
          className={css({
            display:'none',
            [$theme.mediaQuery.large]:{
            marginRight: "65px",
            maxWidth: "500px",
            width: "100%",
            marginTop: " 22px",
            alignSelf: "flex-start",
            display:'block'
            }

          })}
        >
          <div>
            <div
              className={css({
                ...$theme.typography.LabelLarge,
                marginLeft: "20px",
                color: "#0089ed",
              })}
            >
              {" "}
              Crafity
            </div>{" "}
            <h1
              className={css({
                color: "#013564",

                ...$theme.typography.DisplayMedium,
              })}
            >
              The Best Free Online Resume Builder
            </h1>
            <p
              className={css({
                ...$theme.typography.LabelLarge,
              })}
            >
              A Quick and Easy Way to Create Your Professional Resume.
            </p>
          </div>
        </div>
        <div
          className={css({
            marginLeft: "0px",
            maxWidth: "432px",
            boxShadow: "0px 0px 18px rgba(0,0,0,.15)",
            borderRadius: "12px",
            width: "100%",
            paddingTop: "35px",
            paddingBottom: "13px",
            paddingLeft: "20px",
            paddingRight: "20px",
            alignSelf: "flex-start",
            [$theme.mediaQuery.large]:{
              marginLeft:'65px'
            }
          })}
        >
          <h3
            className={css({
              ...$theme.typography.HeadingSmall,
              textAlign: "center",
              margin: 0,
              marginBottom: "20px",
            })}
          >
            Welcome to{" "}
            <span
              className={css({
                color: "#0089ed",
              })}
            >
              Cratify{" "}
            </span>
          </h3>

          <div
            className={css({
              display: "flex",
              justifyContent: "center",
              ...$theme.typography.LabelLarge,
              fontWeight: "bolder",
            })}
          >
            Reset your Password
          </div>

          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              margin: "0 30px",
            })}
          >
            <CustomInput
              placeholder={"Enter your email address"}
              onChange={(e) => setEmail(e.target.value)}
              label={"Email"}
              value={email}
              name={"email"}
            />

            <div
              className={css({
                display: "flex",
                justifyContent: "center",
              })}
            >
              <button
                type="button"
                className={css({
                  backgroundColor: "#fe4a5a",
                  padding: "10px",
                  width: "150px",
                  borderRadius: "10px",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                })}
              >
                Reset Password
              </button>
            </div>

            <div
              className={css({
                ...$theme.typography.LabelSmall,
                display: "flex",
                justifyContent: "center",
                margin: "30px 0",
                color: "blue",
                cursor: "pointer",
              })}
              onClick={handleSignIn}
            >
              Go to Sign In
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
