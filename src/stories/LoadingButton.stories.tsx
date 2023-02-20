import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "@mui/material/Stack";

import { LoadingButton } from "../components/loading-button.component";

import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';


export default {
    title: "Example/LoadingButton",
    component: LoadingButton,
} as ComponentMeta<typeof LoadingButton>;

const Template: ComponentStory<typeof LoadingButton> = (args) => <LoadingButton {...args} />;

export const Playground = Template.bind({});
Playground.args = {
    label: "Click me!",
    loading: true
};

export const Variants: ComponentStory<typeof LoadingButton> = () => (
    <Stack spacing={2} maxWidth={300}>
        <LoadingButton variant="text" label="Text Button" loading />
        <LoadingButton variant="contained" label="Contained Button" loading />
        <LoadingButton variant="outlined" label="Outlined Button" loading />
    </Stack>
);

export const Sizes: ComponentStory<typeof LoadingButton> = () => (
    <Stack spacing={2} maxWidth={300}>
        <LoadingButton variant="contained" size="small" label="Small" loading />
        <LoadingButton variant="contained" size="medium" label="Medium" loading />
        <LoadingButton variant="contained" size="large" label="Large" loading />
    </Stack>
);

export const LoadingPosition: ComponentStory<typeof LoadingButton> = () => (
    <Stack spacing={2} maxWidth={300}>
        <LoadingButton variant="contained" size="medium" label="Text Button" loading startIcon={<SaveIcon />} loadingPosition="start" />
        <LoadingButton variant="contained" size="medium" label="Text Button" loading loadingPosition="center"/>
        <LoadingButton variant="contained" size="medium" label="Text Button" loading endIcon={<SendIcon />} loadingPosition="end"/>
    </Stack>
);
