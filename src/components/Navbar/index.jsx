// Navbar implementation
import React from "react";
import { NavbarContainer, NavbarLink } from "./NavbarElements";

const Navbar = () => {

  return (
      <NavbarContainer>

        <NavbarLink><h1>hAIku</h1></NavbarLink>

        <NavbarLink><p>Create</p></NavbarLink>

        <NavbarLink><p>Discover</p></NavbarLink>

      </NavbarContainer>
  );
};

export default Navbar;