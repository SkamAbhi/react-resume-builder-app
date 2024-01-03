"use client";
import { useStyletron } from "baseui";
import Routing from "./routes";
import { NavigationProvider } from "./utlis/NavigationContext";

export default function RootLayout() {
  const [css] = useStyletron();

  return (
    <div className={css({ margin: 0, padding: 0 })}>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      <NavigationProvider>
      <Routing />
      </NavigationProvider>
    </div>
  );
}
