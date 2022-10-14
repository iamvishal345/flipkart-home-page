import "./index.css";
export const Input = ({ prefix, suffix, inputProps, type }) => {
  let inputClasses = "";
  if (prefix) inputClasses += " input-box-prefix";
  if (suffix) inputClasses += " input-box-suffix";

  return (
    <div className={"input-container" + inputClasses}>
      {prefix && <div className="input-prefix-container">{prefix}</div>}
      <input type={type} {...inputProps} className="input-box" />
      {suffix && <div className="input-suffix-container">{suffix}</div>}
    </div>
  );
};
