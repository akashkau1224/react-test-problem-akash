import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  //handler goes here
  function changeText() {
    const[active, setActive] = useState(false);
    const handleClick = () => {
      setActive(!active);
    };
  };

  render() {
    return (
      <div>
        <Button onClick = {handleClick}> {active ? "thanks" : "click me"} </Button>
      </div>
    );
  }
}
