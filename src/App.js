import "./App.css";
import Greet from "./components/Greet";
import Main from "./components/main";
import TechList from "./components/header";
import Subscribe from "./components/subscribe";
import Image from "./components/appimg";

function App() {
  return (
    <header>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 2, 2020</small>
      <Greet />
      <Main />
      <TechList />
      <Subscribe />
      <Image />
    </header>
  );
}

export default App;
