import React from "react";
import { NavLink, NavContainer } from "../styles/styled";

export const Header = () => {
  return (
    <div>
      <NavContainer>
        <div className="headline">
          <h2>Stephen Tanksley</h2>
          <h4>Full Stack Web Developer</h4>
        </div>
        <div className="items">
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/projects"> Projects </NavLink>
          <NavLink to="/music"> Music </NavLink>
          <NavLink to="/contact"> Contact </NavLink>
        </div>
      </NavContainer>
    </div>
  );
};
