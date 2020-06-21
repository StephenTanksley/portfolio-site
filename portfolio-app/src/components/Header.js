import React from "react";
import { NavContainer } from "../styles/styled";

export const Header = () => {
  return (
    <div>
      <NavContainer>
        <div className="headline">
          <h2>Stephen Tanksley</h2>
          <h4>Full Stack Web Developer</h4>
        </div>
        <div className="items">
          <div>About Me</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
      </NavContainer>
    </div>
  );
};
