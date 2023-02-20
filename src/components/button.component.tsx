import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color">;


export interface ButtonProps extends ButtonBaseProps {
  label: string;
  isStartIcon?: boolean;
  isEndIcon?: boolean
}

export const Button = ({ label, isStartIcon, isEndIcon, ...rest }: ButtonProps) => (
    <MuiButton
        {...rest}
        startIcon={isStartIcon ? <SendIcon /> : null}
        endIcon={isEndIcon ? <DeleteIcon /> : null}
    >
      {label}
    </MuiButton>
);

Button.defaultProps = {
  variant: "contained",
  size: "medium",
  color: "primary",
};
