import React from "react";
import { Link } from "react-router-dom";

const FooterCol = (props) => {
  return (
    <div className="col-md-3">
      <h6 className="text-info">
        {props.menuTitle ? props.menuTitle : " "}
      </h6>
      <ul className="list-unstyled mt-4">
        {props.menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link} className="text-secondary">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {props.children && props.children}
    </div>
  );
};

export default FooterCol;
//// sorry to say first i started my project as a beauty parlour website,
//but then for some major issue at the last day i changed it to tourism website, so some name might be odd.
//so please consider my problem