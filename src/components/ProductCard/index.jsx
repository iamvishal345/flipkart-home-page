import "./index.css";
import { Link } from "../../ui-kit/Link";

export const ProductCard = ({ item }) => (
  <Link className="product-card-link" href={item.link}>
    <img
      height={item.height || 200}
      width={item.width || 200}
      className="product-card-img"
      src={import.meta.env.BASE_URL + item.imageUrl}
      alt={item.name}
    />
    <div className="product-card-data">
      {item.label && <p className="product-card-label">{item.label}</p>}
      {item.primaryText && (
        <p className="product-card-primary-text">{item.primaryText}</p>
      )}
      {item.bestPrice && (
        <div className="product-price-container">
          <p className="product-best-price">{item.bestPrice}</p>{" "}
          <p className="product-price">
            {" "}
            <s> {item.price}</s>
          </p>
        </div>
      )}
      {item.secondaryText && (
        <p className="product-card-secondary-text">{item.secondaryText}</p>
      )}
    </div>
  </Link>
);
