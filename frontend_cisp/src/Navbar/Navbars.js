import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import TopHeading from "../HomeComponents/TopHeader/TopHeading";
import Navigation from './NavbarStyle';

function Nav() {

  const [isExpanded, setExpanded] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    setExpanded(!isExpanded);
    console.log(`the value of set expanded is ${isExpanded}`)
  }
  return (
    <>
    <TopHeading/>
      <Navigation>
        <div className="logo">
          <Link to="/">
            <img alt="Logo" src={process.env.PUBLIC_URL + '/cisp.png'} />
          </Link>
        </div>
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : " "}`}>
            <NavLink activeClassName="active" to="/">
              <li>HOME</li>
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              <li>ABOUT US</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              <li>SERVICES</li>
            </NavLink>

            <NavLink activeClassName="active" to="/contact">
              <li>CAREER</li>
            </NavLink>

            <NavLink activeClassName="active" to="/contact">
              <li>CONTACT US</li>
            </NavLink>
          </ul>
        </nav>
      </Navigation>
    </>
  );
}

export default Nav;