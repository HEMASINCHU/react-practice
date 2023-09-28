import { useState, useEffect } from "react";
const Effect = () => {
  console.log("Begin of comp");
  const [count, setcount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log("its an useeffect");
  });

  useEffect(() => {
    console.log("It is useeffect");
  }, []);
  
  console.log("its before render");
  return (
    <>
    {count === 0 && <Child/>}
      <button onClick={() => setcount((prev) => prev + 1)}>{count}</button>
    </>
  );
};
export default Effect;

function Child () {
    useEffect(() => {
        let timerid = setTimeout(() => {
          console.log("time");
        }, 2000);
        return () => {
          console.log("cleanup");
          clearTimeout(timerid);
        };
      }, []);
    return <h3>Child</h3>
}