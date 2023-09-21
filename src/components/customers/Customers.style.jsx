import { styled } from "styled-components";
import LogoMicrosoft from "../../assets/microsoft.webp";
import LogoIbm from "../../assets/ibm.webp";
import LogoFacebook from "../../assets/facebook.webp";
import LogoApple from "../../assets/apple.webp";
import LogoTesla from "../../assets/tesla.webp";

export const Container = styled.section`
  background-color: #e8e8e8;
  padding: 2em 60px 2em 60px;

  & > p {
    color: #333333;
    text-align: center;
    font-size: 27px;
    padding-bottom: 2em;
  }

  & > p > span {
    color: #00a0b0;
  }

  & > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 3em;
  }

  & > div > div {
    width: 60px;
    height: 60px;
    background-position: center;
    background-size: cover;
  }

  & > div > div:nth-child(1) {
    background-image: url(${LogoMicrosoft});
  }

  & > div > div:nth-child(2) {
    background-image: url(${LogoIbm});
  }

  & > div > div:nth-child(3) {
    background-image: url(${LogoFacebook});
  }

  & > div > div:nth-child(4) {
    background-image: url(${LogoApple});
  }

  & > div > div:nth-child(5) {
    background-image: url(${LogoTesla});
  }

  @media screen and (max-width: 576px) {
    padding: 200px 15px 2em 15px;

    & > p {
    font-size: 23px;
  }

    & > div {
      gap: 20px;
    }

    & > div > div {
      width: 30px;
      height: 30px;
      background-position: center;
      background-size: cover;
    }
  }
`;
