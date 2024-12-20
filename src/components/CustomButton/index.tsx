import React from "react";
import { Button } from "baseui/button";
import { useNavigate } from "react-router-dom";

interface CustomButtonProps {
  name: string;
  to: string;
  onClick: () => void;
  children?: React.ReactNode;
  isSpecial?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  name,
  to,
  children,
  isSpecial,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the specified route
    navigate(to);
  };

  return (
    <Button
      onClick={handleClick}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            borderRadius: "20px",
            marginBottom: "20px",
            ...(isSpecial
              ? {
                  backgroundColor: "#fff",
                  borderColor: "#0C1986",
                  color: "#0C1986",
                  border: "2px solid #0C1986",
                  PaddingRight: "0",
                  PaddingLeft: "0",
                   width:'100px',
                   height:'50px',
                   ...$theme.typography.LabelXSmall,
                  [$theme.mediaQuery.medium]:{
                    width: "140px",
                    ...$theme.typography.LabelMedium,

                  },
                  ":hover": {
                    backgroundColor: "rgba(232, 241, 247, 0.8)",
                  },
                }
              : {
                  backgroundColor: "#fbaf3b",
                  borderColor: "#fbaf3b",
                  color: "#07142b",
                  width:'172px',
                  ...$theme.typography.LabelXSmall,
                 [$theme.mediaQuery.medium]:{
                   width: "200px",
                   ...$theme.typography.LabelMedium,
                   Padding: "15px 40px",

                 },
                  ":hover": {
                    backgroundColor: "#fbaf3b",
                  },
                }),
            ...$theme.typography.LabelMedium,
          }),
        },
      }}
    >
      {children}
      {name}
    </Button>
  );
};

export default CustomButton;
