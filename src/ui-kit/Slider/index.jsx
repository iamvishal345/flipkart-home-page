import { useRef } from "react";
import { Link } from "../Link";
import "./index.css";
export const Slider = ({ items, header, listHeader }) => {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    const slider = sliderRef?.current;
    if (!slider) return;
    slider.scrollBy({ behavior: "smooth", left: direction * 240 });
  };

  return (
    <div className="slider-container">
      {header && (
        <div
          style={{ backgroundImage: `url("${header.bgUrl}")` }}
          className="slider-card"
        >
          <p className="slider-card-label">{header.label}</p>
          <Link href={header.link.to} type="button">
            {header.link.label}
          </Link>
        </div>
      )}
      <div className="slider-items-container">
        {listHeader && <p className="slider-list-header">{listHeader}</p>}
        <ul ref={sliderRef} className="slider-items-list">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <button
          onClick={() => slide(-1)}
          className="slider-btn slider-btn-left"
        >
          <svg
            width="14.6"
            height="27"
            viewBox="0 0 16 27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
              fill="#000"
            ></path>
          </svg>
        </button>
        <button
          onClick={() => slide(1)}
          className="slider-btn slider-btn-right"
        >
          <svg
            width="14.6"
            height="27"
            viewBox="0 0 16 27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
              fill="#000"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
