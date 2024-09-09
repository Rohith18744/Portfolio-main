import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn,ResumeLink } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/">
          {/* <img
            src="/logo.png"
            alt="logo"
          /> */}
          <h3 style={{ color: "white", fontSize: "28px", fontWeight: "600" }}>
            Rohith
          </h3>
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
          <ResumeLink href="https://drive.google.com/file/d/1RrZo03xZz2E7H1rRdApfeJiDQj7JlnM9/view?usp=drive_link" target="_blank">
            Resume
    </ResumeLink>
        </NavMenu>

        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
