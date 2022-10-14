import { Link } from "../../ui-kit/Link";
import "./index.css";

const NAVIGATION = [
  {
    label: "Top Offers",
    link: "/top-offers",
    imageUrl: "images/sub-nav/top-offers.webp",
  },
  {
    label: "Mobile & Tablets",
    link: "/mobile-and-tablets",
    imageUrl: "images/sub-nav/mobile-and-tablets.webp",
  },
  {
    label: "Electronics",
    link: "/electronics",
    imageUrl: "images/sub-nav/electronics.webp",
  },
  {
    label: "TV & Appliances",
    link: "/tv-and-appliances",
    imageUrl: "images/sub-nav/tv-and-appliances.webp",
  },
  {
    label: "Fashion",
    link: "/fashion",
    imageUrl: "images/sub-nav/fashion.webp",
  },
  {
    label: "Beauty",
    link: "/beauty",
    imageUrl: "images/sub-nav/beauty.webp",
  },
  {
    label: "Home & Furniture",
    link: "/home-and-furniture",
    imageUrl: "images/sub-nav/home-and-furniture.webp",
  },
  {
    label: "FK Originals",
    link: "/fk-originals",
    imageUrl: "images/sub-nav/fk-originals.webp",
  },
  {
    label: "Flights & Hotels",
    link: "/flights-and-hotels",
    imageUrl: "images/sub-nav/flights-and-hotels.webp",
  },
  {
    label: "Grocery",
    link: "/grocery",
    imageUrl: "images/sub-nav/grocery.webp",
  },
];
export const SubNavBar = () => {
  return (
    <div className="subnavbar-container">
      <ul className="subnavbar-links">
        {NAVIGATION.map((nav) => (
          <li key={nav.link}>
            <Link className="subnavbar-link" href={nav.link}>
              <img
                src={import.meta.env.BASE_URL + nav.imageUrl}
                alt={nav.label}
                width="64"
              />
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
