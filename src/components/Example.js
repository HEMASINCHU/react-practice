import { useState } from "react";
const Example3 = () => {
  const [count, setcount] = useState(0);

  function incrementHandler() {
    setcount(count + 1);
  }
  return (
    <>
      {count}
      <button onClick={incrementHandler}>submit</button>
    </>
  );
};
export default Example3;
