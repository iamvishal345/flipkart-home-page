import React from "react";
import "./index.css";

export const MetaData = ({ data }) => {
  return (
    <div className="metadata-container">
      {data.map(({ title, sections }, i) => (
        <React.Fragment key={i}>
          <h2 className="metadata-title">{title}</h2>
          {sections.map((section, i) => (
            <p className="metadata-section" key={i}>
              {section}
            </p>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
