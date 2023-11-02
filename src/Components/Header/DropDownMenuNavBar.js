import React from "react";
import { Link } from "react-router-dom";

function DropdownMenuNavBar(props) {
  const { title, links } = props;

  return (
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
        {title}
      </a>
      <ul className="dropdown-menu">
        {links.map((link) => (
          <li key={link.url}>
            <Link to={link.url}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default DropdownMenuNavBar;
