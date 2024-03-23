import image from "../images/Frame30.png";
export default function Image({ onClick }) {
  return (
    <div className="img">
      <div className="lines "></div>
      <img src={image} alt="logo" onClick={onClick} />
    </div>
  );
}
