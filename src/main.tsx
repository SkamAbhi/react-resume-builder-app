import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { RecoilRoot } from "recoil";

const engine = new Styletron();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <RecoilRoot>
            <App />
          </RecoilRoot>
        </BaseProvider>
      </StyletronProvider>
    </BrowserRouter>
  </React.StrictMode>
);
