import App from './App';
import {within, userEvent} from "@storybook/testing-library";
import { fireEvent, getByLabelText, getByTestId } from '@testing-library/react';
//import { expect } from '@storybook/jest';


export default {
    title : "App",
    component: App,
};

export const Template = () => <App />;

export const Click = Template.bind();

Click.play = async ({canvasElement}) => {
        const canvas = within(canvasElement);
        //await expect (
        //    canvas.getByText("click me")
        //).toBeInTheDocument();

        const clickButton = canvas.getByLabelText('click me');
        userEvent.click(clickButton);

        await expect (
            canvas.getByText("thanks")
        ).toBeInTheDocument();
    }
