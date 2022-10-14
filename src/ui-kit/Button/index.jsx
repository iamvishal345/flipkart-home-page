import "./index.css";

export const Button = ({
  variant = "primary",
  size = "normal",
  className = "",
  label = "",
  children,
  borderless = "",
  noHover = false,
  ...otherProps
}) => {
  const classNames = `button button-${variant} button-${size} 
  ${borderless ? "button-borderless" : ""} 
  ${noHover ? "button-no-hover" : ""}
  ${className}`;

  return (
    <button className={classNames} {...otherProps}>
      {children || label}
    </button>
  );
};
