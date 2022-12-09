import React from "react";
import "./navigation.scss";
import logo from "../../assets/shared/logo.svg";
import { Link, NavLink } from "react-router-dom";
function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-barnd">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-striketrought"></div>
      <div className="navbar-menu">
        <ul>
          <li>
            <NavLink to={"/"}>00 Home</NavLink>
          </li>

          <li>
            <NavLink to={"/destionations"}>01 Destinations</NavLink>
          </li>

          <li>
            <NavLink to={"/craw"}>02 Craw</NavLink>
          </li>

          <li>
            <NavLink to={"/technology"}>03 Technology</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
