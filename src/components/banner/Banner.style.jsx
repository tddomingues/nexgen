import styled from "styled-components";

import BannerDesktop from "../../assets/bannerDesktop.webp";
import BannerMobile from "../../assets/bannerMobile.webp";

export const Container = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: end;
  background-color: #e8e8e8;
  height: 800px;
  width: 100%;

  @media screen and (max-width: 576px) {
    justify-content: center;
    height: 400px;
  }
`;

export const Image = styled.div`
  background: linear-gradient(#333333b0, #00000075), url(${BannerDesktop});
  background-size: cover;
  background-position: center;
  width: 70%;
  height: 90%;
  margin-right: 30px;

  @media screen and (max-width: 576px) {
    background: linear-gradient(#333333b0, #00000075), url(${BannerMobile});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    margin: 30px;
  }
`;

export const Phrase = styled.div`
  background-color: #333333;
  padding: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 800px;
  height: 200px;
  display: grid;
  place-items: center;

  & > p {
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
    color: #fffcff;
  }

  & > p > span {
    color: #00a0b0;
  }

  @media screen and (max-width: 576px) {
    width: 80%;
    height: 360px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    & > p {
      font-size: 31px;
      text-align: center;
    }
  }
`;

