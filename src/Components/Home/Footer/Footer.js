import React from "react";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const noNamed = [
    { name: "" },
    // { name: "Emergency Dental Care", link: "/emergency" },
    // { name: "Check Up", link: "/checkup" },
    // { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    // { name: "Tooth Extraction", link: "/tooth-extract" },
    // { name: "Check Up", link: "/checkup" },
  ];
  const ourAddress = [
    {
      name: "85 Royal Mint Street,London, E1 8LG, UK",
      link: "//google.com/map",
    },
    { name: "Yards", link: "//google.com/map" },
  ];
  const ourProducts = [
    { name: "Our Story", link: "/ourStory" },
    { name: "Shop", link: "/shop" },
    { name: "Wedding", link: "/wedding" },
    { name: "Academy", link: "/academy" },
    { name: "Contacts", link: "/contacts" },
    { name: "FAQ", link: "/faq" },
  ];
  const serviceMenu = [
    { name: "Our Story", link: "/ourStory" },
    { name: "Shop", link: "/shop" },
    { name: "Wedding", link: "/wedding" },
    { name: "Academy", link: "/academy" },
    { name: "Contacts", link: "/contacts" },
    { name: "FAQ", link: "/faq" },
  ];
  return (
    <footer className="footer-area clear-both text-white">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol
            key={1}
            menuTitle={"Goodness Glamour"}
            menuItems={noNamed}
          />
          <FooterCol key={2} menuTitle="Service Menu" menuItems={serviceMenu} />
          <FooterCol key={3} menuTitle="Our Products" menuItems={ourProducts} />
          <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6>Call us now</h6>
              <button className="btn btn-info">070 9485 7568</button>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
