import styled from "styled-components";

import Logo from "../../assets/logo.png";
import LogoMobile from "../../assets/logoMobile.png";

export const Header = styled.header`
  position: relative;
  background-color: #333333;
  z-index: 111111;

  & #btn-menu {
    background-color: transparent;
  }

  & .bi-list,
  .bi-x-lg {
    font-size: 36px;
    color: #f6f6f6;
  }
`;

export const NavBtnLogo = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 10px 20px;

  & a {
    background-image: url(${Logo});
    background-position: center;
    background-size: cover;
    width: 120px;
    height: 60px;
  }

  @media screen and (max-width: 576px) {
    a {
      background-image: url(${LogoMobile});
      background-position: center;
      background-size: cover;
    }
  }
`;

export const Menu = styled.nav`
  display: block;
  background-color: #333333;
  height: 800px;
  width: 0px;
  top: 80px;
  right: 0px;
  position: absolute;
  white-space: nowrap;
  overflow: hidden;
  z-index: 1111;
  transition: width 0.4s;

  &.menu-open {
    width: 300px;   
  }

  &.menu-closed {
    width: 0px;
  }

  ul {
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 100%;
  }

  ul li {
    padding: 20px 20px 20px 20px;
    transition: 0.4s;
  }

  ul li:hover {
    background-color: #00a0b0;
  }

  ul li a {
    font-size: 27px;
    color: #f6f6f6;
    transition: 0.4s;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-color: #00a0b0;
    height: 10%;
  }

  & > div > span {
    color: #f6f6f6;
    font-size: 20px;
    cursor: pointer;
  }

  

  @media screen and (max-width: 576px) {
    height: 500px;

    ul li a {
      font-size: 23px;
    }
  }
`;
