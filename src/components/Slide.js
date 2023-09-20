const Slide = ({ avatar_pic, caption, active }) => {
  return (
    <div className={`slide ${active ? "active" : ""}`}>
      <img src={avatar_pic} alt={caption} />
      <span>{caption}</span>
    </div>
  );
};
export default Slide;
