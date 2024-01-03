// CustomButton.jsx

import React from "react";
import { Button } from "baseui/button";
import { useNavigate } from "react-router-dom";
import { useNavigationContext } from "../../utlis/NavigationContext";

interface CustomButtonProps {
  name: string;
  to?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  isSpecial?: boolean;
  onNextClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  name,
  to,
  children,
  isSpecial = false,
  onClick,
  onNextClick,
}) => {
  const navigate = useNavigate();
  const { handleNextClick } = useNavigationContext();

  const handleClick = () => {
    if (to) {
      navigate(to);
      handleNextClick();

    } else if (onNextClick) {
      handleNextClick();

    } else if (onClick) {
      onClick();
    }
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
                  paddingRight: "25px",
                  paddingLeft: "25px",
                  width: "auto",
                  ...$theme.typography.LabelXSmall,
                  height: "45px",

                  [$theme.mediaQuery.medium]: {
                    width: "fit-content",
                    ...$theme.typography.LabelMedium,
                  },
                  ":hover": {
                    backgroundColor: "rgba(232, 241, 247, 0.8)",
                  },
                }
              : {
                  height: "45px",
                  backgroundColor: "#fbaf3b",
                  borderColor: "#fbaf3b",
                  color: "#07142b",
                  width: "fit-content",
                  ...$theme.typography.LabelXSmall,
                  padding: "8px 20px",

                  [$theme.mediaQuery.medium]: {
                    width: "auto",
                    ...$theme.typography.LabelMedium,
                    height: "40px",
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
