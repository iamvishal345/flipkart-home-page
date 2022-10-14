import React, { useEffect, useState } from "react";
import "./index.css";
export const Dropdown = ({
  children,
  showArrow = true,
  options = [],
  selectedOption,
  onOptionClick,
  showOnHover = true,
  showOnClick = true,
  width = "200",
  onChange = () => {},
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    onChange(showOnHover);
  }, [showOnHover]);

  return (
    <div
      onMouseEnter={() => showOnHover && setShowDropdown(true)}
      onMouseLeave={() => showOnHover && setShowDropdown(false)}
      className="dropdown-container"
    >
      <div
        aria-expanded={showDropdown}
        role="listbox"
        onClick={() => showOnClick && setShowDropdown(!showDropdown)}
        className="dropdown-trigger"
      >
        {typeof children === "function" ? children(showDropdown) : children}
      </div>
      {showDropdown && (
        <div className="dropdown-options-container">
          {showArrow && <div className="dropdown-arrow"></div>}
          <ul
            style={{ width: `${width}px` }}
            role="list"
            className="dropdown-options"
          >
            {options.map(({ value, label, type = "option" }) => (
              <React.Fragment key={value}>
                {type === "header" ? (
                  <li className="dropdown-option-header">{label}</li>
                ) : (
                  <li
                    aria-selected={selectedOption === value}
                    onClick={() => onOptionClick && onOptionClick(value)}
                    className={`dropdown-option ${
                      selectedOption === value ? "selected" : ""
                    }`}
                  >
                    {label}
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
