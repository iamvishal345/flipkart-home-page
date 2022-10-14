import "./index.css";
export const Link = ({
  variant = "primary",
  type = "link",
  className = "",
  children,
  disabled,
  ...otherProps
}) => {
  return (
    <a
      className={`${type} ${
        disabled ? "disabled" : ""
      } ${type}-${variant} ${className}`}
      {...otherProps}
    >
      {children}
    </a>
  );
};
