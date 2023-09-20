import Slide from "./Slide";
import { useState } from "react";
const SlideShow = ({ images }) => {
  const [active, setActive] = useState(0);

  const onNext = () => {
    if (active < images.length - 1) {
      setActive(active + 1);
    }
  };

  const onPrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <div className="slideshow">
      {images.map((e, i) => (
        <Slide {...e} key={e.caption} active={i === active} />
      ))}
      <div className="bulleted-navigation">
        {images.map((e, i) => (
          <div
            className={`dot ${i === active ? "active" : ""}`}
            key={e.caption}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
      <div className="next-prev-navigation">
        <div className="navigation next" onClick={onNext}>
          &gt;
        </div>
        <div className="navigation prev" onClick={onPrev}>
          &lt;
        </div>
      </div>
    </div>
  );
};
export default SlideShow;
