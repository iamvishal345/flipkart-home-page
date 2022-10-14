import { Link } from "../../ui-kit/Link";

export const LOGIN_DROPDOWN = [
  {
    value: "login",
    label: (
      <div className="navbar--dropdown-header">
        <div className="navbar--dropdown-header-text">New customer?</div>
        <Link href="/?sign-up">Sign Up</Link>
      </div>
    ),
    type: "header",
  },
  {
    value: "my-profile",
    label: (
      <Link className="navbar-dropdown-link" href="/account">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 14"
        >
          <path
            fill="#2874F1"
            fillRule="nonzero"
            d="M7 .333A6.67 6.67 0 0 0 .333 7 6.67 6.67 0 0 0 7 13.667 6.67 6.67 0 0 0 13.667 7 6.67 6.67 0 0 0 7 .333zm0 2c1.107 0 2 .894 2 2 0 1.107-.893 2-2 2s-2-.893-2-2c0-1.106.893-2 2-2zM7 11.8a4.8 4.8 0 0 1-4-2.147C3.02 8.327 5.667 7.6 7 7.6c1.327 0 3.98.727 4 2.053A4.8 4.8 0 0 1 7 11.8z"
          ></path>
        </svg>
        My Profile
      </Link>
    ),
  },
  {
    value: "flipkart-plus-zone",
    label: (
      <Link className="navbar-dropdown-link" href="/plus">
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Desktop_VIP" stroke="none" strokeWidth="1" fillRule="evenodd">
            <g transform="translate(7.873 .143)">
              <path
                d="M6.484 4.94s2.476 1.227 3.698 1.748c1.188.506 1.323 2.4.016 3.04-1.307.64-1.67.744-1.67.744s.208-.53.178-1.044c-.085-.914-2.787-1.656-4.576-2.094 0 0-1.375-4.311-1.995-5.512C1.509.612.242.11.242.11l2.995.04s1.03-.05 1.488 1.055c.456 1.106 1.76 3.734 1.76 3.734"
                fill="#2873F0"
                mask="url(#b)"
              ></path>
            </g>
            <g transform="translate(8.635 8.27)">
              <path
                d="M5.547 6.265S4.334 8.713 3.8 9.965c-.507 1.187-2.44 1.322-3.079.015C.081 8.673.015 8.44.015 8.44s.387.076 1 .048c.915-.084 1.7-2.786 2.138-4.575 0 0 4.311-1.377 5.513-1.997 1.21-.624 1.71-1.892 1.71-1.892l-.04 3.44s.05.587-1.055 1.044c-1.105.455-3.734 1.757-3.734 1.757"
                fill="#2873F0"
                mask="url(#d)"
              ></path>
            </g>
            <g transform="translate(0 8.778)">
              <path
                d="M4.655 5.573S2.193 4.353.956 3.826C-.232 3.32-.367 1.423.94.786 2.248.145 2.774.026 2.774.026s-.34.545-.255 1.157C2.606 2.1 5.22 2.74 7.008 3.179c0 0 1.427 4.287 1.997 5.513.695 1.493 1.848 1.72 1.848 1.72l-3.396-.05s-.585.05-1.042-1.055c-.458-1.106-1.76-3.734-1.76-3.734"
                fill="#2873F0"
                mask="url(#f)"
              ></path>
            </g>
            <g transform="translate(0 .143)">
              <path
                d="M4.857 4.754s1.219-2.46 1.747-3.699c.506-1.188 2.4-1.321 3.04-.016.64 1.308.701 1.544.701 1.544s-.482.007-.993.035c-.916.087-1.663 2.702-2.101 4.49 0 0-4.296 1.405-5.513 1.996C.066 9.916 0 10.957 0 10.957l.068-3.4s-.05-.586 1.055-1.043c1.105-.457 3.734-1.76 3.734-1.76"
                fill="#2873F0"
                mask="url(#h)"
              ></path>
            </g>
          </g>
        </svg>
        Flipkart Plus Zone
      </Link>
    ),
  },
  {
    value: "orders",
    label: (
      <Link
        className="navbar-dropdown-link"
        href="/account/orders?link=home_orders"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="12"
          viewBox="0 0 16 12"
        >
          <g fill="none" fillRule="evenodd">
            <path
              fill="#2874F1"
              d="M6.038 11.682h8.407c.565 0 1.018-.38 1.13-.855V.847H.426v9.98c0 .475.452.855 1.017.855h2.232v-2.98H1.94L4.776 6l2.996 2.703H6.038v2.98z"
            ></path>
          </g>
        </svg>
        Orders
      </Link>
    ),
  },
  {
    value: "wishlist",
    label: (
      <Link
        className="navbar-dropdown-link"
        href="/wishlist?link=home_wishlist"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="14"
          viewBox="0 0 20 16"
        >
          <path
            d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
            fill="#2874F0"
            stroke="#FFF"
            fillRule="evenodd"
            opacity=".9"
          ></path>
        </svg>
        Wishlist
      </Link>
    ),
  },
  {
    value: "rewards",
    label: (
      <Link
        className="navbar-dropdown-link"
        href="/account/rewards?link=home_rewards"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="12"
          viewBox="0 0 16 16"
        >
          <g fill="none" fillRule="evenodd">
            <path fill="#FFF" d="M0 0h16v16H0z"></path>
            <path
              fill="#2874F0"
              d="M16 9.25v2.5c0 .69-.597 1.25-1.333 1.25H1.333C.597 13 0 12.44 0 11.75v-2.5c.736 0 1.333-.56 1.333-1.25S.736 6.75 0 6.75v-2.5C0 3.56.597 3 1.333 3h13.334C15.403 3 16 3.56 16 4.25v2.5c-.736 0-1.333.56-1.333 1.25S15.264 9.25 16 9.25zM4.4 3.625v1.25h.533v-1.25H4.4zm0 2.5v1.25h.533v-1.25H4.4zm0 2.5v1.25h.533v-1.25H4.4zm0 2.5v1.25h.533v-1.25H4.4z"
            ></path>
          </g>
        </svg>
        Rewards
      </Link>
    ),
  },
  {
    value: "gift-cards",
    label: (
      <Link
        className="navbar-dropdown-link"
        href="/the-gift-card-store?link=home_giftcard"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 23 22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd" transform="translate(-9.694 -9)">
            <ellipse cx="20.557" cy="20" rx="20.557" ry="20"></ellipse>
            <path d="M7 6h28v28H7z"></path>
            <path
              fill="#2874F0"
              fillRule="nonzero"
              d="M31.5 27v1.167a2.34 2.34 0 0 1-2.333 2.333H12.833a2.333 2.333 0 0 1-2.333-2.333V11.833A2.333 2.333 0 0 1 12.833 9.5h16.334a2.34 2.34 0 0 1 2.333 2.333V13H21a2.333 2.333 0 0 0-2.333 2.333v9.334A2.333 2.333 0 0 0 21 27h10.5zM21 24.667h11.667v-9.334H21v9.334zm4.667-2.917c-.97 0-1.75-.782-1.75-1.75s.78-1.75 1.75-1.75c.968 0 1.75.782 1.75 1.75s-.782 1.75-1.75 1.75z"
            ></path>
          </g>
        </svg>
        Gift Cards
      </Link>
    ),
  },
];

export const MORE_DROPDOWN = [
  {
    value: "notification-preferences",
    label: (
      <Link
        className="navbar-dropdown-link"
        href="/communication-preferences/push?t=all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="14"
          viewBox="0 0 12 14"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M-4-3h20v20H-4z"></path>
            <path
              fill="#2874F1"
              d="M6.17 13.61c-1.183 0-1.922-.723-1.922-1.88H8.09c0 1.157-.74 1.88-1.92 1.88zm4.222-5.028l1.465 1.104v1.07H0v-1.07l1.464-1.104v-2.31h.004c.035-2.54 1.33-4.248 3.447-4.652V.992C4.915.446 5.37 0 5.928 0c.558 0 1.014.446 1.014.992v.628c2.118.404 3.412 2.112 3.446 4.65h.004v2.312z"
            ></path>
          </g>
        </svg>
        Notification Preferences
      </Link>
    ),
  },
  {
    value: "customer-care",
    label: (
      <Link className="navbar-dropdown-link" href="/helpcentre">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 14 17"
        >
          <g fill="none" fillRule="evenodd">
            <path
              fill="#2874F0"
              fillRule="nonzero"
              d="M12.25.542H1.75c-.833 0-1.5.675-1.5 1.5v10.5c0 .825.667 1.5 1.5 1.5h3L7 16.292l2.25-2.25h3c.825 0 1.5-.675 1.5-1.5v-10.5c0-.825-.675-1.5-1.5-1.5zm-4.5 12h-1.5v-1.5h1.5v1.5zM9.303 6.73l-.676.69c-.54.547-.877.997-.877 2.122h-1.5v-.375c0-.825.338-1.575.877-2.123l.93-.945c.278-.27.443-.646.443-1.058 0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5H4c0-1.658 1.342-3 3-3s3 1.342 3 3c0 .66-.27 1.26-.697 1.687z"
            ></path>
          </g>
        </svg>
        24x7 Customer Care
      </Link>
    ),
  },
  {
    value: "advertise",
    label: (
      <Link
        href="https://advertising.flipkart.com/?otracker=ch_vn_advertise_header"
        className="navbar-dropdown-link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="14"
          viewBox="0 0 18 10"
        >
          <g fill="none" fillRule="evenodd">
            <path
              fill="#2874F0"
              fillRule="nonzero"
              d="M12.333 0l1.91 1.908-4.068 4.067-3.333-3.333L.667 8.825 1.842 10l5-5 3.333 3.333 5.25-5.24L17.333 5V0"
            ></path>
          </g>
        </svg>
        Advertise
      </Link>
    ),
  },
  {
    value: "download-app",
    label: (
      <Link
        className="navbar-dropdown-link"
        href="/mobile-apps?otracker=ch_vn_mobile_apps"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="14"
          viewBox="0 0 12 14"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M-4-3h20v20H-4z"></path>
            <path
              fill="#2874F0"
              fillRule="nonzero"
              d="M12 4.94H8.57V0H3.43v4.94H0l6 5.766 6-5.765zM0 12.354V14h12v-1.647H0z"
            ></path>
          </g>
        </svg>
        Download App
      </Link>
    ),
  },
];
