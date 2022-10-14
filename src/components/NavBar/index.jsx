import { Button } from "../../ui-kit/Button";
import { Input } from "../../ui-kit/Input";
import { Link } from "../../ui-kit/Link";
import { Dropdown } from "../../ui-kit/Dropdown";
import "./index.css";
import { LOGIN_DROPDOWN, MORE_DROPDOWN } from "./links";

const SearchSVg = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 17 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#2874F1" fillRule="evenodd">
      <path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path>
      <path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path>
    </g>
  </svg>
);

const ArrowSvg = ({ style }) => (
  <svg
    width="4.7"
    height="8"
    viewBox="0 0 16 27"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <path
      d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
      fill="#fff"
    ></path>
  </svg>
);
export const NavBar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/">
            <img
              width="75"
              src={import.meta.env.BASE_URL + "images/flipkart_logo.png"}
              alt="Flipkart"
            />
          </a>
          <a className="navbar-brand-plus" href="/plus">
            Explore <span className="navbar-plus-text">Plus</span>
            <img
              width="11"
              src={import.meta.env.BASE_URL + "images/plus.png"}
              alt="Flipkart Plus Sign"
            />
          </a>
        </div>
        <div className="navbar-search">
          <Input
            inputProps={{
              placeholder: "Search for products, brands and more",
            }}
            suffix={
              <Button noHover variant="secondary" size="small" borderless>
                {SearchSVg}
              </Button>
            }
          />
        </div>
        <div className="navbar-login">
          <Dropdown options={LOGIN_DROPDOWN}>
            <Link type="button" variant="secondary" href="/login">
              Login
            </Link>
          </Dropdown>
        </div>
        <div className="nav-bar-seller">
          <Link variant="secondary" href="/become-a-seller">
            Become a seller
          </Link>
        </div>
        <div className="navbar-more-dropdown">
          <Dropdown width="250" options={MORE_DROPDOWN}>
            {(isActive) => (
              <>
                More{" "}
                <ArrowSvg
                  style={{
                    marginLeft: "4px",
                    rotate: isActive ? "90deg" : "270deg",
                  }}
                />
              </>
            )}
          </Dropdown>
        </div>
        <div>Cart</div>
      </div>
    </nav>
  );
};
