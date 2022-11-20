import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon, CartIcon, SarchIcon, UserIcon } from "./icons";

const Navigation = () => {
  return (
    <Component>
      <nav>
        <Link to="">SHOP</Link>
        <Link to="">GiFT</Link>
        <Link to="">ABOUT</Link>
      </nav>

      <div className="LOGO-wrapper">
        <LogoIcon />
      </div>

      <div className="iconsWrapper">
        <Link to="">
          <SarchIcon />
        </Link>
        <Link to="">
          <CartIcon />
        </Link>
        <Link to="">
          <UserIcon />
        </Link>
        <select name="" id="">
          <option value="en">EN</option>
          <option value="ka">KA</option>
        </select>
      </div>
    </Component>
  );
};

export default Navigation;

const Component = styled.header`
  width: 100%;
  padding: 16px 68px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 35px;

    a {
      text-decoration: none;
      font-weight: 300;
    }
  }
  .LOGO-wrapper {
    font-weight: 500;
  }
  .iconsWrapper {
    display: flex;
    gap: 24px;
    align-items: center;
  }
`;
