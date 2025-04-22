import HeroData from "./HeroData";

export default function HeroImgRender(props) {
  return (
    <ul className="hero-img-render" style={{ marginInline: `${props.translate}%` }}>
      {HeroData.map((img, index) => (
        <li key={index}>
          <img
            src={img.srcM}
            alt={img.alt}
            className={index === props.currentImg ? "active" : ""}
          />
        </li>
      ))}
    </ul>
  );
}
