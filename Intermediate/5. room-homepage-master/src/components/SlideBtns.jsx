export default function SlideBtns({ ...props }) {
  const handleImgChange = (direction) => {
    if (direction === "right" && props.currentImg < props.heroLength - 1) {
      if (props.animate) return;
      props.setCurrentImg(props.currentImg + 1);
      props.setTranslate(props.translate - 100);

      props.setAnimate(true);

      setTimeout(() => {
        props.setAnimate(false);
      }, 300);
    } else if (direction === "left" && props.currentImg > 0) {
      if (props.animate) return;
      props.setCurrentImg(props.currentImg - 1);
      props.setTranslate(props.translate + 100);
      props.setAnimate(true);

      setTimeout(() => {
        props.setAnimate(false);
      }, 300);
    }
  };

  return (
    <div className="slide-buttons">
      <button
        aria-label="previous image"
        onClick={() => handleImgChange("left")}
        className={props.currentImg === 0 ? "disabled" : ""}
      >
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 0L1 12l12 12"
            stroke="#FFF"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button
        aria-label="next image"
        onClick={() => handleImgChange("right")}
        className={props.currentImg === props.heroLength - 1 ? "disabled" : ""}
      >
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 0l12 12L1 24"
            stroke="#FFF"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
