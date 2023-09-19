import styled from "styled-components";

import BannerDesktop from "../../assets/bannerDesktop.jpg";
import BannerMobile from "../../assets/bannerMobile.jpg";

export const Container = styled.section`
  width: 100%;
  height: 800px;
  display: flex;
  position: relative;
  align-items: center;
  background: linear-gradient(#363636aa, #000000aa), url(${BannerDesktop});
  background-size: cover;

  @media screen and (max-width: 576px) {
    align-items: normal;
    padding-top: 45px;
    height: 500px;
    background: linear-gradient(#363636aa, #000000aa), url(${BannerMobile});
    background-size: cover;
    background-position: center;
  }
`;

export const Phrase = styled.div`
width: 70%;
  & > p {
    font-size: 54px;
    font-weight: bold;
    text-transform: uppercase;
    color: #fffcff;
    padding-left: 100px;
  }

  & > p > span {
    color: #00a0b0;
  }

  @media screen and (max-width: 576px) {
    width: 90%;

    & > p {
      font-size: 31px;
      padding-left: 25px;
    }
  }
`;

export const Info = styled.div`
  position: absolute;
  z-index: 1;
  height: 400px;
  background-color: #00a1b0;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  & > div {
    text-align: center;
    background-color: #e8e8e8;
    width: 300px;
    height: 100%;
    transition: 0.4s;
  }

  & > div:hover {
    background-color: #ffffff;
  }

  & > div > h4 {
    color: #00a0b0;
    font-size: 27px;
    padding: 20px 0 20px 0;
  }

  & > div > p {
    color: #000;
    padding: 10px;
    font-size: 18px;
  }

  & > div .bi-display,
  .bi-repeat,
  .bi-chat-square-dots {
    font-size: 60px;
    color: #000;
  }

  @media screen and (max-width: 576px) {
    gap: 5px;
    padding: 5px;
    height: 300px;
    bottom: -150px;

    & > div {
      width: 110px;
      word-wrap: break-word;
    }

    & > div > h4 {
      font-size: 23px;
      padding: 5px;
    }

    & > div > p {
      padding: 0px 5px 0px 5px;
      font-size: 16px;
    }

    & > div .bi-display,
    .bi-repeat,
    .bi-chat-square-dots {
      font-size: 46px;
      color: #000;
    }
  }
`;

// @media screen and (max-width: 576px) {
//     #banner {
//         height: 600px;
//         align-items: start;
//     }

//     #banner>div>p {
//         font-size: 34px;
//         padding: 40px 10px 10px 20px;
//     }

//     #banner>div {
//         width: 95%;
//     }

//     .info {
//         gap: 10px;
//         padding: 10px;
//     }

//     .info>div {
//         width: 33%;
//     }

//     .info>div>h4 {
//         font-size: 18px;
//         word-wrap: break-word;
//         padding: 5px 0 5px 0;
//     }

//     .info>div>p {
//         font-size: 12px;
//     }

//     .bi-display,
//     .bi-repeat,
//     .bi-chat-square-dots {
//         font-size: 40px;
//     }
// }
