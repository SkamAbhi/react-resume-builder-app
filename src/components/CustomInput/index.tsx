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
                borderRadius: '6px', 

              }),
            },
            Input: {
              style: {
                backgroundColor: $theme.colors.primaryB,
                width: '100%', 
                borderWidth: '0',
                padding: '8px ',
                color: '#1a202c', 
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', 
                borderColor: 'transparent', 
                outline: 'none', 
                ring: '1px solid #cbd5e0', 
                placeholder: { color: '#a0aec0' }, 
                focusRing: '2px solid #3b82f6', 
                fontSize: '1rem',
                lineHeight: '1.25rem', 
              },
            },
          }}
        />
      </FormControl>
    </div>
  );
};
export default CustomInput;
