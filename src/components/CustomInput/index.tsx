"use client";
import { Input } from "baseui/input";
import React from "react";
import { FormControl } from "baseui/form-control";
import { useStyletron } from "baseui";

interface CustomInputProps {
  placeholder: string;
  onChange: (e: any) => void;
  label: string;
  value: string;
  name: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  onChange,
  label,
  value,
  name,
}) => {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        width: "100%",
      })}
    >
      <FormControl label={label}>
        <Input
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          name={name}
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                width: "100%",
                border: "1.5px solid #838fa0",
                ":focus-within": {
                  border: `2px solid #0070d6`,
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
