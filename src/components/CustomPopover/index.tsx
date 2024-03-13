import React from 'react';
import { StatefulPopover } from 'baseui/popover';
import { Button } from 'baseui/button';
import { useStyletron } from 'baseui';
interface CustomPopoverProps {
    content: React.ReactNode;
    accessibilityType?: 'none' | 'menu' | 'tooltip'; 
    placement?: 
    | "auto" 
    | "bottom" 
    | "left" 
    | "right" 
    | "top" 
    | "topLeft" 
    | "topRight" 
    | "rightTop" 
    | "rightBottom" 
    | "bottomRight" 
    | "bottomLeft" 
    | "leftBottom" 
    | "leftTop"
    | undefined;    
    buttonText: string;
  }
  
  function CustomPopover({ content, accessibilityType, placement, buttonText }: CustomPopoverProps) {
    const [css, $theme] = useStyletron();
  
  return (
    <StatefulPopover
      content={content}
      accessibilityType={accessibilityType}
      placement={placement}
      overrides={{  Body: {
        style: ({ $theme }) => ({
          maxWidth: '500px',
          backgroundColor: $theme.colors.primaryB,
          margin: '0 20px',
        }),
      },
    }}
    >
      <Button
        overrides={{
          BaseButton: {
            style: ({ $theme }) => ({
              backgroundColor: 'white',
              color: '#0C1986',
              position: 'initial',
              marginTop: $theme.sizing.scale600,
              maxHeight: '50px',
              ':hover': {
                backgroundColor: $theme.colors.white,
                color: 'blue',
              },
            }),
          },
        }}
      >
        {buttonText}
      </Button>
    </StatefulPopover>
  );
}

export default CustomPopover;
