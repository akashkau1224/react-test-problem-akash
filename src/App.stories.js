import App from './App';
import {within, userEvent} from "@storybook/testing-library";
//import { expect } from '@storybook/jest';


export default {
    title : "App",
    component: App,
};

export const Template = () => <App />;

export const Click = Template.bind();

Click.play = async ({canvasElement}) => {
        const canvas = within(canvasElement)
        //await expect (
        //    canvas.getByText("click me")
        //).toBeInTheDocument();

        userEvent.click(canvas.getByRole('button'));

        //await expect (
        //    canvas.getByText("thanks")
        //).toBeInTheDocument();
    }
