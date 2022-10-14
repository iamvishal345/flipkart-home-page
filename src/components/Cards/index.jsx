import "./index.css";
import { Link } from "../../ui-kit/Link";

export const Cards = ({ items = [], itemInRow = 3, className }) => {
  return (
    <div
      className={"cards-container " + className}
      style={{ gridTemplateColumns: `repeat(${itemInRow},1fr)` }}
    >
      {items.map(({ name, link, imageUrl }) => (
        <Link key={name} href={link}>
          <img src={import.meta.env.BASE_URL + imageUrl} width="100%" />
        </Link>
      ))}
    </div>
  );
};
