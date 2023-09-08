import img1 from "./img/css3.png";
import img2 from "./img/html1.png";
import img3 from "./img/js.jfif";
import img4 from "./img/react.png";
const Image = () => (
  <main>
    <div className="image-container">
      <p>Front End Technologies</p>
      <img src={img1} className="img" alt="pic 1" />
      <img src={img2} className="img" alt="pic 2" />
      <img src={img3} className="img" alt="pic3 3" />
      <img src={img4} className="img" alt="pic4 4" />
    </div>
  </main>
);
export default Image;
