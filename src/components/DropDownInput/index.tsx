import { useState } from 'react';
import { useStyletron } from 'baseui';
import { Input } from 'baseui/input';

interface DropdownInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

export default function DropdownInput({ placeholder, value, onChange, options }: DropdownInputProps) {
  const [css, $theme] = useStyletron();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputFocus = () => {
    setShowDropdown(true);
  };

  const handleOptionClick = (option: string) => {
    onChange(option);
    setShowDropdown(false);
  };

  return (
    <div className={css({
      display:'flex',
      flexDirection:'column',
      width:'100%',
      gap:'30px',
      maxWidth:'1000px',
      position:'relative',
    })}>
      <Input
       onBlur={() => {
        setTimeout(() => {
          setShowDropdown(false);
        }, 300);
      }}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        onFocus={handleInputFocus}
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              width: "100%",
              border
                : "1.5px solid #838fa0",
                ":focus-within": {
                  border: "2px solid #0070d6",
                },
              backgroundColor: $theme.colors.primaryB,
              borderRadius: '6px', 

            }),
          },
          Input: {
            style: ({ $theme }) => ({
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
            }),
          },
        }}
      />
      {showDropdown && (
        <ul
          className={css({
            listStyle: "none",
            margin: "4px 0px",
            padding: "0",
            border: "1px solid #ccc",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
            position: "absolute",
            top: 'calc(100% + 4px)', 
            left: 0,
            zIndex: 1,
            width: "calc(100% - 4px)",
            overflowY: "auto",
            maxHeight: "300px",
            maxWidth: "519px",
            borderTopLeftRadius: $theme.sizing.scale400,
            borderTopRightRadius: $theme.sizing.scale400,
            borderBottomLeftRadius: $theme.sizing.scale400,
            borderBottomRightRadius: $theme.sizing.scale400,
            [$theme.mediaQuery.medium]: {
              maxWidth: "519px",
              width: "100%",
            },
            [$theme.mediaQuery.large]: {
              maxWidth: "399px",
            },
          })}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className={css({
                cursor: "pointer",
                padding: $theme.sizing.scale400,
                paddingLeft: $theme.sizing.scale700,
                ...$theme.typography.LabelMedium,
                ":hover": {
                  backgroundColor: "#E7E7E7",
                  fontWeight: "bolder",
                },
              })}
              onClick={() => handleOptionClick(option)} >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
