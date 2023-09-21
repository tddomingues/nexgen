import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  background-color:  #e8e8e8;
  z-index: 111111;
  padding: 10px 15px 10px 15px;
`;

export const NavBtnLogo = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  & > div > #btn-menu {
    background-color: transparent;
  }

  & .bi-x-lg, .bi-list {
    font-size: 36px;
    color: #333333;
    cursor: pointer;
  }

  & .bi-search {
    font-size: 25px;
    color: #333333;
    cursor: pointer;
  }

  & > a {
    font-size: 24px;
    color: #333333;
    font-weight: bold;

    & > span {
      font-weight: normal;
    }
  }

  @media screen and (max-width: 576px) {
    & > a {
      font-size: 20.5px;
    }

    & > div {
    gap: 20px;
  }

    & .bi-x-lg, .bi-list {
    font-size: 32px;
  }

  & .bi-search {
    font-size: 21px;
  }
  }
`;

export const Menu = styled.nav`
  display: block;
  background-color: #e8e8e8;
  height: 100vh;
  width: 0px;
  top: 87,59px;
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
    background-color: #f6f6f6;
  }

  ul li a {
    font-size: 24px;
    color: #333333;
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
    height: 100vh;

    ul li a {
      font-size: 20.5px;
    }
  }
`;
