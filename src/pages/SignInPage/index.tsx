// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useStyletron } from "baseui";
import { useEffect, useState } from "react";
import { userState, LoginDataState } from "../../utlis/resumeAtoms";
import CustomInput from "../../components/CustomInput";
import { useLocation } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const [userData, setUserData] = useRecoilState(LoginDataState);
  const [css, $theme] = useStyletron();
  const location = useLocation();

  const auth = getAuth();

  async function handleSignIn() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const firebaseUser = userCredential.user;

      if (firebaseUser) {
        navigate("/personal");
        setUser({
          isAuthenticated: true,
          username: email || firebaseUser.displayName || "",
        });
        setUserData({
          name: email || firebaseUser.displayName || "",
          email: firebaseUser.email || email,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const googleUser = result.user;

        if (googleUser) {
          googleUser.getIdToken().then((tkn) => {
            sessionStorage.setItem("accessToken", tkn);
          });

          setUser({
            isAuthenticated: true,
            username: googleUser.displayName || "",
          });

          navigate("/personal");
          credential;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const [signUpClicked, setSignUpClicked] = useState(false);
  const [signInClicked, setSignInClicked] = useState(false);

  const signUp = () => {
    setSignUpClicked(true);
    setSignInClicked(false);
    navigate("/sign-up");
  };

  const signIn = () => {
    setSignInClicked(true);
    setSignUpClicked(false);
    navigate("/sign-in");
  };

  useEffect(() => {
    if (location.pathname === "/sign-up") {
      setSignUpClicked(true);
      setSignInClicked(false);
    } else if (location.pathname === "/sign-in") {
      setSignUpClicked(false);
      setSignInClicked(true);
    } else {
      setSignUpClicked(false);
      setSignInClicked(false);
    }
  }, [location.pathname]);
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
            display: "none",
            [$theme.mediaQuery.large]: {
              display: "block",
              marginRight: "65px",
              maxWidth: "500px",
              width: "100%",
              marginTop: " 22px",
              alignSelf: "flex-start",
            },
          })}
        >
          <div>
            <div className={css({
              ...$theme.typography.LabelLarge,
              marginLeft:'20px',
              color: "#0089ed",
            })}> Crafity</div>
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
              {" "}
              Cratify{" "}
            </span>{" "}
          </h3>

          <div
            className={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            })}
          >
            <div
              className={css({
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              })}
            >
              <div
                className={css({
                  textAlign: "center",
                  backgroundColor: "#ebf3fd",
                  padding: " 0 35px",
                  borderRadius: "20px",
                  height: "44px",
                  margin: "0 auto",
                })}
              >
                <button
                  onClick={signUp}
                  className={css({
                    marginTop: "6px",
                    padding: "6px 10px",
                    marginRight: "10px",
                    borderRadius: "25px",
                    cursor: "pointer",
                    color: "black",
                    border: "none",
                    height: "30px",
                    backgroundColor: "transparent",
                    ...$theme.typography.ParagraphSmall,
                  })}
                >
                  Sign Up
                </button>
                <button
                  onClick={signIn}
                  className={css({
                    backgroundColor: signInClicked ? "#0091ff" : "blue",
                    marginTop: "6px",
                    padding: "6px 10px",
                    marginRight: "10px",
                    borderRadius: "25px",
                    cursor: "pointer",
                    color: "#fff",
                    border: "none",
                    height: "30px",
                  })}
                >
                  Sign-in
                </button>
              </div>
            </div>
          </div>
          <div
            className={css({
              display: "flex",
              gap: "20px",
              marginLeft:'0px',
              [$theme.mediaQuery.large]:{
              marginLeft: "50px",}
            })}
          >
            <div
              onClick={signInWithGoogle}
              className={css({
                display: "flex",
                backgroundColor: "#ebf3fd",
                padding: "10px",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                maxWidth: "200px",
                borderRadius: "10px",
                cursor: "pointer",
                gap: "10px",
                marginTop: "20px",
                marginLeft: "30px",
                marginBottom: "30px",
                ...$theme.typography.LabelSmall,
                color: "#4285f4",
              })}
            >
              <img src="/google.svg" alt="google" width="20px" height="20px" />
              Sign In with google
            </div>
            <div
              className={css({
                backgroundColor: "#ebf3fd",
                padding: "8px",
                borderRadius: "10px",
                marginTop: "20px",
                marginBottom: "30px",
                display: "flex",
                justifyContent: "center",
              })}
            >
              <img
                src="/facebook.svg"
                alt="facebook"
                width="26px"
                height="26px"
              />
            </div>
          </div>
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              margin: "0 30px",
            })}
          >
            <CustomInput
              placeholder={"xyz@gmail.com"}
              onChange={(e) => setEmail(e.target.value)}
              label={"Email"}
              value={email}
              name={"email"}
            />

            <CustomInput
              placeholder={""}
              onChange={(e) => setPassword(e.target.value)}
              label={"Password"}
              value={password}
              name={"password"}
            />
            <p
              className={css({
                ...$theme.typography.LabelSmall,
                cursor: "pointer",
                margin: 0,
                display: "flex",
                justifyContent: "end",
                marginBottom: "20px",
                ":hover": {
                  color: "blue",
                },
              })}
              onClick={handleForgotPassword}
            >
              Forgot Password ?
            </p>
            <div
              className={css({
                display: "flex",
                justifyContent: "flex-end",
              })}
            >
              <button
                type="button"
                onClick={handleSignIn}
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
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
