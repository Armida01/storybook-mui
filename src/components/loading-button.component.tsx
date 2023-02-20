import React, { ReactNode } from "react";
import {
    LoadingButton as MuiLoadingButton,
    LoadingButtonProps as MuiButtonProps,
} from "@mui/lab";
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';

type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "loading" | "loadingPosition">;

export interface ButtonProps extends ButtonBaseProps {
    label: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}

export const LoadingButton = ({ label, ...rest }: ButtonProps) => (
    <MuiLoadingButton
        {...rest}
        startIcon={rest["loadingPosition"] === 'start' && <SaveIcon/>}
        endIcon={rest["loadingPosition"] === 'end' && <SendIcon/>}
    >
        {label}
    </MuiLoadingButton>
);

LoadingButton.defaultProps = {
    variant: "contained",
    size: "medium",
    color: "primary",
};
