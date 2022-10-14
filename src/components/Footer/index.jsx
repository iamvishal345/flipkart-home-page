import React from "react";
import "./index.css";
import { Link } from "../../ui-kit/Link";

export const Footer = ({ data }) => (
  <div className="footer-container">
    {data.map((item, i) => (
      <React.Fragment key={i}>
        {item.type === "list" && (
          <div className="footer-link-item">
            <p className="footer-header">{item.header}</p>
            <ul className="footer-links-list">
              {item.items.map(({ link, label }) => (
                <Link variant="secondary" key={link} href={link}>
                  {label}
                </Link>
              ))}
            </ul>
          </div>
        )}
        {item.type === "divider" && <div className="divider"></div>}
        {item.type === "section" && (
          <div className="footer-section-item">
            <p className="footer-header">{item.header}</p>
            {item.items.map((data, i) => (
              <p key={i}>{data}</p>
            ))}
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
);
