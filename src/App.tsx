"use client";
import { useStyletron } from "baseui";
import Navigation from "./routes";

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
      <Navigation />
    </div>
  );
}
