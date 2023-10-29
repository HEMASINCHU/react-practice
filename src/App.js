import "./App.css";
import JsonPalceholder from "./jsonserver/JsonPlaceholder";
// import JsonApi from "./states/JsonApi";
// import Effect from "./states/Effect";
// import Example3 from "./components/Example";
// import Example2 from "./components/Example1";
// import Products from "./components/product.";
// import Greet from "./components/Greet";
// import Main from "./components/main";
// import TechList from "./components/header";
// import Subscribe from "./components/subscribe";
// import Image from "./components/appimg";
// const emp = {
//   id: 123,
//   name: "XYZ",
//   age: 27,
//   mobileNumber: 9900990000,
// };
// const { id, name, mobileNumber } = emp;
function App() {
  return (
    <header>
      {/* <Greet />
      <Main />
      <TechList />
      <Subscribe />
      <Image />
      <Products id={id} name={name} mobileNumber={mobileNumber} />
      <Example3 />
      <Example2 /> 
       <Effect /> */}

      {/* <JsonApi /> */}
      <JsonPalceholder />
    </header>
  );
}

export default App;
