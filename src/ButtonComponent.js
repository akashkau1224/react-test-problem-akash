import React, { useState } from "react";

function ButtonComponent() {
    const [curr, setCurr] = useState(true)
    const clicker = () => {
      setCurr(!curr);
    };

    return(
      <div>
        <button onClick = {clicker}> {curr ? "click me" : "thanks"} </button>
      </div>
    );
  }

  export default ButtonComponent;
