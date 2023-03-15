import React, { useState } from 'react';
import ButtonComponent from '/workspaces/react-test-problem-akash/src/ButtonComponent.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  //handler goes here
  

  render() {
    return (
      <div>
        <ButtonComponent > 'ButtonComponent' </ButtonComponent>
      </div>
    );
  }
}
