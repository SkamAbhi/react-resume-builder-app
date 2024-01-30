import { useStyletron } from 'baseui';
import React from 'react'

function Download() {
    const [css, $theme] = useStyletron();

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
                Download Resume preview
              </h1>
              <div
                className={css({
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "10px",
                  maxWidth: "500px",
                })}
              ></div>
              
             </div> </div></div></div>
    </div>
  )
}

export default Download