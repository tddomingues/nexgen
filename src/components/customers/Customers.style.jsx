import { styled } from "styled-components";
import LogoMicrosoft from "../../assets/microsoft.png";
import LogoIbm from "../../assets/ibm.png";
import LogoFacebook from "../../assets/facebook.png";
import LogoApple from "../../assets/apple.png";
import LogoTesla from "../../assets/tesla.png";
import LogoNetflix from "../../assets/netflix.png";

export const Container = styled.section`
  background-color: #e8e8e8;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 3em;
    padding: 2em 60px 2em 60px;
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

  & > div > div:nth-child(6) {
    background-image: url(${LogoMicrosoft});
  }

  & > div > div:nth-child(7) {
    background-image: url(${LogoNetflix});
  }

  @media screen and (max-width: 576px) {
    & > div {
      gap: 20px;
      padding: 2em 30px 2em 30px;
    }

    & > div > div {
      width: 30px;
      height: 30px;
      background-position: center;
      background-size: cover;
    }
  }
`;
