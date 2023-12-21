"use client";
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, useStyletron } from "baseui";
import { RecoilRoot } from "recoil";
import Navigation from "./routes";
import Layout from "./components/Layout/page";

export default function RootLayout() {
  const engine = new Styletron();
  const [css] = useStyletron();

  return (
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <RecoilRoot>
            <style>
              {`body {
            margin: 0;
            padding: 0;
              }`}
            </style>
            <body>
              <div
                className={css({
                  margin: 0,
                  padding: 0,
                })}
              >
                <Layout>
                <Navigation/>
                </Layout>
              </div>
            </body>
          </RecoilRoot>
        </BaseProvider>
      </StyletronProvider>
  );
}
