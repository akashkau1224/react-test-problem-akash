import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonComponent from './ButtonComponent';

// import your story from App.stories.js
import {Template, Click} from '/workspaces/react-test-problem-akash/src/App.stories.js';

test ("Checks if original text is valid" , () => {
    render(<Template/>);
    expect(screen.getByText("click me")).not.toBeNull();
}
);

test ("Checks if clicked text is valid" , () => {
    render(<Click/>);
    
    //const cButton = screen.findByLabelText('click me');
    
    //userEvent.click(cButton);
    //Click.play(container);
    
    //fireEvent.click(getByText("click me"));
    const resolved = screen.findByLabelText("click me").resolves;
    expect(screen.findByLabelText("thanks")).not.toBeNull();
}
);



// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library