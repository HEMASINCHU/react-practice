import React from "react";

const welcome = "Welcome to 30 Days Of React";
function Greet() {
  return (
    <header>
      <div className="header-wrapper">
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Asabeneh Yetayeh</p>
        <small>Oct 2, 2020</small>
        <h1>{welcome}</h1>
      </div>
    </header>
  );
}

export default Greet;
