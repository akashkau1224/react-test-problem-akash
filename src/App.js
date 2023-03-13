import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  //handler goes here
  function changeText() {
    const[curr, setCurr] = useState(false);
    const clicker = () => {
      setCurr(!curr);
    };
  };

  render() {
    return (
      <div>
        <Button onClick = {clicker}> {curr ? "thanks" : "click me"} </Button>
      </div>
    );
  }
}
