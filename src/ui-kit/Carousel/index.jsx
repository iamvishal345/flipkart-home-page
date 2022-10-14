import { useCallback, useEffect, useState } from "react";
import "./index.css";

export const Carousel = ({ items, infinite = true }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [action, setAction] = useState(1);

  const changeActive = useCallback(
    (value) => {
      let nextActiveItem = activeItem + value;
      let action = value;
      if (nextActiveItem < 0) {
        nextActiveItem = items.length - 1;
      }
      if (nextActiveItem >= items.length) {
        nextActiveItem = 0;
      }
      setActiveItem(nextActiveItem);
      setAction(action);
    },
    [activeItem]
  );

  useEffect(() => {
    if (!infinite) return;

    const interval = setInterval(() => {
      changeActive(1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [changeActive]);

  return (
    <div className="carousel-container">
      <ul className="carousel-list">
        {items.map((item, i) => (
          <li
            key={i}
            className={`carousel-item ${activeItem === i ? "active" : ""} ${
              action === 1 ? "forward" : "backward"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
      <button
        onClick={() => changeActive(-1)}
        className="carousel-btn carousel-btn-left"
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
        onClick={() => changeActive(1)}
        className="carousel-btn carousel-btn-right"
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
  );
};
