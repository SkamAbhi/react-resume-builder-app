import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { RecoilRoot } from "recoil";
import { initializeApp } from "firebase/app";
import config from "./utlis/FirebaseConfig/config.ts";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import environment from "./Relay/RelayEnvironment/index.tsx";

const engine = new Styletron();
const app = initializeApp(config);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RelayEnvironmentProvider environment={environment}>
      <React.Suspense fallback="loading...">
        <StyletronProvider value={engine}>
          <BaseProvider theme={LightTheme}>
            <RecoilRoot>
              <App />
            </RecoilRoot>
          </BaseProvider>
        </StyletronProvider>
        </React.Suspense>
      </RelayEnvironmentProvider>
    </BrowserRouter>
  </React.StrictMode>
);
