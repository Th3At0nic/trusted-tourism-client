import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import FooterCol from "../FooterCol/FooterCol";

const Footer = () => {
  const noNamed = [{ name: "" }];
  const ourAddress = [
    {
      name: "85 Royal Mint Street,Dhaka 1200, Bangladesh",
      link: "//google.com/map",
    },
    { name: "Yards", link: "//google.com/map" },
  ];
  const ourOffices = [
    { name: "Branches in Bangladesh", link: "/shop" },
    { name: "Dhaka", link: "/wedding" },
    { name: "Khulna", link: "/academy" },
    { name: "Contacts", link: "/contacts" },
    { name: "FAQ", link: "/faq" },
  ];
  const serviceMenu = [
    { name: "Our Story", link: "/ourStory" },
    { name: "All ranch", link: "/shop" },
    { name: "Bangladesh", link: "/wedding" },
    { name: "Thailand", link: "/academy" },
    { name: "Contacts", link: "/contacts" },
    { name: "FAQ", link: "/faq" },
  ];
  return (
    <footer className="footer-area clear-both text-white">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol
            key={1}
            menuTitle={"Trusted Tourism"}
            menuItems={noNamed}
          />
          <FooterCol key={2} menuTitle="Service Menu" menuItems={serviceMenu} />
          <FooterCol key={3} menuTitle="Our Offices" menuItems={ourOffices} />
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
            <div id="footer" className="mt-5">
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
//// sorry to say first i started my project as a beauty parlour website,
//but then for some major issue at the last day i changed it to tourism website, so some name might be odd.
//so please consider my problem
