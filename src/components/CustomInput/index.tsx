"use client";
import { StatefulInput } from "baseui/input";
import React from "react";
import { FormControl } from "baseui/form-control";
import { useStyletron } from "baseui";

interface CustomInputProps {
  placeholder: string;
  onChange: (e: any) => void;
  label: string;
  value: string;
  name: string;
  error?: string | null;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  onChange,
  label,
  value,
  name,
  error = null,
}) => {
  const [css, $theme] = useStyletron();

  const isEmailInput = name === "email";
  const isError = Boolean(error);
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        width: "100%",
      })}
    >
      <FormControl label={label}>
        <StatefulInput
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          name={name}
          error={isError}
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                width: "100%",
                border: isEmailInput
                  ? "2px solid #0070d6"
                  : "1.5px solid #838fa0",
                ":focus-within": {
                  border: isEmailInput
                    ? "2px solid #0070d6"
                    : "2px solid #0070d6",
                },
                backgroundColor: $theme.colors.primaryB,
              }),
            },
            Input: {
              style: ({ $theme }) => ({
                width: "100%",
                backgroundColor: $theme.colors.primaryB,
              }),
            },
          }}
        />
      </FormControl>
    </div>
  );
};
export default CustomInput;
