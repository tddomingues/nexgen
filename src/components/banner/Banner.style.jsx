import styled from "styled-components";

import BannerDesktop from "../../assets/bannerDesktop.jpg";
import BannerMobile from "../../assets/bannerMobile.jpg";

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

// export const Info = styled.div`
//   position: absolute;
//   z-index: 1;
//   height: 400px;
//   background-color: #00a1b0;
//   bottom: -200px;
//   left: 50%;
//   transform: translateX(-50%);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
//   padding: 20px;
//   box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

//   & > div {
//     text-align: center;
//     background-color: #e8e8e8;
//     width: 300px;
//     height: 100%;
//     transition: 0.4s;
//   }

//   & > div:hover {
//     background-color: #ffffff;
//   }

//   & > div > h4 {
//     color: #00a0b0;
//     font-size: 27px;
//     padding: 20px 0 20px 0;
//   }

//   & > div > p {
//     color: #000;
//     padding: 10px;
//     font-size: 18px;
//   }

//   & > div .bi-display,
//   .bi-repeat,
//   .bi-chat-square-dots {
//     font-size: 60px;
//     color: #000;
//   }

//   @media screen and (max-width: 576px) {
//     gap: 5px;
//     padding: 5px;
//     height: 300px;
//     bottom: -150px;

//     & > div {
//       width: 110px;
//       word-wrap: break-word;
//     }

//     & > div > h4 {
//       font-size: 23px;
//       padding: 5px;
//     }

//     & > div > p {
//       padding: 0px 5px 0px 5px;
//       font-size: 16px;
//     }

//     & > div .bi-display,
//     .bi-repeat,
//     .bi-chat-square-dots {
//       font-size: 46px;
//       color: #000;
//     }
//   }
// `;
