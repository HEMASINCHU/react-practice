import "./App.css";
// import Products from "./components/product.";
// import Greet from "./components/Greet";
// import Main from "./components/main";
// import TechList from "./components/header";
// import Subscribe from "./components/subscribe";
// import Image from "./components/appimg";
// import Userprofiles from "./miniproject/user";
import SlideShow from "./components/Imageslider";
// const emp = {
//   id: 123,
//   name: "XYZ",
//   age: 27,
//   mobileNumber: 9900990000,
// };
// const { id, name, mobileNumber } = emp;
const images = [
  {
    avatar_pic:
      "https://images.pexels.com/photos/1212693/pexels-photo-1212693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    caption: "Avatar 1",
  },
  {
    avatar_pic:
      "https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    caption: "Avatar 2",
  },
  {
    avatar_pic:
      "https://i0.wp.com/picjumbo.com/wp-content/uploads/romantic-tropical-beach-with-villa-and-palms-during-beautiful-sunset-free-photo.jpg?w=600&quality=80",
    caption: "Avatar 3",
  },
  {
    avatar_pic:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWF8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    caption: "Avatar 4",
  },
];
function App() {
  return (
    <header>
      {/* <Greet />
      <Main />
      <TechList />
      <Subscribe />
      <Image /> */}
      {/* <Products id={id} name={name} mobileNumber={mobileNumber} /> */}
      {/* <Userprofiles /> */}
      <SlideShow images={images} />
    </header>
  );
}

export default App;
