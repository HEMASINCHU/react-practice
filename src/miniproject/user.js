import React, { useState } from "react";

function Userprofiles() {
  // Declare a state variable called 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Event handler function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
    // React.createElement("div", null, createElement("h1", null, "Hello Hema"))
  );
}

export default Userprofiles;
