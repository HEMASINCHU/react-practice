import "./App.css";
import Products from "./components/product.";
// import Greet from "./components/Greet";
// import Main from "./components/main";
// import TechList from "./components/header";
// import Subscribe from "./components/subscribe";
// import Image from "./components/appimg";
const emp = {
  id: 123,
  name: "XYZ",
  age: 27,
  mobileNumber: 9900990000,
};
const { id, name, mobileNumber } = emp;
function App() {
  return (
    <header>
      {/* <Greet />
      <Main />
      <TechList />
      <Subscribe />
      <Image /> */}
      <Products id={id} name={name} mobileNumber={mobileNumber} />
    </header>
  );
}

export default App;
